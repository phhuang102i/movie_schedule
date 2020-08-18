import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "./app/screens/MovieList";
import { StatusBarHeight } from "./app/styles/StatusBar";
import { NavigationContainer } from "@react-navigation/native";
import Toptab from "./app/components/Toptab";
import Bottomtab from "./app/components/Bottomtab";
import { Root } from "popup-ui";

export default function App() {
  return (
    <Root>
      <View style={styles.screen}>
        <Toptab style={{ position: "absolute", top: 0 }} />
        <MovieList />
        <Bottomtab />
      </View>
    </Root>
    /*<NavigationContainer>
      <Tabs />
    </NavigationContainer>*/
  );
}

const styles = StyleSheet.create({
  screen: {
    //根據statusbar 要往下調整螢幕位置
    marginTop: StatusBarHeight,
    //flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
