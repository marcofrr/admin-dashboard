import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { BsCardImage } from 'react-icons/bs'
export default function CreateEmail() {
    return (
        <div className="w">
            <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center cursor-pointer">
                    <IoIosArrowBack className="text-blue w-8 h-8"></IoIosArrowBack>
                    <div className="font-normal text-black-table">Back to emails</div>
                </div>
                <div>
                    <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl cursor-pointer">Send again</button>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col w-2/3 bg-white rounded-xl shadow-xl">
                    <div className="w-full">
                        <div className="flex items-center justify-between p-6 w-full">
                            <div id="right" className="flex relative p-4 w-24 bg-yellow rounded-md justify-center items-center">
                                <div className="transparent absolute text-white font-light text-size-2">Draft</div>
                            </div>
                            <div>
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></FiTrash2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between pl-6 pr-6 w-full">
                            <div id="right" className="">
                                <h3 className="font-light text-gray text-size-2">Email subject</h3>
                            </div>
                            <div>
                                <h2 className="font-normal text-gray text-size-3">Saved at 16:40,23 Dec, 2018</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 border-gray border-b mt-4 h-12 pl-6">
                        <h1>September Content offer</h1>
                    </div>
                    <div className="mt-4 mb-4 ml-6">
                        <h2 className="text-size-2 text-blue font-semibold cursor-pointer">
                            Add recepients
                        </h2>
                    </div>
                    <div id="separator" className="flex">
                        <span className="bg-gray h-px w-full opacity-50"></span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-auto h-96 bg-gray-bg m-6">
                        <BsCardImage className="w-12 h-12 text-gray-table mb-4"></BsCardImage>
                        <h3 className="text-black text-size-3">Drop an image her</h3>
                        <h4 className="text-gray font-light">or</h4>
                        <h2 className="text-blue text-size-3 font-bold cursor-pointer">Browse</h2>
                    </div>
                    <div className="w-1/2 pl-6 mt-6">
                        <h1 className="font-medium text-size-5">Lorem Ipsum</h1>
                    </div>
                    <div className="p-6 text-size-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

                        <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. </p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. </p>


                    </div>
                </div>
                <div className="flex flex-col w-1/3 h-1/2 bg-white rounded-xl shadow-md ml-6">
                    <div className="w-1/2 mt-4 h-12 pl-6">
                        <h1>Components</h1>
                    </div>
                    <div className="pl-6">
                        <input type="text" name="title" placeholder="Search component" className="mb-2rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-gray placeholder-opacity-50"></input>

                    </div>
                    <div id="separator" className="flex">
                        <span className="bg-gray h-px w-full opacity-50 mt-4"></span>
                    </div>
                    <div className="flex flex-col p-2">
                        <div className="flex">
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Text</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Image</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Video</h1>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Button</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Divider</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Social</h1>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Footer</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center w-1/3 h-1/3 p-2">
                                <div className="flex w-24 h-24 items-center justify-center bg-gray-bg">
                                    <BsCardImage className="w-6 h-6 text-gray-table"></BsCardImage>
                                </div>
                                <h1 className="text-gray">Header</h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}