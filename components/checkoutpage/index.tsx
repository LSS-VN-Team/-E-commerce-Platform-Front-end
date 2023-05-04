import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
export interface CheckOutPageProps {
}

export default function CheckOutPage(props: CheckOutPageProps) {
    return (
        <div className='max-w-[800px] mx-auto my-0  '>
            <div className='flex justify-between items-center p-5 text-white bg-purple-600'>
                <div className=''>
                    <div className='p-1 border-4 border-white'><AiOutlineShoppingCart className='text-9xl' /></div>
                    <p className='text-4xl font-medium'>Invoice</p>
                </div>
                <div className='flex-col space-y-3 font-medium'>
                    <p className='text-2xl'>Your Company Name</p>
                    <p>Your Business Address</p>
                    <p>City</p>
                    <p>Country</p>
                    <p>Postal</p>
                </div>
            </div>
            <div>
                <div className='max-w-[95%] py-5 mx-auto my-0 flex justify-between border-b'>
                    <div>
                        <p className='font-bold text-gray-600'>BILL TO:</p>
                        <p className='text-xl font-medium'>Company Name</p>
                        <p className='font-medium'>Address</p>
                        <p className='font-medium'>City</p>
                        <p className='font-medium'>Country</p>
                        <p className='font-medium'>Postal</p>
                    </div>
                    <div>
                        <p className=' font-bold text-gray-800 text-end'>INVOICE # <br /><span className='text-base font-normal'>000001</span> </p>
                        <p className=' font-bold text-gray-800 text-end'>DATE <br /><span className='text-base font-normal'> 12/31/20</span></p>
                        <p className=' font-bold text-gray-800 text-end'>INVOICE DUE DATE <br /> <span className='text-base font-normal'>12/31/20</span></p>
                    </div>
                </div>
            </div>
            <div>
                <div className='max-w-[95%] py-5 mx-auto my-0 flex justify-between font-semibold'>
                    <div className='flex w-[26%] justify-between'>
                        <p className='flex w-[50px]'>ITEMS</p>
                        <p className='flex w-[95px]'>DESCRIPTON</p>
                    </div>
                    <div className='flex w-[50%] justify-between'>
                        <p className='flex justify-center w-[76px]'>QUANTITY</p>
                        <p className='flex justify-center w-[42px]'>PRICE</p>
                        <p className='flex justify-center w-[28px]'>TAX</p>
                        <p className='flex justify-center w-[70px]'>AMOUNT</p>
                    </div>
                </div>
                <div className='max-w-[95%]  mx-auto my-0 flex justify-between '>
                    <div className='flex w-[26%] justify-between'>
                        <p className='flex w-[50px]'>item1</p>
                        <p className='flex w-[95px]'>Description</p>
                    </div>
                    <div className='flex w-[50%] justify-between'>
                        <p className='flex justify-end w-[76px]'>1</p>
                        <p className='flex justify-end w-[42px]'>$0</p>
                        <p className='flex justify-center w-[28px]'>0%</p>
                        <p className='flex justify-end w-[70px]'>$000.0</p>
                    </div>
                </div>
            </div>
            <div className=' py-5 flex justify-between'>
                <div className='w-[60%] p-5 bg-cyan-50'>
                    <p className='font-bold'>NOTES</p>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ut nisi tempus massa blandit luctus.</p>
                </div>
                <div className='w-[40%] flex justify-end bg-purple-600 text-white '>
                    <div className='p-5'>
                        <p className=''>TOTAL</p>
                        <p className='text-3xl'>$000000</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center'><p className='text-lg font-medium'>Powered by <span className='text-2xl italic font-bold'> wave</span></p></div>
                <p className='flex justify-center'>This invoice was generated with the help of Wave Financial Inc</p>
                <p className='flex justify-center items-center'>To learn more, and creat your own free account visit <span className='underline text-blue-500'> waveapps.com</span> </p>
            </div>
        </div>
    );
}
