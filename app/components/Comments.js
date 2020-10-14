import React, { Component, useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import styles from "../styles/PopupStyle";
import { ContextStore } from "../screens/MovieList";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Comments(props) {
  const [comment_data, set_comment_data] = useState(null);
  const [currentpage, set_currentpage] = useState(1);

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
    getcommentlist(props.movie_name, currentpage);
  }, [props.movie_name, currentpage]);

  const data = comment_data ? comment_data.results : [];
  const totalpages = comment_data ? Math.ceil(comment_data.count / 10) : 0;

  let comment_list = [];
  for (let i = 0; i < data.length; i++) {
    comment_list.push(
      <View style={styles.comment_row} key={data[i].link}>
        <Text style={styles.comment_link_from}>PTT</Text>
        <Text style={styles.comment_link_title}>{data[i].title}</Text>
      </View>
    );
  }

  return (
    <Dialog
      key={props.movie_name}
      visible={props.show_comment}
      dialogStyle={styles.comment_container}
      dialogTitle={<DialogTitle title="影評/電影心得" />}
      onTouchOutside={() => {
        props.set_show_comment(false);
        set_currentpage(1);
      }}
      onHardwareBackPress={() => {
        props.set_show_comment(false);
        set_currentpage(1);
        return true;
      }}
      footer={
        <Paging
          totalpages={totalpages}
          currentpage={currentpage}
          set_currentpage={set_currentpage}
        />
      }
    >
      <DialogContent>
        <ScrollView>{comment_list}</ScrollView>
      </DialogContent>
    </Dialog>
  );
}

function Paging(props) {
  let page_boxes = [];
  for (let i = 1; i <= props.totalpages; i++) {
    page_boxes.push(
      <TouchableOpacity
        style={styles.page_box}
        key={"page_" + i}
        onPress={() => {
          props.set_currentpage(i);
        }}
      >
        <Text style={styles.page_text}>{i}</Text>
      </TouchableOpacity>
    );
  }

  return <View style={styles.comment_paging_container}>{page_boxes}</View>;
}
