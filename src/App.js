"use strict";

import { createStackNavigator } from "react-navigation";

import Home from "./main/Home";
import DataSelect from "./main/DataSelect";
import AddData from "./main/AddData";

const App = createStackNavigator({
  Home: Home,
  DataSelect: DataSelect,
  AddData: AddData
});

export default App;
