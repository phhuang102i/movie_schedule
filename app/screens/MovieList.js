import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "../styles/ListStyle";
import images from "../assets/image";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function MovieList(props) {
  const data_list = [
    { image: images.p1 },
    { image: images.p2 },
    { image: images.p3 },
    { image: images.p4 },
  ];
  const [data, setData] = useState(0);

  function gettodaymovie() {
    const city = encodeURIComponent(props.city);
    //const movie_name = this.state.movie_name?encodeURIComponent(this.state.movie_name):"";
    fetch(
      `http://user-0dd3ee75.localhost.run/movies/movie-today/?city=28&movie_name=`
    )
      .then((response) => {
        if (response.status > 400) {
          console.log("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch(function (error) {
        alert(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
    //console.log("OUO!!");
  }
  useEffect(() => {
    gettodaymovie();
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.background}
      onScroll={props.getypos}
      data={data}
      renderItem={({ item, index }) => (
        <View style={styles.movieobj_container}>
          <View style={styles.movie_and_bar}>
            <MoviePic imageurl={item.image_url} key={index} />
            <Rightbar />
          </View>
          <TimeList key={"time_" + index} datedata={item.date_data} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

class MoviePic extends Component {
  state = {};
  render() {
    const imageurl =
      "http://user-0dd3ee75.localhost.run/static/" + this.props.imageurl;
    return <Image source={{ uri: imageurl }} style={styles.pic_container} />;
  }
}

class TimeList extends Component {
  state = {};
  render() {
    var datelist = this.props ? this.props.datedata.datelist : [];
    let theater_list = [];
    for (let i = 0; i <= datelist.length - 1; i++) {
      let timelist = [];
      for (let j = 0; j <= datelist[i].timelist.length - 1; j++) {
        timelist.push(
          <View key={"time_" + j} style={styles.time_button}>
            <Text style={styles.time_text}>
              {" " + datelist[i].timelist[j] + " "}
            </Text>
          </View>
        );
      }
      if (timelist.length > 0)
        theater_list.push(
          <View key={"theater_" + i}>
            <Text style={styles.theater}>{datelist[i].theater_name}</Text>
            <View style={styles.timelist_container}>{timelist}</View>
          </View>
        ); //theater_name and timelist
    }
    //if not theaterlist 給一個 今日已無場次

    return <View style={styles.schedule_container}>{theater_list}</View>;
  }
}

class Rightbar extends Component {
  state = {};
  render() {
    return (
      <View style={styles.rightbar}>
        <Icon name="youtube" size={40} color="red" style={styles.icon} />
        <MaterialIcon
          name="chat-bubble-outline"
          size={40}
          style={styles.icon}
        />
        <Icon name="imdb" size={40} color="lightcoral" style={styles.icon} />
        <Icon name="readme" size={35} color="black" style={styles.icon} />
      </View>
    );
  }
}
