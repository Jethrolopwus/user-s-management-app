/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
    .then((res) => {
     setUser(res.data);
     // console.log(users);
    })
  }, []); 

  const {id} = useParams()

  return (
    <div className='w-full h-full flex font-bold justify-center items-center'>
    {user &&  (
      <>
      <div className='w-[700px] h-[200px] flex justify-center items-center border px-6 py-4 border-black mt-16'>

        <div className='w-5/12 flex flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Name</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Phone</h2>

        </div>
        <div className='w-7/12 flex flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.Name}</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.email}</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.phone}</h2>

        </div>

      </div>

      </>
    )}
    </div>
   
  );
}

export default User;
