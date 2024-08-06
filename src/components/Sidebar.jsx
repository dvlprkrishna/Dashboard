import {
  BarChart2,
  BarChart3,
  DollarSign,
  Home,
  Menu,
  Star,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Home",
    icon: Home,
    color: "#6366f1",
    href: "/",
  },
  {
    name: "Basic User",
    icon: User,
    color: "#6366f1",
    href: "/basic",
  },
  {
    name: "Premium User",
    icon: DollarSign,
    color: "#6366f1",
    href: "/premium",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="flex h-full flex-col border-r-2 border-gray-300  bg-opacity-30 p-4 backdrop-blur-md">
        <div className="flex items-center gap-x-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="max-w-fit rounded-full p-2 transition-colors hover:bg-gray-200"
          >
            <Menu size={24} />
          </motion.button>
          {isSidebarOpen ? (
            <span className="font-semibold transition-all ease-in delay-300">
              Dashboard
            </span>
          ) : (
            ""
          )}
        </div>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
                className={`flex items-center text-sm p-4 font-medium rounded-lg mb-2 transition-colors hover:bg-gray-200 ${
                  item.href === activePath ? "bg-gray-300" : ""
                }`}
              >
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                  className="mr-4 text-white"
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
