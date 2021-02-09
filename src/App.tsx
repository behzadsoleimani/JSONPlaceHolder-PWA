import React from "react";
import "./App.css";
import { AppProvider } from "./Context/state";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/home";
import Posts from "./Components/posts-user";
import Comments from "./Components/comments";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="App-header">
          <Router>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/posts/:id" component={Posts} />
              <Route path="/comments/:id" component={Comments} />
            </Switch>
          </Router>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
