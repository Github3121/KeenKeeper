/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

// https://i.pravatar.cc/300?img=12
