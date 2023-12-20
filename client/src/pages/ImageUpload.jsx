import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    banner: null,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      banner: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataForServer = new FormData();
    formDataForServer.append("title", formData.title);
    formDataForServer.append("banner", formData.banner);
    console.log(formDataForServer);
    console.log(formData, "===formdata");
    try {
      const res = await axios.post("http://localhost:3000/upload", formData);
      navigate("/");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen">
      <h1 className="text-center w-full">Image Upload</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="banner" onChange={handleFileChange} />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUpload;
