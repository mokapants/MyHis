"use strict";

import { createStackNavigator } from "react-navigation";

import Home from "MyHis/src/main/Home";
import DataSelect from "MyHis/src/main/DataSelect";
import AddData from "MyHis/src/main/AddData";

const App = createStackNavigator({
  Home: Home,
  DataSelect: DataSelect,
  AddData: AddData
});

export default App;
