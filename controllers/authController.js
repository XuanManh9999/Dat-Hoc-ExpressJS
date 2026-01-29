import {handleCreateAccount, handleLogin, handleChangePassword} from "../services/authServices.js"

const createAccount = async (req, res) => {
    try {
        const {username, password, phone} = req.body
        if (!username || !password) {
            return res.status(400).json({
                "status": 400,
                "message": "username/password là bắt buộc"
            })
        }
        const response = await handleCreateAccount(username, password, phone)

        return res.status(200).json(response)
    }catch(err) {
        console.log("error: ", err)
        return res.status(500).json({
            "status": 500,
            "message": "Đã xảy ra lỗi server"
        })
    }
}


const login = async (req, res) => {
    try {
        const {username, password} = req.body
         if (!username || !password) {
            return res.status(400).json({
                "status": 400,
                "message": "username/password là bắt buộc"
            })
        }

        const response = await handleLogin(username, password)
        return res.status(200).json(response)
    }catch(err) {

        console.log("errror: ", err)
         return res.status(500).json({
            "status": 500,
            "message": "Đã xảy ra lỗi server"
        })
    }
}


const changePassword =  async (req, res) => {
    try {
        const {username, oldPassword, newPassword} = req.body
        if (!username || !oldPassword || !newPassword) {
            return res.status(400).json({
                "status": 400,
                "message": "username/oldPassword/newPassword là bắt buộc"
            })
        }
        const response = await handleChangePassword(username, oldPassword, newPassword)
        return res.status(200).json(response)
    }catch(err) {
        return res.status(500).json({
            "status": 500,
            "message": "Đã xảy ra lỗi server"
        }) 
    }
}


export {
    createAccount,
    login,
    changePassword
}