import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const SignUpForm = () => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    axios.get('loading').then(function(response) {
      console.log(response);
      setSrc('ldk');
    });
  });

  return (
    <div>
      <img src={src} alt="trololo" />
    </div>
  );
};

export default SignUpForm;
