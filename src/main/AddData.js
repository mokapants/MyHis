"use strict";

import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default class AddData extends Component {
  constructor() {
    super();
    this.state = {
      dataName: "New Data"
    };
  }

  static navigationOptions = {
    title: "Add Data"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.center}>
          <View style={{ height: 15 }} />
          <TextInput
            style={styles.textInput}
            placeholder="Data Title"
            onChangeText={text => this.setState({ dataName: text })}
          />
          <View style={{ height: 5 }} />
          <Button
            title={this.state.dataName + " を追加"}
            onPress={() => navigate("AddData")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center"
  },
  textInput: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center"
  }
});
