import { sha256 } from "crypto-hash";

export const registrationUser = async ({ email, password, id }) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        email,
        password: await sha256(password),
      }),
    });

    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
};
