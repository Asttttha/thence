import React, { useEffect, useState } from 'react';
import '../Styles/register.css';
import logo from '../Assets/logo.png';
import close from '../Assets/cross.png';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';
import tick from '../Assets/tick.png'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setValidEmail(verifyEmail(e.target.value));
    };

    const verifyEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isButtonDisabled = !(name && email && validEmail);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isButtonDisabled) {
            console.log('Form submitted!');
            setSubmitted(true);
        }
    };

    const buttonStyle = {
        backgroundColor: isButtonDisabled ? '#c9c9c9' : '#1c1c1c',
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
    };

    useEffect(() => {
        let timer;
        if (submitted && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            navigate('/');
        }
        return () => clearTimeout(timer);
    }, [countdown, navigate, submitted]);

    return (
        <div className='formDiv'>
            <div className='nav'>
                <img src={logo} alt='logo' className='logoImg' />
                {!submitted && (
                    <Link to='/'>
                        <img src={close} alt='close' className='closeImg' />
                    </Link>
                )}
            </div>
            <div className='form'>
                {!submitted ? (
                    <div className='ps'>
                        <p className='small'>Registration Form</p>
                        <p className='large'>
                            Start your success Journey here!
                        </p>
                        <form className='register' onSubmit={handleSubmit}>
                            <input type='text' className='input' value={name}
                                onChange={handleNameChange} placeholder='Enter your name' />
                            <input type='email' className={`input ${validEmail ? '' : 'invalid'}`} value={email} onChange={handleChange} placeholder='Enter your email' />
                            {!validEmail && <p className="errorMessage"><span className='flag'><MdError /></span>
                                Enter a valid email address</p>}
                            <button className='btn' style={buttonStyle} disabled={isButtonDisabled}>
                                Submit
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className='ps'>

                        <img src={tick} alt='tick' className='tick' />
                        <div className='success'>
                            <p className='small'>Success Submitted</p>
                        </div>
                        <p className='large'>
                            Congratulations
                        </p>
                        <p className='message'>
                            Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
                        </p>

                        <div className='redirectingDiv'>
                            <p className='redirecting'>Redirecting you to Homepage in <strong>{countdown} Seconds</strong></p>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Register;
