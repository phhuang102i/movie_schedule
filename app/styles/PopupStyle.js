import { StyleSheet, Dimensions, Text } from "react-native";

const styles = StyleSheet.create({
  dialog: {
    width: "80%",
    height: "50%",
  },
  detail_container: {
    width: "80%",
    height: "80%",
  },
  detail_text: {
    paddingVertical: 50,
    fontSize: 20,
  },

  content_container: {
    alignItems: "center",

    flex: 1,
    marginVertical: 2.0,
  },
  select_title: {
    flex: 0.3,
    textAlign: "center",
    textAlignVertical: "center",
  },
  select_picker: {
    //backgroundColor: "red",
    flex: 0.7,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "darkblue",
    borderRadius: 5,
  },
  select_container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  placeholdertext: {
    fontSize: 20,
  },
  selectedtext: {
    fontSize: 20,
  },
  search_confirm_button: {
    borderTopWidth: 0.5,
    borderColor: "darkblue",
  },
  search_footer: {
    height: 50,
    paddingBottom: 8,
  },
  text_inputbox: {
    fontSize: 15,
    textAlign: "center",
    flex: 0.7,
    height: 50,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "darkblue",
    borderRadius: 5,
  },
  comment_container: {
    width: "90%",
    height: "90%",
  },
  comment_row: {
    borderColor: "grey",
    borderWidth: 0.5,
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    marginTop: 10,
  },
  comment_link_from: {
    flex: 1,
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    textAlignVertical: "center",
    height: "95%",
  },
  comment_link_title: {
    flex: 6,
    marginLeft: 10,
  },
  comment_paging_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  page_box: {
    marginLeft: 40,
    marginBottom: 20,
  },
  page_text: {
    fontWeight: "500",
    fontSize: 20,
  },
});
export default styles;
