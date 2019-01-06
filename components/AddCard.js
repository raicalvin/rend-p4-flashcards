import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { white, blue, black } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import { connect } from "react-redux";
import { addCard } from "../actions";
import {
  StyleSheet,
  View,
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
    const { questionText, answerText, correctAnswerText } = this.state;

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
    const deckName = this.props.navigation.state.params.entryId;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter question:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ questionText: text })}
            value={this.state.questionText}
          />
          <Text style={styles.title}>Enter answer:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ answerText: text })}
            value={this.state.answerText}
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
    fontSize: 25,
    color: black,
    textAlign: "center"
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
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    margin: 25,
    borderRadius: 30
  }
});

export default connect()(AddCard);
