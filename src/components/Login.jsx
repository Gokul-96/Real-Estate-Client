import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  
  const navigate = useNavigate(); 

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('/api/agentRoutes/login', formData);

      // If request is successful store the token and navigate to the dashboard
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>Login
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;