/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiFillLock } from 'react-icons/ai'
import { BsFillPersonFill, BsFillKeyFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllUser, Registers } from '@/feature/register/registerSlice';


const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
  checkbox: Yup.boolean().oneOf([true], 'Checkbox must be checked')


});
export interface RegisterProps {
}

export default function Register(props: RegisterProps) {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUser)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: false
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(Registers(values))
    }
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg')] bg-no-repeat bg-center bg-cover">
      <div className='w-[1070px] h-[800px] shadow-boxsd bg-gradient-to-r from-orange-200 to-orange-100'>

        <div className='flex justify-center px-14 h-[50px] items-center'>
          <p className=' text-xl font-semibold'><span className='text-2xl font-bold text-purple-500'>E-</span>Commerce Platform</p>
        </div>
        <div className='h-full flex justify-center items-center'>

          <div className='w-1/2 flex items-center justify-center'>
            <div>
              <p className='text-3xl w-[300px] font-bold flex justify-center items-center mb-10'>Sign Up</p>
              <form className='flex flex-col space-y-10' onSubmit={formik.handleSubmit}>
                <div className='flex flex-col space-y-4'>
                  <div>
                    {formik.touched.name && formik.errors.name ? (
                      <div className='ml-8 text-red-500'>{formik.errors.name}</div>
                    ) : null}
                    <div className='flex items-center'>
                      <label className='text-gray-600 text-3xl' ><BsFillPersonFill /></label>
                      <input
                        className='border-solid border-2 border-gray-300 w-[300px] py-2 rounded-md pl-3'
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} placeholder='Your Name' />
                    </div>
                  </div>

                  <div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className='ml-8 text-red-500'>{formik.errors.email}</div>
                    ) : null}
                    <div className='flex items-center'>
                      <label className='text-gray-600 text-3xl' ><MdEmail /></label>
                      <input
                        className='border-solid border-2 border-gray-300 w-[300px] py-2 rounded-md pl-3'
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} placeholder='Your Email' />
                    </div>
                  </div>

                  <div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className='ml-8 text-red-500'>{formik.errors.password}</div>
                    ) : null}
                    <div className='flex items-center'>
                      <label className='text-gray-600 text-3xl' ><AiFillLock /></label>
                      <input
                        className='border-solid border-2 border-gray-300 w-[300px] py-2 rounded-md pl-3'
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        pattern="[a-z0-9]{6,15}"
                        title="Password should be digits (0 to 9) or alphabets (a to z)."
                        placeholder='Password' />
                    </div>
                  </div>

                  <div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div className='ml-8 text-red-500'>{formik.errors.confirmPassword}</div>
                    ) : null}
                    <div className='flex items-center'>
                      <label className='text-gray-600 text-3xl' ><BsFillKeyFill /></label>
                      <input
                        className='border-solid border-2 border-gray-300 focus:ring-1 w-[300px] py-2 rounded-md pl-3'
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword} placeholder='Repeat Your Password' />
                    </div>
                  </div>
                </div>
                <div>
                  {formik.touched.checkbox && formik.errors.checkbox ? (
                    <div className='ml-8 text-red-500'>{formik.errors.checkbox}</div>
                  ) : null}
                  <div className='flex items-center'>
                    <input
                      type="checkbox"
                      className='ml-1 mr-3 h-4 w-4 scale-125'
                      {...formik.getFieldProps('checkbox')}
                    />
                    <p className='font-semibold'>I agree all statements in <span className='text-purple-500'>Terms of service</span></p>
                  </div>
                </div>
                <div className='flex items-center justify-center mt-7' >
                  <button type='submit' className='w-[40%] py-2 rounded-md px-3 bg-purple-500 hover:bg-purple-400 flex items-center justify-center text-white transition duration-300' >Register</button>
                </div>
              </form>

            </div>
          </div>
          <div className='w-1/2 flex items-center justify-center mr-3'>
            <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/341064036_777812483592114_2939953030193918861_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hlk268hjSuIAX-uOKq4&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdRvGYtPuZvKjjDddSv5hfjlQxuw0TmEba4cb78Utnk9Ag&oe=64658BEB" alt="" />
          </div>
        </div>
      </div>
    </div>
  );

}
