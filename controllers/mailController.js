import nodemailer from "nodemailer";

const nodeMailer = async(req, res) => {

    // let transport = nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "dc8add141a8d53",
    //       pass: "af015df92d155d"
    //     }
    //   });
    const _otp = Math.floor(100000 + Math.random() * 900000);
    console.log(_otp);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    })
    let info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "msar3469@gmail.com",
        subject: "OTP",
        text: String(_otp),
        html: `<b>Hello world?</b></br><b>Your otp is: ${_otp}`,
    });

    // console.log("Message sent: %s", info.messageId);

    // if(info.messageId) {
    //     User.updateOne({email: req.body.email}, {otp: _otp})
    //         .then(result => {
    //             res.send({
    //                 code: 200,
    //                 message: "successfully send",
    //             });
    //         }).catch(err=>{
    //             res.send({
    //                 code: 500,
    //                 message: 'Server err'
    //             })
    //         })
    // } else {
    //     res.send('Err is send');
    // }
        

}

export default nodeMailer;