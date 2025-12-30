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
    },
};

export default withPWA(nextConfig);
