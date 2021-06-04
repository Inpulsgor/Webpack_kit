module.exports = dir => {
	const path = require('path');

	return {
		_js:           path.resolve(dir, '../../src/js'),
		_components:   path.resolve(dir, '../../src/js/components'),
		_types:        path.resolve(dir, '../../src/js/types'),
		_scss:         path.resolve(dir, '../../src/scss'),
	};
};