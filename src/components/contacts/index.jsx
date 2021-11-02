import React from 'react'
import Topbar from '../topbar'
import './styles.css'
import { useHistory } from 'react-router-dom'

export default function Contacts() {
    const history = useHistory();

    const goNewContact = () => {
        history.push('/newContact');
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
            <Topbar name="Contacts" placeholder="Search for a contact"></Topbar>
            <div id="addContactContainer" className="flex flex-col-reverse items-center justify-between p-4">
                <div id="companyType" className="flex p-4">
                    <div className="mr-2">Company:</div>
                    <div className="dropdown inline-block relative">
                        <button className="text-blue font-medium rounded inline-flex items-center">
                            <span className="mr-1">All</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                    </div>

                </div>

                <div className="flex items-center justify-center">
                    <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl cursor-pointer" onClick={goNewContact}>Add contact</button>
                </div>
            </div>
            <div id="contactsTable" className="flex flex-col  w-full  rounded-md overflow-y-hidden pl-4 pr-4 pb-8">
                <table className="table-fixed w-full h-full  bg-white .table rounded-md shadow-xl">
                    <thead>
                        <tr>
                            <th className="w-9">
                                <input id="taskCheckbox" type="checkbox" className="flex-none p-4 cursor-pointer" onClick={(e) => checkAll(e)}></input>
                            </th>
                            <th id="name" className="w-52">Name</th>
                            <th id="emailContacts" className="hidden w-60">Email</th>
                            <th id="companyName" className="hidden w-52">Company name</th>
                            <th id="role" className="hidden w-4/12">Role</th>
                            <th id="forecast" className="hidden w-4/12">Forecast</th>
                            <th id="activity" className="w-4/12">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cursor-pointer item" onClick={(e) => handleToggle(e)}>

                            <td>
                                <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                            </td>
                            <td>
                                <div className="flex items-center  pointer-events-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        className="h-8 w-8 rounded-full object-cover"
                                        alt="">
                                    </img>
                                    <h2 className="ml-2 font-extrabold">Lindsey Stroud</h2>
                                </div>
                            </td>
                            <td id="email" className="hidden">
                                <h2 className="font-extralight">lindsaystroud@gmail.com</h2>
                            </td>
                            <td id="companyName" className="hidden">
                                <h2 id="companyName" className="font-extralight">Slack</h2>
                            </td>
                            <td className="hidden">
                                <h2 id="role" className="font-extralight">Manager</h2>
                            </td>
                            <td id="forecast" className="hidden">
                                <h2 className="pointer-events-none font-extralight">50%</h2>
                            </td>
                            <td>
                                <h2 id="activity" className="font-extralight pointer-events-none ">5 minutes ago</h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}