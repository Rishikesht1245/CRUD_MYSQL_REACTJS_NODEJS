import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center gap-7 p-4 h-full">
      <h1 className="text-blue-900 text-3xl uppercase font-black my-5">
        Krithi Book Shop
      </h1>
      <div className="flex gap-5 flex-wrap">
        {books?.map((book) => (
          <div key={book?.id} className="flex-1 flex flex-col gap-2">
            {book?.cover && (
              <img
                className="w-[200px] h-[300px] object-cover bg-green-200"
                src={book?.cover}
                alt="book img"
              />
            )}
            <h2>{book?.title}</h2>
            <p>{book?.desc}</p>
            <span>{book?.price}</span>
            <div className="flex gap-3 justify-center items-center">
              <button
                className="bg-red-900 text-white font-semibold rounded-md px-2 py-1"
                onClick={() => handleDelete(book?.id)}
              >
                Delete
              </button>
              <button className="bg-gray-700 text-white font-semibold rounded-md px-2 py-1">
                <Link to={`/update/${book?.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* add new book button */}
      <button className="bg-blue-900 text-white font-semibold rounded-md px-4 py-2">
        <Link to={"/add"}>Add new book</Link>
      </button>
    </div>
  );
};
export default Books;
