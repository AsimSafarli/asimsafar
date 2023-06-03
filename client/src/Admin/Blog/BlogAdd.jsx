import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Field, Form, Formik } from "formik";
import axios from "axios";
function BlogAdd() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAdd = async (initialValues) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/blog",
        initialValues
      );
      if (response.data.success) {
        alert("Blog created successfully");
        initialValues.title = '';
      initialValues.categories = '';
      initialValues.text = '';
      } else {
        alert("Blog created failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    title: "",
    categories: "",
    text: "",
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" flex items-center justify-center">
    <div >
         <button className="flex flex-row items-center justify-center w-96 bg-purple-800 h-max text-slate-50 add dark:bg-white dark:text-purple-800" onClick={showModal}>
         Add<ion-icon name="add-outline"></ion-icon>
         </button> 
        </div>
      <Modal
        title="Add Blog Post"
        className="h-52"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formik initialValues={initialValues} onSubmit={handleAdd}>
          {({ values, handleChange, handleSubmit }) => (
            <form
              className="flex flex-col items-center gap-y-10 justify-center mx-auto max-w-md px-6 py-12"
              onSubmit={handleSubmit}

            >
              <div className="flex-row-form">
                <label htmlFor="name" className="font-bold text-lg text-black ">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Macbook"
                  className="form-input"

                />
              </div>
              <div className="flex-row-form">
                <label htmlFor="categories" className="font-bold text-lg text-black">Categories</label>
                <input
                  id="categories"
                  name="categories"
                  type="text"
                  value={values.categories}
                  onChange={handleChange}
                  placeholder="Apple"
                  className="form-input"
                />
              </div>
              <div className="flex-row-form">
                <label htmlFor="price" className="font-bold text-lg text-black">Text</label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  value={values.text}
                  onChange={handleChange}
                  placeholder="text"
                  className="form-input"
                />
              </div>
              <button type="submit" className="bg-sky-700 text-slate-50 hover:bg-transparent hover:text-sky-700 w-40 h-8 hover:border-sky-700 hover:border-solid">Submit</button>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default BlogAdd;