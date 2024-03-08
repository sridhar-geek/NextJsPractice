const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("failed to get Api data");
  return response.json();
};

export default getAllUsers;
