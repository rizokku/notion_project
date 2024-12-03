// CheckDublicate.js
export const checkDublicateUsers = async (checkData) => {
  const response = await fetch(
    `http://localhost:3000/users/?email=${checkData}`
  );
  const data = await response.json();
  return data.length > 0;
};
