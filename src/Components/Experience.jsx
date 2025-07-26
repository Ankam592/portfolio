import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Card,AnimatedLine } from "../Components/Index";



const Experience = () => {
    const toggle = useSelector((state) => { return state.theme?.RoyalTheme })
    console.log("home", toggle)
    const [theme, setTheme] = useState(toggle);
    const bg = theme ? 'bg-[#FFFFFF]' : 'bg-[#086788]'
    const bgvv = theme ? 'bg-[#086788]' : 'bg-[#FFFFFF]'
    console.log(theme)

    useEffect(() => {
        setTheme(toggle)
    }, [toggle])


    const WeEtVArray = [
        {
            'timeRange': 'Sept 2022 - Present',
            'company': 'Lti-Mindtree',
            'jobRole': 'Senior Software Engineer',
            'description': 'Developed backend services using Node.js and Express.js to parse large Excel sheets and integrate multiple external API responses to generate and deliver automated client-specific invoices. Designed frontend interfaces using ReactJS, Tailwind CSS, and Redux Toolkit to visually present client and product data using dynamic graphs and charts. Implemented AI-powered features to detect toxic content and flagged terms in invoice data using NLP-based APIs. Applied performance optimization techniques (lazy loading, memoization, code splitting), implemented unit testing with Jest and React Testing Library (RTA), and followed agile practices using Git, Bitbucket, and Jira'
        },
        {
            'timeRange': 'Jan 2022-Jul 2022',
            'company': 'Darwinbox',
            'jobRole': 'Internship',
            'description': 'Completed Node.js training and developed  a project called Restaurant Management System under their supervision.It which involves basic functionalities of Node Js.HTML, CSS, Javascript, Node.js,MongoDB,Git.'
        },
        {
            'timeRange': '2018-2022',
            'company': 'Vasavi College of Engineering, Hyderabad',
            'jobRole': 'BTech(IT)',
            'description': 'Grade: 8.32 CGPA'
        },
        {
            'timeRange': '2015-2017',
            'company': 'Narayana Junior College, Raviryala',
            'jobRole': 'Intermediate(MPC)',
            'description': 'Grade: 96.8%'
        },
        {
            'timeRange': '2014-2015',
            'company': 'Krishnaveni School',
            'jobRole': '10th Class',
            'description': 'Grade: 9.7 GPA'
        }
    ]
    return (
        <div className="w-full h-full flex items-center justify-center flex-wrap">
            <div className={`w-full h-20 ${bg} flex flex-wrap` }>
                <div className={`w-1/2 h-20 ${bg} flex justify-start items-center`}>
                    <h1 className={`ml-10 font-bold text-[20px] ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'}`}>Work Experience And Education Timeline View</h1>
                </div>
                 <div className={`w-1/2 h-20 ${bg} flex justify-center items-center`}>
                  <a href="https://drive.google.com/file/d/1DfEbP1DkXo604vewXhebBEoMBas1xe3y/view?usp=sharing"> <button className={`w-20 h-7 rounded-lg  ${bgvv} ${theme ? 'text-[#FFFFFF]' : 'text-[#086788]'}`}>Resume</button></a> 
                </div>
            </div>
            <div className={`w-full h-full ${bg} `}>

                {WeEtVArray && WeEtVArray.map((exp) => {
                    return <>
                    <div Key={exp.timeRange}  className={`w-full  ${bg} flex justify-evenly items-center`}>
                        <div  className={`py-1 flex justify-center w-50 ${bg} border-1  ${theme ? 'text-[#086788]' : 'text-[#FFFFFF]'} ${theme ? 'border-[#086788]' : 'border-[#FFFFFF]'}   m-3 rounded-lg `}>{exp.timeRange}</div>
                        
                            <AnimatedLine theme={theme}></AnimatedLine>
                        
                         <Card  Experience={exp}  ></Card> 
                         </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default Experience;