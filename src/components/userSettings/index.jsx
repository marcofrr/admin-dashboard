import React from 'react'
import { HiPencil } from 'react-icons/hi'
import './styles.css'
export default function UserSettings() {
    return (
        <div id="userSettingsContainer" className="flex flex-col w-full bg-white rounded-md shadow-xl m-4 overflow-auto">
            <div id="userSettingsAdmin" className="flex flex-col h-full border-px justify-center items-center">
                <div id="userSettingsAvatar" className="flex items-center justify-center mt-8 w-full">
                    <div className="cursor-pointer hover:opacity-90">
                        <img
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            className="h-28 w-28 rounded-full object-cover"
                            alt="">
                        </img>
                        <div className="relative rounded-ful h-6 w-6 left-20 bottom-6">
                            <div className="flex items-center bg-white rounded-full justify-center h-full w-full">
                                <HiPencil className="text-blue h-4 w-4"></HiPencil>
                            </div>
                        </div>
                        <div className="flex w-24 h-6 bg-black rounded-md justify-center items-center ml-2">
                            <div className="transparent  text-white font-light text-size-2">Admin</div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="userSettingsBasicInfo" className="flex flex-col pl-6 border-px mt-8">
                <h2 className="font-extrabold text-size-3">Basic information</h2>
                <h4 className="text-gray text-size-1 mt-4">First name</h4>
                <h3>Sierra</h3>
                <h4 className="text-gray text-size-1 mt-8">Last name</h4>
                <h3>Ferguson</h3>
                <h4 className="text-gray text-size-1 mt-8">Email</h4>
                <h3>s.ferguson@gmail.com</h3>
                <h4 className="text-gray text-size-1 mt-8">Phone number</h4>
                <h3>+1 999 999 9999</h3>

                <h2 className="font-extrabold text-size-3 mt-8">Additional information</h2>
                <h4 className="text-gray text-size-1 mt-4">City</h4>
                <h3>Scranton</h3>
                <h4 className="text-gray text-size-1 mt-8">State</h4>
                <h3>Pennsylvania</h3>
                <h4 className="text-gray text-size-1 mt-8">Country</h4>
                <h3>United States</h3>
                <h2 className="font-extrabold text-size-3 mt-8">Job</h2>
                <h4 className="text-gray text-size-1 mt-4">Company</h4>
                <h3>Designer</h3>
            </div>
            <div id="userSettingsChangePass" className="flex flex-col pl-6 pr-6 pb-14 mt-8">
                <h2 className="font-extrabold text-size-3 mb-8">Change password</h2>

                <div className="flex flex-col border-b-2 border-gray-icon w-full h-8 input">
                    <input type="password" name="website" placeholder="Enter previous password" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                </div>
                <div className="flex flex-col border-b-2 border-gray-icon w-full h-8 input mt-8">
                    <input type="password" name="website" placeholder="New password" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                </div>
                <div className="flex flex-col border-b-2 border-gray-icon w-full h-8 input mt-8">
                    <input type="password" name="website" placeholder="Confirm new password" className="rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black"></input>
                </div>

                <button className="mt-8 border-2 border-gray h-8 hover:border-blue rounded-md">Change password</button>
            </div>
        </div>
    )
}