import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import { MyContext } from '../../App';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';


const SignUp = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login');
            })
        }
    }


    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[]);

    const focusInput = (index) => {
        setInputIndex(index);
    }


    return(
        <>
            <section className="loginSection signUpSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={Logo} alt="logo" width="150px"/>
                        <h5 className='font-weight-bold mt-3'>Register a new account</h5>
                    </div>

                    <div className="wrapper mt-2 card border p-3">
                        <form action="" onSubmit={handleSubmit} >
{/* Input Name */}
                            <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><FaUserCircle /></span>
                                <input type="text" name='name' className='form-control' placeholder='Enter your name' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} onChange={handleInput}/>
                                {errors.name && <span className='text-danger'>{errors.name}</span>}
                            </div>
{/* Input Email */}
                            <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><MdEmail /></span>
                                <input type="text" name='email' className='form-control' placeholder='Enter your email' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)} onChange={handleInput}/>
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>
{/* Password */}
                            <div className={`form-group mb-3 position-relative ${inputIndex === 2 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input type={`${isShowPassword===true ? 'text': 'password'}`} name='password' className='form-control' placeholder='Enter your password' onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)} onChange={handleInput}/>
                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                                <span className="toggleShowPassword" onClick={()=>setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword===true ?  <IoMdEyeOff /> : <IoMdEye />
                                    }
                                    
                                </span>
                            </div>
{/* Confirm Password */}
                            {/* <div className={`form-group mb-3 position-relative ${inputIndex === 3 && 'focus'}`}>
                                <span className='icon'><IoShieldCheckmarkSharp /></span>
                                <input type={`${isShowConfirmPassword===true ? 'text': 'password'}`} name='password' className='form-control' placeholder='Confirm your password' onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)} onChange={handleInput}/>

                                <span className="toggleShowPassword" onClick={()=>setIsShowConfirmPassword(!isShowConfirmPassword)}>
                                    {
                                        isShowConfirmPassword===true ?  <IoMdEyeOff /> : <IoMdEye />
                                    }
                                    
                                </span>
                            </div> */}

                            <div className='form-group'>
                                <Button type='submit' className="btn-blue btn-lg w-100 btn-big">Sign Up</Button>
                            </div>
                        </form>

                        <span className='text-center d-block mt-0'>
                            Already have an account?
                            <Link to={'/login'} className='link color ml-2 '>Sign In</Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;