/**
 * Booking confirmation email HTML builder.
 * Dark theme with emerald accents to match the site.
 *
 * Email-safe rules followed here:
 * - All styles inline (no <style> blocks; some clients strip them)
 * - Table-based layout (Outlook compatibility)
 * - Hex colors only (no CSS variables)
 * - 600px max width, scales on mobile via meta viewport
 * - color-scheme + supported-color-schemes meta hints to enable dark rendering
 */

const SITE_NAME = 'TOOLB LAB';
const ACCOUNT_BANK = '하나은행';
const ACCOUNT_NUMBER = '170-910185-95607';
const ACCOUNT_HOLDER = '김진욱';
const CTA_LABEL = 'TOOLB LAB 가이드 보기';
const CTA_URL = 'https://tbc.aitoolb.com/files/AI%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%82%98%EB%A7%8C%EC%9D%98%EC%98%81%EC%83%81.pdf';

// Color tokens (dark + emerald)
const C = {
  bg: '#050505',           // page background
  card: '#0f0f10',         // outer card
  panel: '#18181b',        // inner panel (zinc-900)
  panelBorder: '#27272a',  // zinc-800
  divider: '#27272a',
  text: '#f4f4f5',         // zinc-100
  textMuted: '#a1a1aa',    // zinc-400
  textFaint: '#71717a',    // zinc-500
  accent: '#10b981',       // emerald-500
  accentLight: '#34d399',  // emerald-400
  accentDark: '#059669',   // emerald-600
  accentSoft: 'rgba(16, 185, 129, 0.08)',
  accentBorder: 'rgba(16, 185, 129, 0.3)',
  strikeThrough: '#52525b',
};

