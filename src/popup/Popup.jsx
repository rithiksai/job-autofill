import React from 'react';
import { useState } from 'react';

const Popup = () => {

  const [status, setStatus] = useState('');

  const handleAutofill = () => {
    setStatus('Filling in progress...');
    // Simulate task
    setTimeout(() => setStatus('Form filled successfully ✅'), 1000);
  };

  const handleTrackJob = () => {
    setStatus('Job added to dashboard 📌');
  };

  return (
    <div className="flex flex-col gap-4 p-4 justify-center bg-white min-h-screen">
      <h1 className='text-xl text-gray-800 font-bold text-center'><span className='text-blue-600'>App</span>ly <span className='text-blue-600'>Pi</span>lot</h1>
      <h2 className='text-gray-800 text-center'>ApplyPilot autofills common job application forms for you.</h2>
      
      <button 
        onClick={handleAutofill}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Autofill
      </button>
      <button 
        onClick={handleTrackJob}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Track job
      </button>
      <p className='text-gray-800 text-center text-xs'>🛈 Click when you're on a job application page.</p>

      {/* Status area */}
      <div className="text-center text-sm text-green-700 min-h-[1.5rem]">
        {status}
      </div>

    </div>
  );
};

export default Popup;