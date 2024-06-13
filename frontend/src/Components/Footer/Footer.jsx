import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, veritatis? ipsum dolor sit, amet consectetur adipisicing elit. Quae pariatur cumque voluptatum ipsam? Natus corporis suscipit at magni nostrum nulla?</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
            <ul>
                <li>91-9325861322</li>
                <li>contact@tomato.com</li>  
            </ul>
        <a href="#navbar"><button className='top'>Go to Top</button></a>
        </div>
      </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
