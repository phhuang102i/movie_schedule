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

export default function SettingPopup(props) {
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
          <DialogButton text="取消" onPress={() => {}} />
          <DialogButton text="確定" onPress={() => {}} />
        </DialogFooter>
      }
    >
      <DialogContent style={styles.content_container}>
        <View style={styles.select_container}>
          <Text style={styles.select_title}>選擇城市</Text>
          <SelectPicker
            //onValueChange={(value) => {
            //  console.log(value);
            //}}
            //selected={this.state.selected}
            style={styles.select_picker}
            placeholder={"城市 ▼"}
            placeholderStyle={styles.placeholdertext}
            onSelectedStyle={styles.selectedtext}
            doneButtonText={"選擇"}
          >
            <SelectPicker.Item label="台北" value={28} />
            <SelectPicker.Item label="新北" value={8} />
            <SelectPicker.Item label="桃園" value={16} />
          </SelectPicker>
        </View>
      </DialogContent>
    </Dialog>
  );
}
