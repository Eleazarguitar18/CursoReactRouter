import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
// import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/Userspage";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Dasbhorad from "./pages/Dasbhorad";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/dasbhoard/*" element={<Dasbhorad />}>
          <Route path="welcome" element={<p>Welcome !!!</p>} />
          <Route path="goodbye" element={<p>Goodbye !!!</p>} />
        </Route>
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/usuarios" element={<Navigate to={"/users"} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
