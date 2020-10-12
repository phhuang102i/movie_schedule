import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import styles from "../styles/PopupStyle";

export default function Comments(props) {
  const [comment_data, set_comment_data] = useState([]);

  function getcommentlist(name, page) {
    const movie_name = encodeURIComponent(name);
    const url_page = encodeURIComponent(page);

    fetch(
      `http://mvschedule.tk:55/movies/movie-comment/?movie-name=${movie_name}&page=${url_page}`
    )
      .then((response) => {
        if (response.status > 400) {
          console.log("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        set_comment_data(data);
      })
      .catch(function (error) {
        alert(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
    //console.log("OUO!!");
  }
  useEffect(() => {
    getcommentlist("急先鋒", 1);
  }, []);

  let comment_list = [];
  for (let i = 0; i < comment_data.length; i++) {
    comment_list.push(
      <View style={styles.comment_row} key={comment_data[i].link}>
        <Text style={styles.comment_link_from}>PTT</Text>
        <Text style={styles.comment_link_title}>{comment_data[i].title}</Text>
      </View>
    );
  }

  return (
    <Dialog
      visible={props.show_comment}
      dialogStyle={styles.comment_container}
      dialogTitle={<DialogTitle title="影評/電影心得" />}
      onTouchOutside={() => {
        props.set_show_comment(false);
      }}
      onHardwareBackPress={() => {
        props.set_show_comment(false);
        return true;
      }}
      footer={
        <View style={styles.comment_paging_container}>
          <View style={styles.page_box}>
            <Text style={styles.page_text}>1</Text>
          </View>
          <View style={styles.page_box}>
            <Text style={styles.page_text}>2</Text>
          </View>
          <View style={styles.page_box}>
            <Text style={styles.page_text}>3</Text>
          </View>
        </View>
      }
    >
      <DialogContent>
        <ScrollView>{comment_list}</ScrollView>
      </DialogContent>
    </Dialog>
  );
}
