import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  //   handle change function
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/books", book);
      navigate("/");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
        {errorMessage && (
          <span className="text-red-700 font-semibold text-center tracking-wider">
            {errorMessage}
          </span>
        )}
      </form>
    </div>
  );
};
export default AddBook;
