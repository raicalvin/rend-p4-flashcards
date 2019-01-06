import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a flashcards app! Go ahead and get started by adding a deck.
      </Text>
      <Text style={styles.text}>
        You can add a new card to a deck or start a quiz by tapping on the deck.
      </Text>
      <Text style={styles.subText}>Built with ❤️. By Calvin.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    padding: 12
  },
  subText: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 24,
    padding: 12,
    position: "absolute",
    bottom: 0
  }
});
