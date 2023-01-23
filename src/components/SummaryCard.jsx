import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SummaryCard = ({ user, classes, btnText }) => {
  const [toggleText, setToggleText] = useState('View Details');

  const {
    id,
    name,
    address: { city, street },
    email,
  } = user;

  return (
    <div>
      <div
        className={`grid grid-cols-5  items-center gap-4  px-8 py-16 text-sm bg-white ${classes}`}
      >
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

        <div className="justify-self-end">
          <Link to={`/users/${id}`}>
            <button className="inline-block bg-red-500 text-white px-6 py-2  rounded-3xl">
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
