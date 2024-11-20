import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Домашняя страница</h1>
      {storedUser ? (
        <>
          <p>
            Дата регистрации:{" "}
            {new Date(storedUser.createdAt).toLocaleDateString()}
          </p>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
            className="bg-red-500 text-white px-4 py-2 mt-4"
          >
            Выйти
          </button>
          <button
            onClick={() => navigate("/notes")}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Перейти на Заметки
          </button>
        </>
      ) : (
        <p>Пожалуйста, войдите в систему.</p>
      )}
    </div>
  );
};

export default Home;
