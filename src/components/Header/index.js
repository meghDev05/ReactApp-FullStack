import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md"; 
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";    
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { useEffect } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalfSharp } from "react-icons/io5";
import Divider from '@mui/material/Divider';
import { MyContext } from '../../App';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;
    
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then( res => {
            if(res.data.valid){
                setName(res.data.name);
            } else {
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    },[])


    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationDrop, setisOpenNotificationDrop] = useState(false);

    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationDrop);

    const context = useContext(MyContext);

    const handleOpenMyAccDr = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDr = () => {
      setAnchorEl(null);
    };

    const handleOpenNotificationsDrop = () => {
        setisOpenNotificationDrop(true)
    }

    const handleCloseNotificationsDrop = () => {
        setisOpenNotificationDrop(false);
    }

    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper */}
                        <div class="col-sm-2 part1">
                            <Link to={'/dashboard'} className="d-flex align-items-center logo">
                                <img src={logo} alt="Logo"/>
                            </Link>
                        </div>

                        <div class="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />
                                }
                            </Button>
                            <SearchBox />
                        </div>

                        <div class="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setThemeMode(!context.themeMode)}>
                                <MdOutlineLightMode />
                            </Button>
                            <Button className="rounded-circle mr-3"><IoCartOutline /></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline /></Button>

                            <div className="dropdownWrapper position-relative">
                            <Button className="rounded-circle mr-3" onClick={handleOpenNotificationsDrop}><FaRegBell /></Button>
                                <Menu
                                            isOpenNotificationDrop={isOpenNotificationDrop}
                                            className="notifications dropdown_list"
                                            id="notifications"
                                            open={openNotifications}
                                            onClose={handleCloseNotificationsDrop}
                                            onClick={handleCloseNotificationsDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <div className="head pl-3 pb-0">
                                                <h4> Order (12) </h4>
                                            </div>
                                            <Divider className="mb-1"/>
                                            
                                            <div className="scroll">
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNotificationsDrop}>
                                                <div className="d-flex">
                                                    <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                                        </span>
                                                    </div>
                                                    </div>

                                                    <div className="dropdownInfo">
                                                        <h4>DevanshTech Info</h4>
                                                        <p className="text-sky mb-0">few seconds ago</p>
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            </div>
                                            <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                                            <Button className="btn-blue w-100">View all notifications</Button>
                                            </div>
                                </Menu>
                            </div>
                            
                            {
                                context.isLogin !== false ? 
                                <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link> 
                                : 
                                <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDr}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User"/>
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>Welcome {name}</h4>
                                        <p className="mb-0">@devanshtech</p>
                                    </div>

                                </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={openMyAcc}
                                        onClose={handleCloseMyAccDr}
                                        onClick={handleCloseMyAccDr}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                            My Account
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                        <ListItemIcon>
                                            <IoShieldHalfSharp/>
                                        </ListItemIcon>
                                            Reset Password
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDr}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        <Link to={'/logout'}>Logout</Link>
                                        </MenuItem>
                                        
                                    </Menu>

                            </div>
                            }
                            

                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;