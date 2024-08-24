"use client"
import React, { useState } from 'react';

const ASLConverter = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  const renderASL = () => {
    return text.split('').map((char, index) => {
      if (/[A-Z]/.test(char)) {
        return (
          <img
            key={index}
            src={`/asl-images/${char}.png`}
            alt={`ASL ${char}`}
            className="w-12 h-12 m-1"
          />
        );
      }
      return <span key={index} className="w-12 h-12 m-1"></span>;
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here"
        className="p-2 border-2 border-gray-300 rounded-md w-full mb-4 text-black"
      />
      <div className="flex flex-wrap justify-center">{renderASL()}</div>
    </div>
  );
};

export default ASLConverter;
