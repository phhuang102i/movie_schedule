import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, FlatList } from "react-native";
import styles from "../styles/ListStyle";
import images from "../assets/image";

class MovieList extends Component {
  state = {};
  render() {
    const image_list = [images.p1, images.p2, images.p3, images.p4];
    return (
      <FlatList
        contentContainerStyle={styles.background}
        data={image_list}
        renderItem={({ item, index }) => (
          <MoviePic imageurl={item} key={index} />
        )}
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

export default MovieList;
