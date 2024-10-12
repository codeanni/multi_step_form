import React from 'react';

const Confirmation = ({ data = {} }) => {

  const { name = '', email = '', number = '', address1 = '', address2 = '', city = '', state = '', zipCode = '' } = data;

  return (
    <div>
      <h4 className='text-center text-success'>Confirmation Page</h4>
      <div className='mb-3'>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {number}</p>
        <p><strong>Address Line 1:</strong> {address1}</p>
        <p><strong>Address Line 2:</strong> {address2}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>State:</strong> {state}</p>
        <p><strong>Zip Code:</strong> {zipCode}</p>
      </div>
    </div>
  );
};

export default Confirmation;