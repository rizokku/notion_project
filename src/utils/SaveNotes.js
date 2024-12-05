import { getUser } from "./GetUser";

export const saveNotes = async (person, note) => {
  const user = await getUser(person.email);

  if (!user || user.length === 0) {
    throw new Error("Пользователь не найден");
  }
  const newNote = {
    id: Date.now(),
    title: note.title,
    body: note.body,
    createdAt: new Date().toISOString(),
  };

  const notesToSave = user[0].notes ? [...user[0].notes, newNote] : [newNote];

  const response = await fetch(`http://localhost:3000/users/${user[0].id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      notes: notesToSave,
    }),
  });

  // if (!response.ok) {
  //   throw new Error("Ошибка при обновлении заметок");
  // }

  const updatedUser = await response.json();

  localStorage.setItem("user", JSON.stringify(updatedUser));

  console.log(updatedUser);
};

// попытктка раз
// import { getUser } from "./GetUser";

// export const saveNotes = async (person, note) => {
//   const user = await getUser(person.email);
//   const newNote = {
//     id: Date.now(),
//     title: note.title,
//     body: note.body,
//     createdAt: new Date().toISOString(),
//   };

//   const response = await fetch(`http://localhost:3000/users/${user[0].id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       notes: [...user[0].notes, newNote],
//     }),
//   });

//   const updatedUser = await response.json();

//   localStorage.setItem("user", JSON.stringify(updatedUser));

//   console.log(updatedUser);
// };

//старый код
// import { getUser } from "./GetUser";

// export const saveNotes = async (person, note) => {
//   const user = await getUser(person.email);
//   const response = await fetch(`http://localhost:3000/users/3e68`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       notes: [...user[0].notes, note],
//     }),
//   });
//   console.log(await response.json());
// };
