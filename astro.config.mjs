import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";
import AstroPWA from "@vite-pwa/astro";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	site: "https://angelnext.dev/",
	integrations: [
		sitemap({
			customPages: ["https://angelnext.dev/", "https://angelnext.dev/work"],
		}),
		prefetch(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		AstroPWA({
			registerType: "autoUpdate",
			workbox: {
				navigateFallback: "/404",
				globPatterns: ["**/*.{js,css,html,webp,png,svg}"],
			},
			manifestFilename: "app.webmanifest",
			manifest: {
				name: "AngelNext",
				short_name: "AngelNext",
				background_color: "#fff",
				start_url: ".",
				display: "standalone",
				description: "The personal site of AngelNext.",
				icons: [
					{
						src: "/favicon.svg",
						sizes: "512x512",
						type: "image/svg+xml",
					},
				],
			},
		}),
	],
	output: "server",
	adapter: netlify(),
});
