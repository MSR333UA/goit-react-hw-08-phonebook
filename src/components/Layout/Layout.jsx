import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <Oval height="100" width="100" color="grey" ariaLabel="loading" />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
