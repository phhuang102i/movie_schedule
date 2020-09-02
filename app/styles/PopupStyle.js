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
});
export default styles;
