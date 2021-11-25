import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/messenger" exact component={Messenger}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
