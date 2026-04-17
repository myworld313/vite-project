import { Router } from "express";
import {
  getHealth,
  getMessage,
  getServerStatus,
} from "../controllers/systemController.js";

const router = Router();

router.get("/", getServerStatus);
router.get("/api/message", getMessage);
router.get("/api/health", getHealth);

export default router;
