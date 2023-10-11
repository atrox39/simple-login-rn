import React from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../service/api.service';

/**
 * @typedef {object} LoginDto
 * @property {string} username
 * @property {string} password
 *
 * @typedef {object} RegisterDto
 * @property {string} name
 * @property {string} email
 * @property {string} username
 * @property {string} password
*/

const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [authentication, setAuthentication] = React.useState({
    auth: false,
    jwt: null,
  });

  const value = React.useMemo(() => [
    authentication, setAuthentication,
  ], [authentication, setAuthentication]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const [success, setSuccess] = React.useState(false);
  const [authentication, setAuthentication] = React.useContext(UserContext);

  /** @param {LoginDto} body */
  const login = async (body) => {
    const res = await API.post('/auth/login', body);
    if (res.status === 200) {
      setAuthentication({
        auth: true,
        jwt: res.data.token,
      });
      await AsyncStorage.setItem('token', res.data.token);
    }
  };

  const register = () => {
    setAuthentication({
      auth: true,
      jwt: 'token',
    });
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setAuthentication({
      auth: false,
      jwt: null,
    });
  };

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token && !authentication.auth && !success) {
      setAuthentication({
        auth: true,
        jwt: token,
      });
    }
    setSuccess(true);
  };

  return {
    login,
    register,
    logout,
    isAuth: authentication.auth,
    token: authentication.jwt,
    checkAuth,
    success,
  };
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
