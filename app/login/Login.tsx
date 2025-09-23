"use client"
import { useFood } from '@/context/FoodContext';
import axios, { AxiosError } from "axios";
import { useFormik } from 'formik';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import * as yup from "yup"







export default function Login() {

    const [errorMsg , setErrorMsg] = useState("")

    const {setToken} = useFood()


    const router = useRouter()

    type login = {
    email: string;
    password: string;
}

const validationLogin = yup.object({
    email: yup.string().required("email is required").email("email not valid"),
    password: yup.string().required("password is required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "password should valid"),
})

const handelLogin = async (values:login)=>{


    try{
        const optipns = {
            method: "post",
            url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
            data:{
                email: values.email,
                password: values.password,
            }
        }

        const {data} = await axios.request(optipns);
        if(data.message === "success"){
            localStorage.setItem("token" , data.token)
            setToken(data.token)
            router.push("/")
        }
        console.log(data);
    }catch(err){
        const error = err as AxiosError<{ message: string }>;

        if (error.response?.data?.message) {
            setErrorMsg(error.response.data.message);
        } else {
            setErrorMsg("Something went wrong");
        }
    }
}

const formik =  useFormik<login>({
    initialValues:{
        email: "",
        password: "",
    },
    onSubmit : handelLogin,
    validationSchema : validationLogin
})

  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
        <h2 className='text-2xl font-bold text-black'>Login</h2>
        <form onSubmit={formik.handleSubmit} className='mt-8'>
            <div className='mt-3'>
                <label className='text-xl font-semibold'>Email:</label>
                <input name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type='email' placeholder='Email...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.email && formik.touched.email && <div className='text-red-500'>*{formik.errors.email}</div>}
            </div>
            <div className='mt-3'>
                <label className='text-xl font-semibold'>Password:</label>
                <input name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type='password' placeholder='Password...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.password && formik.touched.password && <div className='text-red-500'>*{formik.errors.password}</div>}
            </div>
            {errorMsg && <div className='text-red-500'>*{errorMsg}</div>}
            <button type='submit' className='cursor-pointer mt-5 w-full py-2 bg-black text-white rounded-md'>Sing In</button>
        </form>
        <Link href={"/singUp"} className={`block mt-3 underline text-black text-base font-medium`}>Don{`'`}t have an account? <span>Create account</span></Link> 
    </div>
  )
}
