import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const picsize = picResize(420, 600);

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //paddingVertical: 50,
    borderColor: "black",
    borderWidth: 10,
  },
  pic_container: {
    width: picsize.width,
    height: picsize.height,
    //marginTop: screenHeight * 0.1,
    //alignSelf: "flex-end",
  },
  movieobj_container: {
    flex: 1,
    //borderColor: "red",
    //borderWidth: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  theater: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
  timelist_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  time_button: {
    backgroundColor: "dimgray",
    borderRadius: 7,
    margin: 1,
  },
  time_text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  schedule_container: {
    alignItems: "center",
    paddingBottom: 10,
    borderColor: "black",
    flex: 1,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  movie_and_bar: {
    flexDirection: "row",
    backgroundColor: "slategrey",
  },
  rightbar: {
    alignItems: "center",
    flex: 1,
    borderColor: "black",
    borderLeftWidth: 2,
  },
  icon: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginVertical: 5,
  },
});

export default styles;

function picResize(width, height) {
  var maxWidth = screenWidth * 0.8;
  var maxHeight = screenHeight * 0.6;

  if (width >= height) {
    var ratio = maxWidth / width;
    var h = Math.ceil(ratio * height);

    if (h > maxHeight) {
      // Too tall, resize
      var ratio = maxHeight / height;
      var w = Math.ceil(ratio * width);
      var ret = {
        width: w,
        height: maxHeight,
      };
    } else {
      var ret = {
        width: maxWidth,
        height: h,
      };
    }
  } else {
    var ratio = maxHeight / height;
    var w = Math.ceil(ratio * width);

    if (w > maxWidth) {
      var ratio = maxWidth / width;
      var h = Math.ceil(ratio * height);
      var ret = {
        width: maxWidth,
        height: h,
      };
    } else {
      var ret = {
        width: w,
        height: maxHeight,
      };
    }
  }

  return ret;
}
