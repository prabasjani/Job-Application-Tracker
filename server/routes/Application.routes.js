import express from "express";
import { ApplicationModel } from "../models/ApplicationModel.js";

const router = express.Router();

// Get All Applies
router.get("/all-applies", async (req, res) => {
  try {
    const applications = await ApplicationModel.find();
    if (!applications) {
      return res
        .status(404)
        .json({ success: false, message: "Application Not Found!" });
    }
    res.status(200).json({
      success: true,
      message: "Applications Fetched Successfully",
      data: applications,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Server Error ${error.message}` });
    console.log(`Application Fetch Server Error: ${error.message}`);
  }
});

// Get Each Application Info
router.get("/application/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const application = await ApplicationModel.findById(id);
    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application Not Found!" });
    }
    res.status(200).json({
      success: true,
      message: "Application Info Fetched Successfully",
      data: application,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Server Error ${error.message}` });
    console.log(`Application Fetch Server Error: ${error.message}`);
  }
});

// New Job Post Apply
router.post("/new-apply", async (req, res) => {
  const { company, role, email, mobile, from, status } = req.body;

  try {
    const application = await ApplicationModel.findOne({ email });
    if (application) {
      return res
        .status(400)
        .json({ success: false, message: "Already Applied!" });
    }

    const newApplication = new ApplicationModel({
      company,
      role,
      email,
      mobile,
      from,
      status,
    });
    await newApplication.save();
    res.status(201).json({ success: true, message: "New Job post applied!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Server Error ${error.message}` });
    console.log(`Application Server Error: ${error.message}`);
  }
});

// Update the Status
router.put("/update-status/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const statusUpdate = await ApplicationModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!statusUpdate) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Job ID" });
    }

    res.status(200).json({
      success: true,
      message: "Status Updated",
      data: statusUpdate.status,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Server Error ${error.message}` });
    console.log(`Update Server Error: ${error.message}`);
  }
});

// Update the Status
router.delete("/delete-application/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteApplication = await ApplicationModel.findByIdAndDelete(id);

    if (!deleteApplication) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Job ID" });
    }

    res.status(200).json({
      success: true,
      message: "Job Application Deleted!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Server Error ${error.message}` });
    console.log(`Delete Server Error: ${error.message}`);
  }
});

export { router as ApplicationRouter };
