import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import { MyContext } from '../../App';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';


const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        console.log(event);
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    axios.defaults.withCredentials = true;

    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then( res => {
            if(res.data.valid){
                navigate('/dashboard')
            } else {
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    },[])


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log(event);
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data.Login){
                    navigate('/dashboard');
                } else {
                    alert("No record existed");
                }
                console.log(res);
            })
            .catch(err => console.log(err));
        }
    }
 

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[]);

    const focusInput = (index) => {
        setInputIndex(index);
    }


    return(
        <>
            <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={Logo} alt="logo" width="150px"/>
                        <h5 className='font-weight-bold mt-3'>Login to Devansh Technology</h5>
                    </div>

                    <div className="wrapper mt-3 card border p-3">
                        <form action="" onSubmit={handleSubmit}>

                            <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><MdEmail /></span>
                                <input type="text" name="email" className='form-control' placeholder='Enter your email' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} onChange={handleInput}/>
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>

                            <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>

                                <input type={`${isShowPassword===true ? 'text': 'password'}`} name="password" className='form-control' placeholder='Enter your password' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)} onChange={handleInput}/>

                                {errors.password && <span className='text-danger'>{errors.password}</span>}

                                <span className="toggleShowPassword" onClick={()=>setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword===true ?  <IoMdEyeOff /> : <IoMdEye />
                                    }
                                    
                                </span>
                            </div>

                            <div className='form-group'>
                                <Button type='submit' className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
                            </div>
                            
                            <div className='form-group text-center'>
                                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>
                            </div>
                        </form>
                    </div>

                    <div className='card'>
                    <span className='text-center'>
                            Don't have an account?
                            <Link to={'/signUp'} className='link color ml-2 '>Register</Link>
                        </span>
                    </div>

                    
                        
                    
                </div>
            </section>
        </>
    )
}
export default Login;