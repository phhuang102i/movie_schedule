import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import styles from "../styles/PopupStyle";
import SelectPicker from "react-native-form-select-picker";
import cities from "./FixedData";

export default function SearchPopup(props) {
  let tmp_upduration_option = "";
  let tmp_search_name = "";
  return (
    <Dialog
      visible={props.show_search}
      onTouchOutside={() => {
        props.set_show_search(false);
      }}
      dialogTitle={<DialogTitle title="搜尋" />}
      dialogStyle={styles.dialog}
      onHardwareBackPress={() => {
        props.set_show_search(false);
        return true;
      }}
      footer={
        <DialogFooter>
          <DialogButton
            text="確定"
            onPress={() => {
              props.set_show_setting(false);
              props.set_search_fields({
                name: "",
                upduration: tmp_upduration_option,
              });
            }}
          />
        </DialogFooter>
      }
    >
      <DialogContent style={styles.content_container}>
        <View style={styles.select_container}>
          <Text style={styles.select_title}>電影名稱</Text>
          <TextInput
            style={styles.select_picker}
            onChangeText={(text) => onChangeText(text)}
            value={tmp_search_name}
          />
        </View>
        <View style={styles.select_container}>
          <Text style={styles.select_title}>上映日期</Text>
          <SelectPicker
            onValueChange={(value) => {
              tmp_upduration_option = value;
            }}
            selected={props.search_fields.upduration}
            style={styles.select_picker}
            placeholder={"日期 ▼"}
            placeholderStyle={styles.placeholdertext}
            onSelectedStyle={styles.selectedtext}
            doneButtonText={"選擇"}
          ></SelectPicker>
        </View>
      </DialogContent>
    </Dialog>
  );
}
