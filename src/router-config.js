import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
export const routes = [
   {
      'path': '/',
      'component': Home,
      'exact': true
   },
   {
      'path': '/sign-in',
      'component': SignIn
   },
   {
      'path':'*',
      'component': Home
   }
]