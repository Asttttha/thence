import React from 'react'
import '../Styles/navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' className='logoImg'/>
      </div>
      <div className='btnDiv'>
        <Link to='/register'><button className='getProj'>Get Projects</button></Link>
        <button className='onboard'>Onboard Talent</button>
      </div>
    </div>
  )
}

export default Navbar
