import React from 'react';
import {Alert} from 'react-bootstrap';

const Error = () => {
  return (
    <div>
       <Alert variant='danger'>
      Error! Invalid email or password
    </Alert>
    </div>
  )
}

export default Error
