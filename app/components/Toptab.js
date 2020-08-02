import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/TabStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

class Toptab extends Component {
  state = {};
  render() {
    return (
      <View style={styles.toptab}>
        <Icon name="redo-alt" size={26} color="black" />
        <MaterialIcon name="settings" size={30} color="black" />
      </View>
    );
  }
}

export default Toptab;
