import React, { Component } from "react";
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

class MovieList extends Component {
  state = {};
  render() {
    const data_list = [
      { image: images.p1 },
      { image: images.p2 },
      { image: images.p3 },
      { image: images.p4 },
    ];
    return (
      <FlatList
        contentContainerStyle={styles.background}
        data={data_list}
        renderItem={({ item, index }) => (
          <View style={styles.movieobj_container}>
            <MoviePic imageurl={item.image} key={index} />
            <TimeList key={"time_" + index} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

class MoviePic extends Component {
  state = {};
  render() {
    const imageurl = this.props.imageurl;
    console.log(imageurl);
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

    return <View>{theater_list}</View>;
  }
}

export default MovieList;
