import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions/index";

class DeckView extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    getDecks()
      .then(decks => this.props.dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ ready: true })));
  }

  render() {
    const decks = getInitialDecks();
    console.log("The props are ", this.props);

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { name, questions } = decks[deck];
          console.log(name);
          return (
            <View key={deck} style={styles.test}>
              <Text>{name}</Text>
              <Text>{questions.length}</Text>
              <Button
                onPress={() =>
                  this.props.navigation.navigate("Deck", { entryId: deck })
                }
                title="View"
              />
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

// function mapDispatchToProps(dispatch) {
//   return {
//     receiveAllDecks: decks => dispatch(receiveDecks)
//   };
// }

function mapStateToProps(decks) {
  return decks;
}

export default connect(mapStateToProps)(DeckView);
