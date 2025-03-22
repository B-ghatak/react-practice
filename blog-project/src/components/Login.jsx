import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Logo, Input, } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'


function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

const login = async() =>{
    setError("")
    try {
    const session =  await authService.login(data)
if (session) {
    const userData = await authService.getCurrentUser()
    if (userData) {
        dispatch(authLogin(userData))
        navigate("/")
    }
}
    } catch (error) {
        setError()
    }
}

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

        {error && <p className='text-red-700 mt-8'>
{error}
        </p> }

        <form onSubmit={handleSubmit(login)} className='mt-8'>
<div className='space-y-5'>
    <input 
    className=''
    label="Email: "
    placeholder='Enter Your Email'
    type='email'
    {...register("email", {
        required: true,
        validate : {
            matchPatter : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value) || "Email Address must be a valid address"
        }
    })}
    />

<input
type= 'password'
placeholder='Enter your Password'
label="password: "
{...register("password"), {
    required: true,
}}
/>

<button
type='submit'
className='w-full'
>Sign In</button>
</div>
        </form>
        </div>
    </div>
  )
}

export default Login