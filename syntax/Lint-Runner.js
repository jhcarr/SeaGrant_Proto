var LintRoller = require('../node_modules/lintroller');

var config = {
	verbose: false,
	stopOnFirstError: false,

	logFile: {
		name: './error.log',
		type: 'json'
	},

	// recursively include JS files in these folders
	filepaths: [
		'../'
	],

	// but ignore anything in these folders
	exclusions: [
		'../.sencha',
		'../touch',
		'../resources',
		'../phonegap',
		'../packages',
		'../jasmine',
		'../build'
	],

	linters: [
		{
			type: 'jsLint'
		},
		{
			type: 'jsHint'
		},
		{
			type: 'esprima'
		}
	]
};

LintRoller.init(config);