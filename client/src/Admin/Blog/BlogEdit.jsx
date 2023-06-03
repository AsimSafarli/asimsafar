import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Field, Form, Formik } from "formik";
function BlogEdit({ blog,onConfirm,onCancel }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [categories, setCategories] = useState(blog.categories);
  const [text, setText] = useState(blog.text);

  const handleNameChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoriesChange = (e) => {
    setCategories(e.target.value);
  };

  const handlePriceChange = (e) => {
    setText(e.target.value);
  };

  const initialValues = {
    title: "",
    categories: "",
    text: "",
  };
  return (
    <div className=" flex items-center justify-around">
        <Formik initialValues={initialValues}>
          <Form className="flex flex-col gap-y-5 items-center justify-center mx-auto max-w-md px-6 py-12">
            <div className="flex-row-form">
              <label htmlFor="name" className="font-bold text-lg text-black">Title</label>
              <Field
                id="name"
                name="name"
                placeholder="Macbook"
                className="form-input"
                value={title} onChange={handleNameChange} 
              />
            </div>
            <div className="flex-row-form">
              <label htmlFor="categories" className="font-bold text-lg text-black">Categories</label>
              <Field
                id="categories"
                name="categories"
                placeholder="Apple"
                className="form-input"
                value={categories} onChange={handleCategoriesChange} 
              />
            </div>
            <div className="flex-row-form">
              <label htmlFor="text" className="font-bold text-lg text-black">Text</label>
              <Field
                id="text"
                name="text"
                placeholder="text"
                className="form-input"
                value={text} onChange={handlePriceChange} 
              />
            </div>
            <div className="flex flex-row gap-x-5">
            <button onClick={() => onConfirm({ id: blog._id, title, categories, text })} className="bg-green-700 text-slate-50 hover:bg-transparent hover:text-green-700 w-40 h-8 hover:border-green-700 hover:border-solid">Save</button>
          <button onClick={onCancel} className="bg-red-700 text-slate-50 hover:bg-transparent hover:text-red-700 w-40 h-8 hover:border-red-700 hover:border-solid">Cancel</button>
            </div>
           
          </Form>
        </Formik>
    </div>
  );
}

export default BlogEdit;
