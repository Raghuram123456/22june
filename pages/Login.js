import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { BiShow, BiHide } from 'react-icons/bi';
import './Login.css';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function LoginForm() {

  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {

    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = data;
    if (userName && password) {
      alert('Successful!!');
    } else {

      alert('Please fill all required fields!');
    }
  };

  return (
    <>
      <Header />
      <div className='wrapper'>
        <form className='form' onSubmit={handleOnSubmit}>
          <h1 style={{ textAlign: 'center', color: '#000000', fontSize: '35px' }}>Login</h1>
          <div className='input-box'>
            <input type='text'
              id='userName'
              name='userName'
              placeholder='Username'
              className='input'
              required
              value={data.userName}
              onChange={handleOnChange}
            />
            <FaUserAlt className='icon' />
          </div>

          <div className='input-box'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'

              name='password'
              placeholder='Password'
              className='input'
              required
              value={data.password}
              onChange={handleOnChange}
            />
            <div>
              <FaLock className='icon' style={{ position: 'absolute', top: '30%' }} />
              <span className='flex p-3' onClick={handleTogglePassword}>
                {showPassword ? <input type='checkbox' /> : <input type='checkbox' />}
                &nbsp;&nbsp;show password
              </span>
            </div>
          </div>

          <div className='remember'>
            <label className='label'>
              <input type='checkbox' />Remember Me
            </label>
            <Link to='/forgetpassword' className='anchor'>
              Forget Password?
            </Link>
          </div>

          <button type='submit' className='btn2'>
            Login

          </button>

          <div className='register'>
            <p>
              Don't have an account? <Link to='/signup' className='anchor'>Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;

// import React, { useState } from 'react'
// import { FaUserAlt,FaLock } from "react-icons/fa";
// import './Login.css'
// import Header from '../Component/Header';
// import { Link } from 'react-router-dom';
// import { BiShow ,BiHide } from "react-icons/bi";

// function LoginForm(){

// const [data,setData]=useState({
// userName:"",
// password:"",
// })
// console.log(data)

// const handleOnChange=(e)=>{
// const {name,value}=e.target
// setData((preve)=>{
// return {
// ...preve,
// [name] : value
// }
// })
// }

// const handleOnSubmit=(e)=>{
// e.preventDefault()
// const {userName,password}=data
// if(userName && password){
// alert("Successful!!")
// }
// else{
// alert("Please fill all required field!")

// }
// }

// return (
// <>
// <Header/>
// <div className='wrapper'>
// <form className='form' onSubmit={handleOnSubmit}>
// <h1 style={{textAlign: 'center',color: '#000000',fontSize:'35px'}}>Login</h1>
// <div className='input-box'>
// <input type='text' id='userName' name='userName' placeholder='Username'className = 'input' required value = { data.userName } onChange = { handleOnChange } />
  // <FaUserAlt className='icon'/>
  // </div>

  // <div className='input-box'>
  // <input type="password" id='password' name='password' placeholder='Password'className='input' required value = { data.password } onChange = { handleOnChange } />
  // <div>
  // <FaLock className='icon' style={{position:'absolute',top:'30%'}}/>
  // <span className='flex p-3' ></span>
  // </div>
  // </div>

  // <div className='remember'>
  // <label className='label'><input type='checkbox'/>Remember Me</label>
  // <Link to='/forgetpassword' className='anchor'>Forget Password?</Link>
  // </div>

  // <button type='submit' className='btn2'>Login</button>

  // <div className='register'>
  // <p>Don't have an account? <Link to='/signup' className='anchor'>Sign Up</Link></p>
  // </div>
  // </form>
  // </div>
  // </>
  // )
  // }
  // export default LoginForm;

  // import React, { useState } from 'react';
  // import Header from '../Component/Header';

  // export default function Table() {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleShowPassword = () => {
  // setShowPassword(!showPassword);
  // };

  // return (
  // <>
  // <Header/>

  // <div className='flex items-center justify-center min-h-screen '>
  // <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-lg rounded-2xl
  // md:flex-row md:space-y-0'>
  // <div className='flex flex-col justify-center p-8 md:p-14'>
  // <span className='mb-3 text-4xl font-bold text-center'>
  // Login
  // </span>
  // <div className='py-4'>
  // <span className='mb-2 text-md'>
  // <input className='w-full p-2 border border-gray-400 rounded-md'
  // type='text' placeholder='User Name' id='userName' name='userName' required/>
  // </span>
  // </div>

  // <div className='py-4'>
  // <span className='mb-2 text-md'>
  // <input className='w-full p-2 border border-gray-400 rounded-md'
  // type='text' placeholder='Password' id='password' name='password' required/>
  // </span>
  // </div>
  // </div>
  // </div>
  // </div>
  // </>
  // );
  // }

  {/* <form className=''>
<h1>Login</h1>
<div>Name</div>
<input type='text'/>
<tr>
<td>Password</td>
<td>
<input
type={showPassword ? 'text' : 'password'}
/>
<button onClick={handleShowPassword}>
{showPassword ? 'Hide' : 'Show'} Password
</button>
</td>
</tr>
</form> */}