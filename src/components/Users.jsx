import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from './Spinner';
import SummaryCard from './SummaryCard';

const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);

  const fetchUsers = (pageNumber) =>
    fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=3&_page=${pageNumber}`
    ).then((res) => res.json());

  const {
    isLoading,
    isError,
    error,
    data: users = [],
    isFetching,
  } = useQuery({
    queryKey: ['users', pageNumber],
    queryFn: () => fetchUsers(pageNumber),
    keepPreviousData: true,
  });

  console.log(users);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className="px-4 py-5 max-w-screen-xl mx-auto">
      <div className="mx-auto container">
        <div className="grid gap-10 pb-7">
          {users.map((user) => (
            <SummaryCard
              key={user.id}
              user={user}
              classes="shadow-md rounded-3xl"
              btnText="View Details"
            />
          ))}
        </div>

        {/* FIXME: why prev & next button isn't working properly? */}

        {/* Pagination */}
        <div>
          <div className="flex justify-center space-x-1 text-gray-900 font-medium ">
            <button
              onClick={() => {
                if (pageNumber >= 1) {
                  setPageNumber(pageNumber - 1);
                }
              }}
              disabled={pageNumber.toString() <= 1 ? true : false}
              title="previous"
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-100 border-gray-100 ${
                pageNumber === 1 && 'cursor-not-allowed'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={(e) => setPageNumber(parseInt(e.target.innerText))}
              type="button"
              title="Page 1"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md  ${
                pageNumber === 1 && 'bg-red-500 text-white'
              }`}
            >
              1
            </button>
            <button
              onClick={(e) => setPageNumber(parseInt(e.target.innerText))}
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md  ${
                pageNumber === 2 && 'bg-red-500 text-white'
              }`}
              title="Page 2"
            >
              2
            </button>
            <button
              onClick={(e) => setPageNumber(parseInt(e.target.innerText))}
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md  ${
                pageNumber === 3 && 'bg-red-500 text-white'
              }`}
              title="Page 3"
            >
              3
            </button>
            <button
              onClick={(e) =>
                setPageNumber(parseInt(e.target.innerText)).toString()
              }
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md  ${
                pageNumber === 4 && 'bg-red-500 text-white'
              }`}
              title="Page 4"
            >
              4
            </button>
            <button
              onClick={() => {
                if (pageNumber < 4) {
                  setPageNumber(pageNumber + 1);
                }
              }}
              disabled={pageNumber === 4 ? true : false}
              title="next"
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  border-gray-100 ${
                pageNumber === 4 && 'cursor-not-allowed'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
