import React from 'react'
import './styles.css'
import { BiCloudUpload } from 'react-icons/bi'
import { FaColumns } from 'react-icons/fa'
import Topbar from '../topbar'
import EmailRecepients from './emailRecepients'
import { useHistory } from 'react-router-dom'

export default function Email() {

    const history = useHistory()

    const goCreateEmail = () => {
        history.push('/createEmail');
    }


    const handleToggle = (e) => {
        const item = e.target.parentNode
        const checkbox = item.querySelector("input")
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true
        item.classList.contains("selected") ? item.classList.remove("selected") : item.classList.add("selected")
    }

    const checkAll = (e) => {
        const allItems = document.querySelectorAll(".item")
        const mainCheck = document.querySelector("#taskCheckbox")
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
        <div className="flex flex-col w-full">
            <Topbar name="Email" placeholder="Search for a mail"></Topbar>
            <div id="emailContainer" className="w-full p-4">
                <div id="creaEmailContainer" className="flex flex-col-reverse items-center justify-between">
                    <div id="emailType" className="flex p-4">
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
                        <div id="emailImport" className="hidden mr-9 items-center">
                            <h1>Import</h1>
                            <BiCloudUpload className="text-blue w-6 h-6 ml-2 mr-6"></BiCloudUpload>
                            <h1>Switch columns</h1>
                            <FaColumns className="text-blue w-6 h-4 ml-2"></FaColumns>
                        </div>
                        <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl cursor-pointer" onClick={goCreateEmail}>Create email</button>
                    </div>
                </div>
                <div className="flex flex-col bg-white w-full rounded-md mt-4 shadow-xl overflow-y-hidden">
                    <table className="table-fixed w-full .table rounded-md shadow-xl">
                        <thead>
                            <tr>
                                <th className="w-9">
                                    <input id="taskCheckbox" type="checkbox" className="flex-none p-4 cursor-pointer" onClick={(e) => checkAll(e)}></input>
                                </th>
                                <th className="w-36">Status</th>
                                <th id="subject" className="w-full">Subject</th>
                                <th id="lastUpdated" className="hidden w-52">Last updated</th>
                                <th id="openDate" className="hidden w-4/12">Open date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cursor-pointer item" onClick={(e) => handleToggle(e)}>
                                <td>
                                    <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                                </td>
                                <td>
                                    <div className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center pointer-events-none">
                                        <div className="transparent absolute text-white font-light text-size-2">Sent</div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="font-bold pointer-events-none">September Content Offer</h2>
                                </td>
                                <td id="lastUpdated" className="hidden">
                                    <h2 className="font-extralight pointer-events-none">Aug 17,2020</h2>
                                </td>
                                <td id="openDate" className="hidden">
                                    <h2 className="font-extralight pointer-events-none">0 %</h2>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className="flex items-center p-4">
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
                    </div> */}
                </div>
                {/* <EmailRecepients /> */}

            </div>
        </div>

    )
}
