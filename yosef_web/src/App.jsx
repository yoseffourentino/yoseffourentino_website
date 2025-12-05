import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Home";
import ProtectedRoute from "../src/pages/ProtectedRoute";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
{/* 
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} /> */}
      
      </Routes>
    </>
  );
}
