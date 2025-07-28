import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setformData] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setloading(true);
      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        setloading(false);
        seterror(data.message);
        return;
      }
      setloading(false);
      seterror(null);
      navigate('/sign-in');
      console.log(data);
    }catch(error){
      setloading(false);
      seterror(error.message);
    }

  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-centre font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="userName"
          onChange={handleChange}      
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="emailID"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button disabled = {loading} className="bg-yellow-950 text-white p-3 rounded-lg uppercase hover:opacity-95">
          {loading ? 'Loading' : 'Sign Up'}
        </button>
      </form>
      <div className="flex flex-row gap-4 my-4">
        <p className="my-3">Have an account?</p>
        <Link to="/sign-in">
          <button className="bg-yellow-950 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Sign In
          </button>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
}
