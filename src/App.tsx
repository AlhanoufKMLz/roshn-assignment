import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import SingleUserPosts from "./pages/SinglePost";

function App() {
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

