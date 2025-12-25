import {
  handleGetAllDataUser,
  handleCreateUser,
} from "../services/userServices.js";

const getAllUser = (req, res) => {
  const { name, role } = req.query;

  const data = handleGetAllDataUser(name, role);
  return res.status(200).json(data);
};

const createUser = (req, res) => {
  const bodyUser = req.body;

  console.log(bodyUser);
  const data = handleCreateUser(bodyUser);
  return res.status(201).json(data);
};

export { getAllUser, createUser };
