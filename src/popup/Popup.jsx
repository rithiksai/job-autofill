import React from 'react';

const Popup = () => {
  const handleAutofill = () => {
    console.log('Autofill button clicked');
    // We'll implement the actual functionality later
  };

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Job Application Filler</h1>
      
      <button 
        onClick={handleAutofill}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Autofill
      </button>
    </div>
  );
};

export default Popup;