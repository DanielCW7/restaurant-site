import './App.css';
import React from 'react';
import Home from './pages/home.js';
import Search from './pages/search.js';
import { Route, Routes } from 'react-router-dom';

export const UserContext = React.createContext(null)

function App() {
  return (
    <div className="App">
        <UserContext.Provider value={{user: 'defaultUser'}}>
          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/search' element={<Search />}/> 

          </Routes>
        </UserContext.Provider>
    </div>
  );
}
export default App;
