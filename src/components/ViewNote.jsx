import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";

const ViewNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundNote = notes.find((note) => note.id === parseInt(id));
    if (foundNote) {
      setNote(foundNote);
    } else {
      navigate("/notes");
    }
  }, [id, navigate]);

  const handleDelete = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.filter((note) => note.id !== parseInt(id));
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/notes");
  };

  if (!note) return null;

  const createdAtFormatted = new Date(note.createdAt).toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
        <div className="flex mb-4">
          <button
            onClick={() => navigate(`/edit-note/${note.id}`)}
            className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            ✍️ Редактировать
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            🗑 Удалить
          </button>
        </div>
        <pre className="whitespace-pre-wrap border p-4 w-full max-w-screen-lg bg-gray-100 rounded shadow">
          {note.body || "Нет содержания."}
        </pre>
        <p className="text-gray-500 mt-2">Создано: {createdAtFormatted}</p>
        <button
          onClick={() => navigate("/notes")}
          className="mt-4 text-blue-500"
        >
          Назад
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ViewNote;
