import React from 'react';
import axios from '../src/utils/api';

function PropertyList({ properties, setProperties }) {
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.delete(`/properties/${id}`, config);
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property._id !== id)
      );
    } catch (error) {
      console.error('Error deleting property', error);
    }
  };

  return (
    <ul>
      {properties.map((property) => (
        <li key={property._id}>
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>${property.price}</p>
          <p>{property.description}</p>
          <p>Status: {property.status}</p>
          <button onClick={() => handleDelete(property._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PropertyList;