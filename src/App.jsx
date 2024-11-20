import React, { useEffect } from "react";
import "./index.css";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:3000/posts');
      const data = await res.json();
      console.log(data);
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
