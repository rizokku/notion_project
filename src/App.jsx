// Допы: Хранить пароли в базе в захешированном виде
// Провека на дубликат (при регистрации)
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/footer/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import ViewNote from "./components/ViewNote";
import ErrorPage from "./components/ErrorPage";
import { Provider } from "react-redux";
import store from "./lib/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <div className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/home" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/create-note" element={<CreateNote />} />
              <Route path="/edit-note/:id" element={<EditNote />} />
              <Route path="/view-note/:id" element={<ViewNote />} />
              <Route
                path="/"
                element={
                  <h1 className="text-2xl text-center">
                    Добро пожаловать в "DemoNotion"! Пожалуйста,{" "}
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
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
