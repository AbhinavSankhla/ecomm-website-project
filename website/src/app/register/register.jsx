"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  console.log(router);

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [data, setData] = useState({});
  const [errors, seterrors] = useState({});
  const [ifOtp, setifOtp] = useState(false);
  const [otpBtn, setotpBtn] = useState(false);
  const [btnText, setbtnText] = useState('Generate OTP');

  // const main = () =>{
  //   const pattern = new RegExp('dolor')
  //   const str = 'lorem ipsum dolor gohj bickle ghycb nycg'
  //   console.log(pattern.test(str));
  // }
  // useEffect(()=>{main(), []})

  // formValidation to accept a parameter that specifies which fields to validate.

  const formValidation = (fieldsToValidate = ["email", "password", "cpassword"]) =>{

    const newArr = {};

    if (fieldsToValidate.includes("email")) {
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      const ifEmail = emailPattern.test(data.email);
      if (!ifEmail) {
        newArr.email = 'Please enter a valid email';
      }
    }

    if (fieldsToValidate.includes("password")) {
      const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,14}$/;
      const ifPassword = passwordPattern.test(data.password);
      if (!ifPassword) {
        newArr.password = 'Password must include at least one lowercase, one uppercase letter, one special character, and be 8-14 characters long';
      }
    }

    if (fieldsToValidate.includes("cpassword")) {
      const ifCpassword = data.password === data.cpassword;
      if (!ifCpassword) {
        newArr.cpassword = 'Password and confirm password do not match';
      }
    }

    // OTP Validation
    if (fieldsToValidate.includes("otp")) {
      const otpPattern = /^[0-9]{6}$/; // Adjust pattern if OTP has a different format
      const ifOtp = otpPattern.test(data.otp); // Ensure `data.otp` is defined in your state
      if (!ifOtp) {
        newArr.otp = 'Please enter a valid 6-digit OTP';
      }
    }

    // console.log(ifEmail, ifPassword, ifCpassword, ifOtp);
    seterrors(newArr)

    //here we check newArr object is empty or not?(empty = no error) 
    //Object.Keys - return keys in array //.length - find length of array

    return Object.keys(newArr).length === 0;

    // const keysLength = Object.keys(newArr).length;
    // if(keysLength === 0){
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }

  const handleFormSubmit = async(e) =>{
    e.preventDefault();
  
    const ifFormValid = formValidation(["email", "password", "cpassword", "otp"]);

    if(!ifFormValid){
      setTimeout(() => {seterrors({})}, 5000);
      return;      
    }
    // console.log(data)

    try {
      const response = await axios.post('http://localhost:5200/users/register_user',data);
      if(response.status !== 200 ) return alert('something went wrong')
      if(response.status === 409 ) return alert(response.data.data.message)
      console.log(response.data.data)
                  //cookie name //value   
      Cookies.set('user-data', JSON.stringify(response.data.data), { expires: 7 });

      const userData = JSON.parse(Cookies.get('user-data'));
      console.log(userData); // Now it will log the actual object


      alert('user registered successfully');
      router.push('/');

    } catch (error) {
      console.log(error)
      alert('something went wrong');
    }
  }

  const handelOtpGen = async() => {
    // console.log("clicked")
    const ifFormValid = formValidation(["email"]);
    console.log("Form is valid:", ifFormValid);
  
    if (!ifFormValid) {
      setTimeout(() => seterrors({}), 5000);
      return; // Stop execution if form is not valid
    }  
    setifOtp(true);
    setotpBtn(true);
  
    let counter = 30;
    setbtnText(`Resend OTP in ${counter}s`);
    counter--;
  
    const otpInterval = setInterval(() => {
      setbtnText(`Resend OTP in ${counter}s`);

      if (counter < 1) {
        clearInterval(otpInterval);
        setbtnText('Generate OTP');
        setotpBtn(false);
      }
      counter--;
    }, 1000);

    try {
      const response = await axios.post('http://localhost:5200/otp/generate_otp',{
          email : data.email
      });
      if(response.status !== 200 ) return alert('something went wrong')
      // console.log(response.data)      
    } 
    catch (error) {
      console.log(error)
      alert('something went wrong')
    }
  };
  
  //abc!123ABC098

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="my-10 w-full max-w-md p-8 space-y-6 bg-gray-800 text-white rounded-md shadow-lg sm:mx-auto">
        <h2 className="text-2xl font-bold text-center">Create an account</h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => { setData({ ...data, email: e.target.value })}}
              placeholder="name@company.com"
              className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {/* condition to remove span from html element if there is no error*/}
            {errors.email && <span className='text-[red]'>{errors.email}</span>}
          </div>
          {/* Generate OTP Button */}
          <div>
            <button
              type="button"
              onClick={handelOtpGen}
              disabled={otpBtn}
              className="w-full px-4 py-2 font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {btnText}
            </button>
          </div>

          <div className={`${ifOtp ? 'block' : 'hidden'}`}>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e)=>{setData({...data,password:e.target.value})}}
                placeholder="Enter password"
                className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.password && <span className='text-[red]'>{errors.password}</span>}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                name='confirmPassword'
                id="confirmPassword"
                onChange={(e)=>{setData({...data,cpassword:e.target.value})}}
                placeholder="Confirm password"
                className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.cpassword && <span className='text-[red]'>{errors.cpassword}</span>}
            </div>

            {/* OTP Input */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="otp">OTP</label>
              <input
                type="text"
                name='otp'
                id="otp"
                onChange={(e)=>{setData({...data,otp:e.target.value})}}
                placeholder="Enter 6 digit OTP"
                className="w-full px-4 py-2 mt-1 text-black bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.otp && <span className='text-[red]'>{errors.otp}</span>}
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
          </div>

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