import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import imgprev from "../../assets/imgprev.png"


export default function SliderDetails() {

  const params = useParams();
  const nav = useNavigate();

  const [data, setdata] = useState({});
  const [isUpdateMode, setIsUpdateMode] = useState(false); // To check Insert/Update Mode

  //states for preview image
  const [previewImg1, setpreviewImg1] = useState('');
  const [previewImg2, setpreviewImg2] = useState('');
  const [previewImg3, setpreviewImg3] = useState('');
  const [previewImg4, setpreviewImg4] = useState('');
  const [previewImg5, setpreviewImg5] = useState('');

  const FetchSlider = async () => {
    try {

      const response = await axios.get('http://localhost:5200/slider/readSlider');
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

  useEffect(() => {
    FetchSlider();
  }, [])

  // Handle form submission (Insert or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      if (isUpdateMode) {
        // Update API Call
        await axios.put('http://localhost:5200/slider/update_slider', formData);
        alert("Slider updated successfully!");
        nav('/slider/slider-view');
      } else {
        // Insert API Call
        await axios.post('http://localhost:5200/slider/insertSlider', formData, {});
        alert("Slider added successfully!");
        nav('/slider/slider-view');
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  //img1 preview
  const handleImg1Prev = (e) => {
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => {
      setpreviewImg1(reader.result)
    }
  }

  //img2 preview
  const handleImg2Prev = (e) => {
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => {
      setpreviewImg2(reader.result)
    }
  }

  //img3 preview
  const handleImg3Prev = (e) => {
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => {
      setpreviewImg3(reader.result)
    }
  }

  //img4 preview
  const handleImg4Prev = (e) => {
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => {
      setpreviewImg4(reader.result)
    }
  }

  //img5 preview
  const handleImg5Prev = (e) => {
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => {
      setpreviewImg5(reader.result)
    }
  }

  return (
    <section className="w-full">
      <Breadcrumb
        path={"Slider"}
        path2={"Slider Details"}
        slash={"/"}
      />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Slider
          </h3>
          <form onSubmit={handleSubmit} className="border border-t-0 p-3 rounded-b-md border-slate-400">

            <div className="mb-5 mt-5">
              <label
                htmlFor="img1"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Slider Image 1
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img1" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img1"
                  onChange={handleImg1Prev}
                  id="img1"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4
                "
                />
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  <img src={previewImg1 || data.img1 || imgprev} alt="slider image" className='w-full' />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="img2"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Slider Image 2
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img2" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img2"
                  onChange={handleImg2Prev}
                  id="img2"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4
                "
                />
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  <img src={previewImg2 || data.img2 || imgprev} alt="slider image" className='w-full' />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="img3"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Slider Image 3
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img3" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img3"
                  onChange={handleImg3Prev}
                  id="img3"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4
                "
                />
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  <img src={previewImg3 || data.img3 || imgprev} alt="slider image" className='w-full' />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="img4"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Slider Image 4
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img4" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img4"
                  onChange={handleImg4Prev}
                  id="img4"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4
                "
                />
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  <img src={previewImg4 || data.img4 || imgprev} alt="slider image" className='w-full' />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="img5"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Slider Image 5
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img5" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img5"
                  onChange={handleImg5Prev}
                  id="img5"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4
                "
                />
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  <img src={previewImg5 || data.img5 || imgprev} alt="slider image" className='w-full' />
                </div>
              </div>
            </div>
            {/* 
            <div className="pe-5 ps-1">
              <span className="flex items-center gap-3">
                Status :
                <input
                  id="link-radio"
                  name='status'
                  type="radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                ></input>
                Active
                <input
                  id="link-radio"
                  name='status'
                  type="radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                ></input>
                Deactive
              </span>
            </div> */}
            <button
              type="submit"
              className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              {isUpdateMode ? "Update Slider" : "Add Slider"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
