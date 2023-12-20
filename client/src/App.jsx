import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";
import ImageUpload from "./pages/ImageUpload";
import Banner from "./pages/Banner";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
