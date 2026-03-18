import { getBookedTimes } from '../../../lib/redis';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return Response.json({ error: 'date parameter required' }, { status: 400 });
  }

  const bookedTimes = await getBookedTimes(date);
  return Response.json({ bookedTimes });
}
