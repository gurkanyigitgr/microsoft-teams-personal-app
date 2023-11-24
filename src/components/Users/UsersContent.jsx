import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Badge } from '@fluentui/react-components';

export default function UsersContent() {
  const users = useSelector((state) => state.users.users);

  const markAvailable = (user) => {
    return {
      ...user,
      isAvailable: true,
    };
  };

  const availableUsers = users.slice(0, 4).map(markAvailable);

  const unavailableUsers = users.slice(4).map((user) => ({
    ...user,
    isAvailable: false,
  }));

  const allUsers = [...availableUsers, ...unavailableUsers];

  return (
    <div className='container mx-auto w-full flex flex-col justify-center h-full'>
      <h2 className='text-3xl font-bold mb-4'>Users</h2>
      <div className='grid grid-cols-3 gap-4'>
        {allUsers.map((user) => (
          <div
            key={user.id}
            className={`bg-white p-4 rounded-md shadow-md cursor-pointer ${
              user.isAvailable
                ? 'border border-green-500'
                : 'border border-red-500'
            }`}
          >
            <div className='flex items-center'>
              <Avatar
                style={{
                  borderRadius: '50%',
                }}
              />
              {user.isAvailable ? (
                <Badge
                  size='tiny'
                  className='ml-1 animate-ping'
                  style={{
                    color: 'green',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <Badge
                  size='tiny'
                  className='ml-1'
                  style={{
                    color: 'red',
                    borderRadius: '50%',
                  }}
                />
              )}
              <h1 className='text-xl font-bold ml-2'>{user.name}</h1>
            </div>
            <p>Software Developer</p>
            <p className='text-gray-500 lowercase'>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
