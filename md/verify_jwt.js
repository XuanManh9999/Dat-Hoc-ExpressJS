// check token có hợp lệ không, 1 token được coi là hợp lệ khi và chỉ khi nó còn hạn và đúng định dạng token
const verifyToken = async (req, res, next) => {
    try {
        console.log("req", req.headers)
        const token = req.headers?.authorization?.split(" ")[1] // [Bearer, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3Njk2NzI5NDgsInRva2VuX3R5cGUiOiJhY2Nlc3MifQ.6CPLwvbg-FuPFXF0UY-KIjuQTBDfAadNd_97NyGqU5I] 
        console.log("token: ", token)
        next() // hàm này xong chuyển qua hàm tiếp theo nếu có, hàm next được dùng để gửi data qua hàm tiếp theo trong router
    }catch(err) {

    }
}

export {
    verifyToken
}