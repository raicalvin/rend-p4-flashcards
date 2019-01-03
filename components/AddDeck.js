import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sup. Here you can add a deck</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AddDeck;
