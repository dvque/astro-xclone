import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
        auth: {
            flowType: "pkce",
        },
    },
);

// const supabase = createServerClient(
//   import.meta.env.PUBLIC_SUPABASE_URL,
//   import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
//   {
//     cookies: {
//       get(key: string) {
//         return Astro.cookies.get(key)?.value;
//       },
//       set(key: string, value: string, options: CookieOptions) {
//         Astro.cookies.set(key, value, options);
//       },
//       remove(key: string, options) {
//         Astro.cookies.delete(key, options);
//       },
//     },
//   }
// );