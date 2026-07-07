/*
  In-memory sliding-window rate limiter. State lives per serverless
  instance, so on Vercel the limit is per warm lambda — good enough to
  stop naive spam bots without an external store. Swap the Map for
  Upstash/Redis if a hard global limit is ever needed.
*/

interface WindowState {
  timestamps: number[];
}

const buckets = new Map<string, WindowState>();

const MAX_BUCKETS = 5000;

export function isRateLimited(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { timestamps: [] };

  bucket.timestamps = bucket.timestamps.filter((ts) => now - ts < windowMs);

  if (bucket.timestamps.length >= limit) {
    buckets.set(key, bucket);
    return true;
  }

  bucket.timestamps.push(now);
  buckets.set(key, bucket);

  if (buckets.size > MAX_BUCKETS) {
    for (const [k, state] of buckets) {
      if (state.timestamps.every((ts) => now - ts >= windowMs)) {
        buckets.delete(k);
      }
    }
  }

  return false;
}
