import routerUser from "./users.js";

const appRouter = (expressjs) => {
  expressjs.use(routerUser);
};

export default appRouter; // xuất file này ra dưới dạng module để nơi khác có thể import được, và một file chỉ có 1 export default
