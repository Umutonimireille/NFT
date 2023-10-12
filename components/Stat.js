
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Stat() {
  const navigation = useNavigation();
  const [isRankingPressed, setIsRankingPressed] = useState(false);
  const [isActivityPressed, setIsActivityPressed] = useState(false);

  const handleRankingPress = () => {
    setIsRankingPressed(true);
    setIsActivityPressed(false);
    // Handle Ranking press here
  };

  const handleActivityPress = () => {
    setIsActivityPressed(true);
    setIsRankingPressed(false);
    // Handle Activity press here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STAT</Text>
      <View style={styles.icons}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={handleRankingPress}
          style={
            isRankingPressed
              ? [styles.iconWrapper, styles.selectedText]
              : styles.iconWrapper
          }
        >
          <View style={styles.iconTextWrapper}>
            <AntDesign name="home" size={24} color="rgb(120 118 118)" />
            <Text
              style={
                isRankingPressed
                  ? [styles.iconText, styles.selectedText]
                  : styles.iconText
              }
            >
              Ranking
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          onPress={handleActivityPress}
          style={
            isActivityPressed
              ? [styles.iconWrapper, styles.selectedText]
              : styles.iconWrapper
          }
        >
          <View style={styles.iconTextWrapper}>
            <AntDesign name="home" size={24} color="rgb(120 118 118)" />
            <Text
              style={
                isActivityPressed
                  ? [styles.iconText, styles.selectedText]
                  : styles.iconText
              }
            >
              Activity
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.separator} />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AntDesign name="minussquareo" size={24} color="rgb(120 118 118)" />
          <Text
            style={{
              color: "white"
            }}
          >
            {" "}
            All categories
          </Text>
          <AntDesign name="down" size={24} color="rgb(120 118 118)" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="chain" size={24} color="rgb(120 118 118)" />
          <Text
            style={{
              color: "white"
            }}
          >
            {" "}
            All chains
          </Text>
          <AntDesign name="down" size={24} color="rgb(120 118 118)" />
        </View>
      </View>

      <View style={styles.sec}>
        <View style={styles.category}>
          <View style={styles.all}>
            <Text> 1</Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text>AZUMI</Text>
                <Text>view info</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <FontAwesome name="chain" size={24} color="rgb(120 118 118)" />
            <View style={styles.column}>
              <Text>AZUMI</Text>
              <Text>view info</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211134"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 50,
    textAlign: "center"
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconText: {
    fontSize: 20,
    color: "rgb(120 118 118)"
  },
  selectedText: {
    color: "white", // Change the text color to white
    borderBottomWidth: 1,
    borderBottomColor: "#97A9F6"
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  button: {
    width: 180,
    height: 45,
    borderWidth: 1,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "211134",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff"
  },
  separator: {
    backgroundColor: "rgb(120 118 118)",
    height: 1,
    marginTop: 10
  },
  sec: {
    width: "95%",
    height: "65vh", // Replace "65h" with "65"
    backgroundColor: "#584175",
    marginLeft: 8,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10
  },

  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 5
  },

  all: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  }
});
