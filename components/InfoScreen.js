import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>This is a flashcards app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
