
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;
const emailTo = process.env.EMAIL_TO;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: emailTo,
};