import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from './SummaryCard';

const DetailsCard = () => {
  const user = useLoaderData();
  console.log(user);

  const {
    id,
    name,
    address: { city, street, zipcode, geo, suite },
    company: { name: companyName },
    email,
    phone,
  } = user;

  return (
    <div className="px-4 py-5 max-w-screen-xl mx-auto h-screen ">
      <div className="mx-auto container pb-14 shadow-md bg-white border-2 border-gray-100 rounded-3xl overflow-hidden">
        <SummaryCard user={user} btnText="Hide Details" />

        {/* Details Information */}
        <div className="grid grid-cols-2 w-4/5 mx-auto p-10 shadow-md rounded-3xl text-sm bg-white  border-2 border-gray-100">
          <div className="grid gap-3">
            <div>
              <h3 className="font-bold text-sm pb-1">Contact Person</h3>
              <p>{name}</p>
            </div>
            <div>
              <h3 className="font-bold text-sm pb-1">Company Name</h3>
              <p>{companyName}</p>
            </div>
            <div>
              <h3 className="font-bold text-sm pb-1">Email</h3>
              <p>{email}</p>
            </div>
            <div>
              <h3 className="font-bold text-sm pb-1">Phones</h3>
              <p>{phone}</p>
            </div>
          </div>
          <div className="grid gap-3">
            <div>
              <h3 className="font-bold text-sm pb-1">Address</h3>
              <p>{`${suite}, ${geo.lat}, ${geo.lng}`}</p>
            </div>
            <div>
              <h3 className="font-bold text-sm pb-1">City</h3>
              <p>{city}</p>
            </div>

            <div>
              <h3 className="font-bold text-sm pb-1">Street</h3>
              <p>{street}</p>
            </div>

            <div>
              <h3 className="font-bold text-sm pb-1">Zip Code</h3>
              <p>{zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
