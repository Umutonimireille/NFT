import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Stat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STAT</Text>
      <View style={styles.icons}>
        <View
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <AntDesign name="home" size={24} color="rgb(120 118 118)" />
          <Text
            style={{
              color: "rgb(120 118 118)",
              fontSize: 20
            }}
          >
            Ranking
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <AntDesign name="home" size={24} color="rgb(120 118 118)" />
          <Text
            style={{
              color: "rgb(120 118 118)",
              fontSize: 20
            }}
          >
            Activity
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "rgb(120 118 118)",
          height: 1,
          marginTop: 10
        }}
      ></View>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AntDesign name="home" size={24} color="rgb(120 118 118)" />
          <Text
            style={{
              color: "white"
            }}
          >
            {" "}
            All categories
          </Text>
          <AntDesign name="home" size={24} color="rgb(120 118 118)" />
        </View>
        <View style={styles.button}>
          <AntDesign name="home" size={24} color="rgb(120 118 118)" />
          <Text
            style={{
              color: "white"
            }}
          >
            {" "}
            All chains
          </Text>
          <AntDesign name="home" size={24} color="rgb(120 118 118)" />
        </View>
      </View>

      <View style={styles.sec}>
        <Text>dshfbhddhf</Text>
      </View>
      <View style={styles.bar}>
        <View style={styles.iconBar}>
          <AntDesign name="home" size={24} color="white" />
          <Ionicons
            name="stats-chart"
            size={24}
            color="white"
            onPress={handleStat}
          />
          {/* <AntDesign name="home" size={24} color="black" /> */}
          <View style={styles.outer}>
            <Text style={styles.plus}>+</Text>
            <View style={styles.inner}></View>
          </View>
          <FontAwesome name="search" size={24} color="white" />
          <Ionicons name="person" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211134"
    // alignItems: "center"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 50,
    textAlign: "center"
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
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
    backgroundColor: "blue",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff"
  },
  sec: {
    width: "95%",
    height: 65, // Replace "65h" with "65"
    backgroundColor: "#584175",
    marginLeft: 8,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  outer: {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    transform: [{ rotate: "45deg" }],
    overflow: "hidden",
    backgroundColor: "#D3B9EB",
    position: "absolute", // Position the circular button absolutely
    bottom: 10 // Adjust this value as needed
    // left: "50%", // Center the button horizontally
    // marginLeft: -30, // Correct the position
    // borderRadius: 30 // Make it circular
  },
  inner: {
    // width: "111%",
    // height: "111%",
    backgroundColor: "transparent",
    transform: [{ rotate: "-45deg" }]
    // borderWidth: 2,
    // borderColor: "red"
  },
plus: {
  position: "absolute",
  fontSize: 30,
  fontWeight: "bold",
  // Adjust positioning as needed
  top: 10, // Adjust the top value
  left: 10, // Adjust the left value
  // zIndex: 10 // Add zIndex if needed
},
  bar: {
    height: 80,
    backgroundColor: "#584175",
    marginTop: 40,
    borderWidth: 1, // Add a border
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignContent: "center"
  },
  iconBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }
});