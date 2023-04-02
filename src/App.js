import React from 'react';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Routes';

const App = () => {
  
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;