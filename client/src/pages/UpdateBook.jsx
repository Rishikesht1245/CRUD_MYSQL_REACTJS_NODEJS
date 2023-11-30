import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const params = useParams();

  //   handle change function
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:3000/books/" + params.id,
        book
      );
      navigate("/");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-10 text-blue-900 font-bold text-3xl">Update Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-1/3">
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          className="focus:outline-none border-none rounded-md px-2 py-2 text-slate-700"
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          onChange={handleChange}
          className="focus:outline-none border-none rounded-md px-2 py-2 text-slate-700"
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
          className="focus:outline-none border-none rounded-md px-2 py-2 text-slate-700"
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={handleChange}
          className="focus:outline-none border-none rounded-md px-2 py-2 text-slate-700"
        />
        <button
          type="submit"
          className="w-full bg-blue-900 text-white font-semibold rounded-md py-2 px-4"
        >
          Update
        </button>
        {errorMessage && (
          <span className="text-red-700 font-semibold text-center tracking-wider">
            {errorMessage}
          </span>
        )}
      </form>
    </div>
  );
};
export default UpdateBook;
