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

export default function DetailPopup(props) {
  return (
    <Dialog
      visible={props.show_detail}
      dialogStyle={styles.detail_container}
      dialogTitle={<DialogTitle title="電影介紹" />}
      onTouchOutside={() => {
        props.set_show_detail(false);
      }}
    >
      <DialogContent>
        <Text>{props.movie_detail}</Text>
      </DialogContent>
    </Dialog>
  );
}
