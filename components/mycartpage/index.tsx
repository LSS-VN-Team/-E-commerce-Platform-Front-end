/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillLock } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import ItemDetail from './ItemDetail';
import { useState } from 'react';
export interface MyCardPageProps {
}

export default function MyCardPage(props: MyCardPageProps) {
    const [totalAmount, setTotalAmount] = useState(0);
    return (
        <div className='max-w-[95%] mx-auto my-0'>
            <div className='border-b py-5'>
                <div className='flex items-center mb-2'>
                    <div className='w-[90%] text-center'>
                        <p className='font-medium text-xl ml-48'>FOREVER 21</p>
                    </div>
                    <div className='flex items-center text-xl justify-end w-[10%] text-gray-500'>
                        <div className='ml-4 p-1 rounded-full hover:bg-gray-100 hover:scale-125 transition-transform duration-300'><BsPerson /></div>
                        <div className='ml-4 p-1 rounded-full hover:bg-gray-100 hover:scale-125 transition-transform duration-300'><AiOutlineHeart /></div>
                        <div className='ml-4 p-1 rounded-full hover:bg-gray-100 hover:scale-125 transition-transform duration-300'><AiOutlineShoppingCart /></div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex w-[90%] justify-center ml-48 '>
                        <div className='flex justify-between w-[60%] text-gray-600 font-medium'>
                            <p className='cursor-pointer hover:text-gray-400'>WOMEN</p>
                            <p className='cursor-pointer hover:text-gray-400'>PLUS+CURVE</p>
                            <p className='cursor-pointer hover:text-gray-400'>PREMIUM JEANS</p>
                            <p className='cursor-pointer hover:text-gray-400'>ACCESSORIES</p>
                            <p className='cursor-pointer hover:text-gray-400'>SWIM</p>
                            <p className='cursor-pointer hover:text-gray-400'>ACTIVEWEAR</p>
                            <p className='cursor-pointer hover:text-gray-400'>MEN</p>
                            <p className='cursor-pointer hover:text-gray-400'>GIRLS</p>
                            <p className='cursor-pointer hover:text-gray-400'>SALE</p>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2'>
                        <input type="text" placeholder='Search Products' className='w-[9rem] focus:outline-none' />
                        <BiSearch className='text-xl text-gray-500' />
                    </div>
                </div>
            </div>
            <div className='flex items-center text-center justify-center text-2xl font-bold py-5'>
                <AiOutlineShoppingCart className='mr-2' />
                <p>My Cart</p>
            </div>
            <div className='max-w-[99%] mx-auto my-0 flex'>
                <div className='w-[70%]'>
                    <div>
                        <ItemDetail setTotalAmount={setTotalAmount}/>
                        
                    </div>
                </div>
                <div className='w-[30%] flex justify-center'>
                    <div className='w-[70%] flex flex-col space-y-4'>
                        <form>
                            <label htmlFor="">ENTER PROMO CODE</label>
                            <div className='flex items-center'>
                                <input type="text" placeholder='Promo Code' className='w-[70%] border h-[3rem] focus:outline-gray-300 rounded-tl-sm rounded-bl-sm' />
                                <button type='submit' className='bg-black h-[3rem] w-[30%] text-white rounded-tr-sm rounded-br-sm'>Submit</button>
                            </div>
                        </form>
                        <div className='flex justify-between text-sm text-gray-500 font-semibold'>
                            <p>Shipping cost</p>
                            <p>TBD</p>
                        </div>
                        <div className='flex justify-between text-sm text-gray-500 font-semibold'>
                            <p>Discount</p>
                            <p>-$0</p>
                        </div>
                        <div className='flex justify-between text-sm text-gray-500 font-semibold'>
                            <p>Tax</p>
                            <p>TBD</p>
                        </div>
                        <div className='flex justify-between  text-xl font-semibold text-gray-600'>
                            <p>Estimated Total</p>
                            <p>{totalAmount}</p>
                        </div>
                        <div className='flex items-center text-sm font-semibold text-gray-600'>
                            <p>or 4 interest-free payments of $10.00 with <span className='px-4 py-1.5 ] rounded-full bg-teal-200'>afterpay</span> </p>
                        </div>
                        <div className='flex justify-center text-sm font-semibold'>
                            <p>You're <span className='text-red-500'>$10.01</span> away from free shipping!</p>
                        </div>
                        <div className='w-[60%] mx-auto my-0'>
                            <div className='flex items-center justify-center p-2 bg-yellow-300 font-bold cursor-pointer hover:bg-yellow-400 rounded-sm'>
                                <AiFillLock />
                                <p>Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
