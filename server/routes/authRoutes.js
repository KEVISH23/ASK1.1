import express from "express";
import {
  getStudentController,
  loginController,
  registerController,
  stdRegisterController,
  studentLoginController,
  studentTestController,
  testController,
} from "../controllers/authControllers.js";
import {
  requireSignIn,
  isTutionSubscribed,
  isStudentConfirmed,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

//Tuitioin Class Registration Route
router.post("/register", registerController);
//Tuition class login
router.post("/login", loginController);
//Student Register
router.post("/studentregister", stdRegisterController);
//Studen login
router.post("/studentlogin", studentLoginController);
//test routes
router.get("/test", requireSignIn, isTutionSubscribed, testController);
//test student routes
router.get("/sTest", requireSignIn, isStudentConfirmed, studentTestController);
//get all students
export default router;
