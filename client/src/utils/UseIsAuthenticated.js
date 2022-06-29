import React from 'react'
import { getToken } from './tokenHelpers'

function UseIsAuthenticated() {
    const isAuthenticated = getToken() ? true : false;
  return isAuthenticated
}

export default UseIsAuthenticated