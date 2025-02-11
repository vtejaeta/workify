/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ui.aceternity.com",
          port: "",
          pathname: "/**", // Allow all images from this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  