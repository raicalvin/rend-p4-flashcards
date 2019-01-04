import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { orange, white } from "../utils/colors";
import { addCardToDeck } from "../utils/api";
import { connect } from "react-redux";
import { addCard } from "../actions";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

class AddCard extends Componet {
  state = {
    questionText: "",
    answerText: "",
    correctAnswerText: ""
  };

  submitCard = () => {};

  render() {
    const deckName = this.props.navigation.state.params.entryId;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title} />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ questionText: text })}
            value={this.state.questionText}
          />
          <Text />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ answerText: text })}
            value={this.state.answerText}
          />
          <Text />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ correctAnswerText: text })}
            value={this.state.correctAnswerText}
          />
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => this.submitCard(deckName)}
          >
            <Text style={styles.submitBtnText}>Submit!</Text>
          </TouchableOpacity>
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
    testAlign: "center"
  },
  title: {
    fontSize: 30,
    color: "#333"
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: "#6d67da",
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: "hidden"
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
