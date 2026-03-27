/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PHOTO_INBOX_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
