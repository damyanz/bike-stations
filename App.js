import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./components/Main";
import Loading from "./components/Loading";
import Register from "./components/Register";
import Login from "./components/Login";
import Stations from "./components/Stations";
import OneStation from "./components/OneStation";
import Mapa from "./components/Mapa";

const Navigator = createStackNavigator({
  main: { screen: Main },
  loading: { screen: Loading },
  register: { screen: Register },
  login: { screen: Login },
  stations: { screen: Stations },
  onestation: { screen: OneStation },
  mapa: { screen: Mapa }
});

const App = createAppContainer(Navigator);

//s
export default App;
