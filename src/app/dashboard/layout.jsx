import React from 'react';

function Layout({ children, notification, revenue, users, how }) {
  const isLoggedIn = 1; 
  return   isLoggedIn === 1 ? (
    <div>
      how
    </div>
  ): (
      <div className='flex gap-5 flex-col items-center w-screen h-auto'>
        {children}
        {notification}
        {revenue}
        {users}
      </div>
    ) 
  
}

export default Layout;
