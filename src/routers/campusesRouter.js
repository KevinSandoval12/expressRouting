import { Router } from "express";
import * as ctl from "./../controllers/campusesController.js";

const router = Router();

router.get("/", ctl.home);
router.get(["/info", "/about"], ctl.info);
router.get("/search", ctl.search);
router.get("/id/:id", ctl.campusById);

export default router;
