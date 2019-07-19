import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    axios
      .get('localhost:4000/loading', { withCredentials: true })
      .then(function(response) {
        // handle success
        console.log(response);
        setSrc('ldk');
      });
  });

  console.log(src);
  return <div>{src && <img src={src} alt="trololo" />}lskdjflkj</div>;
};

export default SignUpForm;
