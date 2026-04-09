import Redis from 'ioredis';

// Prefer RAILWAY_REDIS_URL (Vercel-managed) and fall back to REDIS_URL (local .env.local).
// This lets us avoid clashing with Vercel's locked Upstash-integration REDIS_URL variable.
const REDIS_CONNECTION_URL = process.env.RAILWAY_REDIS_URL || process.env.REDIS_URL;

// Singleton pattern: avoid creating multiple connections in dev hot-reload
const globalForRedis = globalThis;

export const redis =
  globalForRedis.__redis ??
  new Redis(REDIS_CONNECTION_URL, {
    // Lazy connect so the module can be imported even if env is missing during build
    lazyConnect: false,
    // Reconnect strategy
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
      const delay = Math.min(times * 100, 2000);
      return delay;
    },
  });

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.__redis = redis;
}

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
