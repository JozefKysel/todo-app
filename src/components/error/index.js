import React from 'react';
import './FetchError.css';

const FetchError = (props) => {
  return (
    <div className='error-banner'>
      <h4>Something went wrong...</h4>
      <h3>{props.error.status}</h3>
      <h3>{props.error.message}</h3>
    </div>
  );
}

export default FetchError;
