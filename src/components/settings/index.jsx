import React from 'react'
import { RiUserSettingsLine, RiNotification3Line } from 'react-icons/ri'
import { MdAddBox } from 'react-icons/md'
import { GoPerson } from 'react-icons/go'
import { CgTag } from 'react-icons/cg'
import './styles.css'
export default function Settings() {
    return (
        <div className="flex w-full">
            <div className="flex flex-col w-1/4 bg-white rounded-md shadow-xl  h-full m-4">
                <div className="settingsItemContainer active">
                    <RiUserSettingsLine className="h-8 w-8"></RiUserSettingsLine>
                    <div className="flex flex-col pl-2">
                        <h2 className="font-bold">Account</h2>
                        <h3 className="text-gray text-size-1 pb-2">Your account preferences</h3>
                    </div>
                </div>
                <div className="settingsItemContainer">
                    <RiNotification3Line className="h-8 w-8"></RiNotification3Line>
                    <div className="flex flex-col pl-2">
                        <h2 className="font-bold">Notifications</h2>
                        <h3 className="text-gray text-size-1 pb-2">Your notifications preferences</h3>
                    </div>
                </div>
                <div className="settingsItemContainer">
                    <MdAddBox className="h-8 w-8"></MdAddBox>
                    <div className="flex flex-col pl-2">
                        <h2 className="font-bold">Integrations</h2>
                        <h3 className="text-gray text-size-1 pb-2">Add or remove integrations</h3>
                    </div>
                </div>
                <div className="settingsItemContainer">
                    <GoPerson className="h-8 w-8"></GoPerson>
                    <div className="flex flex-col pl-2">
                        <h2 className="font-bold">Colleagues</h2>
                        <h3 className="text-gray text-size-1 pb-2">Your colleagues preferences</h3>
                    </div>
                </div>
                <div className="settingsItemContainer">
                    <CgTag className="h-8 w-8"></CgTag>
                    <div className="flex flex-col pl-2">
                        <h2 className="font-bold">Tags</h2>
                        <h3 className="text-gray text-size-1 pb-2">Add or removes tags</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-3/4 bg-white rounded-md shadow-xl m-4">
                <div className="w-full p-8 border-b-2 border-gray-icon">
                    <h1 className="font-bold text-size-6">Account Preferences</h1>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-1/2 p-8">
                        <div className="p-4">
                            <label htmlFor="type" className="m-b text-gray">Type</label>
                            <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                <option value="reminder">Reminder</option>
                            </select>
                        </div>
                        <div className="p-4">
                            <label htmlFor="type" className="m-b text-gray">Type</label>
                            <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                <option value="reminder">Reminder</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 p-8">
                        <div className="p-4">
                            <label htmlFor="type" className="m-b text-gray">Type</label>
                            <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                <option value="reminder">Reminder</option>
                            </select>
                        </div>
                        <div className="p-4">
                            <label htmlFor="type" className="m-b text-gray">Type</label>
                            <select name="cars" id="type" className="appearance-none mb-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-black">
                                <option value="reminder">Reminder</option>
                            </select>
                        </div>
                        <div className="p-4">
                            <button className="mt-8 h-8 w-40 text-white bg-blue-light rounded-lg hover:opacity-80">Save</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}