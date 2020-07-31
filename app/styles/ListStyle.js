import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    //flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 10,
  },
  pic_container: {
    width: screenWidth,
    height: screenHeight * 0.5,
    resizeMode: "contain",
    marginTop: screenHeight * 0.1,
  },
  movieobj_container: {
    alignItems: "center",
    //justifyContent: "center",
  },
  theater: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  timelist_container: {
    flexDirection: "row",
  },
  time_button: {
    backgroundColor: "dimgray",
    borderRadius: 7,
    marginHorizontal: 1,
  },
  time_text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
