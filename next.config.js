const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};
module.exports = {
	nextConfig,
	images: {
		domains: ["images.ctfassets.net"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};
