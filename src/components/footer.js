import React from 'react';
import Footer from './Footer.css';

const Footer = () => {
    return (
        <div className='main-Footer'>
            <div className='container'>
                <div className='row'>
                    {/* column */}
                    <div className='col'>
                        <h4>Exch Stack</h4>
                        <ul className='list'>
                            <li>Analytics with Easy Ways</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Contact Us</h4>
                        <ul className='list'>
                            <li>exchstack33@Analytics.com</li>
                            <li>021 - 222 - 3334</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Our Social Media</h4>
                        <ul className='list'>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;