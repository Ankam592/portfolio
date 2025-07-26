import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiVite, SiC, SiUipath } from "react-icons/si";

const Skills = () => {
    const toggle = useSelector((state) => { return state.theme?.RoyalTheme })
    const [theme, setTheme] = useState(toggle);
    const bg = theme ? 'bg-[#FFFFFF]' : 'bg-[#086788]'
    const bgvv = theme ? 'bg-[#086788]' : 'bg-[#FFFFFF]'

    useEffect(() => {
        setTheme(toggle)
    }, [toggle])

    const skills = [
        { name: "React", percentage: '70%', icon: <FaReact className="text-blue-500" /> },
        { name: "JavaScript", percentage: '75%', icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Node.js", percentage: '70%', icon: <FaNodeJs className="text-green-600" /> },
        { name: "MongoDB", percentage: '60%', icon: <SiMongodb className="text-green-500" /> },
        { name: "HTML", percentage: '90%', icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", percentage: '90%', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Python", percentage: '50%', icon: <FaPython className="text-yellow-500" /> },
        { name: "C", percentage: '50%', icon: <SiC className="text-blue-700" /> },
        { name: "Java", percentage: '60%', icon: <FaJava className="text-red-500" /> },
        { name: "TailwindCSS", percentage: '75%', icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vite", percentage: '80%', icon: <SiVite className="text-purple-500" /> },
        { name: "UiPath", percentage: '60%', icon: <SiUipath className="text-indigo-600" /> },
    ];


    return (
        <div className={`w-full h-full ${bg} flex justify-center items-start p-10`}>
            <div className="h-full w-3/4    grid grid-cols-4 gap-5 flex justify-center">
                {skills && skills.map((skill) => {
                    return <>
                        <div key={skill.name} className={ `hover:-translate-y-1 transition duration-300 rounded-lg w-full h-full border-1 flex justify-center items-center flex-wrap ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`}>
                            <div className="w-full flex justify-center ">
                                <h1 className="font-bold">{skill.name}</h1></div>
                           
                             <div className="w-full h-1/2 flex justify-center items-center">
                                <h1 className="text-[60px]">{skill.icon }</h1>
                                </div>
                                 <div className="w-full flex justify-center ">
                                <h1>{skill.percentage}</h1></div>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default Skills;