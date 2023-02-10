import { Navigation } from 'components/Navigation/Navigation';
import { Contacts } from 'pages/Contacts/Contacts';

import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsLoggedIn } from 'redux/selectors';
import { routes } from 'service/routes';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Navigation />

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path={routes.HOME}>
              <Route path={routes.CONTACTS} element={<Contacts />} />
              <Route path="*" element={<Navigate to={routes.CONTACTS} />} />
            </Route>
          </>
        ) : (
          <>
            <Route path={routes.REGISTER} element={<Register />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path="*" element={<Navigate to={routes.LOGIN} />} />
          </>
        )}
      </Routes>
    </>
  );
};

/* const PublicRoute = () => {
    return isLoggedIn ? <Navigate to={routes.CONTACTS} /> : <Outlet />;
  };
  const PrivateRoute = () => {
    return !isLoggedIn ? <Navigate to={routes.LOGIN} /> : <Outlet />;
  }; */

/* <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path={routes.REGISTER} element={<Register />} />
            <Route path={routes.LOGIN} element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={routes.CONTACTS} element={<Contacts />} />
          </Route>

          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes> */
