import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={<Companies />} /> */}
      </Routes>
    </div>
  );
}

export default App;
