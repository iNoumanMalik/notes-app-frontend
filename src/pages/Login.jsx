import React, { useState } from 'react'
import api from '../api';
import { useNavigate } from 'react-router-dom';

function Login({saveToken}) {
    const [form,setForm] = useState({email:"",password:""})
    const [error,setError] = useState('');

    const nav = useNavigate();

async function handleSubmit(e){
  console.log(form)
 e.preventDefault();
 try{
   const response = await api.post('/auth/login',form);
   console.log('Login response:', response.data);
   console.log('Token to save:', response.data.token);
   saveToken(response.data.token);
   nav('/'); 
 }catch(err){
   setError(err.response?.data?.message || 'Login Failed');
 }
}


const handleSignUp = ()=>{
  nav('/register')
}

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column', gap:'20px'}}>
          <h1>Welcome Back!</h1>
          {error && <p style={{color:'#ff6b6b', textAlign:'center', padding:'10px', background:'rgba(255,107,107,0.1)', borderRadius:'8px', border:'1px solid rgba(255,107,107,0.3)'}}>{error}</p>}
          <input 
            type="email" 
            placeholder='Enter your email' 
            value={form.email} 
            onChange={(e)=>setForm({...form,email:e.target.value})}
            required
          />
          <input 
            type="password" 
            placeholder='Enter your password' 
            value={form.password} 
            onChange={(e)=>setForm({...form,password:e.target.value})}
            required
          />
          <button type='submit' style={{marginTop:'10px'}}>Login</button>
          <div style={{textAlign:'center', marginTop:'20px'}}>
            <span style={{color:'#a0a0a0'}}>Not a member? </span>
            <a style={{cursor:'pointer', color:'#e5e5e5', textDecoration:'underline'}} onClick={handleSignUp}>Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
