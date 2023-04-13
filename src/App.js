import React from 'react';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './Folder Structure/Components/Routes/Routes';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  
  return (
    <div className='app'>
      <RouterProvider router={router} />
      <ScrollToTop smooth />
    </div>
  );
};

export default App;