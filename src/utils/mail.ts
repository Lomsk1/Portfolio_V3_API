import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();

interface UserTypes {
  name: string;
  from_email: string;
  subject: string;
  text: string;
  email: string;
}

class Email {
  to: string;
  from: string;
  name: string;
  from_email: string;
  subject: string;
  text: string;
  constructor(user: UserTypes) {
    this.to = process.env.EMAIL_FROM;
    this.name = user.name;
    this.subject = user.subject;
    this.text = user.text;
    this.from_email = user.email;
    this.from = `Lomks1.dev <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    } as any);
  }

  async send() {
    const mailOptions = {
      from: this.from_email,
      to: this.to,
      subject: `New message from Lomks1.dev: {${this.subject}}`,
      text: `User Email: ${this.from_email}. Text: ${this.text}`,
    };

    try {
      await this.newTransport().sendMail(mailOptions);
      return {
        success: true,
        message: "Email sent successfully",
      };
    } catch (err) {
      return {
        success: false,
        message: `Error sending email: ${error}`,
      };
    }
  }
}

export default Email;
