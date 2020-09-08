import React, { useEffect, Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/MenuStyle";
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
  SlideAnimation,
} from "react-native-popup-dialog";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    //this.dialogRef = React.createRef();
    this.state = {};
  }

  render() {
    const slide_from_left = new SlideAnimation({
      slideFrom: "left",
      animationDuration: 150,
      useNativeDriver: true,
    });
    return (
      <Dialog
        /*ref={(popupDialog) => {
          this.dialogRef = popupDialog;
        }}*/
        visible={this.props.show_menu}
        onTouchOutside={() => {
          //this.props.set_show_menu(false);
          this.props.set_show_menu(false);
        }}
        dialogTitle={<DialogTitle title="設定" style={{ height: 50 }} />}
        dialogStyle={styles.menu}
        onHardwareBackPress={() => {
          this.props.set_show_menu(false);
          return true;
        }}
        //dialogAnimation={slide_from_left}
      >
        <DialogContent style={styles.menu_content}>
          <Content
            set_show_search={this.props.set_show_search}
            set_show_setting={this.props.set_show_setting}
          />
        </DialogContent>
      </Dialog>
    );
  }
}
export default SideMenu;

function Content(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.featurelist}
        onPress={() => {
          props.set_show_search(true);
        }}
      >
        <Text>搜尋</Text>
        <Icon
          name="search"
          size={26}
          color="black"
          //onPress={() => this.props.set_show_search(true)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.featurelist}
        onPress={() => {
          props.set_show_setting(true);
        }}
      >
        <Text>設定</Text>
        <MaterialIcon
          name="settings"
          size={30}
          color="black"
          //onPress={() => this.props.set_show_setting(true)}
        />
      </TouchableOpacity>
    </View>
  );
}
