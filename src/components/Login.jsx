import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/LoginUser";
import Footer from "./footer/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    setLoading(true);
    try {
      await loginUser({ email: formData.email, password: formData.password });
      const updatedUser = {
        email: formData.email,
        lastLogin: new Date().toISOString(),
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      navigate("/home");
    } catch (e) {
      setError("Неправильные данные");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Вход</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Пароль</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2"
        disabled={loading}
      >
        {loading ? "Загрузка..." : "Войти"}
      </button>
      <br />
      <a href="/register">
        Нету аккаунта?{" "}
        <span className="underline text-blue-500">Зарегистрируйтесь</span>
      </a>
      <Footer />
    </form>
  );
};

export default Login;
