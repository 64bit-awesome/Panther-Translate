import logo from './logo.svg';

import './App.css';
import './custom.scss';

import NavigationBar from './components/NavigationBar.js';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavigationBar/>
        </Router>
      </header>
    </div>
  );
}

export default App;
