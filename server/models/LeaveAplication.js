import mongoose from "mongoose";


const leaveAplicationSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    type: { String, enum: ["SICK", "CASUAL", "ANNUAL"], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ["PENDING", "REJECTED", " APPROVED"], default: "PENDING" }
}, { timestamps: true })

const LeaveAplication = mongoose.models.LeaveAplication
    || mongoose.model("LeaveAplication", leaveAplicationSchema)
export default LeaveAplication