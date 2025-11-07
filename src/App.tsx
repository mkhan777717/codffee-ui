import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp/SignupForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const location = useLocation();

  // Paths where Sidebar should NOT show
  const hideSidebarPaths = ["/", "/signUp"];

  // Check if current path matches
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);
  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed on left) */}
      {!shouldHideSidebar && <Sidebar />}
      <div className={`flex-1 ${shouldHideSidebar ? "" : "p-6"} bg-gray-100 overflow-auto`}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignupForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
}
