import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SummaryCard from './SummaryCard';

const Users = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const {
    isLoading,
    isError,
    data: users = [],
    errors,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  console.log(users);

  return (
    <div className="px-4 py-5 max-w-screen-xl mx-auto">
      <div className="mx-auto container">
        <div className="grid gap-10">
          {users.map((user) => (
            <SummaryCard
              key={user.id}
              user={user}
              classes="shadow-md rounded-3xl"
              btnText="View Details"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
