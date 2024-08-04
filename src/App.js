import './App.css';
import React from 'react';
import Home from './pages/home.js';
import Search from './pages/search.js';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/section/nav.js';
import Footer from './components/section/footer.js';

export const UserContext = React.createContext(null)

function App() {
  return (
    <div className="App">
        <UserContext.Provider value={{user: 'defaultUser'}}>
          <Nav />
          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/search' element={<Search />}/> 

          </Routes>
          <Footer />
        </UserContext.Provider>
    </div>
  );
}
export default App;
