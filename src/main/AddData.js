"use strict";

import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  ScrollView,
  StyleSheet
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import AddButtonMenu from "MyHis/src/component/AddButtonMenu";

export default class AddData extends Component {
  constructor() {
    super();
    this.state = {
      dataTitle: "New Data",
      orAddMode: false,
      addDatas: []
    };
    this.addMode = this.addMode.bind(this);
    this.addTextInput = this.addTextInput.bind(this);
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
      handleThis: this.addMode
    });
  }

  addMode() {
    this.setState({
      orAddMode: !this.state.orAddMode
    });
  }

  addTextInput(title) {
    this.setState(nowState => {
      return {
        addDatas: nowState.addDatas.concat(
          <View key={nowState.addDatas.toString()}>
            <Grid>
              <Col size={1}>
                <Text style={styles.infoText}>{title}</Text>
              </Col>
              <Col size={2}>
                <TextInput
                  style={styles.newTextInput}
                  placeholder={title}
                  onChangeText={text => this.setState({ dataTitle: text })}
                />
              </Col>
            </Grid>
            <View style={{ height: 3 }} />
          </View>
        )
      };
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.center, { flex: 2 }]}>
          <TextInput
            style={styles.titleTextInput}
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
          <ScrollView>{this.state.addDatas}</ScrollView>
        </View>

        {this.state.orAddMode && (
          <AddButtonMenu
            orAddMode={this.state.orAddMode}
            addTextInput={this.addTextInput}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center"
  },
  titleTextInput: {
    width: 290,
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
  },
  infoText: {
    width: "90%",
    top: 1,
    height: 20,
    textAlign: "center"
  },
  newTextInput: {
    width: "90%",
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center"
  }
});
