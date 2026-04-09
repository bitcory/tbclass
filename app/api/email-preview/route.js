import { buildBookingEmailHtml, SAMPLE_BOOKING } from '../../../lib/booking-email';

/**
 * Renders the booking confirmation email HTML directly in the browser
 * for design preview/iteration. Open in browser:
 *   /api/email-preview              → with sample coupon
 *   /api/email-preview?coupon=0     → without coupon
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const withCoupon = searchParams.get('coupon') !== '0';

  const data = {
    ...SAMPLE_BOOKING,
    coupon: withCoupon ? SAMPLE_BOOKING.coupon : null,
    finalPrice: withCoupon ? SAMPLE_BOOKING.finalPrice : SAMPLE_BOOKING.plan.price,
  };

  const html = buildBookingEmailHtml(data);

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
