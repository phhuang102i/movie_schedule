import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/ListStyle";
import images from "../assets/image";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AppLink from "react-native-app-link";
import Collapsible from "react-native-collapsible";

export default function MovieList(props) {
  const data_list = [
    { image: images.p1 },
    { image: images.p2 },
    { image: images.p3 },
    { image: images.p4 },
  ];
  const [data, setData] = useState(0);
  const flatListRef = React.useRef();
  const ScrollToTop = () => {
    // use current
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  function gettodaymovie() {
    const city = encodeURIComponent(props.city_setting);
    //const movie_name = this.state.movie_name?encodeURIComponent(this.state.movie_name):"";
    fetch(
      `http://mvschedule.nctu.me:55/movies/movie-today/?city=${city}&movie_name=`
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
    ScrollToTop();
  }, [props.city_setting]);

  return (
    <FlatList
      ref={flatListRef}
      contentContainerStyle={styles.background}
      onScroll={props.getypos}
      data={data}
      renderItem={({ item, index }) => (
        <View style={styles.movieobj_container}>
          <View style={styles.movie_and_bar}>
            <MoviePic imageurl={item.image_url} key={index} />
            <Rightbar
              ytlink={item.intro_video}
              intro={item.intro}
              imdb={item.imdb}
              set_movie_detail={props.set_movie_detail}
              set_show_detail={props.set_show_detail}
            />
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
      "http://mvschedule.nctu.me:55/static/" + this.props.imageurl;
    return <Image source={{ uri: imageurl }} style={styles.pic_container} />;
  }
}

class TimeList extends Component {
  state = {
    isfold: true,
  };
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

    return (
      <View>
        {this.state.isfold ? (
          <TouchableOpacity
            style={styles.timelistdropdown}
            onPress={() => {
              this.setState({ isfold: false });
            }}
          >
            <Text style={styles.timelistdropdown_text}>時刻表 </Text>
            <Icon name="angle-double-down" size={25} color="lightblue" />
          </TouchableOpacity>
        ) : null}
        <Collapsible collapsed={this.state.isfold}>
          <View style={styles.schedule_container}>
            {theater_list.length > 0 ? (
              theater_list
            ) : (
              <Text style={styles.noschedule_text}>本日已無場次</Text>
            )}
          </View>
        </Collapsible>
        {!this.state.isfold ? (
          <TouchableOpacity
            style={styles.timelistdropdown}
            onPress={() => {
              this.setState({ isfold: true });
            }}
          >
            <Text style={styles.timelistdropdown_text}>收起 </Text>
            <Icon name="angle-double-up" size={25} color="lightblue" />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

class Rightbar extends Component {
  state = {
    showIMDb: false,
  };

  render() {
    var ytlink = this.props ? this.props.ytlink : "https://youtube.com";
    var intro = this.props ? this.props.intro : "";
    var imdb_score = this.props ? this.props.imdb : "?";
    var score_number = isNaN(Number(imdb_score)) ? 0 : Number(imdb_score);
    let score_color = "black";

    switch (true) {
      case score_number >= 8:
        score_color = "gold";
        break;
      case score_number >= 7:
        score_color = "crimson";
        break;
      case score_number >= 6:
        score_color = "forestgreen";
        break;
      case score_number >= 5:
        score_color = "deepskyblue";
        break;
      default:
        break;
    }

    return (
      <View style={styles.rightbar}>
        <Icon
          name="youtube"
          size={40}
          color="red"
          style={styles.icon}
          onPress={
            () =>
              AppLink.maybeOpenURL(ytlink, {
                appName: "youtube",
                appStoreId: "",
                appStoreLocale: "",
                playStoreId: "",
              })
            /*.then(() => {
                console.log("url found");
              })
              .catch((err) => {
                console.log("error app not installed");
              })*/
          }
        />
        <MaterialIcon
          name="chat-bubble-outline"
          size={40}
          style={styles.icon}
        />
        {!this.state.showIMDb ? (
          <Icon
            name="imdb"
            size={40}
            color="lightcoral"
            style={styles.icon}
            onPress={() => {
              this.setState({ showIMDb: true });
            }}
          />
        ) : (
          <TouchableOpacity
            style={styles.imdb_container}
            onPress={() => {
              this.setState({ showIMDb: false });
            }}
          >
            <MaterialCommunityIcon
              name="circle"
              size={45}
              color={score_color}
              style={styles.icon}
            />
            <Text style={styles.score}>{imdb_score}</Text>
          </TouchableOpacity>
        )}
        <Icon
          name="readme"
          size={35}
          color="black"
          style={styles.icon}
          onPress={() => {
            this.props.set_movie_detail(intro);
            this.props.set_show_detail(true);
          }}
        />
      </View>
    );
  }
}
