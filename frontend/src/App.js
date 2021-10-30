import logo from './logo.svg';

import './App.css';
import './custom.scss';

import NavigationBar from './components/NavigationBar.js';
import TranslationForm from './components/TranslationForm.js';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavigationBar/>
        </Router>
      </header>
      <TranslationForm/>
    </div>
  );
}

export default App;
