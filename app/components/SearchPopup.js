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
  const [tmp_search_name, ch_tmp_search_name] = useState("");

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
        <View style={styles.search_footer}>
          <DialogButton
            text="確定"
            style={styles.search_confirm_button}
            onPress={() => {
              props.set_show_search(false);
              props.set_search_fields({
                name: tmp_search_name,
                upduration: tmp_upduration_option,
              });
              ch_tmp_search_name("");
            }}
          />
        </View>
      }
    >
      <DialogContent style={styles.content_container}>
        <View style={styles.select_container}>
          <Text style={styles.select_title}>電影名稱</Text>
          <TextInput
            style={styles.text_inputbox}
            onChangeText={(text) => ch_tmp_search_name(text)}
            value={tmp_search_name}
            placeholder={"輸入名稱(部分)查詢"}
          />
        </View>
        <View style={styles.select_container}>
          <Text style={styles.select_title}>上映日期</Text>
          <SelectPicker
            onValueChange={(value) => {
              tmp_upduration_option = value;
            }}
            selected={tmp_upduration_option}
            style={styles.select_picker}
            placeholder={"日期 ▼"}
            placeholderStyle={styles.placeholdertext}
            onSelectedStyle={styles.selectedtext}
            doneButtonText={"選擇"}
          >
            <SelectPicker.Item label={"全部"} value={""} />
            <SelectPicker.Item label={"本週上映"} value={"7"} />
            <SelectPicker.Item label={"本月上映"} value={"30"} />
          </SelectPicker>
        </View>
      </DialogContent>
    </Dialog>
  );
}
