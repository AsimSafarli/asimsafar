import React, { useEffect, useState } from 'react'
import BlogAdd from './BlogAdd'
import { Modal, Button } from "antd";
import BlogEdit from './BlogEdit'
import BlogDelete from './BlogDelete'

import axios from 'axios'
function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Delete
  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:4000/blogs/${productId}`)
      .then((response) => {
        console.log(`Deleted blog with id ${response.data._id}`);
        setBlogs(
          blogs.filter((blog) => blog._id !== response.data._id)
        );
      })
      .catch((error) => console.log(error));
  };

  //Edit
  const handleEdit = (updatedBlog) => {
    axios
      .put(
        `http://localhost:4000/blogs/${updatedBlog.id}`,
        updatedBlog
      )
      .then((response) => {
        setBlogs(
          blogs.map((blog) =>
            blog._id === response.data._id ? response.data : blog
          )
        );
      })
      .catch((error) => console.log(error));
  };

  //Api-den gelen
  useEffect(() => {
    axios
      .get("http://localhost:4000/blogs")
      .then((response) => {
        setBlogs(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error(error);
        setLoaded(true);
      });
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (blogId) => {
    setEditingBlogId(blogId);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (blogId) => {
    setDeletingProductId(blogId);
    setShowDeleteConfirmation(true);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = (deletingBlogId) => {
    handleDelete(deletingBlogId);
    setShowDeleteConfirmation(false);
  };

  const handleEditSubmit = (updatedBlog) => {
    handleEdit(updatedBlog);
    setEditingBlogId(null);
  };
  return (
    <div>
   <div className="py-8 flex flex-col gap-y-8">
      <div>
        <h2 className="text-2xl font-semibold leading-tight text-center">
          Blog Edit Page
        </h2>
      </div>
      <div className=" px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block max-w-full shadow rounded-lg overflow-hidden">
            <table className="max-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Title
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Categories
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Text
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Edit
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="border-b ">
              {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {blog.title}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700   ">
                      {blog.categories}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {blog.text}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {" "}
                      <Button
                        onClick={() => handleEditClick(blog._id)}
                        className="bg-sky-700 text-slate-50 hover:text-green-500 hover:bg-transparent"
                      >
                        Edit
                      </Button>
                      {editingBlogId === blog._id && (
                        <Modal
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          <BlogEdit
                            blog={blog}
                            onConfirm={handleEditSubmit}
                            onCancel={() => setShowDeleteConfirmation(false)}
                          />
                        </Modal>
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {" "}
                      <Button
                        onClick={() => handleDeleteClick(blog._id)}
                        className="bg-red-700 text-slate-50 hover:text-green-500 hover:bg-transparent"
                      >
                        Delete
                      </Button>
                      {showDeleteConfirmation &&
                        deletingProductId === blog._id && (
                          <Modal
                            title="Delete Items"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                          >
                            <BlogDelete
                              onConfirm={handleDeleteConfirm}
                              onCancel={handleCancel}
                            />
                          </Modal>
                        )}
                    </td>

                  </tr>
                ))}
              </tbody>
              </table>
              </div>
              <div className='flex items-center justify-center'><BlogAdd/></div>
              </div>
      </div>
    </div>
  )
}

export default BlogAdmin