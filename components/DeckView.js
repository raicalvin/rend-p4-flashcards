import React, { Component } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions/index";
import { AppLoading } from "expo";
import { orange, white } from "../utils/colors";
import { getCardsLength } from "../utils/helpers";

// This component displays the list of Decks

class DeckView extends Component {
  state = {
    ready: false
  };

  // getDecks() returns a promise
  componentDidMount() {
    getDecks()
      .then(decks => this.props.receiveAllDecks(decks))
      .then(() => this.setState(() => ({ ready: true })));
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }
    // const decks = getInitialDecks();
    const { decks } = this.props;
    console.log("[DeckView] The props are ", this.props);
    console.log("[DeckView] The decks are ", decks);

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { name, questions } = decks[deck];
          return (
            <View key={deck} style={styles.card}>
              <Text style={styles.cardText}>{name}</Text>
              <Text style={styles.cardText}>
                {questions ? getCardsLength(questions) : null}
              </Text>
              <Button
                onPress={() =>
                  this.props.navigation.navigate("Deck", { entryId: deck })
                }
                title="View"
                style={styles.cardBtn}
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
    alignSelf: "stretch",
    padding: 5
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: orange,
    margin: 8,
    height: 200,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.34)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  cardText: {
    fontSize: 20,
    color: white
  },
  cardBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return {
    receiveAllDecks: decks => dispatch(receiveDecks(decks))
  };
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
