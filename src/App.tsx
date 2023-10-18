import React from 'react';
import FilmList from './components/Init';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<FilmList/>} />
        </Routes>
    </div>

  );
}
/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
*/
export default App;
