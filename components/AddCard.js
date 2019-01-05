import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { orange, white, blue } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import { connect } from "react-redux";
import { addCard } from "../actions";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Text
} from "react-native";
import SubmitButton from "./SubmitButton";

class AddCard extends Component {
  state = {
    questionText: "",
    answerText: "",
    correctAnswerText: ""
  };

  submitCard = deck => {
    console.log("This card will be added to this deck: ", deck);
    const { questionText, answerText, correctAnswerText } = this.state;
    /*
        We need to do four things:
        1. Dispatch an action to add data to reducer
        2. Add card to database
        3. Set state back to empty strings
        4. Navigate back
      */
    this.props.dispatch(
      addCard({
        question: questionText,
        answer: answerText,
        correctAnswer: correctAnswerText,
        deck
      })
    );
    addCardToDeck(deck, { questionText, answerText, correctAnswerText });
    this.setState({ questionText: "", answerText: "", correctAnswerText: "" });
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));
  };

  render() {
    console.log(this.state);
    const deckName = this.props.navigation.state.params.entryId;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Question:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ questionText: text })}
            value={this.state.questionText}
          />
          <Text style={styles.title}>Answer:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ answerText: text })}
            value={this.state.answerText}
          />
          <Text style={styles.title}>True or False:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ correctAnswerText: text })}
            value={this.state.correctAnswerText}
          />
          <SubmitButton
            style={styles.submitButton}
            onPress={() => this.submitCard(deckName)}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    color: "#333"
  },
  submitButton: {
    padding: 10,
    backgroundColor: blue,
    borderRadius: 22.5,
    overflow: "hidden",
    height: 45,
    width: 200,
    textAlign: "center",
    fontSize: 22,
    color: white
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 20,
    borderRadius: 7
  }
});

export default connect()(AddCard);
