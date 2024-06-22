import React, { useState } from 'react';

import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { BiShow, BiHide } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import './Login.css';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName: '',
    secondName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  console.log(data)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };
  console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { firstName, secondName, mobile, email, password, confirmPassword } = data;
    if (firstName && secondName && mobile && email && password && confirmPassword) {
      if (password === confirmPassword) {

        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data),
        })

        const dataRes = await fetchData.json()
        console.log(dataRes)

        alert('Successful!!');
        // navigate("/login")
      } else {
        alert('Password and Conform password are not same')
      }

    } else {
      alert('Please fill all required fields!');
    }
  };

  return (
    <>
      <Header />
      <div className='wrapper md:pt-[10%] pt-[15%]'>
        <form className='form' onSubmit={handleOnSubmit}>
          <h1 style={{ textAlign: 'center', color: '#000000', fontSize: '35px' }}>Sign Up</h1>
          <div className='input-box'>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              className='input'
              required
              value={data.firstName}
              onChange={handleOnChange}

            />
            <FaUserAlt className='icon' />
          </div>

          <div className='input-box'>
            <input
              type='text'
              id='secondName'
              name='secondName'
              placeholder='Second Name'
              className='input'
              required
              value={data.secondName}
              onChange={handleOnChange}
            />
            <FaUserAlt className='icon' />
          </div>

          <div className='input-box'>
            <input
              type='number'
              id='mobile'
              name='mobile'
              placeholder='Mobile'
              className='input'
              required
              value={data.mobile}

              onChange={handleOnChange}
            />
            <FaPhone className='icon' />
          </div>

          <div className='input-box'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              className='input'
              required
              value={data.email}
              onChange={handleOnChange}
            />
            <MdEmail className='icon' />
          </div>

          <div className='input-box'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id='password'
              name='password'
              placeholder='Password'
              className='input'
              required

              value={data.showConfirmPassword}
              onChange={handleOnChange}
            />
            <div>
              {/* <FaLock className='icon' style={{ position: 'absolute', top: '45%' }} /> */}
              <span className='flex ' onClick={handleToggleConfirmPassword}> </span>
              {/* {showPassword ? <BiHide /> : <BiShow />}
{showPassword ? <input type='checkbox'/>:<input type='checkbox'/>}
&nbsp;&nbsp;show password*/}

            </div>
          </div>

          <div className='input-box'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              className='input'
              required
              value={data.showConfirmPassword}
              onChange={handleOnChange}
            />
            <div>
              {/* <FaLock className='icon' style={{ position: 'absolute', top: '25%' }} /> */}
              <span className='flex p-3' onClick={handleToggleConfirmPassword}>

                {/* {showPassword ? <BiHide /> : <BiShow />} */}
                {showPassword ? <input type='checkbox' className='bg-[#007BFF]' /> : <input
                  type='checkbox' className='bg-blue' />}
                &nbsp;&nbsp;show password
              </span>
            </div>
          </div>
          <button type='submit' className='btn2'>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;