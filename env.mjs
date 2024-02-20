import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_API_ENDPOINT: z.string().min(1).includes('http'),
    NEXT_PUBLIC_AUTH_METHOD: z.union([
      z.literal('header'),
      z.literal('cookie'),
      z.string().nullish(),
    ]),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_AUTH_METHOD: process.env.NEXT_PUBLIC_AUTH_METHOD,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
