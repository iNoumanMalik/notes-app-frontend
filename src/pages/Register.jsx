import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const [form,setForm] = useState({email:'', password:''})
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    if (name == 'email'){
      setForm({...form,email:value})
      return;
    }
    setForm({...form,password:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const user = await (await api.post('/auth/register',form)).data
      console.log("created", user)
      navigate('/login')
    }catch(err){
      setError(err.response?.data?.message || 'Registration Failed');
    }
  }

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column', gap:'20px'}}>
          <h1>Create Account</h1>
          {error && <p style={{color:'#ff6b6b', textAlign:'center', padding:'10px', background:'rgba(255,107,107,0.1)', borderRadius:'8px', border:'1px solid rgba(255,107,107,0.3)'}}>{error}</p>}
          <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
            <label style={{color:'#e5e5e5', fontWeight:'500'}} htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
            <label style={{color:'#e5e5e5', fontWeight:'500'}} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={{marginTop:'10px'}}>Create Account</button>
          <div style={{textAlign:'center', marginTop:'20px'}}>
            <span style={{color:'#a0a0a0'}}>Already have an account? </span>
            <a style={{cursor:'pointer', color:'#e5e5e5', textDecoration:'underline'}} onClick={handleLogin}>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
