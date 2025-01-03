import React, { useEffect, useState } from "react";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";
import axios from "axios";
import imgprev from "../../assets/imgprev.png"

export default function AboutDetails() {
    const [data, setdata] = useState({uppersection: {}, 
      lowersection: {}});
    const [isUpdateMode, setIsUpdateMode] = useState(false); // To check Insert/Update Mode
  
    //states for preview image
    const [previewImg1, setpreviewImg1] = useState('');
    const [previewImg2, setpreviewImg2] = useState('');
    const [previewImg3, setpreviewImg3] = useState('');

    // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Extract input name and value
    setdata((prevData) => ({
      ...prevData,
      [name]: value, // Update specific key in state
    }));
  };

  const FetchAboutData = async() =>{
    try {
      const response = await axios.get('http://localhost:5200/about/readAboutData');
      if (response.data.data.length > 0) {
        setdata(response.data.data[0])
        // setpreviewImg1(response.data.data[0].img1 || '');
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
    FetchAboutData();
  },[])

  // Handle form submission (Insert or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      if (isUpdateMode) {
        // Update API Call
        await axios.put("http://localhost:5200/about/updateAboutData", formData);
        alert("Profile updated successfully!");
      } else {
        // Insert API Call
        await axios.post('http://localhost:5200/about/insertAboutData', formData, {});
        alert("About page data added successfully!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  //function for preview image
  //Thumbail preview
  const handlleImg1Prev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewImg1(reader.result)
    }
  }

  
  const handleImg2Prev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewImg2(reader.result)
    }
  }

  const handleImg3Prev = (e) =>{
    //FileRader- Js constructor to read files.
    const reader = new FileReader();
    const file = e.target.files[0];
    
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = () =>{
      setpreviewImg3(reader.result)
    }
  }


  return (
    <>
      <Breadcrumb path={"About"} path2={"About Details"} slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add About Us page data
          </h3>
          <form onSubmit={handleSubmit} className="border border-t-0 p-3 rounded-b-md border-slate-400">
            {/* <div className="mb-5">
              <label
                for="base-input"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Size Name
              </label>
              <input
                type="text"
                name="sizeName"
                id="base-input"
                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                placeholder="Side Name"
              />
            </div> */}
            <label className="block my-8  text-md font-medium text-gray-900" htmlFor="pdMRP">SECTION 1</label>
            <div className='mb-5 mt-5'></div>

            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="heading">Heading</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data?.uppersection?.heading || ""} //used optional chaining and fallback
                    name='heading'
                    id="heading"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter Main Heading"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="location">City and State</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.uppersection.location}
                    name='location'
                    id="location"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="eg- JODHPUR, RAJASTHAN"
                  />
                </div>
              </div>

            </div>


            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="content_1">Content 1</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.uppersection.content_1}
                    name='content_1'
                    id="content_1"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter content (2-3 lines)"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="content_2">Content 2</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.uppersection.content_2}
                    name='content_2'
                    id="content_2"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter content 2 (4-5 lines)"
                  />
                </div>
              </div>
            </div>

            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="subheading_sec1">Subheading</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.uppersection.subheading_sec1}
                    name='subheading_sec1'
                    id="subheading_sec1"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter Subheading"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="content_3">Content 3</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.uppersection.content_3}
                    name='content_3'
                    id="content_3"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter content"
                  />
                </div>
              </div>
            </div>

            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="content_4">content 4</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.uppersection.content_4}
                    name='content_4'
                    id="content_4"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter content"
                  />
                </div>
                <div>
                  <label
                    htmlFor="img1"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Image 1
                  </label>
                  <div className="w-1/2 flex items-center">
                    <label htmlFor="img1" className="sr-only">
                      Choose file
                    </label>
                    <input
                      type="file"
                      name="img1"
                      onChange={handlleImg1Prev}
                      id="img1"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                    "
                    />
                    {/* <div className='ps-5 w-[100px] gap-x-5 flex'>
                      <img src={previewImg1 || data.img1 || imgprev} alt="thumbnail" className='w-full' />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <label className="block  my-10 text-md font-medium text-gray-900" htmlFor="pdMRP">SECTION 2</label>
            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="line1">Line 1</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.line1}
                    name='line1'
                    id="line1"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter 1st Line"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="subheading_sec2">SubHeading</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.subheading_sec2}
                    name='subheading_sec2'
                    id="subheading_sec2"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter SubHeading"
                  />
                </div>
              </div>
            </div>

            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="content_5">Content 1</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.content_5}
                    name='content_5'
                    id="content_5"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter content 1"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="content_6">Content 2</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.content_6}
                    name='content_6'
                    id="content_6"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter Content 2"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="img2"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Image 2
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img2" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img2"
                  // onChange={handleThumbnailPrev}
                  id="img2"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
              file:bg-gray-50 file:border-0
              file:me-4
              file:py-3 file:px-4
              "
                />
                {/* <div className='ps-5 w-[100px] gap-x-5 flex'>
                              <img src={previewThumbnail || data.thumbnail || imgprev} alt="thumbnail" className='w-full' />
                            </div> */}
              </div>
            </div>

            {/* SECTION 3 */}
            <label className="block  my-10 text-md font-medium text-gray-900" htmlFor="">SECTION 3</label>

            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="line2">Line 1</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.line2}
                    name='line2'
                    id="line2"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter line"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="subheading_sec3">SubHeding</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.subheading_sec3}
                    name='subheading_sec3'
                    id="subheading_sec3"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter SubHeading"
                  />
                </div>
              </div>
            </div>

            <div className='mb-5 mt-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="content_7">Content 1</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.content_7}
                    name='content_7'
                    id="content_7"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Enter content 1"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="content_8">Content 2</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={data.lowersection.content_8}
                    name='content_8'
                    id="content_8"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Product MRP"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="thumbnailInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Thumbnail
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="img3" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="img3"
                  // onChange={handleThumbnailPrev}
                  id="img3"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
              file:bg-gray-50 file:border-0
              file:me-4
              file:py-3 file:px-4
              "
                />
                {/* <div className='ps-5 w-[100px] gap-x-5 flex'>
                              <img src={previewThumbnail || data.thumbnail || imgprev} alt="thumbnail" className='w-full' />
                            </div> */}
              </div>
            </div>

            {/* <div className="pe-5 ps-1">
              <span className="flex items-center gap-3">
                Status :
                <input
                  id="link-radio"
                  name="sizeStatus"
                  type="radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                ></input>
                Active
                <input
                  id="link-radio"
                  name="sizeStatus"
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
               {isUpdateMode ? "Update Data" : "Add Data"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}