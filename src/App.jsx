import React from "react";
import "./index.css";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/footer/Footer";

function App() {
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
