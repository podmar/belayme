// import React from 'react'
import { getToken } from './tokenHelpers'

function useIsAuthenticated() {
    const isAuthenticated = getToken() ? true : false;
  return isAuthenticated
}

export default useIsAuthenticated;