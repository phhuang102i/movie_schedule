import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/TabStyle";

class Toptab extends Component {
  state = {};
  render() {
    return (
      <View style={styles.toptab}>
        <Text style={styles.toptab_text}>{"MovieTonight"}</Text>
      </View>
    );
  }
}

export default Toptab;
