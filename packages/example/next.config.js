/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/flex-pages',
  env: { NEXT_PUBLIC_BASE_PATH: '/flex-pages' },
  images: { unoptimized: true },
  transpilePackages: [
    '@openstax/flex-page-editor-quill-extension',
    'quill',
  ],
};
module.exports = nextConfig;
