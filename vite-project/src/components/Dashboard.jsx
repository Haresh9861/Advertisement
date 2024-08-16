import React, { useState } from 'react';

export const Dashboard = ({ onUpdateBanner }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdateClick = () => {
    onUpdateBanner({
      timeLeft: parseInt(timeLeft, 10),
      link,
      description,
    });
  };

  return (
    <div className="px-2 py-2">
      <div className="mb-4">
        <input
          name="timeLeft"
          type="number"
          value={timeLeft}
          onChange={(e) => setTimeLeft(e.target.value)}
          placeholder="Time (seconds):"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link:"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <textarea
        id="message"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your Content..."
      ></textarea>
      <div className="py-4">
        <button

          className="bg-lime-400 text-white px-4 py-2 rounded-md hover:bg-green-300"
        >
          Update Banner
        </button>
      </div>
    </div>
  );
};
