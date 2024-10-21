import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import axios from 'axios';

export default function ProductDetails() {

const handleAddProduct = async(e) =>{
  e.preventDefault()
  const form = e.target
  //FormData Constructor - makes data a formdata which pass inside of it.  
  const formData = new FormData(form);

  //axios set content type automaticaly like - formdata, raw>json etc.
  //formData - work as body //{} - header etc. define here.
  const response = await axios.post('http://localhost:5200/product/insert_product',formData,{});
  console.log(response);
  try {

  } catch (error) {
    console.log(error);
    alert('something went wrong')
  }
};

  return (
    <section className="w-full">
      <Breadcrumb
        path={"Product"}
        path2={"Product Details"}
        slash={"/"}
      />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Product Details
          </h3>
          <form onSubmit={handleAddProduct} className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="mb-5">
              <label
                for="productInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Name
              </label>
              <input
                type="text"
                name='productName'
                id="productInput"
                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                placeholder="Product Name"
              />
            </div>
            <div className="mb-5">
              <label
                for="shortDescription"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Short Description
              </label>
              <textarea name='productShortDescription' id="message" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Short Description....."></textarea>
            </div>
            <div className="mb-5">
              <label
                for="shortDescription"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Full Description
              </label>
              <textarea name='productFullDescription' id="message" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Full Description....."></textarea>
            </div>
            <div className="mb-5">
              <label
                for="thumbnailInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Thumbnail
              </label>
              <form className="max-w-full">
                <label for="file-input" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="thumbnailInput"
                  id="thumbnailInput"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
  file:bg-gray-50 file:border-0
  file:me-4
  file:py-3 file:px-4
  "
                />
              </form>
            </div>
            {/* <div className="mb-5">
                <label
                  for="base-input"
                  className="block mb-5 text-md font-medium text-gray-900"
                >
                Image Animation
                </label>
                <form className="max-w-full">
                  <label for="file-input" className="sr-only">
                    Choose file
                  </label>
                  <input
                    type="file"
                    name="animationImg-input"
                    id="file-input"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
  file:bg-gray-50 file:border-0
  file:me-4
  file:py-3 file:px-4
  "
                  />
                </form>
              </div> */}
            <div className="mb-5">
              <label
                for="imgInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Images
              </label>
              <form className="max-w-full">
                <label for="imgInput" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="imgInput"
                  id="file-input"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
  file:bg-gray-50 file:border-0
  file:me-4
  file:py-3 file:px-4
  " multiple
                />
              </form>
            </div>
            <form className='mb-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " for="price">Price</label>
                  <input
                    type="text"
                    name='pdPrice'
                    id="price"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Product Price"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900">MRP</label>
                  <input
                    type="text"
                    name='pdMRP'
                    id="base-input"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Product MRP"
                  />
                </div>
              </div>

            </form>


            <div className="grid sm:grid-cols-2 gap-8 mb-5">
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900">Discount</label>
                <input
                  type="text"
                  name='pdDiscount'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Discount"
                />
              </div>
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900">Stock</label>
                <input
                  type="text"
                  name='PdStock'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Stock"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900">Occasion</label>
                <input
                  type="text"
                  name='pdOccasion'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Occasion"
                />
              </div>
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900">Fit</label>
                <input
                  type="text"
                  name='pdFit'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Fit"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900">Fabric</label>
                <input
                  type="text"
                  name='pdFabric'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Fabric"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900">color</label>
                <input
                  type="text"
                  name='pdColor'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Price"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                for="base-input"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Select Category
              </label>

              <select
                id="default"
                name='CatSelectBox'
                className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              >
                <option selected>--Select Parent Category--</option>
                <option value="Mens">Men's</option>
                <option value="Women">Women</option>
                <option value="Sale">Sale</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="base-input"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Select Sub Category
              </label>

              <select
                id="default"
                name='subCatSelectBox'
                className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              >
                <option selected>--Select Sub Category--</option>
                <option value="tShirt">T-shirt</option>
                <option value="Shirt">Shirt</option>
              </select>
            </div>
            <form className='mb-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900">Size</label>
                  <select
                    id="default"
                    name='pdSizeSelectBox'
                    className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    multiple
                  >
                    <option selected>--Select Size--</option>
                    <option value="tShirt">S</option>
                    <option value="Shirt">M</option>
                    <option value="Shirt">L</option>
                    <option value="Shirt">XL</option>
                    <option value="Shirt">XXL</option>
                  </select>
                </div>
                <div>
                <label className="block mb-5 text-md font-medium text-gray-900">Weight</label>
                <input
                  type="text"
                  name='pdWeight'
                  id="base-input"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Price"
                />
              </div>
                {/* <div>
                  <label className="block mb-5 text-md font-medium text-gray-900">Color</label>
                  <select
                    id="default"
                    name='pdColorSelectBox'
                    className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option selected>--Select Color--</option>
                    <option value="tShirt">Red</option>
                    <option value="Shirt">Black</option>
                    <option value="Shirt">Orange</option>
                  </select>
                </div> */}
              </div>
            </form>
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
            </div>
            <button
              type="submit"
              className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}