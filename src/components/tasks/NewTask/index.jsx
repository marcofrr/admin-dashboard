import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './styles.css'
export default function NewTask(props) {

    return (
        <div id="newTaskContainer" className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-gray-popup z-10 p-4">
            <div id="newTaskWindow" className="w-full h-4/6 bg-white rounded-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-size-6 p-6 font-semibold">Create Task</h1>
                    </div>
                    <div onClick={props.toggleNewTask}>
                        <AiOutlineClose className="text-gray-icon hover:text-gray cursor-pointer h-9 w-9 mr-4"></AiOutlineClose>
                    </div>
                </div>
                <div id="separator" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div id="newTaskBtnContainer" className="flex justify-start pl-4 pr-4 pt-6">
                    <div className="flex h-6 w-1/3">
                        <div id="newTaskActive" className="flex items-center justify-center rounded-md bg-yellow w-20 text-white text-size-1">Active</div>
                    </div>
                    <div className="flex justify-center h-6 w-1/3">
                        <div id="newTaskCompleted" className="flex items-center justify-center rounded-md bg-green w-24 text-white text-size-1 opacity-50">Completed</div>
                    </div>
                    <div className="flex justify-end h-6 w-1/3">
                        <div id="newTaskEnded" className="flex items-center justify-center rounded-md bg-red w-20 text-white text-size-1 opacity-50">Ended</div>
                    </div>

                </div>
                <div id="newTaskformContainer" className="p-4">
                    <form className="rounded-lg overflow-hidden space-y-10">
                        <div>
                            <div className="flex flex-col border-b-2 border-gray-icon">
                                <label htmlFor="title" className="mb-2 text-gray">Title</label>
                                <input type="text" name="title" placeholder="Office meet-up" className="mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon mt-2">
                                <label htmlFor="type" className="m-b text-gray">Type</label>
                                <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                    <option value="reminder">Reminder</option>
                                </select>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon mt-2">
                                <label htmlFor="type" className="m-b text-gray">Associated with</label>
                                <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                    <option value="reminder">Lindsay Stround</option>
                                </select>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon mt-2">
                                <label htmlFor="type" className="m-b text-gray">Due date:</label>
                                <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                    <option value="reminder">Tomorrow</option>
                                </select>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="flex items-center justify-center">
                    <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl mt-2 cursor-pointer">Create task</button>

                </div>
            </div>
        </div>
    )
}