// check token có hợp lệ không, 1 token được coi là hợp lệ khi và chỉ khi nó còn hạn (chưa hết hạn) và đúng định dạng token
// xác định token -> xác người dùng đó là ai và được làm gì trong hệ thống mình
import jwt from "jsonwebtoken"
const verifyToken = async (req, res, next) => {
    // console.log("req.headers: ", req.headers)
        //req.headers:  {
        //   authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZGF0IiwiaWF0IjoxNzcwNDc1NzI1LCJleHAiOjE3NzA0Nzk5MjV9.bb3x6z5q4bcez3NrDljNtuWjZGhvLk1Z3n2EzaLCxoI',
        //   'user-agent': 'PostmanRuntime/7.51.1',
        //   accept: '*/*',
        //   'postman-token': '6a4da31e-750e-44b8-80f0-fa1306bb6493',
        //   host: 'localhost:3000',
        //   'accept-encoding': 'gzip, deflate, br',
        //   connection: 'keep-alive'
        // }

       const authHeader = req.headers.authorization;
        if  (!authHeader) {
            // Nếu không truyền vào token thì báo 401 là chưa xác thực
            return res.status(401).json({"status": 401, "mesage": "No token"})
        }

        const token = authHeader.split(" ")[1]

        try {
            // để verify được thì cần đảm bảo là: token còn hạn, token hợp lệ

            const decoded = jwt.verify(token, process.env.SIGNATURE)
        // console.log("authHeader: ", authHeader)
        // console.log("Check token: ", token)
        // console.log("check decoded: ", decoded)

            // req của router trong expessjs nó là 1 object {}
            // thêm giá trị cho object
            // console.log("check req: ", req)
            // req.name = "Đạt"

            // console.log(req.name);

            req.user = decoded

            // console.log("req.user", req.user)

            next()  // hàm next giúp nhảy qua hàm khác trong router expressjs ngoài ra nó có thể mang theo cả giá trị nếu cần. Nếu không có hàm next thì chương trình sẽ bị treo
        }catch (err) {
            // 403 không có quyền truy cập
            return res.status(403).json({
                "status": 403, 
                "message": "Invalid token"
            })
        }
}

export {
    verifyToken
}