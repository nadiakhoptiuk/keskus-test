import nodemailer, { SendMailOptions, Transporter } from 'nodemailer';

const email: string = process.env.EMAIL_ACCOUNT!;
const pass: string = process.env.EMAIL_PASSWORD!;
const port: number = Number.parseInt(process.env.SMTP_PORT!, 10);
const host: string = process.env.SMTP_SERVER!;

export const transporter: Transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions: SendMailOptions = {
  from: email,
  to: email,
  subject: 'Заявка з сайту Keskus Ukraina',
};
