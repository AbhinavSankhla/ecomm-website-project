import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddSubCategory() {

  const nav = useNavigate();
  const [categoryData, setcategoryData] = useState([]);
  const [data, setData] = useState({});
 
  //for fetch parent category in selection.
  const handleFetchCategory = async() => {
    try {
      const response = await axios.get('http://localhost:5200/category/true_category')

      if(response.status !== 200) return ("something went wrong");

      // const data = response.data.data;
      setcategoryData(response.data.data)
    } 
    catch (error) {
      console.log(error);
      alert('something went wrong')
    }
  };
  
  useEffect(()=>{handleFetchCategory()},[]);

  //for add sub-category
  const handlleAddSubCat = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5200/subcategory/insert_subcategory', data)

      if(response.status !== 200) return ("something went wrong");
      alert('data inserted successfully!')
      nav('/sub-category/view-sub-category')
    } 
    catch (error) {
      console.log(error);
      alert('something went wrong')
      
    }
  }

  return (
    <section className="w-full">
          <Breadcrumb
            path={"Sub Category"}
            path2={"Add Sub Category"}
            slash={"/"}
          />
          <div className="w-full min-h-[610px]">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                Add Sub Category
              </h3>
              <form onSubmit={handlleAddSubCat} className="border border-t-0 p-3 rounded-b-md border-slate-400">
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="subCatName"
                    onChange={(e) => {setData({...data, subCatName: e.target.value})}}
                    id="base-input"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Category Name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Parent Category Name
                  </label>
                  <select
                    id="default"
                    name="category"
                    onChange={(e) => {setData({...data, category: e.target.value})}}
                    className="border-2 borde-gray-300 text-gray-900 mb-6 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option selected>--Select Category--</option>
                    {
                      categoryData?.map((category, i) => {
                        return(
                          <option key={i} value={category._id}>{category.categoryName}</option>
                        ) 
                      })
                    }
                  </select>
                </div>
                {/* <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Image
                  </label>
                  <form className="max-w-full">
                    <label for="file-input" className="sr-only">
                      Choose file
                    </label>
                    <input
                      type="file"
                      name="subCatFile-input"
                      id="file-input"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    "
                      multiple
                    />
                  </form>
                </div>
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Description
                  </label>
                  <textarea
                    id="message"
                    name="subcatDescription"
                    rows="3"
                    className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Add Product Description....."
                  ></textarea>
                </div> */}
                <div className="pe-5 ps-1">
                  <span className="flex items-center gap-3">
                    Status :
                    <input
                      id="link-radio"
                      name="status"
                      type="radio"
                      value="true"
                      onChange={(e) => {setData({...data, status: e.target.value})}}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                    ></input>
                    Active
                    <input
                      id="link-radio"
                      name="status"
                      type="radio"
                      onChange={(e) => {setData({...data, status: e.target.value})}}
                      value="false"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                    ></input>
                    Deactive
                  </span>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Add Sub Category
                </button>
              </form>
            </div>
          </div>
    </section>
  );
}
