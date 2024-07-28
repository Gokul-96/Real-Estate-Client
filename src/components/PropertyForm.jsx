import React, { useState } from 'react';
import api from '../utils/api';

function PropertyForm({ setProperties }) {
    const [formData, setFormData] = useState({
      type: '',
      location: '',
      price: '',
      description: '',
    });
  
    const { type, location, price, description } = formData;
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await api.post('/api/properties/', formData, config);
        setProperties((prevProperties) => [...prevProperties, response.data]);
        setFormData({
          type: '',
          location: '',
          price: '',
          description: '',
        });
      } catch (error) {
        console.error('Error creating property', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
          placeholder="Property Type"
          required
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">Add Property</button>
      </form>
    );
  }
  
  export default PropertyForm;