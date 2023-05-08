import {useEffect} from 'react';
import { AiOutlineSearch, AiOutlinePlus, AiOutlineTable, AiFillFile, AiFillBell, AiFillDatabase } from 'react-icons/ai'
import { BiChevronDown, BiConfused } from 'react-icons/bi'
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs'
import { FaLightbulb } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { GrStatusWarning } from 'react-icons/gr'
import { MdDashboard } from 'react-icons/md'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsChart, getItemsNewFeed, getItemsProduct, selectAllChart, selectAllNewFeed, selectAllProduct } from '@/feature/admin/adminSilde';
export interface AdminPageProps {
}
const data1 = [
    { month: ' 1', iphone: 0, ipad: 0 },
    { month: ' 2', iphone: 3000, ipad: 2000 },
    { month: ' 3', iphone: 2000, ipad: 1120 },
    { month: ' 4', iphone: 2780, ipad: 1000 },
    { month: ' 5', iphone: 1890, ipad: 1250 },
    { month: ' 6', iphone: 2390, ipad: 1560 },
    { month: ' 7', iphone: 3490, ipad: 3200 },
    { month: ' 8', iphone: 3490, ipad: 3400 },
];
const ItemSideBar = [
    {
        icon: <AiOutlinePlus />,
        title: "Create new"
    },
    {
        icon: <MdDashboard />,
        title: "Dashboard"
    },
    {
        icon: <ImProfile />,
        title: "Profile"
    },
    {
        icon: <AiOutlineTable />,
        title: "Table"
    },
    {
        icon: <BiConfused />,
        title: "Icon"
    },
    {
        icon: <AiFillFile />,
        title: "Blank"
    },
    {
        icon: <GrStatusWarning />,
        title: "404"
    },
]
const ItemFeeds = [
    {
        icon: <AiFillBell />,
        title: "You have 4 pending tasks",
        time: "just now",
    },
    {
        icon: <AiFillDatabase />,
        title: "Sever #1 Overloaded",
        time: "2 month ago",
    },
    {
        icon: <BsFillCartFill />,
        title: "New oder recelved",
        time: "31 may"
    },
    {
        icon: <BsFillPersonFill />,
        title: "New user registered",
        time: "30 may"
    },
]
const ItemProducts = [
    {
        key: "EA",
        role: "Elite Admin",
        license: "Single Use",
        spagent: "John Doe",
        technology: "Angular",
        tickets: 46,
        sales: 356,
        earnings: "$2850.06"
    },
    {
        key: "MA",
        role: "Monster Admin",
        license: "Single Use",
        spagent: "TAQ",
        technology: "VueJs",
        tickets: 46,
        sales: 356,
        earnings: "$2850.06"
    },
    {
        key: "MP",
        role: "Material Pro Admin",
        license: "Single Use",
        spagent: "PVP",
        technology: "React",
        tickets: 46,
        sales: 356,
        earnings: "$2850.06"
    },
    {
        key: "AA",
        role: "Ample Admin",
        license: "Single Use",
        spagent: "LDH",
        technology: "Bootstrap",
        tickets: 46,
        sales: 356,
        earnings: "$2850.06"
    },
]
export default function AdminPage(props: AdminPageProps) {
    const dispatch = useDispatch()
    const chart = useSelector(selectAllChart)
    const newfeed = useSelector(selectAllNewFeed)
    const product = useSelector(selectAllProduct)
    useEffect(() => {
        dispatch(getItemsChart())
    }, [dispatch])
    useEffect(() => {
        dispatch(getItemsNewFeed())
    }, [dispatch])
    useEffect(() => {
        dispatch(getItemsProduct())
    }, [dispatch])
    return (
        <div className='bg-cyan-100 h-screen'>
            <div className='flex items-center justify-between p-2 bg-gray-900 h-[5%]'>
                <div className='flex items-center justify-between w-[20%]'>
                    <p className=' text-xl font-semibold text-white'><span className='text-2xl font-bold text-purple-500'>E-</span>Commerce Platform</p>
                    <div className='text-white text-xl'><AiOutlineSearch /></div>
                </div>
                <div className='w-80% flex justify-end bg-yellow-400 text-white p-1.5 rounded-full'><FaLightbulb /></div>
            </div>
            <div className='flex h-[95%]'>
                <div className='w-[17%] bg-white '>
                    <div className='p-3'>
                        <div className='flex items-center'>
                            <div className='flex justify-end bg-yellow-400 text-white p-3 rounded-full mr-4'><FaLightbulb /></div>
                            <div>
                                <div className='flex items-center font-bold'>Steave Jobs <BiChevronDown /></div>
                                <div>abc@gmail.com</div>
                            </div>
                        </div>
                        <div className='mt-7'>
                            {ItemSideBar.map((item) => (
                                <div className='flex items-center p-2 my-3 hover:bg-gray-200 text-gray-500' key={item.title}>
                                    <div className='mr-4'>{item.icon}</div>
                                    <div className='font-medium'>{item.title}</div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center mt-7'>
                            <div className='w-[70%] p-2 text-center bg-red-500 text-white rounded-md'>Upgrade to Pro</div>
                        </div>
                    </div>
                </div>
                <div className='w-[83%] p-3'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='text-xl font-semibold'>Dashboard</div>
                            <div className='flex text-sm justify-between'>
                                <div>Home</div>
                                <div>Library</div>
                            </div>
                        </div>
                        <div>
                            <div className=' p-2 text-center bg-red-500 text-white rounded-md'>Upgrade to Pro</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='w-[60%] bg-white  '>
                                <div className='flex  justify-between p-2'>
                                    <div>
                                        <div className='text-xl font-semibold'>Sales Summary</div>
                                        <div className='text-gray-500'>Overview of Lastest Month</div>
                                    </div>
                                </div>
                                <div>
                                    <LineChart width={800} height={200} data={chart}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="iphone" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="ipad" stroke="#82ca9d" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </div>
                            </div>
                            <div className='w-[39%] bg-white '>
                                <div className='p-2'>
                                    <div className='text-xl font-semibold'>Feeds</div>
                                    {ItemFeeds.map((item) => (
                                        <div key={item.title} className='flex items-center justify-between p-4'>
                                            <div className='flex items-center'>
                                                <div className={`p-1 rounded-full text-white mr-4 ${item.icon === <AiFillBell /> ? 'bg-blue-600' : ''}`}>{item.icon}</div>
                                                <div>{item.title}</div>
                                            </div>
                                            <div className='text-gray-400 text-sm'>{item.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-white mt-4'>
                        <div className='flex justify-between p-2'>
                            <div>
                                <div className='text-xl font-semibold'>Top Selling Products</div>
                                <div className='text-gray-500'>Overview of Top Selling Items</div>
                            </div>
                            <div>
                                <div className='font-medium flex items-center'>Monthly <div><BiChevronDown /></div></div>
                            </div>
                        </div>
                        <div className='flex p-2'>
                            <div className='w-[25%]'>Product</div>
                            <div className='w-[15%]'>License</div>
                            <div className='w-[20%]'>Support Agent</div>
                            <div className='w-[10%]'>Technology</div>
                            <div className='w-[10%]'>Tickets</div>
                            <div className='w-[10%]'>Sales</div>
                            <div className='w-[10%]'>Earnings</div>
                        </div>
                        <div className='p-2'>
                            {ItemProducts.map((item) => (
                                <div key={item.key} className='flex items-center p-1'>
                                    <div className='w-[25%] flex items-center'>
                                        <div className='w-[20%]'>
                                            <div className={`w-[50%] rounded-full p-2 
                                        ${item.key === "EA" ? "bg-blue-500" : ""} 
                                        ${item.key === "MA" ? "bg-orange-500" : ""} 
                                        ${item.key === "MP" ? "bg-green-500" : ""}
                                        ${item.key === "AA" ? "bg-purple-500" : ""}
                                         text-white`}>
                                                {item.key}
                                            </div>
                                        </div>
                                        <div >{item.role}</div>
                                    </div>
                                    <div className='w-[15%]' >{item.license}</div>
                                    <div className='w-[20%]'>{item.spagent}</div>
                                    <div className='w-[10%]'>{item.technology}</div>
                                    <div className='w-[10%]'>{item.tickets}</div>
                                    <div className='w-[10%]'>{item.sales}</div>
                                    <div className='w-[10%]'>{item.earnings}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
