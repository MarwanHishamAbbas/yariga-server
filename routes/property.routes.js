import express from "express";
import {
  createProperty,
  deleteProperty,
  getAllProperites,
  getPropertyDetails,
  updateProperty,
} from "../controllers/property.controller.js";
const router = express.Router();

router.route("/").post(createProperty);
router.route("/").get(getAllProperites);
router.route("/:id").get(getPropertyDetails);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(deleteProperty);

export default router;
