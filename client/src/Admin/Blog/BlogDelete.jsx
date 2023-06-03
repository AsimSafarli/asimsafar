import { Button, Modal } from 'antd';
import React, { useState } from 'react'

function BlogDelete({  onConfirm, onCancel }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div>
      <button onClick={onConfirm}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
     
        </div>
  )
}

export default BlogDelete