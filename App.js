import React from "react";
import { View, Text, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import { white, purple } from "./utils/colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createStore } from "redux";
import AddCard from "./components/AddCard";
import { Constants } from "expo";
import Quiz from "./components/Quiz";

/* STATUS BAR COMPONENT */
function TopStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

/* TAB NAVIGATOR */
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

/* STACK NAVIGATOR */
const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck View",
      headerTintColor: purple,
      headerTitleSize: {
        fontSize: 20
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "New Question",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

const AppContainer = createAppContainer(Stack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <TopStatusBar backgroundColor={purple} barStyle="light-content" />
        <AppContainer />
      </Provider>
    );
  }
}
