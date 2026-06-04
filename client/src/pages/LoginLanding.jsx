import LoginLeftSide from "../components/LoginLeftSide"
import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react"
import {Link} from "react-router-dom"
const LoginLanding = () => {
  const portalOptions =[
    {
      to : "/login/admin",
      title : "Admin Portal",
      desctiption : "Manage employees, departments, payroll, and system configuration",
      icon : ShieldIcon
    },{
      to : "/login/employee",
      title : "Employee Portal",
      desctiption : "View your profile , track attendance , request time off and access payslips",
      icon : UserIcon
    }
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
       <LoginLeftSide/>
       

       <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-1 lg:p-16 relative overflow-y-auto min-h-screen">
           <div className="w-full max-w-md animate-fade-in relative z-10">
             {/* header */}
             <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3 ">Welcome Back</h2>
              <p className="text-slate-500"> Select your portal to securely access your account</p>
             </div>
             {/* portal list */}
             <div className="space-y-4">
              {portalOptions.map((portal)=>(
                <Link key={portal.to} to={portal.to} className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 
                transiton-all duration-300 hover:border-indigo-400 hover:bg-indigo-50">
                  <div className=" flex justify-between items-center gap-4  sm:gap-5">
                    <h3 className="text-lg group-hover:text-indigo-600 mb-1 transition-colors ">{portal.title}</h3>
                  <ArrowRightIcon className="text-slate-400">
                    </ArrowRightIcon > 
                  </div>
                <div>
                </div>
                </Link>
              ))}
             </div>
             {/* Footer */}
             <div className="mt-13 text-center md:text-left text-sm text-slate-400 ">
               <p>@{new Date().getFullYear()} Chuong.</p>
             </div>
           </div>
       </div>
    </div>
  )
}

export default LoginLanding