import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Market() {
const navigation = useNavigation();

 const handleStat = () => {
   // Navigate to the "Market" screen
   navigation.navigate("Stat");
 };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFT MARKETPLACE</Text>
      <Text
        style={{
          color: "white",
          marginTop: 3,
          fontSize: 20,
          fontWeight: "medium"
        }}
      >
        {" "}
        Trending Collection
      </Text>
      <View horizontal={true} style={styles.views}>
        {/* Updated style name to match the View */}
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
      </View>

      {/* "secomd viewwsss" */}

      <Text
        style={{
          color: "white",
          marginTop: 3,
          fontSize: 20,
          fontWeight: "medium"
        }}
      >
        {" "}
        Top Seller
      </Text>
      <View horizontal={true} style={styles.views}>
        {/* Updated style name to match the View */}
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
      </View>

      {/* third */}

      <Text
        style={{
          color: "white",
          marginTop: 3,
          fontSize: 20,
          fontWeight: "medium"
        }}
      >
        {" "}
        Art
      </Text>
      <View horizontal={true} style={styles.views}>
        {/* Updated style name to match the View */}
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={require("../assets/first.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello </Text>
            <Entypo name="heart" size={24} color="red" style={styles.icon} />
          </View>
        </View>
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
    zIndex: 10
  },

  container: {
    flex: 1,
    backgroundColor: "#211134"
    // alignItems: "center"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 50,
    textAlign: "center"
  },
  views: {
    // Updated style name to match the View
    display: "flex", // Apply display: flex
    flexDirection: "row",
    marginTop: 10
  },
  itemContainer: {
    flexDirection: "column", // Display items in a column
    marginVertical: 10,
    backgroundColor: "#281E5D",
    width: 120,
    height: 150,
    marginRight: 8,
    marginLeft: 4,
    borderWidth: 1, // Add a border
    borderRadius: 10
  },
  image: {
    width: 105,
    height: 120,
    marginLeft: 8,
    marginTop: 3,
    borderWidth: 1, // Add a border
    borderRadius: 10
  },
  textContainer: {
    display: "flex",
    flexDirection: "row", // Display text and icon in a row
    justifyContent: "space-between" // Add space between them
  },
  text: {
    color: "white",
    flex: 1 // Allow the text to grow within the available space
  },
  icon: {
    marginLeft: 10 // Add some space between text and icon
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

