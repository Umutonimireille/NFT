
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image
} from "react-native";
import { AntDesign, FontAwesome,Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


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
            <Text
              style={{
                color: "rgb(120 118 118)",
                fontSize: 20
              }}
            >
              1
            </Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  AZUMI
                </Text>
                <Text
                  style={{
                    color: "rgb(120 118 118)",
                    fontSize: 15
                  }}
                >
                  view info
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="pyramid"
              size={24}
              color="rgb(120 118 118)"
            />
            <View style={styles.column}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                2000000
              </Text>
              <Text
                style={{
                  color: "#34C759",
                  fontSize: 15
                }}
              >
                3.999%
              </Text>
            </View>
          </View>
        </View>
        {/* sec */}

        <View style={styles.category}>
          <View style={styles.all}>
            <Text
              style={{
                color: "rgb(120 118 118)",
                fontSize: 20
              }}
            >
              1
            </Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  AZUMI
                </Text>
                <Text
                  style={{
                    color: "rgb(120 118 118)",
                    fontSize: 15
                  }}
                >
                  view info
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="pyramid"
              size={24}
              color="rgb(120 118 118)"
            />
            <View style={styles.column}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                2000000
              </Text>
              <Text
                style={{
                  color: "#34C759",
                  fontSize: 15
                }}
              >
                3.999%
              </Text>
            </View>
          </View>
        </View>
        {/* third */}

        <View style={styles.category}>
          <View style={styles.all}>
            <Text
              style={{
                color: "rgb(120 118 118)",
                fontSize: 20
              }}
            >
              1
            </Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  AZUMI
                </Text>
                <Text
                  style={{
                    color: "rgb(120 118 118)",
                    fontSize: 15
                  }}
                >
                  view info
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="pyramid"
              size={24}
              color="rgb(120 118 118)"
            />
            <View style={styles.column}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                2000000
              </Text>
              <Text
                style={{
                  color: "#34C759",
                  fontSize: 15
                }}
              >
                3.999%
              </Text>
            </View>
          </View>
        </View>

        {/* fouth  */}

        <View style={styles.category}>
          <View style={styles.all}>
            <Text
              style={{
                color: "rgb(120 118 118)",
                fontSize: 20
              }}
            >
              1
            </Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  AZUMI
                </Text>
                <Text
                  style={{
                    color: "rgb(120 118 118)",
                    fontSize: 15
                  }}
                >
                  view info
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="pyramid"
              size={24}
              color="rgb(120 118 118)"
            />
            <View style={styles.column}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                2000000
              </Text>
              <Text
                style={{
                  color: "#34C759",
                  fontSize: 15
                }}
              >
                3.999%
              </Text>
            </View>
          </View>
        </View>
        {/* fifth */}

        <View style={styles.category}>
          <View style={styles.all}>
            <Text
              style={{
                color: "rgb(120 118 118)",
                fontSize: 20
              }}
            >
              1
            </Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  AZUMI
                </Text>
                <Text
                  style={{
                    color: "rgb(120 118 118)",
                    fontSize: 15
                  }}
                >
                  view info
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="pyramid"
              size={24}
              color="rgb(120 118 118)"
            />
            <View style={styles.column}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                2000000
              </Text>
              <Text
                style={{
                  color: "#34C759",
                  fontSize: 15
                }}
              >
                3.999%
              </Text>
            </View>
          </View>
        </View>
        {/* sixth */}

        <View style={styles.category}>
          <View style={styles.all}>
            <Text
              style={{
                color: "rgb(120 118 118)",
                fontSize: 20
              }}
            >
              1
            </Text>
            <Image
              source={require("../assets/first.png")}
              style={styles.image}
            />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  AZUMI
                </Text>
                <Text
                  style={{
                    color: "rgb(120 118 118)",
                    fontSize: 15
                  }}
                >
                  view info
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="pyramid"
              size={24}
              color="rgb(120 118 118)"
            />
            <View style={styles.column}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                2000000
              </Text>
              <Text
                style={{
                  color: "#34C759",
                  fontSize: 15
                }}
              >
                3.999%
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* bar */}

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
    marginTop: 40
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
    width: 50,
    height: 50,
    borderRadius: 5
  },

  all: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginLeft: -40
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
    zIndex: 10
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
