import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import styles from "../styles/PopupStyle";
import SelectPicker from "react-native-form-select-picker";
import cities from "./FixedData";

export default function SettingPopup(props) {
  let cityItems = [];
  let tmp_city_option = 28;
  for (let ctname in cities) {
    cityItems.push(
      <SelectPicker.Item label={String(ctname)} value={cities[ctname]} />
      // key would be set to equal label if not included ^^
    );
  }

  return (
    <Dialog
      visible={props.show_setting}
      onTouchOutside={() => {
        props.set_show_setting(false);
      }}
      dialogTitle={<DialogTitle title="設定" />}
      dialogStyle={styles.dialog}
      footer={
        <DialogFooter>
          <DialogButton
            text="取消"
            onPress={() => {
              props.set_show_setting(false);
            }}
          />
          <DialogButton
            text="確定"
            onPress={() => {
              props.set_show_setting(false);
              props.set_city(tmp_city_option);
            }}
          />
        </DialogFooter>
      }
    >
      <DialogContent style={styles.content_container}>
        <View style={styles.select_container}>
          <Text style={styles.select_title}>選擇城市</Text>
          <SelectPicker
            onValueChange={(value) => {
              tmp_city_option = value;
            }}
            selected={props.city_setting}
            style={styles.select_picker}
            placeholder={"城市 ▼"}
            placeholderStyle={styles.placeholdertext}
            onSelectedStyle={styles.selectedtext}
            doneButtonText={"選擇"}
          >
            {cityItems}
          </SelectPicker>
        </View>
      </DialogContent>
    </Dialog>
  );
}
