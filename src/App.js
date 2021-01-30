import React from 'react';

// Components
import { Switch, Route } from 'react-router-dom';
import AppMainHeader from './components/main-header/main-header.comp';
import AppUpperHeader from './components/upper-header/upper-header.comp';

// Pages
import PageNotFound from './pages/PageNotFound';
import Homepage from './pages/Homepage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <AppUpperHeader />
      <AppMainHeader />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/test" component={TestPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
