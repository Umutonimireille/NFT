// HomeScreen.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Navigate to the "Market" screen
    navigation.navigate("Market");
  };

  console.log('hallo there');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/first.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.headerText}>WELCOME TO</Text>
        <Text style={styles.headerText}>NFT MARKETPLACE</Text>

        {/* Your screen content goes here */}
        <View
          style={{
            backgroundColor: "#6d73a9",
            height: "25%",
            width: "70%",
            marginTop: 120,
            borderWidth: 1,
            borderRadius: 20,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#211134",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20
            }}
          >
            Explore and mint NFTs
          </Text>
          <Text
            style={{
              color: "white",
              marginTop: 20
            }}
          >
            You can buy and sell the NFTs of the best artists in the world.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={{ color: "#211134" }}>Get Started Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#211134",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24
  },
  button: {
    borderRadius: 20,
    width: 200,
    height: 50,
    backgroundColor: "#5352A6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
});
