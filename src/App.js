import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Context from "./context";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";

import "./style/main.scss";

function App() {
  return (
    <div className="index-wrapper">
      <Router>
        <Context>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profile/:username">
            <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route path="/main">
            <Layout>
              <MainPage />
            </Layout>
          </Route>
        </Context>
      </Router>
    </div>
  );
}

export default App;
