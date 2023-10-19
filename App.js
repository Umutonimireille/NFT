import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Homescreen";
import Market from "./components/Market";
import Stat from "./components/Stat";
import DashBoard from "./components/DashBoard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide the header for Home screen
        />
        <Stack.Screen
          name="Market"
          component={Market}
          options={{ headerShown: false }} // Hide the header for Market screen
        />

        <Stack.Screen
          name="Stat"
          component={Stat}
          options={{ headerShown: false }} // Hide the header for Market screen
        />

        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{ headerShown: false }} // Hide the header for Market screen
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
