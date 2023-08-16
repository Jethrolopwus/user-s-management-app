/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {Route, Routes} from "react-router-dom"

function Home() {
 const [users , setUsers] = useState([]);

 useEffect(() => {
   axios.get("http://localhost:3000/users")
   .then((res) => {
    setUsers(res.data);
    // console.log(users);
   })
 }, [users]); 

  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
      <div className=' w-full flex flex-col min-h-[50vh] justify-center items-center'>
        <h1 className='text-black text-3xl font-semi-bold font-montserrat'>
          Home Page
        </h1>
        <table className='w-[95%] text-center overfow -hidden overflow-y-scroll mt-8 border border-black'>
            <thead className='border-b bg-gray-800'>
              <tr>
                <th scope='col' className='text-sm font-medium text-white px-6 py-4'>ID</th>
                <th scope='col' className='text-sm font-medium text-white px-6 py-4'>Name</th>
                <th scope='col' className='text-sm font-medium text-white px-6 py-4'>Email</th>
                <th scope='col' className='text-sm font-medium text-white px-6 py-4'>Phone</th>
                <th scope='col' className='text-sm font-medium text-white px-6 py-4'>Action</th>
              </tr>
          </thead>
          <tbody>
            {users.map((data, index) =>(
            <tr key={index} className='bg-white border-b'>
              <td className='text-lg py-6 px-4 whitespace-nowrap font-medium text-gray-900'>{index + 1}</td>
              <td  className='text-lg py-6 px-4 whitespace-nowrap font-light text-gray-900' >{data.Name}</td>
              {/* {console.log(users)} */}
              <td className='text-lg py-6 px-4 whitespace-nowrap font-light text-gray-900' >{data.email}</td>
              <td className='text-lg py-6 px-4 whitespace-nowrap font-light text-gray-900' >{data.phone}</td>
              <td className='flex justify-center items-center space-x-4 mt-1'>
                <Link to={`/users/${data.id}`} className='py-2 px-6 text-white font-normal bg-black rounded-lg'>View</Link>
                <Link to={`/Users/${data.id}`} className='py-2 px-6 text-white font-normal bg-blue-600 rounded-lg'>Edit</Link>
                <Link to={`/Users/${data.id}`} className='py-2 px-6 text-white font-normal bg-red-600 rounded-lg'>Delete</Link>
              </td>
            
            </tr>   
            ))}
          </tbody>
        </table>
      </div>

    </div>
   
   // // <div className='w-full h-full flex flex-col px-10 py-8'>
    // //   <div className='w-full flex flex-col min-h-[50vh] justify-center items-center'>
    // //     <h1 className='text-black text-3xl font-semibold font-Montserrat'>Home Page</h1>
    // //       <table class="min-w-full text-center text-sm font-light mt-8">
    // //         <thead
    // //           class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
    // //           <tr>
    // //             <th scope="col" className=" px-6 py-4">ID</th>
    // //             <th scope="col" className=" px-6 py-4">Name</th>
    // //             <th scope="col" className=" px-6 py-4">Email</th>
    // //             <th scope="col" className=" px-6 py-4">Password</th>
    // //             <th scope="col" className=" px-6 py-4">Action</th>
    // //           </tr>
    // //         </thead>
    // //         <tbody> 
    // //         {users.map((users, index) =>{
    // //           <tr key={index} class="border-b dark:border-neutral-500">
    // //             <td className=" text-lg whitespace-nowrap  px-6 py-4 font-medium">1</td>
    // //             <td className=" text-lg whitespace-nowrap  px-6 py-4">mark</td>
    // //             <td className=" text-lg whitespace-nowrap  px-6 py-4">Otto</td>
    // //             <td className=" text-lg whitespace-nowrap  px-6 py-4">@mdo</td>
    // //             <td className=" flex space-x-4 justify-center  items-center whitespace-nowrap  px-6 py-4">
    // //               <button className='px-6 py-2 text-white bg-slate-600 font-normal rounded-lg'>View</button>
    // //               <button className='px-6 py-2 text-white bg-blue-500 font-normal rounded-lg'>Edit</button>
    // //               <button className='px-6 py-2 text-white bg-red-600 font-normal rounded-lg'>Delete</button>
    // //             </td>
    // //           </tr>
    // //         })}
    // //           </tbody>
    // //       </table>
    // //   </div>   
    // // </div>

   
  )
}

export default Home
