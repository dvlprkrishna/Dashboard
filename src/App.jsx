import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basic from "./pages/Basic";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        {isAuthenticated && <Sidebar />}
        {/* routes */}
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUserRole={setUserRole}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            }
          >
            <Route path="/" element={<Basic />} />
            <Route path="basic" element={<Basic />} />
            {userRole === "premium" || userRole === "admin" ? (
              <Route path="premium" element={<Premium />} />
            ) : null}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
