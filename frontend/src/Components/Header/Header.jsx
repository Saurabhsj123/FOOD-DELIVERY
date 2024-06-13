import React from 'react'
import './Header.css'

function Header() {

    const backgroundStyle = {
        backgroundImage: 'url(/header_img.png)',
    }
    
  return (
    <div className="header" style={backgroundStyle} >
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients andculinary expertise. Our mission is to satisfy your cravings and elevate your dining exprience, one delicious meal at a time</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
