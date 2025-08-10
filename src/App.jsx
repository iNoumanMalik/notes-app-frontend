import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setToken } from './api';
import Login from './pages/Login';
import Register from './pages/Register';
import Notes from './pages/Notes';


function App() {
  const [token,setTok] = useState(() => {
    const storedToken = localStorage.getItem('token');
    // Clear invalid token immediately
    if (storedToken === '[object Object]') {
      localStorage.removeItem('token');
      return null;
    }
    // Set token in axios headers immediately if valid token exists
    if (storedToken) {
      setToken(storedToken);
    }
    return storedToken;
  });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Mark as initialized after first render
    setIsInitialized(true);
  }, []);

  function saveToken(t){
    console.log('Saving token:', t);
    console.log('Token type:', typeof t);
    if (typeof t !== 'string') {
      console.error('Token is not a string:', t);
      return;
    }
    localStorage.setItem('token',t);
    setTok(t);
    setToken(t); // Set in axios headers
    console.log('Token saved to localStorage:', localStorage.getItem('token'));
  }
  // Show loading state until app is initialized
  if (!isInitialized) {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', color:'#e5e5e5'}}>
        <div>Loading...</div>
      </div>
    );
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
