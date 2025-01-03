import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddSubCategory() {

  const nav = useNavigate();
  const params = useParams();

  const [categoryData, setcategoryData] = useState([]);
  const [data, setData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');

  //fetch single subcat data to read for update 
  const fetchData = async (id) => {
    const res = await axios.get(`http://localhost:5200/subcategory/fetch_subcategory_with_id/${id}`)

    const oldData = res.data.data
    oldData.status = oldData.status.toString();

    setData(oldData);
    // console.log(res.data.data);
  }

  //RESET INPUT FIELD WHEN URL DOES'NT CONTAIN PARAMS
  useEffect(() => {
    if (params._id) {
      // If _id exists in params, fetch the product data
      fetchData(params._id);
    } else {
      setSelectedCategory('');
      setData({
        subCatName: '',
        status: ''
      });
    }
  }, [params._id]);



  // Set category and subcategory when data is loaded for updating a product
  useEffect(() => {
    if (data && data.category) {
      setSelectedCategory(data.category);
    }
  }, [data]);

  //update data
  const handleDataUpdate = (e) => {
    const olddata = { ...data };
    olddata[e.target.name] = e.target.value;
    setData(olddata);
  }


  //for fetch parent category in selection.
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

  useEffect(() => { handleFetchCategory() }, []);

  // for update & add sub-category
  const handlleAddSubCat = async (e) => {
    e.preventDefault();

    // Merge selectedCategory into the data object before submitting
    const submissionData = { ...data, category: selectedCategory };

    if (params._id) {
      try {
        const response = await axios.put(
          `http://localhost:5200/subcategory/update_subcategory/${params._id}`,
          submissionData
        );
        nav('/sub-category/view-sub-category');
      } catch (error) {
        console.log(error);
        alert('something went wrong');
      }
    } else {
      try {
        const response = await axios.post(
          'http://localhost:5200/subcategory/insert_subcategory',
          submissionData
        );
        if (response.status !== 200) return ("something went wrong");
        alert('data inserted successfully!');
        nav('/sub-category/view-sub-category');
      } catch (error) {
        console.log(error);
        alert('something went wrong');
      }
    }
  };

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
                Sub Category Name
              </label>
              <input
                type="text"
                onChange={handleDataUpdate}
                name="subCatName"
                value={data.subCatName}
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
                value={selectedCategory}
                onChange={(e) => { setSelectedCategory(e.target.value) }}
                className="border-2 borde-gray-300 text-gray-900 mb-6 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              >
                <option value="">--Select Category--</option>
                {
                  categoryData?.map((category, i) => {
                    return (
                      <option key={category._id} value={category._id}>{category.categoryName}</option>
                    )
                  })
                }
              </select>
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
              Add Sub Category
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
