import * as React from 'react';
import { AiOutlineSearch, AiOutlinePlus, AiOutlineTable, AiFillFile, AiFillBell, AiFillDatabase } from 'react-icons/ai'
import { BiChevronDown, BiConfused } from 'react-icons/bi'
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs'
import { FaLightbulb } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { GrStatusWarning } from 'react-icons/gr'
import { MdDashboard } from 'react-icons/md'
export interface AdminPageProps {
}
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
        icon: <AiFillBell/>,
        title: "You have 4 pending tasks"
    },
    {
        icon: <AiFillDatabase/>,
        title: "Sever #1 Overloaded"
    },
    {
        icon: <BsFillCartFill/>,
        title: "New oder recelved"
    },
    {
        icon: <BsFillPersonFill/>,
        title: "New user registered"
    },
]
export default function AdminPage(props: AdminPageProps) {
    return (
        <div className='bg-cyan-100 h-screen'>
            <div className='flex items-center justify-between p-2 bg-gray-900'>
                <div className='flex items-center justify-between w-[20%]'>
                    <p className=' text-xl font-semibold text-white'><span className='text-2xl font-bold text-purple-500'>E-</span>Commerce Platform</p>
                    <div className='text-white text-xl'><AiOutlineSearch /></div>
                </div>
                <div className='w-80% flex justify-end bg-yellow-400 text-white p-1.5 rounded-full'><FaLightbulb /></div>
            </div>
            <div className='flex'>
                <div className='w-[17%] bg-white h-screen'>
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
                    <div className='flex justify-between'>
                        <div className='w-[60%] bg-white h-[200px] '>
                            <div className='flex  justify-between p-2'>
                                <div>
                                    <div className='text-xl font-semibold'>Sales Summary</div>
                                    <div className='text-gray-500'>Overview of Lastest Month</div>
                                </div>
                                <div className='flex'>
                                    <div className='flex items-center mr-3 text-sky-500'><div className='p-1 mr-1 rounded-full bg-sky-500'></div> Iphone</div>
                                    <div className='flex items-center text-purple-500'> <div className='p-1 mr-1 rounded-full bg-purple-500'></div>Ipad</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[39%] bg-white '>
                            <div className='p-2'>
                                <div className='text-xl font-semibold'>Feeds</div>
                                {ItemFeeds.map((item)=>(
                                    <div key={item.title}>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
