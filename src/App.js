import React from "react";
import { Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/Home";
import Profile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";
import MessageFeed from "./pages/MessageFeed";
import ContactUs from "./pages/ContactUs";
import Registration from "./pages/Registration"




class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
          <Route
            exact
            path="/NewUser"
            component={NewUser}
          />
          <Route
            exact
            path="/MessageFeed"
            component={MessageFeed}
          />
          <Route
          exact
          path="/ContactUs"
          component={ContactUs}
        />
        <Route
          exact
          path="/Registration"
          component={Registration}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
      </div>
    );
  }
}

export default App;
