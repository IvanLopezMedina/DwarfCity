import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Brastlewark from './components/Brastlewark/Brastlewark';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/brastlewark" component={Brastlewark} />
      </Switch>
    </div>
  );
}

export default App;
