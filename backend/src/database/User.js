const User = require("./models/User");

const user1 = new User({name: "Delia", position: 1, year: 2025, status: true});
const user2 = new User({name: "Zulma", position: 2, year: 2025, status: true});
const user3 = new User({name: "Christian", position: 3, year: 2025, status: true});
const user4 = new User({name: "Mayra", position: 5, year: 2025, status: true});
const user5 = new User({name: "Mayra", position: 9, year: 2025, status: true});
const user6 = new User({name: "Jael Marin", position: 6, year: 2025, status: true});
const user7 = new User({name: "Rocio Bellido", position: 7, year: 2025, status: true});

let users = [user1, user2, user3, user4, user5, user6, user7];

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