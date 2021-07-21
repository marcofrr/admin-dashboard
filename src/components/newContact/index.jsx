import React from 'react'
import { IoIosArrowBack, IoIosCall } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { BsCardImage, BsPaperclip } from 'react-icons/bs'
import { MdNote, MdEmail, MdTextFields, MdLink } from 'react-icons/md'
import { RiChatNewFill, RiChatPollFill } from 'react-icons/ri'
import { BiCalendarAlt } from 'react-icons/bi'
import './styles.css'
import noteIcon from '../../assets/noteIcon.png'
export default function NewContact() {

    const toggleActive = (e) => {
        const allitems = document.querySelectorAll('.item')
        allitems.forEach(item => {
            item.classList.remove('active')
        });
        e.target.classList.add('active')
    }
    return (
        <div className="flex w-full">
            <div className="flex flex-col w-1/3 h-full mt-8 p-8">
                <div className="flex items-center cursor-pointer bg-transparent">
                    <IoIosArrowBack className="text-blue w-8 h-8"></IoIosArrowBack>
                    <div className="font-normal text-black-table">Back to emails</div>
                </div>
                <div className="flex flex-col bg-white items-center justify-center overflow-y-hidden mt-4 rounded-md shadow-xl p-2">
                    <div className="flex w-full justify-end">
                        <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></FiTrash2>
                    </div>
                    <div id="userCard" className="flex flex-col w-52 items-center justify-center">
                        <div className="flex items-center justify-center h-32 w-32 rounded-full bg-gray-icon">
                            <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                        </div>
                        <h2 className="pl-2 pt-8 font-bold">Creating new Contact</h2>
                    </div>
                    <div id="separator" className="flex">
                        <span className="bg-gray h-px w-full opacity-50 mt-4"></span>
                    </div>
                    <form className="w-full rounded-lg overflow-hidden p-4">
                        <div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="firstName" className="mb-2 text-gray">First name</label>
                                <input type="text" name="firstName" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="lastName" className="mb-2 text-gray">Last name</label>
                                <input type="text" name="lastName" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="firstName" className="mb-2 text-gray">First name</label>
                                <input type="text" name="firstName" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="email" className="mb-2 text-gray">Email</label>
                                <input type="text" name="email" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="company" className="mb-2 text-gray">Company</label>
                                <input type="text" name="company" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="role" className="mb-2 text-gray">Role</label>
                                <input type="text" name="role" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-icon w-full h-12 input mb-4 ">
                                <label htmlFor="website" className="mb-2 text-gray">Website</label>
                                <input type="text" name="website" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="flex flex-col bg-white w-2/3 h-full rounded-md mt-8 shadow-xl overflow-y-hidden"></div> */}
            <div className="flex flex-col w-2/3 h-full">
                <div className="bg-white rounded-md mt-8 shadow-xl w-full">
                    <div className="flex items-center justify-evenly">
                        <div className="flex items-center p-4 cursor-pointer item" onClick={(e) => toggleActive(e)}>
                            <MdNote className="text-gray mr-2 pointer-events-none" ></MdNote>
                            <h2 className="text-gray pointer-events-none">New note</h2>
                        </div>
                        <div className="flex items-center p-4 cursor-pointer item" onClick={(e) => toggleActive(e)}>
                            <MdEmail className="text-gray mr-2 pointer-events-none" ></MdEmail>
                            <h2 className="text-gray pointer-events-none">Email</h2>
                        </div>
                        <div className="flex items-center p-4 cursor-pointer item" onClick={(e) => toggleActive(e)}>
                            <IoIosCall className="text-gray mr-2 pointer-events-none" ></IoIosCall>
                            <h2 className="text-gray pointer-events-none">Call</h2>
                        </div>
                        <div className="flex items-center p-4 cursor-pointer item" onClick={(e) => toggleActive(e)}>
                            <RiChatNewFill className="text-gray mr-2 pointer-events-none" ></RiChatNewFill>
                            <h2 className="text-gray pointer-events-none">New activity</h2>
                        </div>
                        <div className="flex items-center p-4 cursor-pointer item" onClick={(e) => toggleActive(e)}>
                            <RiChatPollFill className="text-gray mr-2 pointer-events-none" ></RiChatPollFill>
                            <h2 className="text-gray pointer-events-none">Create task</h2>
                        </div>
                        <div className="flex items-center p-4 cursor-pointer item" onClick={(e) => toggleActive(e)}>
                            <BiCalendarAlt className="text-gray mr-2 pointer-events-none" ></BiCalendarAlt>
                            <h2 className="text-gray pointer-events-none">Schedule</h2>
                        </div>
                    </div>
                    <textarea placeholder="Leave a note here..." className="mt-2 w-full h-20 p-4 pl-8"></textarea>
                    <div className="flex justify-between p-4 pl-8">
                        <div className="flex">
                            <MdTextFields className="text-gray mr-4 h-8 w-8 pointer-events-none font-black" ></MdTextFields>
                            <MdLink className="text-gray mr-4 h-8 w-8 pointer-events-none font-black" ></MdLink>
                            <BsPaperclip className="text-gray mr-4 h-8 w-8 pointer-events-none font-black" ></BsPaperclip>
                        </div>
                        <div className="flex ">
                            <button className="text-gray font-bold pr-6">Cancel</button>
                            <button className="text-blue font-bold pr-6">Save</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-12">
                    <div className="mr-2">Filter:</div>
                    <div className="dropdown inline-block relative">
                        <button className="text-blue font-medium rounded inline-flex items-center">
                            <span className="mr-1">All</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white w-full rounded-md mt-4 shadow-xl p-16">
                    <img
                        src={noteIcon}
                        className="h-32 w-32"
                        alt="">
                    </img>
                    <h2 className="text-black text-size-1 font-black mt-8">No history yet</h2>
                </div>

            </div>
        </div>
    )
}