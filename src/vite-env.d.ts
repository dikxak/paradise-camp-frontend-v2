/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_DEV_API_URL: string;
  readonly VITE_APP_PROD_API_URL: string;
  readonly VITE_APP_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
