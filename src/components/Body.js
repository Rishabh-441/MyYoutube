import React from 'react'
import Head from './Head'
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom'

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <Head></Head>
      <div className='flex mt-16'>
      {isMenuOpen && (
        <div className="w-2/12">
          <Sidebar />
        </div>
      )}
        <Outlet/>
      </div>
    </>
    
  )
}

export default Body
