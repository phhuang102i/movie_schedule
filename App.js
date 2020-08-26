import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieList from "./app/screens/MovieList";
import { StatusBarHeight } from "./app/styles/StatusBar";
import { NavigationContainer } from "@react-navigation/native";
import Toptab from "./app/components/Toptab";
import Bottomtab from "./app/components/Bottomtab";
import SettingPopup from "./app/components/SettingPopup";
import DetailPopup from "./app/components/DetailPopup";

export default function App() {
  const [show_setting, set_show_setting] = useState(false);
  const [city_setting, set_city] = useState(28); //city setting要可以被存入應用設定 不然每次都要改太怪ㄌ
  const [movie_detail, set_movie_detail] = useState("No data");
  const [show_detail, set_show_detail] = useState(false);

  return (
    <View style={styles.screen}>
      <Toptab
        style={{ position: "absolute", top: 0 }}
        show_setting={show_setting}
        set_show_setting={set_show_setting}
      />
      <MovieList
        show_setting={show_setting}
        set_show_setting={set_show_setting}
        city_setting={city_setting}
        set_movie_detail={set_movie_detail}
        set_show_detail={set_show_detail}
      />
      <SettingPopup
        show_setting={show_setting}
        set_show_setting={set_show_setting}
        city_setting={city_setting}
        set_city={set_city}
      />
      <DetailPopup
        set_show_detail={set_show_detail}
        show_detail={show_detail}
        movie_detail={movie_detail}
      />
      <Bottomtab />
    </View>

    /*<NavigationContainer>
      <Tabs />
    </NavigationContainer>*/
  );
}

const styles = StyleSheet.create({
  screen: {
    //根據statusbar 要往下調整螢幕位置
    marginTop: StatusBarHeight,
    //flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
