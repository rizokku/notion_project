import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundNote = notes.find((note) => note.id === parseInt(id));
    if (foundNote) {
      setNote(foundNote);
      setTitle(foundNote.title);
      setBody(foundNote.body);
    } else {
      navigate("/notes");
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-col items-center pt-20">
        <h1 className="text-2xl mb-4">Редактирование заметки</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-2">Название:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Содержимое:</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="border p-2 w-full"
              rows="5"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mr-2"
            >
              Сохранить
            </button>
            <button
              onClick={() => navigate("/notes")}
              className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition w-full"
            >
              Назад
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditNote;
