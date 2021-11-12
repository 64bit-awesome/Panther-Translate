import logo from './logo.svg';

import './App.css';
import './custom.scss';

import Home from './components/Home.js';
import NavigationBar from './components/NavigationBar.js';
import TranslationForm from './components/TranslationForm.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavigationBar/>
        </header>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Translate" component={TranslationForm}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
