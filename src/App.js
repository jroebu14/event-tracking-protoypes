import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ExamplePageOne from './pages/ExamplePageOne';
import ExamplePageTwo from './pages/ExamplePageTwo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/example-page-1">
          <ExamplePageOne />
        </Route>
        <Route path="/example-page-2">
          <ExamplePageTwo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
