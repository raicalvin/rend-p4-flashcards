import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckView,
    navigationOptions: {
      tabBarLabel: "Decks"
    }
  },
  Add: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck"
    }
  }
});

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
