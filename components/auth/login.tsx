/* eslint-disable @next/next/no-img-element */
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { AiFillEye } from 'react-icons/ai'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useFormik } from 'formik';
import { loginHome } from '@/feature/login/loginSlice';
import Link from 'next/link';
export interface LoginFormProps {
}
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),

});
export default function LoginForm(props: LoginFormProps) {
  const dispatch = useDispatch()
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginHome(values))
    }
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg')] bg-no-repeat bg-center bg-cover">
      <div className='w-[1070px] h-[800px] shadow-boxsd bg-gradient-to-r from-orange-100 to-orange-300'>
        <div className='flex justify-between px-14 h-[50px] items-center'>
          <p className=' text-xl font-semibold'><span className='text-2xl font-bold text-purple-500'>E-</span>Commerce Platform</p>
          <p className='font-bold'>New User? <Link href="/register" className='text-purple-500 hover:text-purple-400 transition duration-300'>Sign Up</Link></p>
        </div>

        <div className='h-full flex justify-center items-center'>
          <div className='w-1/2 flex items-center justify-center ml-3'>
            <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/341064036_777812483592114_2939953030193918861_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hlk268hjSuIAX-uOKq4&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdRvGYtPuZvKjjDddSv5hfjlQxuw0TmEba4cb78Utnk9Ag&oe=64658BEB" alt="" />
          </div>
          <div className='w-1/2 flex items-center justify-center'>
            <div>
              <form className='flex flex-col space-y-16' onSubmit={formik.handleSubmit}>
                <div>
                  <p className='text-3xl font-bold'>Welcome Back!</p>
                  <p className='text-gray-500'>Login to continue</p>
                </div>
                <div>
                  <div className='flex flex-col space-y-2'>
                    <div>
                      <div className='flex flex-col'>
                        <label className='text-gray-600 font-medium' htmlFor="email"><span className='text-red-500'>*</span>User Name</label>
                        <input className='border-solid border-2 border-gray-300 w-[300px] py-2 rounded-md pl-3'
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          placeholder='username11@gmail.com' />
                      </div>
                      {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-500'>{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div>
                      <div className='flex flex-col '>
                        <label className='text-gray-600 font-medium' htmlFor="pass"><span className='text-red-500'>*</span>Password</label>
                        <div className='relative'>
                          <div className='absolute right-0 m-2 p-1.5 rounded-full hover:bg-gray-200 text-gray-500 cursor-pointer' onClick={() => setShowPassword(!showPassword)} ><AiFillEye /></div>
                          <input className='border-solid border-2 border-gray-300 w-[300px] py-2 rounded-md pl-3 '
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder='Enter Password' />
                        </div>
                      </div>
                      {formik.touched.password && formik.errors.password ? (
                        <div className=' text-red-500'>{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-7'>
                    <button type='submit' className='w-[40%] py-2 rounded-md px-3 bg-purple-500 hover:bg-purple-400 flex items-center justify-center text-white transition duration-300 border-solid border-2 border-gray-300' >Đăng nhập</button>
                    <p className='w-[50%] text-sm font-medium hover:text-gray-500 cursor-pointer transition duration-300'>FORGET PASSWORD?</p>
                  </div>
                </div>
              </form>
              <div className='flex items-center py-5 text-lg font-medium text-gray-500'>
                <p className='mr-3 w-[40%]'>Login with</p>
                <div className='flex items-center justify-evenly w-[60%]'>
                  <div className=' p-1.5 rounded-full bg-orange-100 hover:scale-125 transition-transform duration-300'><FcGoogle /></div>
                  <div className=' p-1.5 rounded-full bg-orange-100 hover:scale-125 transition-transform duration-300'><FaFacebookSquare className='text-blue-700' /></div>
                  <div className=' p-1.5 rounded-full bg-orange-100 hover:scale-125 transition-transform duration-300'><FaTwitter className='text-blue-500' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
