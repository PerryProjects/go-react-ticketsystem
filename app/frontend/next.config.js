// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// You can remove the following 2 lines when integrating our example.
import { loadCustomBuildParams } from './next-utils.config.js';

const {
    tsconfigPath,
} = loadCustomBuildParams();

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n:  {
        defaultLocale: 'de',
        locales: ['en', 'de'],
    },
    eslint: {
        dirs: ['.'],
    },
    typescript: {
        tsconfigPath,
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
};

export default nextConfig;
