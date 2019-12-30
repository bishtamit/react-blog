import React from "react";
import "./App.css";
import Logo from "./components/logo.component";
import UserInfo from "./components/userinfo.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }
  render() {
    return (
      <div className="App">
        <header className="header-container">
          <Logo
            className="header-item"
            image="./components/swlogo.jpg"
            url=""
          />
          <UserInfo className="header-item" />
        </header>
        <div className="header"></div>
      </div>
    );
  }
}

export default App;
