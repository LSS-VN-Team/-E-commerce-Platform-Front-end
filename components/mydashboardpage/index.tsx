/* eslint-disable @next/next/no-img-element */
import { getItemsDashBoard, selectAllMyDashBoard } from '@/feature/dashboard/mydashboardSlide';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineLock, AiOutlineHome, AiOutlineRight } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsPerson, BsBoxSeam } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { GiEarthAmerica } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
const MenuItems = [
    {
        key: 1,
        icon: <BsBoxSeam />,
        title: "Orders",
    },
    {
        key: 2,
        icon: <AiOutlineHeart />,
        title: "Favourites",
    },
    {
        key: 3,
        icon: <BsPerson />,
        title: "Personal data",
    },
    {
        key: 4,
        icon: <AiOutlineLock />,
        title: "Change password",
    },
    {
        key: 5,
        icon: <AiOutlineHome />,
        title: "Addresses",
    },
    {
        key: 6,
        icon: <FiLogOut />,
        title: "Sign out",
    }
]
export interface MyDashBoardPageProps {
}

export default function MyDashBoardPage(props: MyDashBoardPageProps) {
    const ItemDashBoard = useSelector(selectAllMyDashBoard)
    
    const getStyleByContent = (status: any) => {
        switch (status) {
            case "Delivered":
                return { color: "text-green-500" };
            case "Out for delivery":
                return { color: "text-yellow-500" };
            case "Processing":
                return { color: "text-gray-400" };
            default:
                return { color: "black" };
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItemsDashBoard())
    }, [dispatch])
    return (
        <div className='w-[60%] mx-auto h-screen bg-white shadow-boxsd'>
            <div className='flex justify-between items-center py-5'>
                <div className='flex w-[30%] justify-evenly font-semibold'>
                    <p className='hover:text-gray-500 cursor-pointer'>WOMEN</p>
                    <p className='hover:text-gray-500 cursor-pointer'>MEN</p>
                    <p className='hover:text-gray-500 cursor-pointer'>KIDS</p>
                    <p className='text-red-500 hover:text-red-400 cursor-pointer'>SALE</p>
                </div>
                <div className='w-[40%] flex justify-center'>
                    <p className=' text-xl font-semibold'><span className='text-2xl font-bold text-purple-500'>E-</span>Commerce Platform</p>
                </div>
                <div className='flex items-center justify-evenly w-[30%] text-gray-400 text-xl'>
                    <div className=' p-1.5 rounded-full bg-gray-100 hover:scale-125 hover:bg-gray-200 cursor-pointer transition-transform duration-300'><BiSearch /></div>
                    <div className=' p-1.5 rounded-full bg-gray-100 hover:scale-125 hover:bg-gray-200 cursor-pointer transition-transform duration-300'><GiEarthAmerica /></div>
                    <div className=' p-1.5 rounded-full bg-gray-100 hover:scale-125 hover:bg-gray-200 cursor-pointer transition-transform duration-300'><BsPerson /></div>
                    <div className=' p-1.5 rounded-full bg-gray-100 hover:scale-125 hover:bg-gray-200 cursor-pointer transition-transform duration-300'><AiOutlineHeart /></div>
                    <div className=' p-1.5 rounded-full bg-gray-100 hover:scale-125 hover:bg-gray-200 cursor-pointer transition-transform duration-300'><AiOutlineShoppingCart /></div>
                </div>
            </div>
            <div className='ml-9'>
                <p className='text-2xl font-medium mb-4'>My Account</p>
                <div className='flex'>
                    <div className='w-[30%]'>
                        <div className='border p-5'>
                            <p className='text-lg font-medium'>Welcome, Jonh Doe</p>
                            {MenuItems.map((item) => (
                                <div className='hover:bg-gray-300 rounded-md border-b' key={item.key}>
                                    <div className='flex items-center px-3 py-5  justify-between '>
                                        <div className='flex items-center'>
                                            <div className='mr-3'>{item.icon}</div>
                                            <div>{item.title}</div>
                                        </div>
                                        <div><AiOutlineRight /> </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='border w-[60%] ml-10'>
                        <div className='p-6'>
                            <p className='text-lg font-bold'>Oders</p>
                            <div className='border p-5'>
                                {ItemDashBoard.map((item) => (
                                    <div key={item._id}>
                                        <div className='flex justify-between'>
                                            <img src="https://giadinh.mediacdn.vn/2017/photo-0-1503452666516.jpg" alt='' about='' className='w-[170px] h-[240px]' />
                                            <div><button className='border-2 border-gray-400 rounded-sm text-sm'><p className='px-6 py-2'>VIEW ORDER</p></button></div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <p className='font-bold text-sm'>Order Number</p>
                                                <p className='text-sm'>{item.OrderNumber}</p>
                                            </div>
                                            <div>
                                                <p className='font-bold text-sm'>Shipped date</p>
                                                <p className='text-sm'>{item.ShippedDate}</p>
                                            </div>
                                            <div >
                                                <p className='font-bold text-sm'>Total</p>
                                                <p className='text-sm'>{item.Total}</p>
                                                <div>
                                                    <p className='font-bold text-sm'>Status</p>
                                                    <p className={`${getStyleByContent(item.Status)} text-sm`}>{item.Status}</p>
                                                </div>
                                            </div>
                                        </div>
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
