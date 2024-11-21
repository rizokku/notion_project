import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteForm from "./NoteForm";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";

const CreateNote = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = ({ title, body }) => {
    if (!title.trim()) {
      setError("Название заметки не может быть пустым.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
      userId: JSON.parse(localStorage.getItem("user")).id,
    };

    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    existingNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(existingNotes));

    navigate(`/view-note/${newNote.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen items-center pt-20">
      <NavBar />
      <h1 className="text-2xl mb-4">Создание заметки</h1>
      <NoteForm onSubmit={handleSubmit} error={error} />
      <button onClick={() => navigate("/notes")} className="mt-4 text-blue-500">
        Назад
      </button>
      <Footer />
    </div>
  );
};

export default CreateNote;
