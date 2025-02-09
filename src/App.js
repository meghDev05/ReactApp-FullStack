import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';
import ProductList from './pages/Products/ProductList';
import ProductView from './pages/Products/ProductView';
import ProductUpload from './pages/Products/ProductUpload';
import UpdateProduct from './pages/Products/UpdateProduct';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RawMaterial from './pages/ProjectManagement/RawMaterial';

const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);

  useEffect(() =>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }

  },[themeMode]);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    themeMode,
    setThemeMode,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader     
  };


  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
          {
            isHideSidebarAndHeader !== true &&
            <Header />
          }
        
        <div className="main d-flex">
          {
            isHideSidebarAndHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Sidebar />
            </div>
          }
        
          <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Login />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signUp" exact={true} element={<SignUp />} />
              
              <Route path="/products" exact={true} element={<ProductList />} />
              <Route path="/productview" exact={true} element={<ProductView />} />
              <Route path="/productupload" exact={true} element={<ProductUpload />} />

              <Route path="/rawmaterial" exact={true} element={<RawMaterial />} />

              <Route path="/updateproduct/:id" element={<UpdateProduct />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
