import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import axios from "axios";
import imgprev from "../assets/imgprev.png"

export default function Profile() {

  const [data, setdata] = useState({});
  const [isUpdateMode, setIsUpdateMode] = useState(false); // To check Insert/Update Mode

  //states for preview image
  const [previewThumbnail, setpreviewThumbnail] = useState('');
  const [previewLogo, setpreviewLogo] = useState('');
  const [previewProfilepic, setpreviewProfilepic] = useState('');
  const [previewFavicon, setpreviewFavicon] = useState('');
  const [previewAboutImg, setpreviewAboutImg] = useState('');

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Extract input name and value
    setdata((prevData) => ({
      ...prevData,
      [name]: value, // Update specific key in state
    }));
  };

  const FetchProfileData = async() =>{
    try {

      const response = await axios.get('http://localhost:5200/profile/readProfileData');
      if (response.data.data.length > 0) {
        setdata(response.data.data[0])
        setIsUpdateMode(true); // Set Update Mode
        console.log(response.data.data[0])
      }
      else {
        setIsUpdateMode(false); // Set Insert Mode
      }
    } 
    catch (error) {
      alert('something went wrong')
      console.log(error)
    }
  }

  useEffect(()=>{
    FetchProfileData();
  },[])

  // Handle form submission (Insert or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      if (isUpdateMode) {
        // Update API Call
        await axios.put("http://localhost:5200/profile/update_profiledata", formData);
        alert("Profile updated successfully!");
      } else {
        // Insert API Call
        await axios.post('http://localhost:5200/profile/insertProfileData', formData, {});
        alert("Profile added successfully!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };


  //function for preview image
  //Thumbail preview
  const handleThumbnailPrev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewThumbnail(reader.result)
    }
  }

  
  const handleLogoPrev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewLogo(reader.result)
    }
  }

  const handleFaviconPrev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewFavicon(reader.result)
    }
  }

  const handleProfileprev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewProfilepic(reader.result)
    }
  }

  const handleAboutImg_prev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewAboutImg(reader.result)
    }
  }  

  return (
    <>
    <Breadcrumb path={"Profile"} />
          <div className="w-full">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[20px] font-semibold bg-slate-100 py-2 px-3 rounded-t-md border border-slate-400">
                Profile
              </h3>
              <form onSubmit={handleSubmit} className="p-3 border border-t-0 rounded-b-md border-slate-400">
                <div className="grid grid-cols-2">
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      value = {data.name}
                      onChange={handleInputChange}
                      name="name"
                      type="text"
                      id="name"
                      className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                      placeholder="Enter your name"
                    />
                  </div>
                  <br />
                  <div>
                    <label
                      htmlFor="base-input"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      Social Links
                    </label>
                    <div className="space-y-9">
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm  ">
                          <svg
                            fill="black"
                            className="w-5 h-5 me-1 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                          </svg>
                        </span>
                        <input
                          name="facebook"
                          onChange={handleInputChange}
                          value={data.facebook}
                          type="text"
                          id="facebook"
                          className="rounded-lg border-2 text-black font-semibold shadow-sm  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                          placeholder="Enter Facebook Account Link"
                        />
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm  ">
                          <svg
                            fill="black"
                            className="w-5 h-5 me-1 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="insta"
                          value={data.insta}
                          onChange={handleInputChange}
                          id="insta"
                          className="rounded-lg border-2 text-black font-semibold shadow-sm  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                          placeholder="Enter Instagram Account Link"
                        />
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm  ">
                          <svg
                            fill="black"
                            className="w-5 h-5 me-1 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="youtube"
                          value={data.youtube}
                          onChange={handleInputChange}
                          id="youtube"
                          className="rounded-lg border-2 text-black font-semibold shadow-sm  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                          placeholder="Enter Youtube Account Link"
                        />
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm  ">
                          <svg
                            fill="black"
                            className="w-5 h-5 me-1 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="x"
                          value={data.x}
                          onChange={handleInputChange}
                          id="x"
                          className="rounded-lg border-2 text-black font-semibold shadow-sm  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                          placeholder="Enter X Account Link"
                        />
                      </div>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm">
                        {/* WhatsApp SVG Icon */}
                        <svg

                          className="w-5 h-5 me-1 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19.05 4.95A10.902 10.902 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.95.57 3.77 1.55 5.32L2 22l4.68-1.55A10.886 10.886 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.93-1.26-5.56-3.32-7.05Zm-7.05 14c-1.73 0-3.35-.52-4.72-1.41l-3.37.97.97-3.37A8.007 8.007 0 0 1 4 12a8 8 0 0 1 13.63-5.63A8.003 8.003 0 0 1 12 19ZM15.2 13c-.27-.13-1.59-.79-1.83-.88-.24-.09-.41-.13-.58.13s-.66.88-.81 1.06c-.15.18-.3.2-.57.07-.27-.13-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.15-.27-.02-.42.11-.57.11-.11.24-.27.36-.4.12-.13.18-.22.27-.36.09-.15.05-.29 0-.42-.04-.13-.58-1.39-.8-1.91-.21-.51-.42-.44-.58-.44h-.49c-.18 0-.48.07-.72.33s-.95.93-.95 2.27.97 2.63 1.11 2.81c.13.18 1.92 2.92 4.65 4.1 1.33.57 1.85.62 2.51.53.4-.06 1.23-.5 1.4-1 .17-.5.17-.93.12-1.01s-.24-.18-.5-.31Z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="whatsapp"
                        value={data.whatsapp}
                        onChange={handleInputChange}
                        id="whatsapp"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter WhatsApp Number"
                      />
                    </div>

                    <label
                      htmlFor="base-input"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      Featured Section
                    </label>
                    <div className="flex">
                      <label htmlFor="featured_title" className="inline-flex items-center px-3">
                        Title
                      </label>
                      <input
                        type="text"
                        name="featured_title"
                        value={data.featured_title}
                        onChange={handleInputChange}
                        id="featured_title"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter Featured Title"
                      />
                    </div>

                    <label
                      htmlFor="base-input"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      Contact Details
                    </label>

                    <div className="flex">
                      <label htmlFor="contactnum" className="inline-flex items-center px-3">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        name="contactnum"
                        value={data.contactnum}
                        onChange={handleInputChange}
                        id="contactnum"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter Contact Number"
                      />
                    </div>

                    <div className="flex">
                      <label htmlFor="email" className="inline-flex items-center px-3">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                        id="email"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter Email"
                      />
                    </div>

                    <div className="flex">
                      <label htmlFor="address" className="inline-flex items-center px-3">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={handleInputChange}
                        id="address"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter Office Address"
                      />
                    </div>

                    <div className="flex">
                      <label htmlFor="weekday_time" className="inline-flex items-center px-3">
                        Weekday Time
                      </label>
                      <input
                        type="text"
                        name="weekday_time"
                        value={data.weekday_time}
                        onChange={handleInputChange}
                        id="weekday_time"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="eg. 10 AM - 5 PM "
                      />
                    </div>

                    <div className="flex">
                      <label htmlFor="weekend_time" className="inline-flex items-center px-3">
                        Weekend Time
                      </label>
                      <input
                        type="text"
                        name="weekend_time"
                        value={data.weekend_time}
                        onChange={handleInputChange}
                        id="weekend_time"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="eg. 8 AM - 12 PM "
                      />
                    </div>

                    <label
                      htmlFor="base-input"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      About Us(Home Page)
                    </label>

                    <div className="flex">
                      <label htmlFor="about_heading" className="inline-flex items-center px-3">
                        Heading
                      </label>
                      <input
                        type="text"
                        name="about_heading"
                        value={data.about_heading}
                        onChange={handleInputChange}
                        id="about_heading"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Who we are?"
                      />
                    </div>

                    <div className="flex">
                      <label htmlFor="about_para1" className="inline-flex items-center px-3">
                        Line 1
                      </label>
                      <textarea
                        type="text"
                        name="about_para1"
                        value={data.about_para1}
                        onChange={handleInputChange}
                        id="about_para1"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter the Line"
                      />
                    </div>

                    <div className="flex">
                      <label htmlFor="about_para2" className="inline-flex items-center px-3">
                        Line 2
                      </label>
                      <textarea
                        type="text"
                        name="about_para2"
                        value={data.about_para2}
                        onChange={handleInputChange}
                        id="about_para2"
                        className="rounded-lg border-2 text-black font-semibold shadow-sm  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="Enter the Line"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                      htmlFor="faviconInput"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      Home Page About Section Image
                    </label>
                    <div className="w-1/2 flex items-center">
                      <label htmlFor="about_img" className="sr-only">
                        Choose file
                      </label>
                      <input
                        type="file"
                        name="about_img"
                        onChange={handleAboutImg_prev}
                        id="about_img"
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                      file:bg-gray-50 file:border-0
                      file:me-4
                      file:py-3 file:px-4
                      "
                      />
                      <div className="ps-5 w-[150px] gap-x-5 flex"><img src={previewAboutImg || data.about_img || imgprev} alt="favicon" />
                      </div>
                    </div>
                  </div>




                    <div className="mb-5">
                      <label
                        htmlFor="thumbnailInput"
                        className="block mb-5 text-md font-medium text-gray-900"
                      >
                        Contact Page Image
                      </label>
                      <div className="w-1/2 flex items-center">
                        <label htmlFor="thumbnailInput" className="sr-only">
                          Choose file
                        </label>
                        <input
                          type="file"
                          name="thumbnail"
                          onChange={handleThumbnailPrev}
                          id="thumbnailInput"
                          className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                      file:bg-gray-50 file:border-0
                      file:me-4
                      file:py-3 file:px-4
                      "
                        />
                        <div className='ps-5 w-[150px] gap-x-5 flex'>
                                      <img src={previewThumbnail ||data.thumbnail || imgprev} alt="banner" className='w-full'/>
                                    </div>
                    
                      </div>
                    </div>

                    
                    
                    </div>

                    <div className="mb-5 mt-5">
                      <label
                        htmlFor="logoInput"
                        className="block mb-5 text-md font-medium text-gray-900"
                      >
                        Logo
                      </label>
                      <div className="w-1/2 flex items-center">
                        <label htmlFor="logoInput" className="sr-only">
                          Choose file
                        </label>
                        <input
                          type="file"
                          name="logo"
                          onChange={handleLogoPrev}
                          id="logoInput"
                          className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                      file:bg-gray-50 file:border-0
                      file:me-4
                      file:py-3 file:px-4
                      "
                      />
                    
                      <div className="ps-5 w-[150px] gap-x-5 flex"><img src={previewLogo || data.logo || imgprev} alt="logo" />
                      </div>
                    </div>
                  </div>

                    <div className="mb-5">
                      <label
                      htmlFor="faviconInput"
                      className="block mb-5 text-md font-medium text-gray-900"
                    >
                      Favicon
                    </label>
                    <div className="w-1/2 flex items-center">
                      <label htmlFor="faviconInput" className="sr-only">
                        Choose file
                      </label>
                      <input
                        type="file"
                        name="favicon"
                        onChange={handleFaviconPrev}
                        id="faviconInput"
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                      file:bg-gray-50 file:border-0
                      file:me-4
                      file:py-3 file:px-4
                      "
                      />
                      <div className="ps-5 w-[150px] gap-x-5 flex"><img src={previewFavicon || data.favicon || imgprev} alt="favicon" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="base-input"
                      className="block my-8 text-md font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="grid gap-3 grid-cols-[80%_auto] items-baseline">
                      <input
                        type="password"
                        name="changePassword"
                        id="password"
                        autoComplete="on"
                        className="border-2 border-gray-300 text-black shadow-md text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                        placeholder="Change Password"
                        // required
                      />
                      <button type="" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Change</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-16 flex items-center justify-start flex-col">
                <figure>
                  <img className="rounded-full w-40 h-40 border-2 object-cover shadow-lg" src={previewProfilepic || data.profilepic || imgprev} alt="profilepic" />
                </figure>
                <h5 className="mt-3 text-[20px]">Profile Image</h5>
                <div className="w-1/2 flex items-center">
                  <label htmlFor="profilepic" className="sr-only">
                    Choose file
                  </label>
                  <input
                    type="file"
                    name="profilepic"
                    onChange={handleProfileprev}
                    id="profilepic"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                      file:bg-gray-50 file:border-0
                      file:me-4
                      file:py-3 file:px-4
                      "
                  />
                  {/* <div className='ps-5 w-[100px] gap-x-5 flex'>
                    <img src={data.profilepic || imgprev} alt="profilepic" className='w-full' />
                  </div> */}

                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
            {/* <button
              onClick={FetchProfileData}
              className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              UPDATE
            </button> */}
            <button
              type="submit"
              className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
               {isUpdateMode ? "Update Profile" : "Add Profile"}
            </button>
                    
            </div>            
            
          </form>
        </div>
      </div>
    </>
  );
}
