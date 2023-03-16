import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../App.css'


const Nav = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup')

  }
  const auth = localStorage.getItem("user");
  return (
    <div>
      <p className='logo fs-5'>ShopCart</p>
      {auth?
        <ul className='nav-ul'>
          
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/signup' onClick={logout}>Logout({JSON.parse(auth).name})</Link></li>
            </ul>
             :
            <ul className='nav-ul alignRignt'>
            <li><Link to='/signup'>Sign Up</Link></li>
           <li><Link to='/login'>Login</Link></li>
           </ul>
           }
        
    </div>
  )
}

export default Nav