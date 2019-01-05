import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { orange, white, purple, red, green } from "../utils/colors";
import SubmitButton from "./SubmitButton";
import { connect } from "react-redux";
import MainButton from "./MainButton";

class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Quiz Component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Quiz;
