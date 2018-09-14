"use strict";

import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet
} from "react-native";

export default class AddData extends Component {
  constructor() {
    super();
    this.state = {
      dataTitle: "New Data"
    };
  }

  static navigationOptions = {
    title: "Add Data",
    headerRight: (
      <Button title="+ " onPress={() => alert("This is a button!")} />
    )
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.center, { flex: 2 }]}>
          <TextInput
            style={styles.textInput}
            placeholder="Data Title"
            onChangeText={text => this.setState({ dataTitle: text })}
          />
          <Button
            title={this.state.dataTitle + " を追加"}
            onPress={() => navigate("AddData")}
          />
        </View>

        <View style={styles.splitLine} />

        <View style={{ flex: 8 }}>
          <ScrollView>
            <Text style={{ fontSize: 300 }}>aiueo</Text>
          </ScrollView>
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
    margin: 15,
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center"
  },
  splitLine: {
    margin: 10,
    borderColor: "silver",
    borderWidth: StyleSheet.hairlineWidth
  }
});
