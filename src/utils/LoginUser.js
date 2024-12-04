import { sha256 } from "crypto-hash";

export const loginUser = async ({ email, password }) => {
  try {
    const hashedPassword = await sha256(password);
    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    // if (!response.ok) {
    //   throw new Error("Неправильные данные");
    // }
    const users = await response.json();
    if (users.length === 0) {
      return null;
    }
    const user = users[0];
    if (user.password === hashedPassword) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
