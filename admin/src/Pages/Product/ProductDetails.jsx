import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import axios from 'axios';
import imgprev from '../../assets/imgprev.png'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const params = useParams();
  const [data, setData] = useState({});
  const [selectedSizes, setSelectedSizes] = useState(data.size || []); // Initialize with previously added sizes
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedSubcategory, setSelectedSubcategory] = useState('');

  //fetch singel product data to read for update 
  const fetchData = async (id) => {
    const res = await axios.get(`http://localhost:5200/product/fetch_product_with_id/${id}`)
    const oldData = res.data.data
    oldData.status = oldData.status.toString(); 

    setData(oldData);
    // console.log(res.data.data);

    // Set selected sizes if size data exists in the fetched product data
    if (res.data.data.size) {
      setSelectedSizes(res.data.data.size);
    }
  }  

  useEffect(() => {
    if(params._id){
      fetchData(params._id)
    }
  }, []); 

  useEffect(() => {
    if (data.size) {
      setSelectedSizes(data.size); // Ensure data.size is used to set selectedSizes
    }
  }, [data]); // Re-run whenever data changes
  

  const [categoryData, setcategoryData] = useState([]);
  const [subCatData, setsubCatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [previewThumbnail, setpreviewThumbnail] = useState('');
  const [previewImg, setpreviewImg] = useState([]); // Array to store multiple preview URLs
   

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

    try {
      //axios set content type automaticaly like - formdata, raw>json etc.
      //formData - work as body   //{} - header etc. define here.
      const response = await axios.post('http://localhost:5200/product/insert_product', formData, {});
      // console.log(response);
    } catch (error) {
      console.log(error);
      alert('something went wrong')
    }
  };

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

  const handleImgPreview = (e) =>{
    const files = Array.from(e.target.files);
    // Check if more than 5 files are selected
    if (files.length > 4) {
      alert("You can only select up to 4 images.");
      e.target.value = ""; // Clear the file input if the limit is exceeded
      return;
    }

    const newPreviews = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        newPreviews.push(reader.result); // Add preview URL to the array
        if (newPreviews.length === files.length) {
          setpreviewImg(newPreviews); // Update state when all files are processed
        }
      };
    });
  };

  //update size
  const handleCheckboxChange = (size) => {
    setSelectedSizes((prevSizes) => {
      if (prevSizes.includes(size.toLowerCase())) {
        // Remove size if it's already selected
        return prevSizes.filter((s) => s !== size.toLowerCase());
      } else {
        // Add size if it's not selected
        return [...prevSizes, size.toLowerCase()];
      }
    });
  };
  
  //update status
  const handleDataUpdate = (e)=>{
    const olddata = {...data};
    olddata[e.target.name] = e.target.value;

    setData(olddata);
  }

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
                htmlFor="productInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Name
              </label>
              <input
                type="text"
                value={data.name}
                name="name"
                id="productInput"
                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                placeholder="Product Name"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="shortDescription"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Short Description
              </label>
              <textarea value={data.description} name='description' id="shortDescription" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Short Description....."></textarea>
            </div>

            <div className="mb-5">
              <label
                htmlFor="fullDescription"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Full Description
              </label>
              <textarea value={data.full_description} name='full_description' id="fullDescription" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Full Description....."></textarea>
            </div>
            <div className="mb-5">
              <label
                htmlFor="thumbnailInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Thumbnail
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
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  <img src={previewThumbnail || data.thumbnail || imgprev} alt="" className='w-full'/>
                </div>
              </div>
            </div>
            {/* <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-5 text-md font-medium text-gray-900"
                >
                Image Animation
                </label>
                <form className="max-w-full">
                  <label htmlFor="file-input" className="sr-only">
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
                htmlFor="imgInput"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Product Images (Select 4 Image)
              </label>
              <div className="w-1/2 flex items-center">
                <label htmlFor="imgInput" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="images"
                  id="imgInput"
                  onChange={handleImgPreview}
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
  file:bg-gray-50 file:border-0
  file:me-4
  file:py-3 file:px-4
  " multiple
                />
                <div className='ps-5 w-[100px] gap-x-5 flex'>
                  {/* <img src={previewImg|| imgprev} alt="image preview" />
                  <img src={imgprev} alt="image preview" />
                  <img src={imgprev} alt="image preview" />
                  <img src={imgprev} alt="image preview" />
                  <img src={imgprev} alt="image preview" /> */}
                   {previewImg.map((imgSrc, index) => (
          <img key={index} src={imgSrc || data.images} alt={`Preview ${index + 1}`} width="100" />
                    ))}
                </div>
              </div>
             
            </div>
            <div className='mb-5'>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900 " htmlFor="pdPrice">Price</label>
                  <input
                    type="text"
                    value={data.price}
                    name='price'
                    id="pdPrice"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Product Price"
                  />
                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdMRP">MRP</label>
                  <input
                    type="text"
                    value={data.mrp}
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
                <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdDiscount">Discount</label>
                <input
                  type="text"
                  value={data.discount}
                  name='discount'
                  id="pdDiscount"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Discount"
                />
              </div>
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="PdStock">Stock</label>
                <input
                  type="text"
                  value={data.stock}
                  name='stock'
                  id="PdStock"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Stock"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdOccasion">Occasion</label>
                <input
                  type="text"
                  value={data.occasion}
                  name='occasion'
                  id="pdOccasion"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Occasion"
                />
              </div>
              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdFit">Fit</label>
                <input
                  type="text"
                  value={data.fit}
                  name='fit'
                  id="pdFit"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Fit"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdFabric">Fabric</label>
                <input
                  type="text"
                  value={data.fabric}
                  name='fabric'
                  id="pdFabric"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Fabric"
                />
              </div>

              <div>
                <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdColor">color</label>
                <input
                  type="text"
                  value={data.color}
                  name='color'
                  id="pdColor"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                  placeholder="Product Price"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="CatSelectBox"
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
                htmlFor="subCatSelectBox"
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
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdSizeSelectBox">Size</label>
                  <div className="flex gap-6 ps-1">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <label key={size} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="size"
                          value={size.toLowerCase()} // Convert to lowercase to match values in the original <select>
                          checked={selectedSizes.includes(size.toLowerCase())} //Ensure lowercase match if needed
                          onChange={() => handleCheckboxChange(size)}
                          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-900 text-sm">{size}</span>
                      </label>
                    ))}
                  </div>

                </div>
                <div>
                  <label className="block mb-5 text-md font-medium text-gray-900" htmlFor="pdWeight">Weight</label>
                  <input
                    type="text"
                    value={data.weight}
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
                  onClick={handleDataUpdate}
                  checked={data.status == 'true'}
                  value={true}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                ></input>
                Active
                <input
                  id="link-radio"
                  name='status'
                  type="radio"
                  onClick={handleDataUpdate}
                  checked={data.status == 'false'}
                  value={false}
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