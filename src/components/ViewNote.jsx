import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  return (
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="text-2xl mb-4">{note.title}</h1>
      <div className="flex mb-4">
        <button
          onClick={() => navigate(`/edit-note/${note.id}`)}
          className="mr-4"
        >
          ✍️ Редактировать
        </button>
        <button onClick={handleDelete} className="text-red-500">
          🗑 Удалить
        </button>
      </div>
      <pre className="whitespace-pre-wrap border p-4 w-full max-w-screen-lg">
        {note.body || "Нет содержания."} {/* Отображение тела заметки */}
      </pre>
      <button onClick={() => navigate("/notes")} className="mt-4 text-blue-500">
        Назад
      </button>
    </div>
  );
};

export default ViewNote;
