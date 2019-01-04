import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getInitialDecks } from "../utils/api";

class Deck extends Component {
  render() {
    const deck = this.props.navigation.state.params.entryId;
    const decks = getInitialDecks();
    return (
      <View style={styles.container}>
        <Text>{decks[deck].name}</Text>
        <Text>{decks[deck].questions.length}</Text>
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
