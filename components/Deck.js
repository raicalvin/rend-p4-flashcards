import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";

class Deck extends Component {
  render() {
    const deck = this.props.navigation.state.params.entryId;
    const { decks } = this.props;
    console.log("[Deck] The open Deck is: ", deck);
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

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Deck);
