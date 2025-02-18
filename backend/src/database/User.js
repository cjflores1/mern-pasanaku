const User = require("./models/User");

const user1 = new User({name: "Delia", position: 1, year: 2025, status: true});
const user2 = new User({name: "Zulma", position: 2, year: 2025, status: true});

let users = [user1, user2];

const find = (userToFind) => {
  if(userToFind["position"]) {
    return users.filter(user => user.position == userToFind["position"])
  }
  return users;
};

const findById = (userId) => {
  return users[userId-1];
};

const save = (newUser) => {
  const user = new User(newUser);
  users.push(user);
  return users.length;
};

const updateOne = (userId, position) => {
  const user = users[userId-1];
  user?.setPosition(position.playerNumber);

  return user;
};

module.exports = {
  find,
  findById,
  save,
  updateOne,
};