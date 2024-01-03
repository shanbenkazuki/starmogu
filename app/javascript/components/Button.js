import React from 'react';

const Button = ({ label, onClick, className }) => {
  return (
    <button
      className={`py-2 px-4 rounded transform transition duration-500 hover:scale-105 ${className}`}
      onClick={onClick}
      style={{ animation: 'popIn 0.5s ease-out' }}
    >
      {label}
    </button>
  );
};

export default Button;
