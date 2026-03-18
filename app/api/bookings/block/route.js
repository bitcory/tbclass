import { addBooking, getBookedTimes } from '../../../../lib/redis';
import { redis } from '../../../../lib/redis';

const ADMIN_KEY = process.env.ADMIN_API_KEY || 'toolbee2026';

export async function POST(request) {
  const authKey = request.headers.get('x-admin-key');
  if (authKey !== ADMIN_KEY) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { date, times, action } = await request.json();

  if (!date || !times || !Array.isArray(times)) {
    return Response.json({ error: 'date and times[] required' }, { status: 400 });
  }

  if (action === 'unblock') {
    for (const time of times) {
      await redis.srem(`bookings:${date}`, time);
    }
    const remaining = await getBookedTimes(date);
    return Response.json({ success: true, action: 'unblocked', date, times, bookedTimes: remaining });
  }

  for (const time of times) {
    await addBooking(date, time);
  }
  const bookedTimes = await getBookedTimes(date);
  return Response.json({ success: true, action: 'blocked', date, times, bookedTimes });
}
