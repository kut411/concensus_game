import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);