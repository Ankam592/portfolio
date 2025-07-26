import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Card = ({ Experience }) => {
    const toggle = useSelector((state) => { return state.theme?.RoyalTheme })
    console.log(Experience)
    const [theme, setTheme] = useState(toggle);
    const bg = theme ? 'bg-[#FFFFFF]' : 'bg-[#086788]'
    const bgvv = theme ? 'bg-[#086788]' : 'bg-[#FFFFFF]'

    useEffect(() => {
        setTheme(toggle)
    }, [toggle])

    return (
        <div  onMouseEnter={()=>setTheme((prev)=>!prev)}  onMouseLeave={()=>setTheme((prev)=>!prev)} className={   ` shadow-xl   ${bg} border-1  ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'} ${theme ? 'border-[#086788]' : 'border-[#FFFFFF]'} w-6/10  m-3 rounded-lg`}>
            <h1 className="p-3 font-bold">{Experience.jobRole}</h1>
            <h2 className="pl-3 font-semibold">{Experience.company}</h2>
            <p className="p-3 ">{Experience.description}</p>
        </div>
    )

}

export default Card;