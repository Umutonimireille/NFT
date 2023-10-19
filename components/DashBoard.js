import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { ProgressChart ,BarChart,LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DashBoard() {

  const navigation = useNavigation();

  const handleStat = () => {
    // Navigate to the "Market" screen
    navigation.navigate("Stat");
  };

  const handleDashBoard = () => {
    navigation.navigate("DashBoard");
  };

  const handleHome = () => {
    navigation.navigate("Home");
  };
  const data = {
    labels: ["Run"], // optional
    data: [0.8]
  };
  const barData = {
    // labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.navbar}>
          <Entypo name="menu" size={24} color="black" />
          <Text>Home</Text>
          <Image source={require("../assets/first.png")} style={styles.image} />
        </View>
      </View>
      <View style={styles.texts}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>WELCOME BACK</Text>
        <Text style={{ color: "#969393", fontWeight: "thin", fontSize: 15 }}>
          Hi Audrey
        </Text>
      </View>

      <View style={styles.boxes}>
        <View style={styles.box}>
          <View style={styles.cons}>
            <View style={styles.nun}>
              <Foundation name="foot" size={24} color="#8A8A8A" />
            </View>
            <Text>Walk</Text>
          </View>
          <View style={styles.gaugeContainer}>
            <ProgressChart
              data={data}
              width={150} // Adjust the width to make it smaller
              height={150} // Adjust the height to match the width for a circular chart
              strokeWidth={16}
              radius={60}
              chartConfig={chartConfig}
              hideLegend={true} // Hide the legend
            >
              <View style={styles.gaugeTextContainer}>
                <Text style={styles.gaugeText}>350 steps</Text>
              </View>
            </ProgressChart>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.cons}>
            <View style={styles.nun}>
              <Foundation name="foot" size={24} color="#8A8A8A" />
            </View>
            <Text>Walk</Text>
          </View>
          <BarChart
            // style={graphStyle}
            data={barData}
            width={screenWidth - 250}
            height={120}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
          <View
            style={{
              marginLeft: 10
            }}
          >
            <Text
              style={{
                color: "#969393"
              }}
            >
              Liters
            </Text>
            <Text>0.10</Text>
          </View>
        </View>
      </View>

      {/* sec */}

      <View style={styles.groups}>
        <View style={styles.group}>
          <View style={styles.cons}>
            <View style={styles.nun}>
              <Foundation name="foot" size={24} color="#8A8A8A" />
            </View>
            <Text>Walk</Text>
          </View>

          <LineChart
            data={lineData}
            width={screenWidth - 200}
            height={156}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
          />
          <View
            style={{
              marginLeft: 10
            }}
          >
            <Text
              style={{
                color: "#969393"
              }}
            >
              Liters
            </Text>
            <Text>0.10</Text>
          </View>
        </View>

        <View style={styles.cards}>
          <View style={styles.card}>
            <View style={styles.cons}>
              <View style={styles.nun}>
                <Foundation name="foot" size={24} color="#8A8A8A" />
              </View>
              <Text>Walk</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                marginTop: 50
              }}
            >
              <Text
                style={{
                  color: "#969393"
                }}
              >
                Liters
              </Text>
              <Text>0.10</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cons}>
              <View style={styles.nun}>
                <Foundation name="foot" size={24} color="#8A8A8A" />
              </View>
              <Text>Walk</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                marginTop: 50
              }}
            >
              <Text
                style={{
                  color: "#969393"
                }}
              >
                Liters
              </Text>
              <Text>0.10</Text>
            </View>
          </View>
        </View>
      </View>

      {/* bar */}

      <View style={styles.bar}>
        <View style={styles.iconBar}>
          <AntDesign name="home" size={24} color="white" onPress={handleHome} />
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
          <Ionicons
            name="person"
            size={24}
            color="white"
            onPress={handleDashBoard}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9FF"
  },
  nav: {
    height: 60,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  texts: {
    marginLeft: 10,
    marginTop: 20
  },
  boxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30
  },
  box: {
    height: 200,
    width: 180,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8
  },
  cons: {
    flexDirection: "row",
    gap: 20,
    marginLeft: 5,
    marginTop: 5
  },
  nun: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8
  },
  gaugeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gaugeTextContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 75,
    padding: 10
  },
  gaugeText: {
    color: "black",
    fontSize: 18,
    textAlign: "center"
  },
  groups: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30
  },
  group: {
    height: 300,
    width: 180,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  card: {
    height: 140,
    width: 180,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8
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
    backgroundColor: "#F7DFF2",
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
    backgroundColor: "#2C2E70",
    marginTop: 60,
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
