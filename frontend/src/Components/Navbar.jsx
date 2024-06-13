import React, { useContext, useState } from 'react'
import { assets } from '../Assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { storecontext } from '../Context/Storecontext';

function Navbar({setShowLogin}) {
   
    const [menu, setMenu] = useState("Home");

    const {token, setToken} = useContext(storecontext)

    const navigate = useNavigate()

    const logout = ()=>{
      localStorage.removeItem("token")
      setToken("")
    }


   
  return (
    <div className='navbar' id='navbar'>
        <Link to='/' ><img src={assets.logo} alt="" className='logo'/></Link>
     <ul className="navbar-menu">
        <Link to='/' onClick={()=>{setMenu("Home")}} className={menu==="Home" ? "active": ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("Menu")}} className={menu==="Menu" ? "active": ""} >Menu</a>
        <a href='#app-download' onClick={()=>{setMenu("Mobile-app")}} className={menu==="Mobile-app" ? "active": ""}>Mobile-app</a>
        <a href='#footer' onClick={()=>{setMenu("Contact-us")}} className={menu==="Contact-us" ? "active": ""}>Contact us</a>
     </ul>

     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
        </div>
        
        {!token?
         <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
         : <div className="navbar-profile">
               <img src={assets.profile_icon} alt="" />
               <ul className='navbar-profile-dropdown'>
               <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
               <hr />
               <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p> </li>
         </ul>
        </div>
        }

     </div>
    </div>
  )
}

export default Navbar