export function buildBookingEmailHtml({ plan, date, time, contact, coupon, finalPrice }) {
  const safe = (v) => (v == null ? '' : String(v));

  const priceDisplay = coupon
    ? `<span style="text-decoration: line-through; color: ${C.strikeThrough}; font-weight: 500;">${safe(plan.price)}</span>&nbsp;&nbsp;<span style="color: ${C.accentLight}; font-weight: 800;">${safe(finalPrice)}</span> <span style="font-size: 12px; color: ${C.accentLight}; font-weight: 600;">(${safe(coupon.label)})</span>`
    : `<span style="font-weight: 800; color: ${C.accentLight};">${safe(plan.price)}</span>`;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>${SITE_NAME} 예약 완료</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${C.bg}; color: ${C.text}; font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', -apple-system, BlinkMacSystemFont, sans-serif; -webkit-font-smoothing: antialiased;">

  <!-- Hidden preheader text (shown in inbox preview) -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; color:${C.bg};">
    ${safe(contact.name)}님의 ${safe(plan.name)} 예약이 완료되었습니다. 입금이 완료되면 확정됩니다.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${C.bg}; padding: 40px 16px;">
    <tr>
      <td align="center">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: ${C.card}; border: 1px solid ${C.panelBorder}; border-radius: 20px; overflow: hidden;">

          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, ${C.accentDark} 0%, ${C.accent} 100%); padding: 44px 40px 38px; text-align: center; position: relative;">
              <h1 style="margin: 0; color: #052e1f; font-size: 30px; font-weight: 900; letter-spacing: -0.5px;">${SITE_NAME}</h1>
              <p style="margin: 16px 0 0; color: #052e1f; font-size: 18px; font-weight: 800; line-height: 1.5;">
                예약이 완료되었습니다.<br>
                <span style="font-size: 16px; font-weight: 700; color: rgba(5,46,31,0.85);">입금이 완료되면 확정이 됩니다.</span>
              </p>
            </td>
          </tr>

          <!-- GREETING -->
          <tr>
            <td style="padding: 36px 40px 8px;">
              <h2 style="margin: 0; color: ${C.text}; font-size: 22px; font-weight: 800; line-height: 1.3;">
                ${safe(contact.name)}님,<br>예약해 주셔서 감사합니다.
              </h2>
              <p style="margin: 12px 0 0; color: ${C.textMuted}; font-size: 14px; line-height: 1.65;">
                아래 예약 내용을 확인해 주세요.<br>
                문의사항이 있으시면 언제든 연락주세요.
              </p>
            </td>
          </tr>

          <!-- BOOKING DETAILS -->
          <tr>
            <td style="padding: 28px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${C.panel}; border: 1px solid ${C.panelBorder}; border-radius: 14px;">

                <tr>
                  <td style="padding: 22px 24px 14px;">
                    <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">클래스</p>
                    <p style="margin: 6px 0 0; color: ${C.text}; font-size: 17px; font-weight: 700;">${safe(plan.name)}</p>
                  </td>
                </tr>

                <tr><td style="padding: 0 24px;"><div style="border-top: 1px solid ${C.divider};"></div></td></tr>

                <tr>
                  <td style="padding: 14px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="50%" valign="top" style="padding-right: 12px;">
                          <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">날짜</p>
                          <p style="margin: 6px 0 0; color: ${C.text}; font-size: 15px; font-weight: 600;">${safe(date)}</p>
                        </td>
                        <td width="50%" valign="top" style="padding-left: 12px;">
                          <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">시간</p>
                          <p style="margin: 6px 0 0; color: ${C.text}; font-size: 15px; font-weight: 600;">${safe(time)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding: 0 24px;"><div style="border-top: 1px solid ${C.divider};"></div></td></tr>

                <tr>
                  <td style="padding: 14px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="50%" valign="top" style="padding-right: 12px;">
                          <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">예약자</p>
                          <p style="margin: 6px 0 0; color: ${C.text}; font-size: 15px; font-weight: 600;">${safe(contact.name)}</p>
                        </td>
                        <td width="50%" valign="top" style="padding-left: 12px;">
                          <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">연락처</p>
                          <p style="margin: 6px 0 0; color: ${C.text}; font-size: 15px; font-weight: 600;">${safe(contact.phone)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding: 0 24px;"><div style="border-top: 1px solid ${C.divider};"></div></td></tr>

                <tr>
                  <td style="padding: 16px 24px 22px;">
                    <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">결제금액</p>
                    <p style="margin: 8px 0 0; font-size: 20px; line-height: 1.2;">${priceDisplay}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- 입금 계좌 -->
          <tr>
            <td style="padding: 16px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${C.accentSoft}; border: 1px solid ${C.accentBorder}; border-radius: 14px;">
                <tr>
                  <td style="padding: 22px 24px; text-align: center;">
                    <p style="margin: 0; color: ${C.accentLight}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;">입금 계좌</p>
                    <p style="margin: 10px 0 0; color: ${C.text}; font-size: 19px; font-weight: 800; letter-spacing: 0.01em;">${ACCOUNT_BANK} ${ACCOUNT_NUMBER}</p>
                    <p style="margin: 6px 0 0; color: ${C.accentLight}; font-size: 14px; font-weight: 700;">예금주 ${ACCOUNT_HOLDER}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 24px 40px 36px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                <tr>
                  <td style="background: linear-gradient(135deg, ${C.accent} 0%, ${C.accentDark} 100%); border-radius: 12px;">
                    <a href="${CTA_URL}"
                       style="display: inline-block; padding: 14px 36px; color: #052e1f; text-decoration: none; font-size: 14px; font-weight: 800; letter-spacing: 0.02em;">
                      ${CTA_LABEL}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${C.bg}; padding: 26px 40px; border-top: 1px solid ${C.panelBorder}; text-align: center;">
              <p style="margin: 0; color: ${C.textFaint}; font-size: 11px; line-height: 1.7;">
                ${SITE_NAME} GUIDE &copy; 2026<br>
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
}

// Sample data for preview / testing
export const SAMPLE_BOOKING = {
  plan: { name: '1단계 마스터 이미지 만들기', price: '₩150,000' },
  date: '2026년 4월 15일 (월)',
  time: '14:00',
  contact: { name: '홍길동', phone: '010-1234-5678', email: 'guildong@example.com' },
  coupon: { label: '얼리버드 30% 할인' },
  finalPrice: '₩105,000',
};
