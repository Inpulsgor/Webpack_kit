const object = require('css-property-sort-order-smacss');

const props = [];

for (const key in object) {
	for (const prop of object[key]) {
		if (typeof prop === 'string') props.push(prop);
		else {
			for (const item of prop)
				props.push(item);
		}
	}
}

module.exports = {
	plugins: [
		require('postcss-preset-env')(),
		require('autoprefixer'),
		require('cssnano')({
			preset: [
				'default', {
					discardComments: {
						removeAll: true
					}
				}
			]
		}),
		require('postcss-sorting')({
			order: [
				'custom-properties',
				'dollar-variables',
				'declarations',
				'at-rules',
				'rules'
			],
			'properties-order': props
		})
	]
};
