import React from 'react';
import LoginPage from './components/LoginPage';
// import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LogoutPage from './components/LogoutPage';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Scorecard from './components/Scorecard';
import MyGaugeChart from './components/MyGaugeChart';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route exact path='/' element={<LoginPage/>}></Route>
          <Route exact path='/logout' element={<LogoutPage/>}></Route>
          <Route exact path='/dashboard1' element={<Dashboard1/>}></Route>
          <Route exact path='/dashboard2' element={<Dashboard2/>}></Route>
          <Route exact path='/scorecard' element={<Scorecard/>}></Route>
          <Route exact path='/speedometer' element={<MyGaugeChart/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;

 
