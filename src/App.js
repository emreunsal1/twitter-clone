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
          <Layout>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/profile/:username">
              <Profile />
            </Route>
            <Route path="/main">
              <MainPage />
            </Route>
          </Layout>
        </Context>
      </Router>
    </div>
  );
}

export default App;
