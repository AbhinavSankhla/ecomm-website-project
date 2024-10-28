import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import axios from 'axios';

export default function ProductDetails() {

  const [categoryData, setcategoryData] = useState([]);
  const [subCatData, setsubCatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  //FETCH CATEGORY FOR SELECTION BOX
  const handleFetchCategory = async () => {
    try {
      const response = await axios.get('http://localhost:5200/category/true_category')

      if (response.status !== 200) return ("something went wrong");

      // const data = response.data.data;
      setcategoryData(response.data.data)
    }
    catch (error) {
      console.log(error);
      alert('something went wrong')
    }
  };

  // Fetch subcategories based on the selected category
  const handleFetchSubCat = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:5200/subcategory/true_subcategory?category=${categoryId}`);
      if (response.status !== 200) return 'Something went wrong';
      setsubCatData(response.data.data);
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  // Load categories when component mounts
  useEffect(() => {
    handleFetchCategory();
  }, []);

   // Update subcategories when selected category changes
   useEffect(() => {
    if (selectedCategory) {
      handleFetchSubCat(selectedCategory);
    }
  }, [selectedCategory]);

  //Parent Category select box event listner
  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId); // Update selected category
  };
  
  
  //INSERT PRODUCT
  const handleAddProduct = async (e) => {
    e.preventDefault()
    const form = e.target
    //FormData Constructor - makes data a formdata which pass inside of it.  
    const formData = new FormData(form);

    //axios set content type automaticaly like - formdata, raw>json etc.
    //formData - work as body   //{} - header etc. define here.
    const response = await axios.post('http://localhost:5200/product/insert_product', formData, {});
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
                name='name'
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
              <textarea name='description' id="shortDescription" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Short Description....."></textarea>
            </div>

            <div className="mb-5">
              <label
                for="fullDescription"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Full Description
              </label>
              <textarea name='full_description' id="fullDescription" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Full Description....."></textarea>
            </div>
            <div className="mb-5">
              <label
                for="thumbnailInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Thumbnail
              </label>
              <div className="max-w-full">
                <label for="thumbnailInput" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="thumbnail"
                  id="thumbnailInput"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
  file:bg-gray-50 file:border-0
  file:me-4
  file:py-3 file:px-4
  "
                />
              </div>
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
              <div className="max-w-full">
                <label for="imgInput" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="images"
                  id="imgInput"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
  file:bg-gray-50 file:border-0
  file:me-4
  file:py-3 file:px-4
  " multiple
                />
              </div>
            </div>
            <div className='mb-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " for="pdPrice">Price</label>
                  <input
                    type="text"
                    name='price'
                    id="pdPrice"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Product Price"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" for="pdMRP">MRP</label>
                  <input
                    type="text"
                    name='mrp'
                    id="pdMRP"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Product MRP"
                  />
                </div>
              </div>

            </div>


            <div className="grid sm:grid-cols-2 gap-8 mb-5">
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" for="pdDiscount">Discount</label>
                <input
                  type="text"
                  name='discount'
                  id="pdDiscount"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Discount"
                />
              </div>
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" for="PdStock">Stock</label>
                <input
                  type="text"
                  name='stock'
                  id="PdStock"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Stock"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" for="pdOccasion">Occasion</label>
                <input
                  type="text"
                  name='occasion'
                  id="pdOccasion"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Occasion"
                />
              </div>
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" for="pdFit">Fit</label>
                <input
                  type="text"
                  name='fit'
                  id="pdFit"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Fit"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" for="pdFabric">Fabric</label>
                <input
                  type="text"
                  name='fabric'
                  id="pdFabric"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Fabric"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" for="pdColor">color</label>
                <input
                  type="text"
                  name='color'
                  id="pdColor"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Price"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                for="CatSelectBox"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Select Category
              </label>

              <select
                id="CatSelectBox"
                name='category'
                className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                onChange={handleCategoryChange}
              >
                <option selected>--Select Parent Category--</option>
                  {
                    categoryData?.map((category, i) => {
                      return(
                        <option key={i} value={category._id}>{category.categoryName}</option>
                      ) 
                    })
                  }
              </select>
            </div>
            <div className="mb-5">
              <label
                for="subCatSelectBox"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Select Sub Category
              </label>

              <select
                id="subCatSelectBox"
                name='subcategory'
                className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              >
                <option selected>--Select Sub Category--</option>
                {
                    subCatData?.map((subCat, i) => {
                      return(
                        <option key={i} value={subCat._id}>{subCat.subCatName}</option>
                      ) 
                    })
                  }
              </select>
            </div>
            <div className='mb-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" for="pdSizeSelectBox">Size</label>
                  <select
                    id="pdSizeSelectBox"
                    name='size'
                    className=" border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    multiple
                  >
                    <option selected>--Select Size--</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" for="pdWeight">Weight</label>
                  <input
                    type="text"
                    name='weight'
                    id="pdWeight"
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
            </div>
            <div className="pe-5 ps-1">
              <span className="flex items-center gap-3">
                Status :
                <input
                  id="link-radio"
                  name='status'
                  type="radio"
                  value="true"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                ></input>
                Active
                <input
                  id="link-radio"
                  name='status'
                  type="radio"
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
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}