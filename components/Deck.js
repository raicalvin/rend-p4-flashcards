import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Deck extends Component {
  render() {
    return (
      <View>
        <Text>This is the individual DECK</Text>
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

export default Deck;
