import { generateEmailText } from '@/app/(shared)/utils/generateEmailText';
import { mailOptions, transporter } from '@/app/(shared)/utils/nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const response = await transporter.sendMail({ ...mailOptions, text: generateEmailText(body) });

  return Response.json({ resMessage: response.response });
}
