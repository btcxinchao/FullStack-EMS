import employeeRouter from "./employee.route.js";
import authRouter from "./auth.route.js";
import profileRoutes from "./profile.routes.js";
import AttendanceRouter from "./Attendance.route.js";
import leaveRouter from "./leave.route.js";
import payslipRouter from "./payslip.route.js";
const routes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/employee", employeeRouter);
  app.use("/api/profile", profileRoutes);
  app.use("/api/attendace", AttendanceRouter);
  app.use("/api/leave", leaveRouter);
  app.use("/api/payslips", payslipRouter);
};

export default routes;