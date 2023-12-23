import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event?.target?.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("banner", image);
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
          value={title}
          onChange={(e) => setTitle(e?.target?.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUpload;
