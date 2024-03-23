const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
    try {
      const allUsers = await userService.getAllUsers();
      res.send({ status: "OK", data: allUsers });
    } catch (error) {
      console.error("Error, userController", error);
    }
  };

  const getOneUser = (req, res) => {
    const user = userService.getOneUser();
    res.status(200).send({ status: "OK", data: user });
  };

  const createNewUser = async (req, res) => {
    const { body } = req;
    if(!body.name || !body.year) return;
    const newUser = { name: body.name, year: body.year, position: 0, status: true };
    const createdUser = await userService.createNewUser(newUser);
    res.status(200).send({ status: "OK", data: createdUser });
  };

  const updateOneUser = (req, res) => {
    const updatedUser = userService.updateOneUser();
    res.send("Update an existing User");
  };

  const deleteOneUser = async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    await userService.deleteOneUser(userId);
    res.send("Delete an existing User");
  };

  const addPosition = async (req, res) => {
    const { userId } = req.params;
    const { body } = req;
    if(!body.position) return;
    const user = await userService.addPosition(userId, body.position);
    res.send({ status: "OK", data: user });
  }

  module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
    addPosition,
  };