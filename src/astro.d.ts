/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_SUPABASE_URL: string
    readonly PUBLIC_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

/// <reference types="astro/client" />
declare namespace App {
    interface Locals {
      email: string;
    }
  }

  declare module 'astro:middleware' {
    const defineMiddleware: any;
    export { defineMiddleware };
  }