import express from "express";
import {
  createAdmin,
  createStudent,
  createTeacher,
  getAllUsers,
  getStudents,
  getTeachers,
  getAdmins,
} from "../controllers/userController.js";
import {
  createSubject,
  getAllSubjects,
} from "../controllers/subjectController.js";
import {
  createPractical,
  getAllPracticals,
} from "../controllers/practicalController.js";
import { isAdmin, isTeacher, isAdminOrTeacher } from "../middleware/Middleware.js"

const router = express.Router();

router.post("/admin/create", createAdmin); 
router.post("/teachers/create", createTeacher); 
router.post("/students/create", createStudent); 
router.get("/users/get",  getAllUsers);
router.get("/admins/get", getAdmins); 
router.get("/teachers/get",  getTeachers); 
router.get("/students/get", getStudents); 

router.post("/subject/create", createSubject); 
router.get("/subjects/get",  getAllSubjects); 

router.post("/practicals/create", createPractical); 
router.get("/practicals/get", getAllPracticals);

export default router;




