"use strict";

import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from "react-native";

import AddButtonMenu from "MyHis/src/component/AddButtonMenu";

export default class AddData extends Component {
  constructor() {
    super();
    this.state = { dataTitle: "New Data", orAddMode: false };
    this.refreshHandler = this.refreshHandler.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Add Data",
      headerRight: <Button title=" + " onPress={() => params.handleThis()} />
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleThis: this.refreshHandler
    });
  }

  refreshHandler() {
    this.setState({ orAddMode: !this.state.orAddMode });
  }

  render() {
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
            onPress={() => Alert.alert(String(this.state.orAddMode))}
          />
        </View>

        <View style={styles.splitLine} />

        <View style={{ flex: 8 }}>
          <ScrollView>
            <Text style={{ fontSize: 300 }}>
              {String(this.state.orAddMode)}
            </Text>
          </ScrollView>
        </View>
        <AddButtonMenu orAddMode={this.state.orAddMode} />
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
