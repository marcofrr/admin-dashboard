import React, { useState } from 'react'
import NewTask from './NewTask'
import Topbar from '../topbar'
import './styles.css'


export default function Tasks() {

    const [newTask, setNewTask] = useState(false)

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
    const toggleNewTask = () => {
        setNewTask(oldState => !oldState)
    }

    return (
        <div className="flex flex-col w-full">
            <Topbar name="Tasks" placeholder="Search for a task"></Topbar>
            <div id="taskContainer" className="w-full p-4">
                {newTask && <NewTask toggleNewTask={toggleNewTask} />}
                <div id="createTaskContainer" className="flex flex-col-reverse items-center justify-between">
                    <div id="taskFilter" className="flex p-4">
                        <div className="mr-2">Date:</div>
                        <div className="dropdown inline-block relative">
                            <button className="text-blue font-medium rounded inline-flex items-center">
                                <span className="mr-1">Today</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </button>
                        </div>
                        <div className="flex ml-2">
                            <div className="mr-2">Type:</div>
                            <div className="dropdown inline-block relative">
                                <button className="text-blue font-medium rounded inline-flex items-center">
                                    <span className="mr-1">All</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl cursor-pointer" onClick={toggleNewTask}>Create task</button>
                    </div>
                </div>
                <table className="table-fixed w-full mt-4 .table bg-white rounded-md shadow-xl">
                    <thead>
                        <tr>
                            <th className="w-9">
                                <input id="taskCheckbox" type="checkbox" className="flex-none p-4 cursor-pointer" onClick={checkAll}></input>
                            </th>
                            <th className="w-36">Status</th>
                            <th id="title" className="w-36">Title</th>
                            <th id="type" className="hidden w-52">Type</th>
                            <th id="assoWith" className="hidden w-2/12">Associated with</th>
                            <th id="dueDate" className="hidden w-2/12">Due date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={(e) => handleToggle(e)} className="cursor-pointer item">
                            <td>
                                <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                            </td>
                            <td>
                                <div id="taskType" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center  pointer-events-none">
                                    <div className="transparent absolute text-white font-light text-size-1">Completed</div>
                                </div>
                            </td>
                            <td>
                                <h2 className="font-bold w-32  pointer-events-none">Send benefit review by friday</h2>
                            </td>
                            <td id="type" className="hidden">
                                <h2 className="font-light  pointer-events-none">Reminder</h2>
                            </td>
                            <td id="assoWith" className="hidden">
                                <div className="flex items-center  pointer-events-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        className="h-8 w-8 rounded-full object-cover"
                                        alt="">
                                    </img>
                                    <h2 className="ml-2 font-light">Lindsey Stroud</h2>

                                </div>
                            </td>
                            <td id="dueDate" className="hidden">
                                <h2 className="font-light  pointer-events-none">Dec 14, 2018</h2>
                            </td>
                        </tr>
                        <tr onClick={(e) => handleToggle(e)} className="cursor-pointer item">
                            <td>
                                <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                            </td>
                            <td>
                                <div id="taskType" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center  pointer-events-none">
                                    <div className="transparent absolute text-white font-light text-size-1">Completed</div>
                                </div>
                            </td>
                            <td>
                                <h2 className="font-bold w-32  pointer-events-none">Send benefit review by friday</h2>
                            </td>
                            <td id="type" className="hidden">
                                <h2 className="font-light  pointer-events-none">Reminder</h2>
                            </td>
                            <td id="assoWith" className="hidden">
                                <div className="flex items-center  pointer-events-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        className="h-8 w-8 rounded-full object-cover"
                                        alt="">
                                    </img>
                                    <h2 className="ml-2 font-light">Lindsey Stroud</h2>

                                </div>
                            </td>
                            <td id="dueDate" className="hidden">
                                <h2 className="font-light  pointer-events-none">Dec 14, 2018</h2>
                            </td>
                        </tr>
                        <tr onClick={(e) => handleToggle(e)} className="cursor-pointer item">
                            <td>
                                <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                            </td>
                            <td>
                                <div id="taskType" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center  pointer-events-none">
                                    <div className="transparent absolute text-white font-light text-size-1">Completed</div>
                                </div>
                            </td>
                            <td>
                                <h2 className="font-bold w-32  pointer-events-none">Send benefit review by friday</h2>
                            </td>
                            <td id="type" className="hidden">
                                <h2 className="font-light  pointer-events-none">Reminder</h2>
                            </td>
                            <td id="assoWith" className="hidden">
                                <div className="flex items-center  pointer-events-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        className="h-8 w-8 rounded-full object-cover"
                                        alt="">
                                    </img>
                                    <h2 className="ml-2 font-light">Lindsey Stroud</h2>

                                </div>
                            </td>
                            <td id="dueDate" className="hidden">
                                <h2 className="font-light  pointer-events-none">Dec 14, 2018</h2>
                            </td>
                        </tr>
                        <tr onClick={(e) => handleToggle(e)} className="cursor-pointer item">
                            <td>
                                <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                            </td>
                            <td>
                                <div id="taskType" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center  pointer-events-none">
                                    <div className="transparent absolute text-white font-light text-size-1">Completed</div>
                                </div>
                            </td>
                            <td>
                                <h2 className="font-bold w-32  pointer-events-none">Send benefit review by friday</h2>
                            </td>
                            <td id="type" className="hidden">
                                <h2 className="font-light  pointer-events-none">Reminder</h2>
                            </td>
                            <td id="assoWith" className="hidden">
                                <div className="flex items-center  pointer-events-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                        className="h-8 w-8 rounded-full object-cover"
                                        alt="">
                                    </img>
                                    <h2 className="ml-2 font-light">Lindsey Stroud</h2>

                                </div>
                            </td>
                            <td id="dueDate" className="hidden">
                                <h2 className="font-light  pointer-events-none">Dec 14, 2018</h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
