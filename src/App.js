import React from 'react';
import CameraComponent from './components/camera';
import NotFoundPage from './components/notFoundPage';
import NavBar from './components/navBar'
import Home from './components/home';
import Instructions from './components/Instructions'
import LineItems from './components/LineItems'


import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <div className="heading">
        <div className="decor">.</div>
        <h1>Headshot Application</h1>
        <NavBar/>
      </div>
      <br />
      <br />
      <Switch>
        <Route path="/" exact component={CameraComponent} />
        <Route path="/instructions" exact component={Home} />
        <Route path="/instructionsDev" exact component={LineItems} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Instructions />
    </BrowserRouter>
  );
}
export default App;
