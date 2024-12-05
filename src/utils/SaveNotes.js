import { getUser } from "./GetUser";

export const saveNotes = async (person, note) => {
  const user = await getUser(person.email);
  const response = await fetch(`http://localhost:3000/users/3e68`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      notes: [...user[0].notes, note],
    })
  });
  console.log(await response.json());
};