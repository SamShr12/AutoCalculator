import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <header className='navheader'>
        <div className='logo-nav'>
          <Link to="/">
            Shop
          </Link>
        </div>

        <div className='active-nvabar'>
          <Link to="/useradmin/create" className='linkofthenav'>Create</Link>
          <button className='linkofthenav'>Connect Wallet</button>
        </div>
      </header>
    </nav>  
    )
}

export default Nav