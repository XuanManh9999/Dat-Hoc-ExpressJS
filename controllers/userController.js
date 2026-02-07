import {
  handleGetAllDataUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
} from "../services/userServices.js";
// hàm getAllUser
const getAllUser = async (req, res) => {

  console.log("Check user", req.user)

  // localhost:3000/users?name=Mạnh&age=30
  const query = req.query; // {name: "Mạnh", role: "USER"}
  // console.log("query", query);
  // const { name, role } = req.query; // {name: "Mạnh", role: "USER"}
  // console.log("name", name);
  // console.log("role", role);

  const data = await handleGetAllDataUser(query.name);
  return res.status(200).json(data);
};

// async function name(params) {

// }

// const abc = async () => {

// }

// hàm createUser
const createUser = async (req, res) => {
  try {
    const { username, age, address, price } = req.body;
    if (!username || !age) {
      // False trong javascript: 0, '', null, NAN, "", undefine..
      return res.status(400).json({
        status: 400,
        message: "username/age là bắt buộc, vui lòng nhập đầy đủ",
      });
    }

    const data = await handleCreateUser({ username, age, address, price });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      mesage: "Đã xảy ra lỗi từ server, vui lòng thao tác lại sau",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const username = req?.params?.username;
    if (!username) {
      return res.status(400).json({
        status: 400,
        message: "username là bắt buộc để xoá",
      });
    }
    const { age, address, price } = req.body;
    const result = await handleUpdateUser({ age, address, price }, username);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({
      status: "500",
      message: "Đã xảy ra lỗi ở phía server",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const username = req.params?.username;
    if (!username) {
      return res.status(400).json({
        status: 400,
        message: "username là bắt buộc để xoá",
      });
    }
    const result = await handleDeleteUser(username);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({
      status: "500",
      message: "Đã xảy ra lỗi ở phía server",
    });
  }
};

export { getAllUser, createUser, updateUser, deleteUser };

// Mình sẽ đặt await ở nhưng nới mình xử lý cần thời gian và nó là bất đồng bộ
// việc đặt async await để thể hiện đây là một hàm bất đồng bộ (nó có xử tương tacs với bên ngoài, và code bên trong nó có thể không tuần tự)
