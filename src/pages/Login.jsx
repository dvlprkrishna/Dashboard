import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setUserRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "krishna" && password === "krishna") {
      setIsAuthenticated(true);
      setUserRole("basic");
      navigate("/basic");
    } else if (username === "dvlpr" && password === "dvlpr") {
      setIsAuthenticated(true);
      setUserRole("premium");
      navigate("/premium");
    } else if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      setUserRole("admin");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="3xl:w-1/3 3xl:p-14 mx-auto flex w-full flex-col rounded-2xl bg-[#ffffff] p-8 shadow-xl md:w-1/2 md:p-10 xl:w-2/5 2xl:w-2/5 2xl:p-12">
        <div className="flex flex-col gap-y-1 pb-4">
          <h1 className="my-auto text-2xl text-[#4B5563]">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="pb-2">
            <label
              for="username"
              className="mb-2 block text-sm font-medium text-[#111827]"
            >
              Username
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                className="mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring ring-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm"
                placeholder="krishna"
                autocomplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              for="password"
              className="mb-2 block text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring ring-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="focus:ring-primary-300 mb-6 w-full rounded-lg bg-[#4F46E5] px-5 py-2.5 text-center text-sm font-medium text-[#FFFFFF] focus:outline-none focus:ring-4"
          >
            Login
          </button>
          <div className="text-left text-sm font-light text-[#6B7280]">
            <p>username and Password - krishna krishna</p>
            <p>username and Password - admin admin</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
