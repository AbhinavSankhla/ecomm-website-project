import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddCategory() {

  const nav = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  //fetch single category data to read for update 
  const fetchData = async (id) => {
    const res = await axios.get(`http://localhost:5200/category/fetch_category_with_id/${id}`)

    const oldData = res.data.data
    oldData.status = oldData.status.toString();

    setData(oldData);
    console.log(res.data.data);
  }

  //RESET INPUT FIELD WHEN URL DOES'NT CONTAIN PARAMS
  useEffect(() => {
    if (params._id) {
      // If _id exists in params, fetch the product data
      fetchData(params._id);
    } else {
      // If _id is missing, clear the data
      setData({
        categoryName: '',
        status: ''
        // add other fields as needed
      });
    }
  }, [params._id]);

  const handleDataUpdate = (e) => {
    const olddata = { ...data };
    olddata[e.target.name] = e.target.value;
    setData(olddata);
  }

  //ADD CATEGORY
  const handleAddCategory = async (e) => {
    e.preventDefault()
    const form = e.target;

    const categoryName = form.categoryName.value;
    const status = form.status.value;

    if (params._id) {
      try {
        const response = await axios.put(`http://localhost:5200/category/update_category/${params._id}`,
          {
            categoryName,
            status
          });
        // console.log(response)

        nav('/parent-category/view-category');
      }
      catch (error) {
        console.log(error);
        alert('something went wrong')
      }

    }
    else {
      try {
        //axios set content type automaticaly like - formdata, raw>json etc.
        //formData - work as body //{} - header etc. define here.
        const response = await axios.post('http://localhost:5200/category/insert_category', {
          categoryName,
          status
        });
        // console.log(response);
        alert('Data inserted successfully')
        nav('/parent-category/view-category')

      } catch (error) {
        console.log(error);
        alert('something went wrong')
      }
    }
  };

  return (
    <section className="w-full">
      <Breadcrumb
        path={"Parent Category"}
        path2={"Add Category"}
        slash={"/"}
      />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Category
          </h3>
          <form onSubmit={handleAddCategory} className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="mb-5">
              <label
                for="base-input"
                className="block mb-5 text-md font-medium text-gray-900"
              >
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                onChange={handleDataUpdate}
                value={data.categoryName}
                id="base-input"
                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                placeholder="Category Name"
              />
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
              Add Category
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
