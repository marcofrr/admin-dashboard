import React, { useState } from 'react'
import NewTask from './NewTask'
import './styles.css'


export default function Tasks() {

    const [newTask, setNewTask] = useState(false)

    const handleToggle = (e) => {
        const item = e.target
        const checkbox = e.target.querySelector("input")
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true
        item.classList.contains("selected") ? item.classList.remove("selected") : item.classList.add("selected")
    }

    const checkAll = (e) => {
        const allItems = document.querySelectorAll(".item")
        allItems.forEach(element => {
            const checkbox = element.querySelector("input")
            checkbox.checked ? checkbox.checked = false : checkbox.checked = true
            element.classList.contains("selected") ? element.classList.remove("selected") : element.classList.add("selected")
        });
    }

    const toggleNewTask = () => {
        setNewTask(oldState => !oldState)
    }

    return (
        <div id="taskContainer" className="w-full">
            {newTask && <NewTask />}
            <div className="flex items-center justify-between">
                <div className="flex">
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
            <div className="flex flex-col bg-white w-full rounded-md mt-8 shadow-2xl overflow-y-hidden">
                <div className="flex items-center p-4">
                    <input type="checkbox" className="flex-none p-4 cursor-pointer" onClick={checkAll}></input>
                    <h3 className="flex-none p-4 w-56">Status</h3>
                    <h3 className="flex-grow w-32">Title</h3>
                    <h3 className="flex-none w-52">Type</h3>
                    <h3 className="flex-none w-52">Associated with</h3>
                    <h3 className="flex-none w-32">Due date</h3>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Completed</div>
                        </div>
                    </div>
                    <div className="flex-grow w-32 pointer-events-none">
                        <h2 className="font-bold"> Send benefit review by friday</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">Reminder</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Lindsey Stroud</h2>
                    </div>
                    <div className="flex-none w-32 pointer-events-none">
                        <h2 className="">Dec 14, 2018</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Completed</div>
                        </div>
                    </div>
                    <div className="flex-grow w-32 pointer-events-none">
                        <h2 className="font-bold"> Send benefit review by friday</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">Reminder</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Lindsey Stroud</h2>
                    </div>
                    <div className="flex-none w-32 pointer-events-none">
                        <h2 className="">Dec 14, 2018</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div className="flex items-center p-4 hover:shadow-xl cursor-pointer item" onClick={(e) => handleToggle(e)}>
                    <input type="checkbox" className="flex-none p-4 pointer-events-none"></input>
                    <div className="flex-none p-4 w-56 pointer-events-none">
                        <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                            <div className="transparent absolute text-white font-light text-size-2">Completed</div>
                        </div>
                    </div>
                    <div className="flex-grow w-32 pointer-events-none">
                        <h2 className="font-bold"> Send benefit review by friday</h2>
                    </div>
                    <div className="flex-none w-52 pointer-events-none">
                        <h2 className="">Reminder</h2>
                    </div>
                    <div className="flex flex-none w-52 items-center pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-8 w-8 rounded-full object-cover"
                            alt="">
                        </img>
                        <h2 className="pl-2">Lindsey Stroud</h2>
                    </div>
                    <div className="flex-none w-32 pointer-events-none">
                        <h2 className="">Dec 14, 2018</h2>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
            </div>

        </div>
    )
}
