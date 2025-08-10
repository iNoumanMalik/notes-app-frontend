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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightcyan",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          boxShadow: "10px 10px 10px 0px",
          padding: "100px",
          borderRadius: "10px",
          backgroundColor: "lightblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Register Account</h1>
        {error && <p style={{color:'red'}}>{error}</p>}
        <form
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
            htmlFor="email"
          >
            Email:
            <input
              style={{ padding: "6px", borderRadius: "4px" }}
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
            htmlFor="password"
          >
            Password:
            <input
              style={{ padding: "6px", borderRadius: "4px" }}
              name="password"
              placeholder="Strong Password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Register</button>
          <p>
            Already have an account{" "}
            <a onClick={handleLogin} style={{ cursor: "pointer" }}>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
