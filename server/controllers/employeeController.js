import Employee from "../models/Employee.js"
import bcrypt from "bcrypt"
import User from "../models/User.js"
//get employee
//GET /api/employees
export const getEmployees = async (req, res) => {
    try {
        const { departments } = req.query
        console.log(departments);

        const where = {}
        if (departments) where.departments = departments;
        const employee = await Employee.find(where).sort({ createdAt: -1 })
            .populate("userId", "email role").lean()

        const result = employee.map((emp) => ({
            ...emp,
            id: emp._id.toString(),
            user: emp.userId
                ? {
                    email: emp.userId.email,
                    role: emp.userId.role,
                }
                : null,
        }));
        return res.status(200).json(result)
    } catch (error) {
      res.status(500).json({error : "Failed to fetch employee"})
    }
}

//create employee 
//POST /api/employees

export const createEmployee = async (req, res) => {
    try {
        const {lastName,firstName,email,phone,position ,
            basicSalary,allowances,deductions,joinDate,password,
            bio,departments,role} = req.body

            if(!lastName || !firstName || !email || !password) {
                return res.status(400).json({error: "Missing required fields"})
            }

            const hashed = await bcrypt.hash(password,10);
            const user = await User.create({
                email,
                password : hashed,
                role : role || "EMPLOYEE"
            })
            const employee = await Employee.create({
                UserId : user._id,
                firstName,
                lastName,
                email,phone,position,
                departments: departments || "Engineering",
                basicSalary : Number(basicSalary) || 0,
                allowances : Number(allowances) || 0,
                deductions : Number(deductions) || 0,
                joinDate: new Date(joinDate),
                bio : bio || "",
            })
            return res.status(201).json({success : true, employee})

    } catch (error) {
       if(error.code === 11000){
        return res.status(400).json({error: "Email already exists"})
       }
       console.log("Create employee error", error);
       return res.status(500).json({error: "Failed to create employee"})
    }
}

// Update employee 
// PUT /api/employees/:id
export const updateEmployee = async (req, res) => {
     try {
        const {id} = req.params
        const {lastName,firstName,email,phone,position ,
            basicSalary,allowances,deductions,password,
            bio,departments,role,employmentStatus} = req.body

        const employee = await Employee.findById(id)
        if(!employee) return res.status(404).json({error: "Employee not found"})

           
            await Employee.finByIdAndUpdate(id,{  
                firstName,
                lastName,
                email,phone,position,
                departments: departments || "Engineering",
                basicSalary : Number(basicSalary) || 0,
                allowances : Number(allowances) || 0,
                deductions : Number(deductions) || 0,
                employmentStatus: employmentStatus || "ACTIVE",
                bio : bio || "",
            })
            //Update user record 
            const userUpdate = {email}
            if(role) userUpdate.role = role;
            if(password) userUpdate.password = bcrypt.hash(password,10); 
            await User.finByIdAndUpdate(employee.userId, userUpdate)


            return res.status(201).json({success : true})

    } catch (error) {
       if(error.code === 11000){
        return res.status(400).json({error: "Email already exists"})
       }
       return res.status(500).json({error: "Failed to update employee"})
    }
}

// Delete employee 
// Delete /api/employees/:id
export const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        if(!employee) {
            return res.status(404).json({error : "Employee not found"})
        }
        employee.isDeleted = true
        employee.employmentStatus = "INACTIVE"
        await employee.save();
        return res.status(201).json({success : true,message : "Deleted successfully"})
    } catch (error) {
        return res.status(500).json({error: "Failed to delete employee"})
    }
}