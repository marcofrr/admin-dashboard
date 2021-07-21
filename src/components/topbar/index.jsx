import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { RiNotification3Line } from 'react-icons/ri'

import './styles.css'

export default function Topbar() {
    return (
        <div className=" bg-white" >
            <div className="topbar h-14 flex pl-14 w-full">
                <div className="flex row items-center justify-between p-3 w-full">
                    <div id="topLeft" className="relative cursor-pointer">
                        <span className="absolute top-1 right-52 items-center pl-2 text-gray">
                            <IoMdSearch className="h-4 w-4"></IoMdSearch>
                        </span>
                        <input className="focus:outline-none" placeholder='Global search'></input>
                    </div>
                    <div id="topRight" className="font-bold text-xs text-gray cursor-pointer mr-6">
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
