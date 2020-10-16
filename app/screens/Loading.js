import React, { Component, useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function Loading(props) {
  const imageurl = "../assets/icon.png";

  return (
    <View style={styles.loading_container}>
      <Image
        source={require("../assets/loading.gif")}
        style={styles.loading_image}
      />
      <Text style={styles.loading_text}> Loading . . . </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading_container: {
    alignItems: "center",
    justifyContent: "center",
    //flex: 1,
  },
  loading_image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  loading_text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
