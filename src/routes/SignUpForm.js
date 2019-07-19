import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    axios.get('localhost:4000/trololo').then(function(response) {
      // handle success
      console.log(response);
      setSrc('ldk');
    });
  });

  return src && <img src={src} alt="trololo" />;
};

export default SignUpPage;
