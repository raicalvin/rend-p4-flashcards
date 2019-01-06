import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class MainButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          this.props.styles.iosBtn,
          { backgroundColor: this.props.color }
        ]}
      >
        <Text style={this.props.styles.submitBtnText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default MainButton;
