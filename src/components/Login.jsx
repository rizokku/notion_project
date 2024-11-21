import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/LoginUser";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      loginUser({ email: formData.email, password: formData.password }).then(() => {
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));
        navigate('/home');
      });
    } catch (e) {
      setError("Неправильные данные");
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
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Войти
      </button>
      <br />
      <a href="/register">Нету аккаунта? <span className="underline text-blue-500">Зарегистрируйтесь</span></a>
    </form>
  );
};

export default Login;
