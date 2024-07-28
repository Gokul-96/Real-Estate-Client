import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';


function Register() {
    const[formData,setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;
    const navigate = useNavigate(); 



    //...formData ensures all other fields unchanged
        const handleChange = (e) => {
        //e.g:  setFormData({
        //     ...formData,
        //     username: 'Gokul'
        //   });
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await api.post('/api/agentRoutes/register', formData);
          alert('Registration successful');
          navigate('/login');
      } catch (error) {
          alert('Registration failed');
      }
  };
  return (
    <div>
        <h2>Register</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={name} onChange={handleChange} placeholder="Name" required/>
                <input type='email' name='email' value={email} onChange={handleChange} placeholder="Email" required/>
                <input type='password' name='password' value={password} onChange={handleChange} placeholder="Password" required/>
                <button type="submit">Register</button>
            </form>
        </div>
     </div>
  )
}

export default Register