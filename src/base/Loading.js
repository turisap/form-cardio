import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Loading = () => (
  <div className="loader">
    <ScaleLoader
      sizeUnit={'px'}
      size={75}
      color={'rgba(87,87,87,0.99)'}
      loading={true}
    />
  </div>
);

export default Loading;
