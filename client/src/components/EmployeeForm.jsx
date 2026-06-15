import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../assets/assets";
import { Loader2Icon } from "lucide-react";
const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isEditmode = !!initialData;
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl animate-fade-in"
      action=""
    >
      {/* personal information */}
      <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b border-slate-100 ">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          {/* firstName */}
          <div>
            <label className="block mb-2" htmlFor="">
              First Name
            </label>
            <input
              name="firstName"
              required
              defaultValue={initialData?.firstName}
            />
          </div>
          {/* latstname */}
          <div>
            <label className="block mb-2" htmlFor="">
              Last Name
            </label>
            <input
              name="lastName"
              required
              defaultValue={initialData?.lastName}
            />
          </div>
          {/* phone */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Phone Number
            </label>
            <input name="phone" required defaultValue={initialData?.phone} />
          </div>
          {/* join date */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Join Date
            </label>
            <input
              type="date"
              name="date"
              required
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Join Date
            </label>
            <input
              type="date"
              name="date"
              required
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2" htmlFor="">
              {" "}
              Bio (Optional){" "}
            </label>
            <textarea
              name="bio"
              rows={3}
              className="resize-none"
              placeholder="Brief description..."
            />
          </div>
        </div>
      </div>

      {/*   Employee Details  */}
      <div className="card p-5 sm:p-6">
        <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">
          Employment Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          <div>
            <label className="block mb-2">Department</label>
            <select
              name="department"
              defaultValue={initialData?.department || ""}
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((deptName) => (
                <option key={deptName} value={deptName}>
                  {deptName}
                </option>
              ))}
            </select>
          </div>
          {/* position */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Position{" "}
            </label>
            <input
              name="position"
              required
              defaultValue={initialData?.position}
            />
          </div>
          {/* Basic Salary */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Basic Salary{" "}
            </label>
            <input
              type="number"
              name="basicSalary"
              min="0"
              required
              defaultValue={initialData?.basicSalary || 0}
            />
          </div>
          {/* Allowances */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Allowances{" "}
            </label>
            <input
              type="number"
              name="allowances"
              min="0"
              step={0.01}
              required
              defaultValue={initialData?.allowances || 0}
            />
          </div>
          {/* Deductions */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Deductions{" "}
            </label>
            <input
              type="number"
              name="deductions"
              min="0"
              step={0.01}
              required
              defaultValue={initialData?.deductions || 0}
            />
          </div>
          {/* Status */}
          {isEditmode && (
            <div>
              <label className="block mb-2" htmlFor="">
                {" "}
                Status{" "}
              </label>
              <select
                name="employmentStatus"
                min="0"
                step={0.01}
                defaultValue={initialData?.employmentStatus}
              >
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Account Setup */}
      <div className="card p-5 sm:p-6">
        <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100 ">
          Account Setup
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
          {/* firstName */}
          <div className="sm:col-span-2">
            <label className="block mb-2" htmlFor="">
              Work EMail
            </label>
            <input
              name="email"
              type="email"
              required
              defaultValue={initialData?.email}
            />
          </div>
          {!isEditmode && (
            <div >
              <label className="block mb-2" htmlFor="">
               Temporary Password
              </label>
              <input
                name="password"
                type="password"
                required
              />
            </div>
          )}
          {isEditmode && (
            <div >
              <label className="block mb-2" htmlFor="">
               Change Password (Optional)
              </label>
              <input
                name="password"
                type="password"
                placeholder="Leave blank to keep current "
              
              />
            </div>
          )}
            <div >
              <label className="block mb-2" htmlFor="">
               System Role
              </label>
            <select name="role" defaultValue={initialData?.user?.role || "EMPLOYEE"} id="">
              <option value="EMPLOYEE">Employee</option>
              <option value="ADMIN">Admin</option>
            </select>
            </div>
          {/* latstname */}
          <div>
            <label className="block mb-2" htmlFor="">
              Last Name
            </label>
            <input
              name="lastName"
              required
              defaultValue={initialData?.lastName}
            />
          </div>
          {/* phone */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Phone Number
            </label>
            <input name="phone" required defaultValue={initialData?.phone} />
          </div>
          {/* join date */}
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Join Date
            </label>
            <input
              type="date"
              name="date"
              required
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="">
              {" "}
              Join Date
            </label>
            <input
              type="date"
              name="date"
              required
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2" htmlFor="">
              {" "}
              Bio (Optional)
            </label>
            <textarea
              name="bio"
              rows={3}
              className="resize-none"
              placeholder="Brief description..."
            />
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex flex-row-reverse sm:flex-row justify-end gap-3 pt-2">
        <button type="button" className="btn-secondary" onClick={()=>(onCancel ? onCancel() : navigate(-1))}> Cancel </button>
        <button type="submit" disabled={loading} className="btn-primary flex items-center justify-center"> 
          {loading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin"/>}
          {isEditmode ? "Update Employee" : "Create Employee"}
           </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
