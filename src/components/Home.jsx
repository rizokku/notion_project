import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";

const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-col items-center pt-20">
        {" "}
        <h1 className="text-2xl mb-4">Домашняя страница</h1>
        {storedUser ? (
          <p>
            Дата регистрации:{" "}
            {new Date(storedUser.createdAt).toLocaleDateString()}
          </p>
        ) : (
          <p>Пожалуйста, войдите в систему.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
