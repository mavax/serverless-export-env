"use strict";

const _ = require("lodash");
const os = require("os");

/**
 * Copies environment variables into a string ready for wrtiting to a file
 *
 * @param {String[]} envVars - Environment Variables
 * @returns {String}
 */
function transformEnvVarsToString(envVars) {
	const output = _.map(envVars, (value, key) => {
		console.log(key);
		console.log(value);
		return `${key}="${value.toString().replace(/"/g, '"')}"`;
	});

	return output.join(os.EOL);
}

module.exports = transformEnvVarsToString;
