import React from 'react'
import '../Styles/hero.css'
import image1 from '../Assets/heroImg.png'
import image2 from '../Assets/heroFrame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import sparkle from '../Assets/sparkle.png'
import rocket from '../Assets/rocket.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='header'>
                <p className='content1'>Success stories</p>
                <p className='content2'>Every success journey we’ve encountered.</p>
            </div>
            <div className='elements'>
                <div className='images'>
                    <img src={image1} alt='heroImg' className='heroImg' />
                    <div className='picOverlay1'>
                        <div className='content40'>
                            <img src={sparkle} alt='sparkle' className='sparkle' />
                            <p>40%</p>
                        </div>
                        <div className='contentp' >
                            <p>Achieved reduction in project execution time by optimising team availability</p>
                        </div>
                    </div>
                    <div className='picOverlay2'>
                        <div className='content5'>
                            <p className='currency'>$0.5</p>
                            <p className='million'>MILLION</p>
                        </div>
                        <div className='contentp5' >
                            <p>Reduced client expenses by saving on hiring and employee costs.</p>
                        </div>
                    </div>
                    <div className='picOverlay3'>
                        <div className='image3'>
                            <img src={rocket} alt='rocket' className='rocket' />
                        </div>
                        <div className='content10days' >
                            <p className='days'>10 DAYS</p>
                            <p className='staff'>Staff Deployment</p>
                        </div>
                    </div>

                </div>
                <div className='carousel'>
                    <img src={image2} alt='heroFrane' className='heroFrame' />
                    <div className="overlay">
                        <p className='content'>Enhance fortune 50 company’s insights teams research capabilities</p>
                        <div class="dots">
                            <span onclick="changeContent(0)" className='dot' id='active'></span>
                            <span onclick="changeContent(1)" className='dot'></span>
                            <span onclick="changeContent(2)" className='dot'></span>
                        </div>
                        <div>
                            <button className='btn1'>Explore more <FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Hero
