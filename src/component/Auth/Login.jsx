import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submitted');
    }
  return (
    <div className='flex h-screen w-screen justify-center items-center '>
      <div className='border-2 rounded-xl border-emerald-600 p-20 rounded-2xl'>
        <form
        onSubmit={(e)=>{
            submitHandler(e)}}
        className='flex flex-col items-center justify-center'>
          <input
          onChange={(e)=>{
              console.log(e.target.value)}
          }
          required className='outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
          <input
          onChange={(e)=>{
              console.log(e.target.value)}
          }
          required className='outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password'/>
          <button className='text-white mt-5 border-none outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full w-full placeholder:text-gray-400'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
