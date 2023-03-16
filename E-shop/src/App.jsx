import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  Header  from './components/Header';
import Home from './components/Home';
import SignUpExpert from './components/SignUp/SignUpExpert';
import SignUpUser from './components/SignUp/SignUpUser';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Inscription-User' element={<SignUpUser />}/>
        <Route path='/Inscription-Expert' element={<SignUpExpert />}/>
      </Routes>
    </div>
  )
}

export default App;
