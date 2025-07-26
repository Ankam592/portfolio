import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";



const HomePage = () => {
    const toggle = useSelector((state) => { return state.theme?.RoyalTheme })
    console.log("home", toggle)
    const nav = useNavigate();
    const [theme, setTheme] = useState(toggle);
    const bg = theme ? 'bg-[#FFFFFF]' : 'bg-[#086788]'
    const bgvv = theme ? 'bg-[#086788]' : 'bg-[#FFFFFF]'
    console.log(theme)


    useEffect(() => {
        setTheme(toggle)
    }, [toggle])
    return (
        <div className="w-full h-full flex items-center justify-center flex-wrap">
            <div className={`w-1/2 h-full ${bg}`}>

                <div className={`w-full h-30 ${bg} flex justify-center items-center`}>
                    <h1 className={`font-bold text-[40px] ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`}>Hi, I'm Manoj</h1>

                </div>
                <div className={`pl-25 pr-20 h-50 ${bg} flex justify-center items-start`}>
                    <p className={` text-[20px] ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`}>Innovative Frontend Developer with 3 years &nbsp; &nbsp; of experience in building scalable web apps using ReactJS, Redux Toolkit,
                        and also &nbsp;&nbsp;Tailwind CSS. Passionate about UI/UX and integrating AI-powered features into&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;production-grade applications.</p>
                </div>
                <div className={`w-full h-40 ${bg} flex justify-center items-center`}>
                    <div className={`w-1/2 h-10 ${bg} flex justify-evenly items-center`}>
                        <a
                            href="https://www.linkedin.com/in/manojankam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex justify-center items-center ${bgvv} hover:-translate-y-0.5 transition duration-300`}
                            >
                                <FaLinkedin
                                    className={`${theme ? "text-[#FFFFFF]" : "text-[#0077B5]"
                                        } text-[20px]`}
                                />
                            </div>
                        </a>
 <a
                            href="https://github.com/Ankam592"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex justify-center items-center ${bgvv} hover:-translate-y-0.5 transition duration-300`}
                            >
                                <FaGithub
                                    className={`${theme ? "text-[#FFFFFF]" : "text-[#0077B5]"
                                        } text-[20px]`}
                                />
                            </div>
                        </a>                        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${bgvv} hover:-translate-y-0.5 transition duration-300`}  ><FaGithub className={`${theme ? 'text-[#FFFFFF]' : 'text-[#0077B5]'} text-[20px] `} />  </div>
                    </div>
                </div>




            </div>
            <div className={`w-1/2 h-full ${bg} flex justify-center items-center`}>
                <div style={{
                    backgroundImage: 'url("/bg_1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} className={`w-full h-full`}></div>




            </div>


        </div>

    )

}

export default HomePage;