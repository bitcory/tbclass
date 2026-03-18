import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

// Key format: bookings:2026-03-19
function getKey(dateStr) {
  return `bookings:${dateStr}`;
}

// Get booked times for a specific date (e.g. "2026-03-19")
export async function getBookedTimes(dateStr) {
  const times = await redis.smembers(getKey(dateStr));
  return times || [];
}

// Add a booking for a specific date and time
export async function addBooking(dateStr, time) {
  await redis.sadd(getKey(dateStr), time);
}
