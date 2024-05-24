
import React from 'react'
import './Footer.scss'
const Footer = () => {
return (
    <footer>
        <div className="ftop">
            <div className="ftop__left">
                <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, odio.</p>
                <div className="bank">
                <i class="fa-regular fa-credit-card"></i>
                <i class="fa-regular fa-credit-card"></i>
                <i class="fa-regular fa-credit-card"></i>
                <i class="fa-regular fa-credit-card"></i>
                </div>
            </div>
            <div className="ftop__right">
                <ul>
                    <h3>Best Experience</h3>
                    <li>Faq</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Galerry</li>
                </ul>
                <ul>
                    <h3>Company</h3>
                    <li>Faq</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Galerry</li>
                </ul>
                
            </div>
        </div>
        <div className="fbottom">
            <span>Copyright © 2018 JevelinTheme - Theme by Shufflehound</span>
        </div>
    </footer>
)
}

export default Footer
                    