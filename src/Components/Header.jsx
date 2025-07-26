import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Toggle } from "../Store/ThemeSlice";
import {AnimatedLine} from "../Components/Index";

const Header = () => {
    const nav = useNavigate();
    const dispatch = useDispatch(); 
    const toggle = useSelector((state) => { return state.theme?.RoyalTheme })
    console.log(toggle)
    const [theme, setTheme] = useState(toggle);
    const bg = theme ? 'bg-[#FFFFFF]' : 'bg-[#086788]'
    const bgvv = theme ? 'bg-[#086788]' : 'bg-[#FFFFFF]'


    const changeTheme = ()=>
    {   
        dispatch(Toggle())
        setTheme((prev)=>!prev)
    }
  
    return (
        <div className={`w-full h-12  ${bg}  relative  `}>
            <div className={`w-full h-11.5  ${bg}  flex justify-evenly flex-wrap`}>
                <div className={`w-1/2 h-11.5  ${bg}  flex justify-center items-center `}>
                    <h1 className={`h-1/2 font-bold ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`}>Ankam ManojKumar</h1>
                </div>
                <div className={`w-1/2 h-11.5  ${bg}  flex justify-evenly items-center`}>
                <div  >  <h1 className={`h-1/2 font-semibold ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`} onClick={() => nav('/home')} >Home</h1>
             
                </div>
                  
                    <h1 className={`h-1/2 font-semibold ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`} onClick={() => nav('/skills')}>Skills</h1>
                    <h1 className={`h-1/2 font-semibold ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`} onClick={() => nav('/experience')}>Experience</h1>
                     <h1 className={`h-1/2 font-semibold ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`} onClick={() => changeTheme()  }>     { theme ? '  DarkMode':'LightMode' }   </h1>

                </div>
            </div>

            <div className={`w-full h-0.5 absolute bottom-0 ${bgvv}`}>

            </div>
        </div>

    )
}

export default Header;