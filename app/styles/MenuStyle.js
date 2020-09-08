import { StyleSheet, Dimensions, Text } from "react-native";
import { StatusBarHeight } from "./StatusBar";

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "white",
    width: "65%",
    height: "100%",
    alignSelf: "flex-start",
    marginTop: StatusBarHeight + 30,
  },
  featurelist: {
    flexDirection: "row",
    height: 40,
    borderColor: "darkblue",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,

    //flex: 1,
  },
});
export default styles;
