const UsersController = {};
const User = require("./UsersSchema");

UsersController.getUsers = (req, res) => {
  // const users = User.find();
  res.json({ status: "success", message: "Welcome To Users API" });
};

UsersController.addUser = async (req, res) => {
  // const data = req.body;

  const user = new User({
    name: "fady",
    age: "26",
    phone: "3237125693",
  });

  const insertedUser = await user.save();
  res.json({
    status: "success",
    message: "User added successfully!",
    user: insertedUser,
  });
};

module.exports = UsersController;
