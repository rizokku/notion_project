import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteForm from "./NoteForm"; // Импортируем компонент формы заметки

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundNote = notes.find((note) => note.id === parseInt(id));
    if (foundNote) {
      setNote(foundNote);
    } else {
      navigate("/notes");
    }
  }, [id, navigate]);

  const handleSubmit = ({ title, body }) => {
    if (!title.trim()) {
      setError("Название заметки не может быть пустым.");
      return;
    }

    const updatedNote = { ...note, title: title.trim(), body: body.trim() };
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((n) =>
      n.id === updatedNote.id ? updatedNote : n
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate(`/view-note/${updatedNote.id}`);
  };

  if (!note) return null;

  return (
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="text-2xl mb-4">Редактирование заметки</h1>
      <NoteForm
        onSubmit={handleSubmit}
        initialTitle={note.title}
        initialBody={note.body}
        error={error}
      />
      <button onClick={() => navigate("/notes")} className="mt-4 text-blue-500">
        Назад
      </button>
    </div>
  );
};

export default EditNote;
