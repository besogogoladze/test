import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <NavLink exact to="/">
            <h1><span className='text-success fs-1'>Ho</span>me</h1>
        </NavLink>
        <NavLink to="/ProductPages">
            <h1><span className='text-success fs-1'>ProductPages</span></h1>
        </NavLink>
    </div>
  )
}

export default Header