import React from 'react'
import { RiDashboardLine } from 'react-icons/ri'
import { FaTasks } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineSwitcher } from 'react-icons/ai'
import { BsPerson, BsChat, BsThreeDots } from 'react-icons/bs'
import { BiBookOpen } from 'react-icons/bi'
import './styles.css'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
    const history = useHistory();
    const goDashboard = () => {
        history.push('/');
    }
    const goTasks = () => {
        history.push('/tasks');
    }
    const goEmails = () => {
        history.push('/email');
    }

    const goContacts = () => {
        history.push('/contacts');
    }

    const goSettings = () => {
        history.push('/settings');
    }

    const goUserSettings = () => {
        history.push('/userSettings');
    }

    const handleToggle = () => {
        const navbar = document.getElementById("navbar");
        if (!navbar.classList.contains("checked")) {
            const subMenus = document.querySelectorAll(".subMenu");
            subMenus.forEach(element => {
                if (!element.classList.contains("hidden")) element.classList.add("hidden")
            });
        }
        if (navbar.classList.contains("checked")) {
            const activeTab = document.querySelector(".activeSide");

            if (activeTab.nextElementSibling.classList.contains("hidden")) {
                activeTab.nextElementSibling.classList.remove("hidden")
            }
        }
        navbar.classList.contains("checked") ? navbar.classList.remove("checked") : navbar.classList.add("checked")
    }
    const hideAllSubMenus = () => {
        const subMenus = document.querySelectorAll(".subMenu")
        subMenus.forEach(item => {
            item.classList.add("hidden")
        })
    }
    const handleSubMenuTasks = () => {
        console.log('teste')
        const navbar = document.getElementById("navbar");
        if (!navbar.classList.contains("checked")) {
            hideAllSubMenus()
            const menuItem = document.getElementById("tasks");
            console.log('menuItem', menuItem)
            menuItem.classList.contains("hidden") ? menuItem.classList.remove("hidden") : menuItem.classList.add("hidden")
        }

    }

    const handleSubMenuEmail = () => {
        const navbar = document.getElementById("navbar");
        if (!navbar.classList.contains("checked")) {
            hideAllSubMenus()
            const menuItem = document.getElementById("email");
            menuItem.classList.contains("hidden") ? menuItem.classList.remove("hidden") : menuItem.classList.add("hidden")
        }

    }

    const handleSubMenuDeals = () => {
        const navbar = document.getElementById("navbar");
        if (!navbar.classList.contains("checked")) {
            hideAllSubMenus()
            const menuItem = document.getElementById("deals");
            menuItem.classList.contains("hidden") ? menuItem.classList.remove("hidden") : menuItem.classList.add("hidden")
        }

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
        <div id="navbar" className="flex fixed bottom-0 w-full h-10 shadow-2xl items-center bg-white z-10">
            <div id="navbarHeader" className="hidden items-center justify-center h-14 w-full">
                <h3 className="text-blue text-size-7 font-bold">Admin</h3>
            </div>
            <div id="separatorNav" className="hidden w-full">
                <span className="bg-gray h-px w-full opacity-50"></span>
            </div>
            <div id="navUser" className="hidden p-5">
                <div id="separatorNav" className="flex">
                    <span className="bg-gray h-px w-full opacity-50"></span>
                </div>
                <div id="userCard" className="flex cursor-pointer hover:text-blue p-2" onClick={goUserSettings}>
                    <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        className="h-12 w-12 rounded-full object-cover userAvatar"
                        alt="">
                    </img>
                    <div id="userInfo" className="ml-4 hidden">
                        <h2 className="text-size-3 font-bold">Zé António</h2>
                        <h4 className="text-size-1 text-gray">ze@email.com</h4>
                    </div>
                </div>
            </div>
            <div id="menu" className="p-5 flex w-full justify-evenly">
                <div className="itemContainer activeSide" onClick={(e) => { handleActive(e); goDashboard() }}>
                    <RiDashboardLine className="menuIcon"> </RiDashboardLine>
                    <h2 className="menuWords">Dashboard</h2>
                </div>
                <div className="itemContainer" onClick={(e) => { handleActive(e); handleSubMenuTasks(); goTasks() }}>
                    <FaTasks className="menuIcon"></FaTasks>
                    <h2 className="menuWords">Tasks</h2>
                </div>
                <div id="tasks" className="subMenu hidden ml-7 md:hidden">
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
                <div className="itemContainer email" onClick={(e) => { handleActive(e); handleSubMenuEmail(); goEmails() }}>
                    <AiOutlineMail className="menuIcon"></AiOutlineMail>
                    <h2 className="menuWords">Email</h2>
                </div>
                <div id="email" className="hidden ml-7 subMenu md:hidden">
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
                <div className="itemContainer" onClick={(e) => { handleActive(e); goContacts() }}>
                    <BsPerson className="menuIcon"></BsPerson>
                    <h2 className="menuWords">Contacts</h2>
                </div>
                <div className="itemContainer" onClick={(e) => { handleActive(e) }}>
                    <BsChat className="menuIcon"></BsChat>
                    <h2 className="menuWords">Chat</h2>
                </div>
                <div className="itemContainer" onClick={(e) => { handleActive(e); handleSubMenuDeals() }}>
                    <BiBookOpen className="menuIcon"></BiBookOpen>
                    <h2 className="menuWords">Deals</h2>
                </div>
                <div id="deals" className="hidden ml-7 subMenu md:hidden ">
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
                        <h2 className="subMenuWords">Urgent</h2>
                    </div>
                </div>
            </div>
            <div id="separatorNav" className="hidden w-full">
                <span className="bg-gray h-px w-full opacity-50"></span>
            </div>
            <div id="navSettings" className="hidden w-full">
                <div className="p-5">
                    <div className="itemContainer" onClick={goSettings}>
                        <BsThreeDots className="menuIcon"> </BsThreeDots>
                        <h2 className="menuWords">Settings</h2>
                    </div>
                </div>
            </div>
            <div id="sideBarToggle" className="hidden mt-auto p-5 items-center cursor-pointer justify-center" onClick={handleToggle}>
                <AiOutlineSwitcher className="menuIcon text-gray"></AiOutlineSwitcher>
                <h4 className="text-size-1 text-gray menuWords">Toggle sidebar</h4>
            </div>
        </div>

    )
}

