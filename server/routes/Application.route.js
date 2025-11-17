import { Router } from "express";
import {
  allApplications,
  deleteApplication,
  eachApplication,
  newApplication,
  updateStatus,
} from "../controllers/Application.controller.js";

const route = Router();

route.get("/all-applications", allApplications);

route.get("/application/:id", eachApplication);

route.post("/new-application", newApplication);

route.put("/update-status/:id", updateStatus);

route.delete("/delete-application/:id", deleteApplication);

export { route as ApplicationRoute };
