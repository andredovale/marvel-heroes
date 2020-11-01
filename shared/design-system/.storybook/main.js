const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const resolveModules = [resolveApp("src")];

module.exports = {
	webpackFinal: async (config) => {
		config.resolve.modules = config.resolve.modules.concat(resolveModules);

		return config;
	},
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app",
	],
};
