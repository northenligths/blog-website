import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog:blogName" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
