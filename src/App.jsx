import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { setToken } from './api';
import Login from './pages/Login';
import Register from './pages/Register';
import Notes from './pages/Notes';


function App() {

  const [token,setTok] = useState(localStorage.getItem('token'))

  function saveToken(t){
    localStorage.setItem('token',t);
    setTok(t);
    setToken(t);
  }

  if (token) setToken(token);
  return (
    <div style={{boxSizing:'border-box', }}>
    <Routes>
      <Route path='/' element={token? <Notes/> : <Navigate to="/login"/>}/>
      <Route path='/login' element={<Login saveToken={saveToken}/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>

    </div>
  )
}

export default App
