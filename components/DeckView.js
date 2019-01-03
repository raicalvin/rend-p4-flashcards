import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getInitialDecks } from "../utils/api";

class DeckView extends Component {
  render() {
    const decks = getInitialDecks();
    console.log(decks);

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { name, questions } = decks[deck];
          console.log(name);
          return (
            <View key={deck} style={styles.test}>
              <Text>{name}</Text>
              <Text>{questions.length}</Text>
            </View>
          );
        })}
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
  },
  test: {
    borderWidth: 1
  }
});

export default DeckView;
