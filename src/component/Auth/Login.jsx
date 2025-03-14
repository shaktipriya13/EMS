import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);

        console.log('email is:', email);
        console.log('password is:', password);

        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email'
                        required
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400'
                        type="password"
                        placeholder='Enter your password'
                        required
                    />
                    <button type="submit" className='text-white mt-5 border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full w-full'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
