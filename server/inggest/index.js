import { Inngest } from "inngest";
import Attendance from "../models/Attendance.js";
import Employee from "../models/Employee.js";

// Tạo client để gửi và nhận events
export const inngest = new Inngest({ id: "fullstack-ems" });

// Định nghĩa function với trigger và handler đúng cú pháp
const autoCheckOut = inngest.createFunction(
  {
    id: "auto-check-out",
    triggers: [
      { event: "employee/check-out" }
    ]
  },
  async ({ event, step }) => {
    const { employeeId, attendanceId } = event.data;

    // Ví dụ: chờ đến sau 9 tiếng kể từ lúc check-out
    const targetTime = new Date(Date.now() + 9 * 60 * 60 * 1000);
    await step.sleepUntil("wait-for-the-9-hours", targetTime);
    
    //get attendace
    const attendace = await Attendance.findById(attendanceId)
    if(!attendance?.checkOut){
        //get Employee data
        const employee = await Employee.findById(employeeId)

        //send reminder email
    }

    // Sau khi sleepUntil xong, bạn có thể viết logic xử lý tiếp
    console.log(`Employee ${employeeId} auto checkout for attendance ${attendanceId}`);
  }
);

// Export các functions để dùng trong routes
export const functions = [autoCheckOut];
