import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { orange, white } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import { connect } from "react-redux";
import { addCard } from "../actions";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

class AddCard extends Componet {
  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
