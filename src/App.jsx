// Допы: Хранить пароли в базе в захешированном виде
// Провека на дубликат (при регистрации)
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/Auth/RegistrationForm";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import Notes from "./components/Notes/Notes";
import CreateNote from "./components/Notes/CreateNote";
import EditNote from "./components/Notes/EditNote";
import ViewNote from "./components/Notes/ViewNote";
import ErrorPage from "./components/ErrorPage";
import { Provider } from "react-redux";
import store from "./lib/redux/store";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { WelcomePage } from "./components/Welcome/WelcomePage";

function App() {
  return (
    <Wrapper>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/create-note" element={<CreateNote />} />
      <Route path="/edit-note/:id" element={<EditNote />} />
      <Route path="/view-note/:id" element={<ViewNote />} />
      <Route
        path="/"
        element={<WelcomePage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Wrapper>
  );
}

export default App;
