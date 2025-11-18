import { ApplicationModel } from "../models/Application.Model.js";

export const allApplications = async (req, res) => {
  try {
    const applications = await ApplicationModel.find({ userId: req.user });

    if (!applications) {
      return res
        .status(404)
        .json({ success: false, message: "Applications Not Found!" });
    }

    res.status(200).json({
      success: true,
      message: "Applications Fetched",
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in Getting Applications: ${error.message}`,
    });
    console.log(`Error in Getting Applications: ${error.message}`);
  }
};

export const eachApplication = async (req, res) => {
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
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in Getting Each Application: ${error.message}`,
    });
    console.log(`Error in Getting Each Application: ${error.message}`);
  }
};

export const newApplication = async (req, res) => {
  const { role, company, email, mobile, from } = req.body;
  try {
    const application = await ApplicationModel.findOne({
      company,
      userId: req.user,
    });
    const applicationCount = await ApplicationModel.countDocuments({
      userId: req.user,
    });

    if (application) {
      return res
        .status(400)
        .json({ success: false, message: "Already Applied This Company!" });
    }

    const newApplication = new ApplicationModel({
      applicationID: applicationCount ? applicationCount + 1 : 1,
      role,
      company,
      email,
      mobile,
      from,
      userId: req.user,
    });

    await newApplication.save();

    res.status(201).json({
      success: true,
      message: "Application Added Successfully",
      application: newApplication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in New Apply: ${error.message}`,
    });
    console.log(`Error in New Apply: ${error.message}`);
  }
};

export const updateStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await ApplicationModel.findById(id);

    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application Not Found!" });
    }

    if (application.status == "applied") {
      application.status = "pending";
    } else if (application.status == "pending") {
      application.status = "responsed";
    } else {
      return res.json({
        success: false,
        message: "Already Your Application is Up-to date!",
      });
    }

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application Status Updated!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in Update Status: ${error.message}`,
    });
    console.log(`Error in Update Status: ${error.message}`);
  }
};

export const deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await ApplicationModel.findByIdAndDelete(id);

    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application Not Found!" });
    }

    res.status(200).json({
      success: true,
      message: "Application Deleted!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error in Delete-Application: ${error.message}`,
    });
    console.log(`Error in Delete-Application: ${error.message}`);
  }
};
