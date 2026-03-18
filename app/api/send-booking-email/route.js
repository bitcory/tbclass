import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { plan, date, time, contact, coupon, finalPrice } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const priceDisplay = coupon
      ? `<span style="text-decoration: line-through; color: #9ca3af;">${plan.price}</span>&nbsp;&nbsp;<span style="color: #f97316; font-weight: bold;">${finalPrice}</span> <span style="font-size: 12px; color: #f97316;">(${coupon.label})</span>`
      : `<span style="font-weight: bold;">${plan.price}</span>`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316, #ef4444); padding: 40px 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">AI TOOLBEE</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">예약이 확정되었습니다</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 32px 40px 16px;">
              <h2 style="margin: 0; color: #111827; font-size: 20px; font-weight: 700;">
                ${contact.name}님, 예약해 주셔서 감사합니다!
              </h2>
              <p style="margin: 8px 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                아래 예약 내용을 확인해 주세요. 문의사항이 있으시면 언제든 연락주세요.
              </p>
            </td>
          </tr>

          <!-- Booking Details -->
          <tr>
            <td style="padding: 16px 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">

                <tr>
                  <td style="padding: 20px 24px 12px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">클래스</td>
                      </tr>
                      <tr>
                        <td style="color: #111827; font-size: 16px; font-weight: 600; padding-top: 4px;">${plan.name}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding: 0 24px;"><hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;"></td></tr>

                <tr>
                  <td style="padding: 12px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" valign="top">
                          <p style="margin: 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">날짜</p>
                          <p style="margin: 4px 0 0; color: #111827; font-size: 15px; font-weight: 500;">${date}</p>
                        </td>
                        <td width="50%" valign="top">
                          <p style="margin: 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">시간</p>
                          <p style="margin: 4px 0 0; color: #111827; font-size: 15px; font-weight: 500;">${time}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding: 0 24px;"><hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;"></td></tr>

                <tr>
                  <td style="padding: 12px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" valign="top">
                          <p style="margin: 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">예약자</p>
                          <p style="margin: 4px 0 0; color: #111827; font-size: 15px; font-weight: 500;">${contact.name}</p>
                        </td>
                        <td width="50%" valign="top">
                          <p style="margin: 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">연락처</p>
                          <p style="margin: 4px 0 0; color: #111827; font-size: 15px; font-weight: 500;">${contact.phone}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding: 0 24px;"><hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;"></td></tr>

                <tr>
                  <td style="padding: 12px 24px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">결제금액</p>
                          <p style="margin: 4px 0 0; font-size: 18px;">${priceDisplay}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- 입금 계좌 -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #fff7ed, #fef2f2); border-radius: 12px; border: 1px solid #fed7aa;">
                <tr>
                  <td style="padding: 20px 24px; text-align: center;">
                    <p style="margin: 0; color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">입금계좌</p>
                    <p style="margin: 8px 0 0; color: #111827; font-size: 18px; font-weight: 700;">토스뱅크 1000 5224 8523</p>
                    <p style="margin: 4px 0 0; color: #f97316; font-size: 14px; font-weight: 600;">예금주: 김진욱</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 32px; text-align: center;">
              <a href="https://tbc.aitoolb.com/files/AI%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%82%98%EB%A7%8C%EC%9D%98%EC%98%81%EC%83%81.pdf"
                 style="display: inline-block; padding: 14px 40px; background: linear-gradient(135deg, #f97316, #ef4444); color: #ffffff; text-decoration: none; border-radius: 12px; font-size: 15px; font-weight: 700;">
                AI TOOLBEE 가이드 보기
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.6;">
                AI TOOLBEE GUIDE &copy; 2026<br>
                본 메일은 예약 확인을 위해 자동 발송되었습니다.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // 고객에게 발송
    await transporter.sendMail({
      from: `"AI TOOLBEE" <${process.env.GMAIL_USER}>`,
      to: contact.email,
      subject: `[AI TOOLBEE] ${plan.name} 예약이 확정되었습니다`,
      html,
    });

    // 관리자에게 알림 발송
    await transporter.sendMail({
      from: `"AI TOOLBEE" <${process.env.GMAIL_USER}>`,
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
