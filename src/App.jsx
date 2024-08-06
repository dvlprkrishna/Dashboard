import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basic from "./pages/Basic";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden  ">
        {/* Sidebar */}
        <Sidebar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Basic />} />
          <Route path="basic" element={<Basic />} />
          <Route path="premium" element={<Premium />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
