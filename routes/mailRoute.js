import express from "express";
// import sendMail from "../controllers/mailController.js";
import nodeMailer from "../controllers/mainController.js";


const router = express.Router();

// router controllers
router.get("/", (req, res)=> {
    res.send("Home page");
})
// router.get("/mail", sendMail);
// router.post("/api/sendmail", mainController)
router.post("/mailer", nodeMailer)

export default router;