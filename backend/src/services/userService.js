const User = require("../database/User");

const getAllUsers = async () => {
    const allUsers = await User.find({});
    return allUsers;
  };

  const getOneUser = () => {
    return;
  };

  const createNewUser = async (newUser) => {
    const user = new User(newUser);
    const createdUser = await user.save();
    return createdUser;
  };

  const updateOneUser = () => {
    return;
  };

  const deleteOneUser = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    return user;
  };

  const verifyNumberPlayer = async ( numberPlayer ) => {
    const user = await User.find({position: numberPlayer});
    return user;
  }

  const addPosition = async ( playerId, newPosition ) => {
    await User.updateOne({ _id: playerId}, {$set: { position: newPosition}});
    const user = await User.findById(playerId);
    return user;
  }

  module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
    verifyNumberPlayer,
    addPosition,
  };