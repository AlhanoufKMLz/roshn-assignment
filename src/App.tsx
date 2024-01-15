import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import SingleUserPosts from "./pages/SinglePost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<SingleUserPosts />} />

         {/* catch all */}
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

