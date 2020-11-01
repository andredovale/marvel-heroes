const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const appIncludes = [
	resolveApp("src"),
	resolveApp("../../shared/design-system/src"),
	resolveApp("../../shared/utils/src"),
];

const resolveModules = [
	resolveApp("../../shared/design-system/src"),
	resolveApp("../../shared/utils/src"),
];

module.exports = {
	webpack: function webpackOverride(config) {
		// allow importing from outside of src folder
		config.resolve.modules = config.resolve.modules.concat(resolveModules);
		config.module.rules[0].include = appIncludes;
		config.module.rules[1].oneOf[2].include = appIncludes;

		config.module.rules = config.module.rules.filter(Boolean);

		return config;
	},
};
