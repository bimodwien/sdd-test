import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  

  return (
    <>
      <div className='sidebar-utama'>
        <Link className='text-decoration' to={"/"}>Home</Link>
        <Link className='text-decoration' to={"/add"}>Add todos</Link>
      </div>
    </>
  )
}

export default Sidebar