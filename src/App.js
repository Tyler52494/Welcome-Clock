import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import './App.css';
import Welcome from "./components/welcome/Welcome.js"
import Clock from "./components/clock/Clock.js"
import Contact from "./components/contact/Contact"
import Navigation from './components/navigation/Navigation'
import Page404 from './components/page404/Page404'

function App() {
  return (
    <div className = "App">

<Navigation />

      <Switch>
        <Route
          exact 
          path = "/"
          render = {(props) => <Welcome {...props} name='tyler'/>} 
        />

        <Route
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />
            }
          />

        <Route
          exact
          path = "/clock"
          component = {Clock}
        />

        <Route
          exact
          path = "/contact"
          component = {Contact}
        />

        <Route component={Page404} />
      </Switch>
    

    </div>
  );
}

export default App;
