import { StyleSheet, Dimensions, Text } from "react-native";

const styles = StyleSheet.create({
  toptab: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "lightgrey",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 15,
    position: "absolute",
    top: 0,
  },
  toptab_text: {
    color: "black",
    fontWeight: "bold",
  },
  tabicon: {
    marginTop: 10,
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
});
export default styles;
