import React, { useEffect } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { RiNotification3Line } from 'react-icons/ri'

import './styles.css'

export default function Topbar(props) {
    const t = props.name

    useEffect(() => {
        // Update the document title using the browser API
        console.log('props', props)
    }, [props]);
    return (
        <div className=" bg-white">
            <div className="topbar h-14 flex w-full items-center">
                <div className="flex row items-center justify-between p-3 w-full">
                    <img
                        id="topBarAvatar"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        className="h-8 w-8 rounded-full object-cover"
                        alt="">
                    </img>
                    <h1 className="font-extrabold topBarTitle">{props.name}</h1>
                    <div id="topLeft" className="relative cursor-pointer">
                        <span className="absolute top-1 right-52 items-center pl-2 text-gray">
                            <IoMdSearch className="h-4 w-4"></IoMdSearch>
                        </span>
                        <input className="focus:outline-none" placeholder='Global search'></input>
                    </div>
                    <div id="topRight" className="font-bold text-xs text-gray cursor-pointer">
                        <div id="icons" className="flex row relative items-center justify-center">
                            <RiNotification3Line className="icon"></RiNotification3Line>
                            <span id="notificationNum" className="absolute flex h-3 w-3 bg-red text-white top-1 left-4 rounded-lg items-center justify-center "></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
