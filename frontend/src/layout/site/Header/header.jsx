
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
   
return (
    <nav>
        <div className="nleft">
            <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" />
        </div>
        <div className="ncenter">
        <i class="fa-solid fa-bars"></i>
            <ul>
                <li><Link to={''}>HOME</Link></li>
                <li><Link to={'wish'}>Wish List</Link></li>
                <li>Galerry</li>
                <li>Features</li>
                <li>Shop</li>
            </ul>
        </div>
        <div className="nright">
            <Link to={'basket'}><i class="fa-solid fa-cart-shopping"></i></Link>
            <span>Buy Now</span>
        </div>
    </nav>
)
}

export default Header
                            