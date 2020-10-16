import React, {
  Component,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../styles/ListStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AppLink from "react-native-app-link";
import Collapsible from "react-native-collapsible";
import MovieContext from "../cotext/MovieContext";

export default function MovieList(props) {
  const [data, setData] = useState(0);
  const flatListRef = React.useRef();
  const ScrollToTop = () => {
    // use current
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  function gettodaymovie() {
    const city = encodeURIComponent(props.city_setting);
    const movie_name = encodeURIComponent(props.search_fields.name);
    const up_date = encodeURIComponent(props.search_fields.upduration);

    fetch(
      `http://mvschedule.tk:55/movies/movie-today/?city=${city}&movie_name=${movie_name}&up_date=${up_date}`
    )
      .then((response) => {
        if (response.status > 400) {
          console.log("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        props.set_search_fields({
          name: "",
          upduration: "",
        });
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
    gettodaymovie();
    ScrollToTop();
  }, [props.city_setting]);
  useEffect(() => {
    if (props.search_fields.name || props.search_fields.upduration) {
      gettodaymovie();
      ScrollToTop();
    }
  }, [props.search_fields]);

  return (
    <FlatList
      ref={flatListRef}
      onRefresh={() => {
        gettodaymovie();
      }}
      refreshing={false}
      contentContainerStyle={styles.background}
      onScroll={props.getypos}
      data={data}
      renderItem={({ item, index }) => (
        <View style={styles.movieobj_container}>
          <View style={styles.movie_and_bar}>
            <MoviePic
              imageurl={item.image_url}
              key={index}
              movie_name={item.name}
            />
            <Rightbar
              ytlink={item.intro_video}
              intro={item.intro}
              imdb={item.imdb}
              name={item.name}
            />
          </View>
          <TimeList key={"time_" + index} datedata={item.date_data} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

class MoviePic extends Component {
  state = {};
  render() {
    const imageurl = "http://mvschedule.tk:55/static/" + this.props.imageurl;
    return (
      <ImageBackground
        source={{ uri: imageurl }}
        style={styles.pic_container}
      ></ImageBackground>
    );
  }
}

class TimeList extends Component {
  state = {
    isfold: true,
  };
  render() {
    var datelist = this.props ? this.props.datedata.datelist : [];
    let theater_list = [];
    for (let i = 0; i <= datelist.length - 1; i++) {
      let timelist = [];
      for (let j = 0; j <= datelist[i].timelist.length - 1; j++) {
        timelist.push(
          <View key={"time_" + j} style={styles.time_button}>
            <Text style={styles.time_text}>
              {" " + datelist[i].timelist[j] + " "}
            </Text>
          </View>
        );
      }
      if (timelist.length > 0)
        theater_list.push(
          <View key={"theater_" + i}>
            <Text style={styles.theater}>{datelist[i].theater_name}</Text>
            <View style={styles.timelist_container}>{timelist}</View>
          </View>
        ); //theater_name and timelist
    }

    //if not theaterlist 給一個 今日已無場次

    return (
      <View>
        {this.state.isfold ? (
          <TouchableOpacity
            style={styles.timelistdropdown}
            onPress={() => {
              this.setState({ isfold: false });
            }}
          >
            <Text style={styles.timelistdropdown_text}>時刻表 </Text>
            <Icon name="angle-double-down" size={25} color="lightblue" />
          </TouchableOpacity>
        ) : null}
        <Collapsible collapsed={this.state.isfold}>
          <View style={styles.schedule_container}>
            {theater_list.length > 0 ? (
              theater_list
            ) : (
              <Text style={styles.noschedule_text}>本日已無場次</Text>
            )}
          </View>
        </Collapsible>
        {!this.state.isfold ? (
          <TouchableOpacity
            style={styles.timelistdropdown}
            onPress={() => {
              this.setState({ isfold: true });
            }}
          >
            <Text style={styles.timelistdropdown_text}>收起 </Text>
            <Icon name="angle-double-up" size={25} color="lightblue" />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

function Rightbar(props) {
  const [showIMDb, set_showIMDb] = useState(false);
  var ytlink = props ? props.ytlink : "https://youtube.com";
  var name = props ? props.name : "";
  var intro = props ? props.intro : "";
  var imdb_score = props ? props.imdb : "?";
  var score_number = isNaN(Number(imdb_score)) ? 0 : Number(imdb_score);
  let score_color = "black";
  const {
    movie_name,
    set_movie_name,
    movie_detail,
    set_movie_detail,
    show_detail,
    set_show_detail,
    show_comment,
    set_show_comment,
  } = useContext(MovieContext);

  switch (true) {
    case score_number >= 8:
      score_color = "gold";
      break;
    case score_number >= 7:
      score_color = "crimson";
      break;
    case score_number >= 6:
      score_color = "forestgreen";
      break;
    case score_number >= 5:
      score_color = "deepskyblue";
      break;
    default:
      break;
  }

  return (
    <View style={styles.rightbar}>
      <Icon
        name="youtube"
        size={40}
        color="red"
        style={styles.icon}
        onPress={
          () =>
            AppLink.maybeOpenURL(ytlink, {
              appName: "youtube",
              appStoreId: "",
              appStoreLocale: "",
              playStoreId: "",
            })
          /*.then(() => {
                console.log("url found");
              })
              .catch((err) => {
                console.log("error app not installed");
              })*/
        }
      />
      <MaterialIcon
        name="chat-bubble-outline"
        size={40}
        style={styles.icon}
        onPress={() => {
          //this.props.set_comment_target(this.props.name);
          set_movie_name(name);
          set_show_comment(true);
        }}
      />
      {!showIMDb ? (
        <Icon
          name="imdb"
          size={40}
          color="lightcoral"
          style={styles.icon}
          onPress={() => {
            set_showIMDb(true);
          }}
        />
      ) : (
        <TouchableOpacity
          style={styles.imdb_container}
          onPress={() => {
            set_showIMDb(false);
          }}
        >
          <FontAwesome
            name="square"
            size={43}
            color={score_color}
            style={styles.icon}
          />
          <Text style={styles.score}>{imdb_score}</Text>
        </TouchableOpacity>
      )}
      <Icon
        name="readme"
        size={35}
        color="black"
        style={styles.icon}
        onPress={() => {
          set_movie_detail({ title: name, detail: intro });
          set_show_detail(true);
        }}
      />
    </View>
  );
}
