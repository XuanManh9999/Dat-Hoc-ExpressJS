import routerUser from "./users.js";
import routerAuth from "./auth.js"

const appRouter = (expressjs) => {
  expressjs.use(routerUser);
  expressjs.use(routerAuth);
};

export default appRouter; // xuất file này ra dưới dạng module để nơi khác có thể import được, và một file chỉ có 1 export default
