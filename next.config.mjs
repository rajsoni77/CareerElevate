/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        protocol: 'https',
        hostname: 'randomuser.me'
      }
    ]
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  poweredByHeader: false,
  reactStrictMode: true
}

export default nextConfig
=======
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
>>>>>>> 5e0396bcc159e93fdb97d6d835dfc4a285b027a2
