import './Spinner.scss';
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="loading">
      <svg className="spinner" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
    </div>
  );
};

export default Spinner;
