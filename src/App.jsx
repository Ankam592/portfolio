import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './Components/Index'
import { useSelector,useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

function App() {
  const toggle = useSelector((state)=>{return state.theme?.RoyalTheme})
  console.log(toggle)
  const [theme,setTheme] = useState(toggle);

  return (
    <div className={`w-full h-140 ${theme ? 'bg-[#FFFFFF]' : 'bg-[#086788]' }`}>
      <Header></Header>
      <Outlet className='flex justify-center' ></Outlet>
    </div>
  )
}

export default App
