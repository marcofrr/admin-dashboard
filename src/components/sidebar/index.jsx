import React from 'react'
import { RiDashboardLine } from 'react-icons/ri'
import { FaTasks } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineSwitcher } from 'react-icons/ai'
import { BsPerson, BsChat, BsThreeDots } from 'react-icons/bs'
import { BiBookOpen } from 'react-icons/bi'
import './styles.css'

export default function SideBar() {

    // const buttonClickHandler = () => {
    //     setListenDocument(true);
    // }
    const handleToggle = () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.contains("checked") ? sidebar.classList.remove("checked") : sidebar.classList.add("checked")
    }
    const hideAllSubMenus = () => {
        const subMenus = document.querySelectorAll(".subMenu")
        subMenus.forEach(item => {
            item.classList.add("hidden")
        })
    }
    const handleSubMenuTasks = () => {
        hideAllSubMenus()
        const menuItem = document.getElementById("tasks");
        menuItem.classList.contains("hidden") ? menuItem.classList.remove("hidden") : menuItem.classList.add("hidden")
    }

    const handleSubMenuEmail = () => {
        hideAllSubMenus()
        const menuItem = document.getElementById("email");
        menuItem.classList.contains("hidden") ? menuItem.classList.remove("hidden") : menuItem.classList.add("hidden")
    }

    const handleSubMenuDeals = () => {
        hideAllSubMenus()
        const menuItem = document.getElementById("deals");
        menuItem.classList.contains("hidden") ? menuItem.classList.remove("hidden") : menuItem.classList.add("hidden")
    }

    const handleActive = (e) => {
        const menuItems = document.querySelectorAll(".itemContainer")
        menuItems.forEach(item => {
            if (item.classList.contains("activeSide")) item.classList.remove("activeSide")
        });
        const clickedItem = e.target;
        clickedItem.classList.add("activeSide")
        hideAllSubMenus()
    }
    return (
        <div id="sidebar" className="flex flex-col w-80 h-full shadow-2xl">
            <div id="header" className="flex items-center justify-center h-14 w-full">
                <h3 className="text-blue text-size-7 font-bold">Admin</h3>
            </div>

            <div id="separator" className="flex">
                <span className="bg-gray h-px w-full opacity-50"></span>
            </div>
            <div className="p-5">
                <div id="userCard" className="flex cursor-pointer hover:text-blue p-2">
                    <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        className="h-12 w-12 rounded-full object-cover userAvatar"
                        alt="">
                    </img>
                    <div id="userInfo" className="flex-col ml-4">
                        <h2 className="text-size-3 font-bold">Zé António</h2>
                        <h4 className="text-size-1 text-gray">ze@email.com</h4>
                    </div>
                </div>
            </div>
            <div id='menu' className="p-5">
                <div className="itemContainer activeSide" onClick={(e) => { handleActive(e) }}>
                    <RiDashboardLine className="menuIcon"> </RiDashboardLine>
                    <h2 className="menuWords">Dashboard</h2>
                </div>
                <div className="itemContainer" onClick={(e) => { handleActive(e); handleSubMenuTasks() }}>
                    <FaTasks className="menuIcon"></FaTasks>
                    <h2 className="menuWords">Tasks</h2>
                </div>
                <div id="tasks" className="hidden ml-7 subMenu">
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-yellow"></span>
                        <h2 className="subMenuWords">Active</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-green"></span>
                        <h2 className="subMenuWords">Completed</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-red"></span>
                        <h2 className="subMenuWords">Ended</h2>
                    </div>
                </div>
                <div className="itemContainer email" onClick={handleSubMenuEmail}>
                    <AiOutlineMail className="menuIcon"></AiOutlineMail>
                    <h2 className="menuWords">Email</h2>
                </div>
                <div id="email" className="hidden ml-7 subMenu">
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-yellow"></span>
                        <h2 className="subMenuWords">Draft</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-purple"></span>
                        <h2 className="subMenuWords">Scheduled</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-green"></span>
                        <h2 className="subMenuWords">Sent</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-red"></span>
                        <h2 className="subMenuWords">Archived</h2>
                    </div>
                </div>
                <div className="itemContainer">
                    <BsPerson className="menuIcon"></BsPerson>
                    <h2 className="menuWords">Contact</h2>
                </div>
                <div className="itemContainer">
                    <BsChat className="menuIcon"></BsChat>
                    <h2 className="menuWords">Chat</h2>
                </div>
                <div className="itemContainer deals" onClick={handleSubMenuDeals}>
                    <BiBookOpen className="menuIcon"></BiBookOpen>
                    <h2 className="menuWords">Deals</h2>
                </div>
                <div id="deals" className="hidden ml-7 subMenu">
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-yellow"></span>
                        <h2 className="subMenuWords">Low</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-green"></span>
                        <h2 className="subMenuWords">High</h2>
                    </div>
                    <div id="subMenuItem" className="flex p-3 items-center">
                        <span className="transparent h-3 w-3 rounded-lg border-2 border-red"></span>
                        <h2 className="subMenuWords">Urgernt</h2>
                    </div>
                </div>
            </div>

            <div id="separator" className="flex">
                <span className="bg-gray h-px w-full opacity-50"></span>
            </div>

            <div className="p-5">
                <div className="itemContainer">
                    <BsThreeDots className="menuIcon"> </BsThreeDots>
                    <h2 className="menuWords">Settings</h2>
                </div>
            </div>


            <div id="toggle" className="flex mt-auto p-5 items-center cursor-pointer justify-center" onClick={handleToggle}>
                <AiOutlineSwitcher className="menuIcon text-gray"></AiOutlineSwitcher>
                <h4 className="text-size-1 text-gray menuWords">Toggle sidebar</h4>
            </div>

        </div>
    )
}

