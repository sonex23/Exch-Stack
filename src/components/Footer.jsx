import React from 'react';

const Footer = () => {
    return (
        <div className='main-Footer'>
            <div className='container'>
                <div className='row'>
                    {/* column */}
                    <div className='col'>
                        <h4>Exch Stack</h4>
                        <span className='list'>
                            Analytics with Easy Ways
                        </span>
                        <br></br>
                    </div>
                    <div className='col'>
                        <h4>Contact Us</h4>
                        <span className='list'>
                            exchstack33@Analytics.com
                            <br></br>
                            021 - 222 - 3334
                            <br></br>
                            Jakarta, Indonesia
                            <br></br>
                        </span>
                    </div>
                    <div className='col'>
                        <h4>Our Social Media</h4>
                        <span className='list'>
                            <img src='img/instagram.png' width='60px'></img>
                            <img src='img/facebook.png' width='55px'></img>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;