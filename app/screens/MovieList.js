import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import styles from "../styles/ListStyle";
import images from "../assets/image";

class MovieList extends Component {
  state = {};
  render() {
    return (
      <ScrollView contentContainerStyle={styles.background}>
        <MoviePic imageurl={images.p1} />
        <MoviePic imageurl={images.p2} />
        <MoviePic imageurl={images.p3} />
        <MoviePic imageurl={images.p4} />
      </ScrollView>
    );
  }
}

class MoviePic extends Component {
  state = {};
  render() {
    const imageurl = this.props.imageurl;
    return <Image source={imageurl} style={styles.pic_container} />;
  }
}

export default MovieList;
