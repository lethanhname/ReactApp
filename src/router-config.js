import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

const PUBLIC_URL = process.env.PUBLIC_URL;
export const routes = [
   {
      'path': PUBLIC_URL,
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