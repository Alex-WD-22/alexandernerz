
import './App.css';
import About from './components/About';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/*" element={ <ErrorPage /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
