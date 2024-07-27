import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

function Dashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await api.get('/properties', config);
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <PropertyForm setProperties={setProperties} />
      <PropertyList properties={properties} setProperties={setProperties} />
    </div>
  );
}

export default Dashboard;