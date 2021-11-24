import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/messenger" exact component={Messenger}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
