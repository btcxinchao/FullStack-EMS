import {Router} from "express"
import { updateProfile,getProfile } from "../controllers/profileController.js"
import { protect } from "../middleware/auth.js";
const profileRoutes = Router();

profileRoutes.get("/",protect,getProfile)
profileRoutes.put("/",protect,updateProfile)


export default profileRoutes