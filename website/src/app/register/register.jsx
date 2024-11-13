"use client";

import { useEffect, useState } from 'react';

export default function Register() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [data, setData] = useState({})

  const main = () =>{

    const pattern = new RegExp('dolor')

    const str = 'lorem ipsum dolor gohj bickle ghycb nycg'
    console.log(pattern.test(str));
  }

  useEffect(()=>{main(), []})

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="my-10 w-full max-w-md p-8 space-y-6 bg-gray-800 text-white rounded-md shadow-lg sm:mx-auto">
        <h2 className="text-2xl font-bold text-center">Create an account</h2>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e)=>{setData({...data,email:e.target.value})}}
              placeholder="name@company.com"
              className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Generate OTP Button */}
          <div>
            <button
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Gen OTP
            </button>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e)=>{setData({...data,password:e.target.value})}}
              className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              name='confirmPassword'
              id="confirmPassword"
              onChange={(e)=>{setData({...data,confirmPassword:e.target.value})}}
              className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label htmlFor="terms" className="text-sm">
              I accept the Terms and Conditions
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!acceptedTerms}
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none disabled:bg-gray-500"
          >
            Create An Account
          </button>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}