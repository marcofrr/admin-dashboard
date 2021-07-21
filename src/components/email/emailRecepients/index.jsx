import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { HiPencil } from 'react-icons/hi'
import './styles.css'
export default function EmailRecepients() {

    const toggleRecepients = () => {
        const email = document.querySelector("#emailBody")
        const recepients = document.querySelector("#recepients")
        email.classList.contains("recepientListOn") ? email.classList.remove("recepientListOn") : email.classList.add("recepientListOn")
        recepients.classList.contains("on") ? recepients.classList.remove("on") : recepients.classList.add("on")
    }

    return (
        <div className="flex w-full">
            <div className="emailContent">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center cursor-pointer">
                        <IoIosArrowBack className="text-blue w-8 h-8"></IoIosArrowBack>
                        <div className="font-normal text-black-table">Back to emails</div>
                    </div>
                    <div>
                        <button className="text-white bg-blue rounded-md w-40 h-10 hover:bg-blue-light shadow-xl cursor-pointer">Send again</button>
                    </div>
                </div>
                <div className="flex w-full">
                    <div id="emailBody" className="w-full">
                        <div className="flex flex-col bg-white w-full rounded-md mt-8 shadow-2xl overflow-y-hidden">
                            <div className="flex items-center justify-between p-4">
                                <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                                    <div className="transparent absolute text-white font-light text-size-2">Sent</div>
                                </div>
                                <div>
                                    <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></FiTrash2>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <h1 className="text-size-5 font-semibold">Internal email</h1>
                                <div>
                                    <h3 className="text-gray font-light">8:20 am, Aug 1, 2020</h3>
                                </div>
                            </div>
                            <div className="flex pl-4 pb-2">
                                <span className="text-gray font-light mr-2">Recepients:</span><h3 className="cursor-pointer hover:text-blue text-black" onClick={toggleRecepients}>120</h3>
                            </div>
                            <div className="flex pl-4 pb-2">
                                <span className="text-gray font-light mr-2">Opens:</span><h3 className="cursor-pointer hover:text-blue text-black">72</h3>
                            </div>
                            <div className="flex pl-4 pb-2">
                                <span className="text-gray font-light mr-2">Link clicks:</span><h3 className="cursor-pointer hover:text-blue text-black">96</h3>
                            </div>
                            <div id="separator" className="flex">
                                <span className="bg-gray h-px w-full opacity-50"></span>
                            </div>
                            <div className="p-4">
                                <img
                                    src="https://thirdside.co/wp-content/uploads/2019/04/email-list-search-results-e1556216678929.jpg"
                                    className="h-72  w-full object-cover"
                                    alt="">
                                </img>
                            </div>
                            <div className="w-full p-4">
                                <h1 className="text-size-5 font-semibold">Lorem Ipsum</h1>
                            </div>
                            <div className="pl-4 pr-4 pb-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.

                                    Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.

                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.

                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus.

                                    Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div id="recepients" className="hidden flex-col w-1/4 rounded-md shadow-xl bg-white mt-8 ml-4">
                        <h1 className="p-4 font-bold">Recepients</h1>
                        <input type="text" name="title" placeholder="Search recepient" className="mb-2 pl-4 pr-4 pb-4 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-white placeholder-gray placeholder-opacity-50"></input>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex items-center border-gray-icon h-16 w-full singleRecepient">
                            <div className="w-full overflow-clip overflow-hidden border-r-1rem border-transparent">
                                <h3 className="text-black cursor-pointer p-4">mike@gmail.com</h3>
                            </div>
                            <div className="hidden items-center bg-white border-l border-gray-icon  h-16 w-1/3 p-2 recepientActions">
                                <FiTrash2 className="text-gray w-6 h-6 hover:text-blue cursor-pointer mr-2"></FiTrash2>

                                <HiPencil className="text-gray w-6 h-6 hover:text-blue cursor-pointer"></HiPencil>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
