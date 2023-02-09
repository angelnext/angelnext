import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

export default defineConfig({
	site: "https://angelnext.dev/",
	integrations: [
		sitemap(),
		prefetch(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
});
