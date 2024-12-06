export const getUser = async (email) => {
  const res = await fetch(`http://localhost:3000/users?email=${email}`);
  return await res.json();
};
