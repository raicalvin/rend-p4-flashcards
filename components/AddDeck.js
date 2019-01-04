import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";

class AddDeck extends Component {
  // Keep track of the input name for the deck
  state = {
    text: ""
  };

  // Dispatch an action to add the new Deck Name to the state
  submitDeckName = () => {
    const { text } = this.state;
    saveDeckTitle(text);
    this.props.dispatch(addDeck(text));
    this.props.navigation.navigate("DeckView");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the new Decks name?</Text>
        <TextInput
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        />
        <Button onPress={this.submitDeckName} title="Submit" />
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
