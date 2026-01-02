/** @type {import('next').NextConfig} */
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    images: {
        domains: [],
        formats: ['image/avif', 'image/webp'],
    },
};

export default withPWA(nextConfig);
