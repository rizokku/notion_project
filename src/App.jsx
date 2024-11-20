import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/footer/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Notes from "./components/Notes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route
              path="/"
              element={
                <h1 className="text-2xl">
                  Добро пожаловать! Пожалуйста,{" "}
                  <a href="/login" className="text-blue-500">
                    войдите
                  </a>{" "}
                  или{" "}
                  <a href="/register" className="text-blue-500">
                    зарегистрируйтесь
                  </a>
                  .
                </h1>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
