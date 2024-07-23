import './App.css';
import Nav from "./components/nav.js"
import Hero from "./components/hero.js"
import Home from './pages/home.js';
import Search from './pages/search.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/search' element={<Search />}/>
      </Routes>
    </div>
  );
}
export default App;
