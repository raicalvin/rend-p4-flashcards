import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions/index";
import { AppLoading } from "expo";

class DeckView extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    getDecks()
      .then(decks => this.props.receiveAllDecks(decks))
      .then(() => this.setState(() => ({ ready: true })));
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }
    const decks = getInitialDecks();
    // const { decks } = this.props;
    console.log("The props are ", this.props);
    console.log("The Decks are ", decks);

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { name, questions } = decks[deck];
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

function mapDispatchToProps(dispatch) {
  return {
    receiveAllDecks: decks => dispatch(receiveDecks(decks))
  };
}

function mapStateToProps(decks) {
  console.log("Hellooooo: ", decks);
  console.log("The stats is ", this.state);
  return decks;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
