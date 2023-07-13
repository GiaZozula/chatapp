import React from "react";
import firebase from "./firebase";
import { getDatabase } from "firebase/database";
import Chat from "../src/components/Chat";
import SignIn from "../src/components/SignIn";
import { Router, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {

  const database = getDatabase(firebase);

  return (
    <div className="App">
      {/* <Router>
        <Route path="/chat" component={Chat} />
        <Link to="/chat">Chat</Link>
      </Router> */}
      <SignIn />
    </div>
  );
};

export default App;
