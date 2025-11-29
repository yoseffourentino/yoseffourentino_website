import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Home";
import ProtectedRoute from "../src/pages/ProtectedRoute";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* default route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}
