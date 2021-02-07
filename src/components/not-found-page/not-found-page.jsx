import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <h1>
        404
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

export default NotFoundPage;
