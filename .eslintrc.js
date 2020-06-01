const config = require('.');
module.exports = {
	...config,
	'env': {
		'node': true,
		'es6': true,
	},
	'parserOptions': {
		'ecmaVersion': 2019,
		'sourceType': 'script',
	},
};
