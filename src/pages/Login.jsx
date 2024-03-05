import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
  return (
    <div className='h-full md:min-h-screen flex justify-center items-center flex-col my-20 md:my-4'>
        <h2 className='text-2xl font-bold'>Login</h2>
        <LoginForm/>
    </div>
  )
}

export default Login