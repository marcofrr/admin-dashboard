import React from 'react'
import './styles.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Topbar from '../topbar';

const LineData = [
    {
        name: '1 Dec', uv: 400, pv: 240, amt: 240,
    },
    {
        name: '8 Dec', uv: 300, pv: 139, amt: 221,
    },
    {
        name: '16 Dec', uv: 200, pv: 980, amt: 229,
    },
    {
        name: '31 Dec', uv: 278, pv: 390, amt: 200,
    },
];

const PieData = [
    { name: 'Group A', value: 200 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 200 },

];

const COLORS = ['#2ED47A', '#F76858', '#FFB948'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function Dashboard() {
    return (
        <div className="flex flex-col w-full ">
            <Topbar name="Dashboard" placeholder="Global search"></Topbar>
            <div id="dashboardContainer" className="flex flex-col bg-transparent p-4 rounded-md">
                {/* left content */}
                <div id="dashboardLeft" className="flex-grow-1 bg-white w-full rounded-md shadow-xl mb-4">

                    <div id="dashDropMobile" className="flex p-4 justify-end desktopHidden">
                        <div className="mr-2">Show:</div>
                        <div className="z-50">
                            <div className="dropdown inline-block relative">
                                <button className="text-blue font-medium rounded inline-flex items-center">
                                    <span className="mr-1">This week</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between m-4 items-center  py-2">
                        <div>
                            <h3>8 task <span className="text-green">completed</span> out of 10</h3>
                        </div>
                        <div id="dashDropDesktop" className="hidden desktopFlex">
                            <div className="mr-2">Show:</div>
                            <div className="z-50">
                                <div className="dropdown inline-block relative">
                                    <button className="text-blue font-medium rounded inline-flex items-center">
                                        <span className="mr-1">This week</span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray">
                                <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green"></div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <h2 className="font-bold">23 December, <span className="text-gray font-semibold">Sunday</span></h2>
                    </div>
                    <div className="flex m-4 justify-between">
                        <div id="day" className="flex flex-col items-center">
                            <h2 className="text-gray">Sun</h2>
                            <div className="flex items-center justify-center bg-blue rounded-2xl w-6 h-6 text-white text-size-1">23</div>
                        </div>
                        <div id="day" className="flex flex-col cursor-pointer items-center hoverDay">
                            <h2 className="text-gray day">Mon</h2>
                            <div className="flex items-center justify-center rounded-2xl w-6 h-6 text-gray text-size-1">
                                <h2 className="day">24</h2>
                            </div>
                        </div>
                        <div id="day" className="flex flex-col cursor-pointer items-center hoverDay">
                            <h2 className="text-gray day">Tue</h2>
                            <div className="flex items-center justify-center rounded-2xl w-6 h-6 text-gray text-size-1">
                                <h2 className="day">25</h2>
                            </div>
                        </div>
                        <div id="day" className="flex flex-col cursor-pointer items-center hoverDay">
                            <h2 className="text-gray day">Wed</h2>
                            <div className="flex items-center justify-center rounded-2xl w-6 h-6 text-gray text-size-1">
                                <h2 className="day">26</h2>
                            </div>
                        </div>
                        <div id="day" className="flex flex-col cursor-pointer items-center hoverDay">
                            <h2 className="text-gray day">Thu</h2>
                            <div className="flex items-center justify-center rounded-2xl w-6 h-6 text-gray text-size-1">
                                <h2 className="day">27</h2>
                            </div>
                        </div>
                        <div id="day" className="flex flex-col cursor-pointer items-center hoverDay">
                            <h2 className="text-gray day">Fri</h2>
                            <div className="flex items-center justify-center rounded-2xl w-6 h-6 text-gray text-size-1">
                                <h2 className="day">28</h2>
                            </div>
                        </div>
                        <div id="day" className="flex flex-col cursor-pointer items-center hoverDay">
                            <h2 className="text-gray day">Sat</h2>
                            <div className="flex items-center justify-center rounded-2xl w-6 h-6 text-gray text-size-1">
                                <h2 className="day">229</h2>
                            </div>
                        </div>
                    </div>


                    <div id="separator" className="flex">
                        <span className="bg-gray h-px w-full opacity-50"></span>
                    </div>

                    <div id="taskCard" className="taskCard">
                        <div id="taskHeader" className="flex flex-col-reverse p-2 w-full">
                            <div className="flex flex-col">
                                <h1 className="font-black">Send benefit review by Sunday</h1>
                                <div className="flex">
                                    <h2 className="text-gray">Due date:</h2>
                                    <h2 className="font-medium ml-2">December 23,2021</h2>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-right text-gray mb-2">Reminder</h3>
                            </div>
                        </div>
                        <div className="flex justify-between bottom-0 p-2">
                            <div className="flex items-center ">
                                <img
                                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    className="h-8 w-8 rounded-full object-cover"
                                    alt="">
                                </img>
                                <h2 className="font-medium text-gray-table ml-2 text-size-1">George Fields</h2>
                            </div>

                            <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                                <h2 className="transparent absolute text-white font-light text-size-1">Completed</h2>
                            </div>
                        </div>
                    </div>
                    <div id="taskCard" className="taskCard">
                        <div id="taskHeader" className="flex flex-col-reverse p-2 w-full">
                            <div className="flex flex-col">
                                <h1 className="font-black">Send benefit review by Sunday</h1>
                                <div className="flex">
                                    <h2 className="text-gray">Due date:</h2>
                                    <h2 className="font-medium ml-2">December 23,2021</h2>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-right text-gray mb-2">Reminder</h3>
                            </div>
                        </div>
                        <div className="flex justify-between bottom-0 p-2">
                            <div className="flex items-center ">
                                <img
                                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    className="h-8 w-8 rounded-full object-cover"
                                    alt="">
                                </img>
                                <h2 className="font-medium text-gray-table ml-2 text-size-1">George Fields</h2>
                            </div>

                            <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                                <h2 className="transparent absolute text-white font-light text-size-1">Completed</h2>
                            </div>
                        </div>
                    </div>
                    <div id="taskCard" className="taskCard">
                        <div id="taskHeader" className="flex flex-col-reverse p-2 w-full">
                            <div className="flex flex-col">
                                <h1 className="font-black">Send benefit review by Sunday</h1>
                                <div className="flex">
                                    <h2 className="text-gray">Due date:</h2>
                                    <h2 className="font-medium ml-2">December 23,2021</h2>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-right text-gray mb-2">Reminder</h3>
                            </div>
                        </div>
                        <div className="flex justify-between bottom-0 p-2">
                            <div className="flex items-center ">
                                <img
                                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    className="h-8 w-8 rounded-full object-cover"
                                    alt="">
                                </img>
                                <h2 className="font-medium text-gray-table ml-2 text-size-1">George Fields</h2>
                            </div>

                            <div id="right" className="flex relative p-4 w-24 bg-green rounded-md justify-center items-center">
                                <h2 className="transparent absolute text-white font-light text-size-1">Completed</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mb-4">
                        <h2 className="text-blue cursor-pointer font-bold">Show More</h2>
                    </div>
                </div>
                <div id="dashboardRight" className="flex flex-col bg-transparent w-full">
                    <div id="lineChartContainer" className=" bg-white mb-4 shadow-xl rounded-md">
                        <div className="flex justify-between">
                            <div className="m-4">
                                <h1 className="font-black text-size-4">Deals</h1>
                            </div>
                            <div>
                                <div className="flex m-4">
                                    <div className="mr-2">Show:</div>
                                    <div className="dropdown inline-block relative">
                                        <button className="text-blue font-medium rounded inline-flex items-center">
                                            <span className="mr-1">Monthly</span>
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="w-full h-full flex justify-center pt-4 pb-4">
                            <ResponsiveContainer width="100%" height="80%">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={LineData}
                                    margin={{
                                        top: 5,
                                        right: 50,
                                        left: 5,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="pv" stroke="#109CF1" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>

                        </div>
                    </div>

                    <div id="pieChartContainer" className=" bg-white shadow-xl rounded-md mb-12">
                        <div className="flex justify-between">
                            <div className="m-4">
                                <h1 className="font-black text-size-4">Tasks</h1>
                            </div>
                            <div>
                                <div className="flex m-4">
                                    <div className="mr-2">Show:</div>
                                    <div className="dropdown inline-block relative">
                                        <button className="text-blue font-medium rounded inline-flex items-center">
                                            <span className="mr-1">Monthly</span>
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="flex w-3/5 h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart className="w-32">
                                        <Pie
                                            data={PieData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {PieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-col w-2/5 justify-center">
                                <div className="flex items-center p-2">
                                    <span className="transparent h-3 w-3 rounded-lg border-2 border-yellow mr-2"></span>
                                    <span className="text-size-1">Active</span>
                                </div>
                                <div className="flex items-center p-2">
                                    <span className="transparent h-3 w-3 rounded-lg border-2 border-green mr-2"></span>
                                    <span className="text-size-1">Completed</span>
                                </div>
                                <div className="flex items-center p-2">
                                    <span className="transparent h-3 w-3 rounded-lg border-2 border-red mr-2"></span>
                                    <span className="text-size-1">Ended</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <div id="pieChartContainer" className="flex flex-col bg-white shadow-xl rounded-md mb-8">
                        <div className="flex justify-between">
                            <div className=" m-4">
                                <h1 className="font-black">Tasks</h1>
                            </div>
                            <div>
                                <div className="flex  m-4">
                                    <div className="mr-2">Show:</div>
                                    <div className="dropdown inline-block relative">
                                        <button className="text-blue font-medium rounded inline-flex items-center">
                                            <span className="mr-1">Monthly</span>
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="separator" className="flex">
                            <span className="bg-gray h-px w-full opacity-50"></span>
                        </div>
                        <div className="flex h-full w-full items-center">
                            <div className="flex w-3/5 h-full">
                                <ResponsiveContainer width="100%" height="80%">
                                    <PieChart>
                                        <Pie
                                            data={PieData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {PieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-col w-2/5">
                                <div className="flex items-center p-2">
                                    <span className="transparent h-3 w-3 rounded-lg border-2 border-yellow mr-2"></span>
                                    <span className="text-size-1">Active</span>
                                </div>
                                <div className="flex items-center p-2">
                                    <span className="transparent h-3 w-3 rounded-lg border-2 border-green mr-2"></span>
                                    <span className="text-size-1">Completed</span>
                                </div>
                                <div className="flex items-center p-2">
                                    <span className="transparent h-3 w-3 rounded-lg border-2 border-red mr-2"></span>
                                    <span className="text-size-1">Ended</span>
                                </div>

                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
        //main content div

    )
}
