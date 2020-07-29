import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "./app/screens/MovieList";
import { StatusBarHeight } from "./app/styles/StatusBar";

export default function App() {
  return (
    <View style={styles.screen}>
      <MovieList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    //根據statusbar 要往下調整螢幕位置
    marginTop: StatusBarHeight,
    flex: 1,
    backgroundColor: "transparent",
  },
});
