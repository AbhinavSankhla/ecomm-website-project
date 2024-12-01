import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Login() {
    const nav = useNavigate();
    const ifadminLoggedIn = () =>{
        const ifadmin = Cookies.get('admin');
        // console.log(ifadmin);

        if(ifadmin){
            nav('/dashboard')
        }
    }

    useEffect(()=>{ifadminLoggedIn()},[])

    const [adminData, setadminData] = useState({});
    let [passwdStatus, setpasswdStatus] = useState(false);
    
    const handleLogin = async() =>{
        const response = await fetch('http://localhost:5200/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(adminData)
          });
      
          if(response.status === 200){
            const data = await response.json();
            
            Cookies.set('admin', JSON.stringify({...data.data, auth:data.auth}));
            nav('/dashboard');
          }
          else{
            alert("Invalid Credentials");
          }
    }

//     const handleLogin = async () => {
//   try {
//     const response = await fetch("http://localhost:5200/admin/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(adminData),
//       credentials: "include", // Include cookies in the request
//     });

//     if (response.status !== 200) {
//       const errorMessage = await response.json();
//       throw new Error(errorMessage.message || "Invalid credentials");
//     }

//     const data = await response.json();
//     console.log(data.data);
//     nav("/dashboard");
//   } catch (error) {
//     alert(error.message || "Invalid credentials");
//   }
// };


  return (
    <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-3xl font-semibold text-gray-900">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          BeClothing
      </a>
      <form className="w-[500px] bg-white rounded-lg shadow-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input onChange={(e) => {setadminData({...adminData, mail : e.target.value})}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <div className='flex justify-around bg-gray-50 border border-gray-300 rounded'>
                        <input onChange={(e) => {setadminData({...adminData, password : e.target.value})}} type={passwdStatus ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border-none focus:ring-0 focus:outline-none block w-[90%] p-2.5" required=""/>
                        <button type='button' className='text-xl' onClick={()=>setpasswdStatus(!passwdStatus)}>{passwdStatus ? <FaEyeSlash/> : <FaEye/>}</button> 
                      </div>
                  </div>
                  <div className="flex items-center justify-between">
                  </div>
                  <Link>
                  <button onClick={handleLogin} type="button" className="w-full text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  </Link>
              </form>
          </div>
      </form>
  </div>
</section>
  )
}
