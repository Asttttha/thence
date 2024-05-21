import React from 'react'
import '../Styles/footer.css'
const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <div className='footer'>
            <div className='copyright'>
                <p><span className="copyrightSymbol">&copy;</span>  Astha {currentDate}. All rights reserved</p>
            </div>
            <div className='links'>
                <a href='/'>Terms & Conditions</a>
                <a href='/'>Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer
