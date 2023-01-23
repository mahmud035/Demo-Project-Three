import React from 'react';

const SummaryCard = ({ user }) => {
  const {
    name,
    address: { city, street },
    email,
  } = user;

  return (
    <div className="grid grid-cols-5 items-center gap-4 shadow-lg rounded-3xl px-8 py-16 text-sm ">
      <p>{name}</p>

      <div>
        <h3 className="font-bold text-sm pb-1">CONTACT</h3>
        <p>{email}</p>
      </div>

      <div>
        <h3 className="font-bold text-sm pb-1">CITY</h3>
        <p>{city}</p>
      </div>

      <div>
        <h3 className="font-bold text-sm pb-1">STREET</h3>
        <p>{street}</p>
      </div>

      <div>
        <button className="inline-block bg-red-500 text-white px-6 py-2 rounded-3xl">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
