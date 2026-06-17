import { useEffect, useState } from "react"
import { dummyProfileData } from "../assets/assets"
import {Lock} from "lucide-react"
import Loading from "../components/Loading"
import ProfileForm from "../components/profile/ProfileForm"
import ChangePasswordModal from "../components/profile/ChangePasswordModal"
const Settings = () => {
  const [loading,setLoading] = useState(true)
  const [profile,setProfile] = useState(true)
  const [showPassword,setShowPassword] = useState(false)
  const fetchProfile = async() =>{
    setProfile(dummyProfileData)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }
  useEffect(()=>{
  fetchProfile()
  },[])
  if(loading) return <Loading/>
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle"> Manage your account and preferences</p>
      </div>

      {profile && 
      <ProfileForm initialData={profile} onSuccess={fetchProfile} />
      }
      {/* change pass trigger */}
      <div className="card max-w-md p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 rounded-lg">
             <Lock className="w-5 h-5 text-slate-600"/>
           </div>
           <div>
            <p className="font-medium text-slate-600">Password</p>
            <p className="text-sm text-slate-500">Update your account password</p>
           </div>
        </div>
        <button onClick={()=>setShowPassword(true)} className="btn-secondary text-sm">
          Change
        </button>
      </div>
      <ChangePasswordModal onClose={()=> setShowPassword(false)} open={showPassword} />
    </div>
  )
}

export default Settings