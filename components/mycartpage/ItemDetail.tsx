/* eslint-disable @next/next/no-img-element */
import { getItems, removeItems, selectAllMyCarts } from '@/feature/mycart/mycartSlide';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function ItemDetail({ setTotalAmount }: { setTotalAmount: (amount: number) => void }) {
    const dispatch = useDispatch()
    const items = useSelector(selectAllMyCarts)
    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])
    const deletItem = (itemID: any) => {
        dispatch(removeItems(itemID))
    }
    const [quantities, setQuantities] = useState<{ [id: string]: number }>({});

    let totalAmount = 0;
    for (const item of items) {
        totalAmount += item.Each * (quantities[item._id] || 1);
    }
    useEffect(() => {
        setTotalAmount(totalAmount);
    }, [totalAmount, setTotalAmount]);
    return (
        <div>
            <div>
                {items.map((item) => (
                    <div className='flex  border-y-[1.5px] py-5' key={item._id}>
                        <div className='w-30%'>
                            <img src={item.Imgurl} alt="" className='w-[13rem] border mr-3 ml-4' />
                        </div>
                        <div className='w-[70%]'>
                            <div className='flex w-full justify-between mb-32'>
                                <div>
                                    <p className='font-medium text-gray-600'>{item.Name}</p>
                                    <p className='text-gray-500 font-medium text-sm mt-1'>{item.Color}</p>
                                    <p className='text-gray-500 font-medium text-sm mt-1'>{item.Size}</p>
                                    <p className='text-gray-500 font-medium text-sm mt-1'>In Stock</p>
                                </div>
                                <div>
                                    <p className='font-semibold text-gray-600'>Each</p>
                                    <p className='font-bold'>{item.Each}</p>
                                </div>
                                <div>
                                    <p className='font-semibold text-gray-600'>Quantity</p>
                                    <input
                                        type="number"
                                        className='w-[7rem] border py-1 focus:outline-none'
                                        value={quantities[item._id] || 1}
                                        min={1}
                                        onChange={(event) => {
                                            setQuantities({
                                                ...quantities,
                                                [item._id]: parseInt(event.target.value) || 1,
                                            });
                                        }}
                                    />

                                </div>
                                <div>
                                    <p className='font-semibold text-gray-600'>Total</p>
                                    <p className='font-semibold text-gray-600'>{item.Each * (quantities[item._id] || 1)}</p>

                                </div>
                            </div>
                            <div className='flex w-[50%] justify-between text-gray-600 font-semibold'>
                                <p className='cursor-pointer hover:text-gray-400'>Edit</p>
                                <p className='cursor-pointer hover:text-gray-400' onClick={() => deletItem(item._id)}>Remove</p>
                                <p className='cursor-pointer hover:text-gray-400'>Move to Wishlist</p>
                                <p className='cursor-pointer hover:text-gray-400'>Save for Later</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className=' flex justify-end  mr-[9rem]'>
                <div className='w-[80%] flex justify-between font-semibold'>
                    <p>{items.length} Items</p>
                    <p>{totalAmount}</p>
                </div>
            </div>
        </div>
    );
}
