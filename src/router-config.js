import React from 'react';
import Home from './pages/home/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
      'path': '/sign-up',
      'component': SignUp
   },
   {
      'path':'*',
      'component': Home
   }
]