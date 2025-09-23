"use client"
import axios, { AxiosError } from "axios";
import { useFormik } from 'formik';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import * as yup from "yup"

export default function SingUp() {
        const [errorMsg , setErrorMsg] = useState("")
    
    
        const router = useRouter()
    
        type register = {
        name: string;
        email: string;
        phone: string;
        password: string;
        rePassword: string;
    }
    
    const validationRegister = yup.object({
        name: yup.string().required("name is required").min(3 , "name must be at least 3 characters").max(25 , "name must be less than 25 characters"),
        email: yup.string().required("email is required").email("email not valid"),
        phone: yup.string().required("phone is required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , "phone should valid"),
        password: yup.string().required("password is required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "password should valid"),
        rePassword: yup.string().required("repassword is required").oneOf([yup.ref("password")] , "password and rePassword must be the sane")
    })
    
    const handelRegister = async (values:register)=>{
    
    
        try{
            const optipns = {
                method: "post",
                url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
                data:{
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                    rePassword: values.rePassword
                }
            }
    
            const {data} = await axios.request(optipns);
            if(data.message === "success"){
                router.push("/login")
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
    
    const formik =  useFormik<register>({
        initialValues:{
            name: "",
            email: "",
            phone: "",
            password: "",
            rePassword: ""
        },
        onSubmit : handelRegister,
        validationSchema : validationRegister
    })
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
        <h2 className='text-2xl font-bold text-black'>Register</h2>
        <form onSubmit={formik.handleSubmit} className='mt-8'>
            <div>
                <label className='text-xl font-semibold'>Name:</label>
                <input name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type='text' placeholder='Name...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.name && formik.touched.name && <div className='text-red-500'>*{formik.errors.name}</div>}
            </div>
            <div className='mt-3'>
                <label className='text-xl font-semibold'>Email:</label>
                <input name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type='email' placeholder='Email...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.email && formik.touched.email && <div className='text-red-500'>*{formik.errors.email}</div>}
                {errorMsg && <div className='text-red-500'>*{errorMsg}</div>}
            </div>
            <div className='mt-3'>
                <label className='text-xl font-semibold'>Phone:</label>
                <input name="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type='tel' placeholder='Phone...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.phone && formik.touched.phone && <div className='text-red-500'>*{formik.errors.phone}</div>}
            </div>
            <div className='mt-3'>
                <label className='text-xl font-semibold'>Password:</label>
                <input name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type='password' placeholder='Password...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.password && formik.touched.password && <div className='text-red-500'>*{formik.errors.password}</div>}
            </div>
            <div className='mt-3'>
                <label className='text-xl font-semibold'>RePassword:</label>
                <input name="rePassword" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} type='password' placeholder='RePassword...' className='mt-1 w-full bg-white border-[1px] border-gray-400 outline-none rounded-md px-2 py-2'/>
                {formik.errors.rePassword && formik.touched.rePassword && <div className='text-red-500'>*{formik.errors.rePassword}</div>}
            </div>
            <button type='submit' className='cursor-pointer mt-5 w-full py-2 bg-black text-white rounded-md'>Sing In</button>
        </form>
        <Link href={"/login"} className={`block mt-3 underline text-black text-base font-medium`}>Already have an account <span>Login</span></Link>
    </div>
  )
}
