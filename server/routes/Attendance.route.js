import {Router} from "express"


const AttendanceRouter = Router();
import { clockInOut, getAttendance } from "../controllers/attendaneController.js"
import { protect } from "../middleware/auth.js";



AttendanceRouter.post("/",protect, clockInOut)
AttendanceRouter.post("/",protect ,getAttendance)


export default AttendanceRouter