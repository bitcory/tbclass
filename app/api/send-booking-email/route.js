import nodemailer from 'nodemailer';
import { addBooking } from '../../../lib/redis';
import { buildBookingEmailHtml } from '../../../lib/booking-email';

export async function POST(request) {
  try {
    const body = await request.json();
    const { plan, date, time, dateKey, contact, coupon, finalPrice } = body;

    // Save booking to Redis
    if (dateKey && time) {
      await addBooking(dateKey, time);
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = buildBookingEmailHtml({ plan, date, time, contact, coupon, finalPrice });

    // 고객에게 발송
    await transporter.sendMail({
      from: `"TOOLB LAB" <${process.env.GMAIL_USER}>`,
      to: contact.email,
      subject: `[TOOLB LAB] ${plan.name} 예약이 완료되었습니다`,
      html,
    });

    // 관리자에게 알림 발송
    await transporter.sendMail({
      from: `"TOOLB LAB" <${process.env.GMAIL_USER}>`,
      to: 'aitoolbee79@gmail.com',
      subject: `[새 예약] ${contact.name}님 - ${plan.name}`,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
