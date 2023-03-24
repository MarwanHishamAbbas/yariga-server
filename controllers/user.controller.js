import User from "../mongodb/models/user.js";

const createUser = async (req, res) => {
  const { name, email, avatar } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(200).json(userExists);

    const newUser = await User.create({
      name,
      email,
      avatar,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllUsers = () => {};
const getUserInfoByID = () => {};

export { getAllUsers, createUser, getUserInfoByID };
