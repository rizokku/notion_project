import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { LocalStorage } from "../../utils/localstorage/localStorageClass";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const userNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const userFilteredNotes = userNotes.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    console.log(userFilteredNotes);
    setNotes(userFilteredNotes);
  }, []);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    LocalStorage.setItem("notes", updatedNotes); // Убедитесь, что данные правильно сохраняются
    setNotes(updatedNotes);
  };
  // const handleDelete = (id) => {
  //   const updatedNotes = notes.filter((note) => note.id !== id);
  //   LocalStorage([{ field: "notes", data: updatedNotes }]);
  //   setNotes(updatedNotes);
  // };

  console.log(notes);

  return (
    <div className="flex flex-col min-h-screen items-center pt-20">
      <NavBar />
      <h1 className="text-2xl mb-4">Мои заметки</h1>
      <Link to="/create-note" className="mb-4 text-blue-500">
        Создать новую заметку
      </Link>
      <div className="max-w-screen-lg w-full">
        {notes.length === 0 ? (
          <p>У вас пока нет заметок.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg">{note.title}</h2>
                <p className="text-gray-500">
                  {new Date(note.createdAt).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center">
                <Link to={`/edit-note/${note.id}`} className="mr-4">
                  ✍️ Редактировать
                </Link>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-red-500"
                >
                  🗑 Удалить
                </button>
                <Link to={`/view-note/${note.id}`} className="ml-4">
                  Просмотреть
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notes;
