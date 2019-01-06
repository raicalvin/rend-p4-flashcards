import React from "react";
import { View, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import InfoScreen from "./components/InfoScreen";
import { white, blue } from "./utils/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createStore } from "redux";
import { Constants } from "expo";
import { setLocalNotification } from "./utils/helpers";

/* STATUS BAR COMPONENT */
function TopStatusBar({ backgroundColor, ...props }) {
  return (
    <View
      style={{ backgroundColor, height: Constants.statusBarHeight, margin: 0 }}
    >
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
    },
    InfoScreen: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarLabel: "About",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="info-circle" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: blue,
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
      headerTintColor: blue,
      headerTitleSize: {
        fontSize: 20
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "New Question",
      headerTintColor: white
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: blue
    }
  }
});

/* APP CONTAINER FOR STACK NAVIGATOR */
const AppContainer = createAppContainer(Stack);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        {/* <TopStatusBar backgroundColor={white} barStyle="light-content" /> */}
        <AppContainer />
      </Provider>
    );
  }
}
