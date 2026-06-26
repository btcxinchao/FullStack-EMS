import {Router} from "express"


const AttendanceRouter = Router();
import { clockInOut, getAttendance } from "../controllers/attendaneController"
import { protect } from "../middleware/auth";



AttendanceRouter.post("/",protect, clockInOut)
AttendanceRouter.post("/",protect ,getAttendance)


export default AttendanceRouter