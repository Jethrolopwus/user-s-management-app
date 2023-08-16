/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-700 flex items-center px-10 py-2 justify-between'>
     <Link to="/"> <h1 className='text-white text-3xl font-semibold font-Montserrat'>USERS MANAGEMENT SYSTEM</h1> </Link>

      <Link to="add-user" className="w-48 text-blue-400 bg-white font-semi-bold text-xl h-12 rounded-lg  ">Add User</Link>
    </div>
  )
}

export default Navbar
