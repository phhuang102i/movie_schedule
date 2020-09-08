import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/TabStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Root, Popup } from "popup-ui";

class Toptab extends Component {
  state = {};
  render() {
    return (
      <View style={styles.toptab}>
        <FontAwesome
          name="navicon"
          size={26}
          color="black"
          onPress={() => this.props.set_show_menu(true)}
        />
        <Icon
          name="search"
          size={26}
          color="black"
          onPress={() => this.props.set_show_search(true)}
        />
        <MaterialIcon
          name="settings"
          size={30}
          color="black"
          onPress={() => this.props.set_show_setting(true)}
        />
      </View>
    );
  }
}

export default Toptab;
