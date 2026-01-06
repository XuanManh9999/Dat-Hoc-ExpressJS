import e from "express";
import pool from "../datatabse/connectorDB.js";

const handleGetAllDataUser = async (name) => {
  try {
    let query = `select * from users `;
    if (name) {
      query += `where username = '${name}'`;
    }
    const [data, _] = await pool.query(query);
    return {
      status: 200,
      message: "Lấy người dùng thành công",
      data: data,
    };
  } catch (err) {
    throw err;
  }
};

const handleCreateUser = async (bodyUser) => {
  try {
    // For pool initialization, see above
    const [rows, _] = await pool.query(
      `INSERT INTO users (username, age, address, price) VALUES('${bodyUser?.username}', ${bodyUser?.age}, '${bodyUser.address}', ${bodyUser.price});`
    );
    // nếu có sự thay đổi các bản ghi bên trong nó sẽ là 1
    // không có sự thay đổi bản ghi trong DB nó trả về 0
    if (rows?.affectedRows == 1) {
      return {
        status: 201,
        message: "Thêm người dùng thành công",
      };
    } else {
      return {
        status: 500,
        message: "Thêm người dùng thất bại, vui lòng thử lại sau",
      };
    }

    // Connection is automatically released when query resolves
  } catch (err) {
    throw err; // ném lỗi về, và bên nhận mặc định code sẽ luôn luôn vào catch nếu dùng try-catch
  }
};

const handleUpdateUser = async (user, username) => {
  try {
    let queryUpdate = `UPDATE users SET `;
    const { age, address, price } = user;
    if (age) {
      queryUpdate += ` age = ${age}, `;
    }
    if (address) {
      queryUpdate += ` address = '${address}', `;
    }
    if (price) {
      queryUpdate += ` price = ${price} `;
    }
    queryUpdate += ` where username = '${username}' `;

    const [rows, _] = await pool.query(queryUpdate);
    if (rows.affectedRows == 1) {
      return {
        status: "200",
        message: "Cập nhật user thành công",
      };
    } else {
      return {
        status: "500",
        message: "Cập nhật user không thành công. Vui lòng thử lại sau",
      };
    }
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const handleDeleteUser = async (username) => {
  try {
    const [rows, _] = await pool.query(
      `delete from users where username = '${username}'`
    );
    if (rows.affectedRows == 1) {
      return {
        status: "200",
        message: "Xoá user thành công",
      };
    } else {
      return {
        status: "500",
        message: "Xoá user thất bại, vui lòng thử lại sau",
      };
    }
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export {
  handleGetAllDataUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
};
// Quản trị khi thêm nhân viên thì bắt 2 trường là, usename và age. Trương address không bắt được, số tiền cũng bắt buộc. Nếu không nhập đủ thì không cho thêm và phản hồi về yêu cầu quản trị nhập đầy đủ thông tin
