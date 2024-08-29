const users = [
  {
    id: 1,
    name: "Mauricio",
  },
  {
    id: 2,
    name: "Lucia",
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  if (!user) callback(`User not found with id ${id}`);

  return callback(null, user);
};

module.exports = {
  getUserById,
};
