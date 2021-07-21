import React from 'react'
import './styles.css'
import { BiCloudUpload } from 'react-icons/bi'
import { FaColumns } from 'react-icons/fa'
import EmailRecepients from './emailRecepients'

export default function Email() {

    const handleToggle = (e) => {
        const item = e.target
        const checkbox = e.target.querySelector("input")
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true
        item.classList.contains("selected") ? item.classList.remove("selected") : item.classList.add("selected")
    }

    const checkAll = (e) => {
        const allItems = document.querySelectorAll(".item")
        const mainCheck = document.querySelector("#main")
        allItems.forEach(element => {
            const checkbox = element.querySelector("input")
            if (mainCheck.checked === false) {
                element.classList.remove("selected")
                checkbox.checked = false
            } else {
                element.classList.add("selected")
                checkbox.checked = true
            }
        });
    }

    return (
        <div id="emailContainer" className="w-full">
            <div className="flex items-center justify-between">
                <div className="flex">
                    <div className="mr-2">Email type:</div>
                    <div className="dropdown inline-block relative">
                        <button className="text-blue font-medium rounded inline-flex items-center">
                            <span className="mr-1">All</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                    </div>
                    <div className="flex ml-2">
                        <div className="mr-2">Campaign:</div>
                        <div className="dropdown inline-block relative">
                            <button className="text-blue font-medium rounded inline-flex items-center">
                                <span className="mr-1">All</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="flex mr-9 items-center">
                        <h1>Import</h1>
                        <BiCloudUpload className="text-blue w-6 h-6 ml-2 mr-6"></BiCloudUpload>
                        <h1>Switch columns</h1>
                        <FaColumns className="text-blue w-6 h-4 ml-2"></FaColumns>
                    </div>
                    <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl cursor-pointer">Create email</button>
                </div>
            </div>
            <div className="flex flex-col bg-white w-full rounded-md mt-8 shadow-2xl overflow-y-hidden">
                <div className="flex items-center p-4">
                    <input id="main" type="checkbox" className="flex-none p-4 cursor-pointer w-12" onClick={checkAll}></input>
                    <h3 className="flex-none p-4 w-56">Status</h3>
                    <h3 className="flex-grow w-56">Subject</h3>
                    <h3 className="flex-none w-52">Last updated</h3>
                    <h3 className="flex-none w-52">Open rate</h3>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Sent</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> September Content Offer</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">0 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-yellow rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Draft</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>

                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-red rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Archived</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>

                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none w-12"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-purple rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Scheduled</div>
                        </div>
                    </div>
                    <div className="flex-grow w-52 pointer-events-none">
                        <h2 className="font-bold"> Source Code</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Aug 17,2020</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">50 %</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
            </div>
            {/* <EmailRecepients /> */}

        </div>
    )
}
