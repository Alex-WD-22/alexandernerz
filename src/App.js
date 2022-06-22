
import './App.css';

// import { ErrorPage } from './components/ErrorPage';

import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages';


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
