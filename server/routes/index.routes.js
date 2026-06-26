import employeeRouter from "./employee.route.js";
import authRouter from "./auth.route.js";
import profileRoutes from "./profile.routes.js";
import AttendanceRouter from "./Attendance.route.js";
const routes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/employee", employeeRouter);
  app.use("/api/profile", profileRoutes);
  app.use("/api/profile", AttendanceRouter);
};

export default routes;