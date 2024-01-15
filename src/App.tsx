import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import SingleUserPosts from "./pages/SinglePost";
import { useEffect } from "react";
import { fetchAllPosts } from "./redux/slices/posts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<SingleUserPosts />} />
      </Routes>
    </div>
  );
}

export default App;

