import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import MovieList from "./app/screens/MovieList";
import { StatusBarHeight } from "./app/styles/StatusBar";
import { NavigationContainer } from "@react-navigation/native";
import Toptab from "./app/components/Toptab";
import Bottomtab from "./app/components/Bottomtab";
import SettingPopup from "./app/components/SettingPopup";
import DetailPopup from "./app/components/DetailPopup";
import SearchPopup from "./app/components/SearchPopup";
import SideMenu from "./app/components/SideMenu";
import Loading from "./app/screens/Loading";
import Comments from "./app/components/Comments";
import MovieContext from "./app/cotext/MovieContext";

export default function App() {
  const [show_menu, set_show_menu] = useState(false);
  const [show_setting, set_show_setting] = useState(false);
  const [city_setting, set_city] = useState(null); //city setting要可以被存入應用設定 不然每次都要改太怪了
  const [movie_detail, set_movie_detail] = useState("No data");
  const [movie_name, set_movie_name] = useState("");
  const [show_detail, set_show_detail] = useState(false);
  const [show_search, set_show_search] = useState(false);
  const [search_fields, set_search_fields] = useState({
    name: "",
    upduration: "",
  });
  const [show_comment, set_show_comment] = useState(false);
  const movie_context_value = {
    movie_name,
    set_movie_name,
    movie_detail,
    set_movie_detail,
    show_detail,
    set_show_detail,
    show_comment,
    set_show_comment,
  }; //put multilayer states into context

  const readData = async () => {
    try {
      const city_value = await AsyncStorage.getItem("city_setting");
      if (city_value !== null) {
        // We have data!!
        set_city(city_value);
      } else {
        set_city(28);
      }
    } catch (error) {
      // Error retrieving data
      //console.log(error);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <View style={styles.screen}>
      <Toptab
        style={{ position: "absolute", top: 0 }}
        show_setting={show_setting}
        set_show_setting={set_show_setting}
        set_show_search={set_show_search}
        set_show_menu={set_show_menu}
      />
      <SideMenu
        show_menu={show_menu}
        set_show_menu={set_show_menu}
        set_show_setting={set_show_setting}
        set_show_search={set_show_search}
      ></SideMenu>
      {city_setting ? (
        <MovieContext.Provider value={movie_context_value}>
          <MovieList
            city_setting={city_setting}
            search_fields={search_fields}
            set_search_fields={set_search_fields}
          />
        </MovieContext.Provider>
      ) : (
        <Loading />
      )}
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
      <SearchPopup
        search_fields={search_fields}
        set_search_fields={set_search_fields}
        show_search={show_search}
        set_show_search={set_show_search}
      />
      {movie_name != "" ? (
        <Comments
          set_show_comment={set_show_comment}
          show_comment={show_comment}
          movie_name={movie_name}
        />
      ) : null}
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
    //flexGrow: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
