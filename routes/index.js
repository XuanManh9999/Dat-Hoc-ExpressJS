import routerUser from "./users.js";
import routerAuth from "./auth.js"

import {verifyToken} from "../md/verify_jwt.js"

const appRouter = (expressjs) => {
  // cách 2 dùng jwt md để verify token
  expressjs.use(verifyToken, routerUser);
  expressjs.use(routerAuth);
};

export default appRouter; // xuất file này ra dưới dạng module để nơi khác có thể import được, và một file chỉ có 1 export default
