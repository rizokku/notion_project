import { sha256 } from "crypto-hash";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch(`http://localhost:3000/users/?email=${email}`);
    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
};