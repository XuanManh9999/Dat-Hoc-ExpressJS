import pool from "../datatabse/connectorDB.js";
import bcrypt from "bcrypt";
// var jwt = require('jsonwebtoken'); // es5
import jwt from "jsonwebtoken" // es6

const handleCreateAccount = async (username, password, phone) => {
    // kiểm tra người dùng đó có trong db chưa?
    const [result] = await pool.execute("select * from accounts where username = ?", [username])

    if (result.length > 0) {
        return {
            "status": 409,
            "message": "Người dùng đã tồn tại trong hệ thống"
        }
    }
    //muối tức là thêm các giá trị ngẫu nhiên vào làm rỗi mã hơn
    const saltRounds  = 10; // để càng cao thì độ an toàn càng lớn
    //123456
    const salt = bcrypt.genSaltSync(saltRounds);
    console.log("check salt: ", salt)
    const hash = bcrypt.hashSync(password, salt);
    console.log("check mật khẩu mã hoá: ", hash)


    const [response] = await pool.execute("insert into accounts (username, password, phone) values (?, ?, ?) ", [username, hash, phone])
    if (response.affectedRows != 0) {
        return {
            "status": 201,
            "message": "Thêm tài khoản thành công"
        }
    }else {
        return {
                "status": 500,
                "message": "Đã xảy ra lỗi, hoặc server bận thử lại sau"
        }
    }
}

const handleLogin = async (username, password) => {
    const [user] = await pool.execute("select * from accounts where username = ?", [username])
    console.log("user: ", user)

    if (user.length  == 0) {
        return  {
            "status": 404,
            "message": "Sai tài khoản hoặc mật khẩu"
        }
    }
    // check xem có khớp mật khẩu ko trả về true false
    // passs == user[0].password
    const match = await bcrypt.compare(password, user[0].password);

    console.log("match: ", match)
    if (!match) {
          return  {
            "status": 404,
            "message": "Sai tài khoản hoặc mật khẩu"
        }
    }


    // Dùng jwt thì đoạn này, thay vì trả về thông tin người dùng thì ta sẽ trả về cho client token
    // jwt.sign(payload, signature, { algorithm: "none"; })

    // lưu ý ở payload ta không truy các thông tin nhậy cảm như password, mã ngân hàng... Vì nếu có những thông tin đó trong này thì hacker có thể đọc được và sử dụng nó trái
    console.log("user.id", user[0].id)
    console.log("username",user[0].username)
    
    const token =  jwt.sign(    
    {
        userId: user[0].id,
        username: user[0].username,
        roleId: user[0].role_id
    }, 
    process.env.SIGNATURE, // lộ ra thì hacker có thể fake token gây nguy hiểm tới hệ thống
    {algorithm: "HS256",  expiresIn: 60 * 60 + 600})

    // 60 * 60  -> giây = 3600(s) / 60 = 60'

    return {
        "status": 200,
        "message": "Đăng nhập thành công",
        "token": token 
    }

}


const handleChangePassword = async (username, oldPassword, newPassword) => {
     const [user] = await pool.execute("select * from accounts where username = ?", [username])
        if (user.length  == 0) {
            return  {
                "status": 404,
                "message": "Người dùng ko tồn tại"
            }
        }
        const match = await bcrypt.compare(oldPassword, user[0].password);
        if (match) {
            // cập nhật mật khẩu mới
            const saltRounds = 10
            // muối nó
            const salt = bcrypt.genSaltSync(saltRounds);
            // mã hoá nó
            const hash = bcrypt.hashSync(newPassword, salt);

            const [updateUser] = await pool.execute("update accounts set password = ? where username = ?", [hash, username])

            if (updateUser.affectedRows != 0) {
                return {
                    "status": 200,
                    "message": "Cập nhật thành công"
                }
            } else {
                 return {
                    "status": 500,
                    "message": "Cập nhật thất bại, đã xảy ra lỗi hệ thống, vui lòng thử lại sau"
                }
            }

        }else {
            // báo là mật khẩu cũ không đúng
            return {
                "status": 400,
                "message": "Mật khẩu cũ không khớp"
            }
        }
}

export {
    handleCreateAccount, 
    handleLogin,
    handleChangePassword
}