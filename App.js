import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import { white, purple } from "./utils/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckView,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="clone" size={20} color={tintColor} />
        )
      }
    },
    Add: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: purple,
      labelStyle: {
        fontSize: 15,
        backgroundColor: white
      }
    }
  }
);

class App extends React.Component {
  render() {
    return (
      <View>
        <Tabs />
      </View>
    );
  }
}

export default createAppContainer(Tabs);
