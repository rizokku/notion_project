import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Блаблаба. Все права защищены.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/about" className="hover:underline">
          О нас
        </a>
        <a href="/privacy" className="hover:underline">
          Политика конфиденциальности
        </a>
        <a href="/terms" className="hover:underline">
          Условия использования
        </a>
      </div>
    </footer>
  );
};

export default Footer;
