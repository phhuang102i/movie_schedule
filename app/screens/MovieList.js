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
    fetch(`http://localhost:8000/movies/movie-today/?city=28&movie_name=`)
      .then((response) => {
        if (response.status > 400) {
          console.log("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
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
      data={data_list}
      renderItem={({ item, index }) => (
        <View style={styles.movieobj_container}>
          <View style={styles.movie_and_bar}>
            <MoviePic imageurl={item.image} key={index} />
            <Rightbar />
          </View>
          <TimeList key={"time_" + index} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

class MoviePic extends Component {
  state = {};
  render() {
    const imageurl = this.props.imageurl;
    return <Image source={imageurl} style={styles.pic_container} />;
  }
}

class TimeList extends Component {
  state = {};
  render() {
    //var datelist = this.props ? this.props.datedata.datelist : [];
    let theater_list = [];
    /*for (let i = 0;i<=datelist.length-1,i++){
      let timelist = [];
      for (let j = 0;j<=datelist[i].timelist.length;j++){
        timelist.push()
      }
      theater_list.push()//theater_name and timelist
    }*/
    let timelist = [];
    timelist.push(
      <View key={"time1"} style={styles.time_button}>
        <Text style={styles.time_text}>{"12:00"}</Text>
      </View>
    );
    timelist.push(
      <View key={"time2"} style={styles.time_button}>
        <Text style={styles.time_text}>{"13:00"}</Text>
      </View>
    );
    timelist.push(
      <View key={"time3"} style={styles.time_button}>
        <Text style={styles.time_text}>{"14:00"}</Text>
      </View>
    );
    theater_list.push(
      <View key={"theater_1"}>
        <Text style={styles.theater}>{"新竹大遠百威秀影城"}</Text>
        <View style={styles.timelist_container}>{timelist}</View>
      </View>
    );
    theater_list.push(
      <View key={"theater_2"}>
        <Text style={styles.theater}>{"新竹巨城威秀影城"}</Text>
        <View style={styles.timelist_container}>{timelist}</View>
      </View>
    );

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
