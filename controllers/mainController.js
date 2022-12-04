import sendMail from "./mailController.js";

const mainContainer = async(req, res) => {
    const {email} = req.body;

    try {
        const sent_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Thank You Message";
        const message = `
        <h3>Hello Samiul</h3>
        <p>Thank for your youtube Tutorials</p>
        <p>Regards...</p>
        `
        await sendMail(subject, message, sent_to, sent_from, reply_to)

        res.status(200).json({success: true, message: "Email Sent"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

export default mainContainer;