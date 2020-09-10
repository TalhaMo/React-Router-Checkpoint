import React from 'react'
import { Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <ul className='nav'>
           <li className='li-nav'> 
               <Link to='/' className='li-link' id='active'>Home</Link> 
           </li>
           <li className='li-nav'>
               <Link to='/category' className='li-link'>Category</Link>
           </li>
           <li className='li-nav'>
               <Link to='/products' className='li-link'>Products</Link>
           </li>
           <li className='li-nav'>
               <Link to='/admin' className='li-link'>Admin</Link>
           </li>
        </ul>
    )
}

export default NavBar
