import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  const fileRef = useRef(null);
  return (
    <div className='p-3 max-w-lg mx-auto'>
       <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
       <form className='flex flex-col gap-4'>
        <input type='file' ref = {fileRef} hidden accept='image/*'/>
        <img src = {currentUser.avatar} alt = "Profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' onClick={()=> fileRef.current.click()}/>
        <input type = "text" placeholder='userName' className='border p-3 rounded-lg' id='userName'/>
        <input type = "email" placeholder='emailID' className='border p-3 rounded-lg' id='emailID'/>
        <input type = "password" placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-yellow-950 text-white rounded-lg p-3 hover:opacity-95 uppercase'>update</button>
       </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
