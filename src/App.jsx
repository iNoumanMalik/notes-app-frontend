import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setToken } from './api';
import Login from './pages/Login';
import Register from './pages/Register';
import Notes from './pages/Notes';


function App() {

  const [token,setTok] = useState(localStorage.getItem('token'))

  useEffect(() => {
    // Clear invalid token if it exists
    if (token === '[object Object]') {
      localStorage.removeItem('token');
      setTok(null);
      return;
    }
    if (token) setToken(token);
  }, [token]);

  function saveToken(t){
    console.log('Saving token:', t);
    console.log('Token type:', typeof t);
    if (typeof t !== 'string') {
      console.error('Token is not a string:', t);
      return;
    }
    localStorage.setItem('token',t);
    setTok(t);
    setToken(t);
    console.log('Token saved to localStorage:', localStorage.getItem('token'));
  }
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
