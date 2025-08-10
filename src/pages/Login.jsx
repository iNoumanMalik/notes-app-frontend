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
   const token = await (await api.post('/auth/login',form)).data
   saveToken(token);
   nav('/'); 
 }catch(err){
   setError(err.response?.data?.message || 'Login Failed');
 }
}


const handleSignUp = ()=>{
  nav('/register')
}

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column', gap:'10px'}}>
      <h1>Login into your Account</h1>
      {error && <p style={{color:'red'}}>{error}</p>}
      <input style={{padding:'6px',borderRadius:'4px'}} placeholder='Enter your email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input style={{padding:'6px',borderRadius:'4px'}} placeholder='Enter your password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button type='submit'>Login</button>
      <span>Not a member?</span> <a style={{cursor:'pointer'}} onClick={handleSignUp}>Sign up</a>
    </form>
  )
}

export default Login
