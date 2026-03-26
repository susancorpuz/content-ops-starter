/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    allowedDevOrigins: ['192.168.1.84'],
    output: 'export', // <-- ADD THIS LINE
    distDir: 'dist' // <-- AND THIS (optional but cleaner)
};

module.exports = nextConfig;
