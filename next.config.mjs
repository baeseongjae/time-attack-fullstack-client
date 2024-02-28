/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false, // strict 모드 끄기
  images: {
    domains: ["localhost", "*"],
  },
  reactStrictMode: true,
};

export default nextConfig;
