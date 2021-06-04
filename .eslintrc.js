module.exports = {
	root: true,
	env:  {
		browser:  true,
		node:     true,
		commonjs: true,
		es6:      true,
		es2017:   true,
		es2020:   true,
		amd:      true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/essential',
		'plugin:vue/strongly-recommended',
		'plugin:vue/recommended'
	],
	parser:        'vue-eslint-parser',
	plugins:       [ 'jsdoc', '@typescript-eslint' ],
	parserOptions: {
		parser:     '@typescript-eslint/parser',
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/ban-types':                      0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-explicit-any':                0,
		'@typescript-eslint/no-var-requires':                0,

		// PossibleErrors
		'no-template-curly-in-string': 'error',
		'no-useless-backreference':    'error',
		'no-prototype-builtins':       0,

		// BestPractices
		'accessor-pairs':         'error',
		'class-methods-use-this': 'error',

		curly:                    [ 'error', 'multi-or-nest' ],
		'default-case':           'error',
		'default-case-last':      'error',
		'default-param-last':     [ 'error' ],
		'dot-location':           [ 'error', 'property' ],
		'dot-notation':           'error',
		eqeqeq:                   [ 'error', 'always' ],
		'grouped-accessor-pairs': 'error',

		// 'guard-for-in':'error',

		'max-classes-per-file':         'error',
		'no-alert':                     'error',
		'no-constructor-return':        'error',
		'no-else-return':               'error',
		'no-eq-null':                   'error',
		'no-fallthrough':               'error',
		'no-floating-decimal':          'error',
		'no-global-assign':             'error',
		'no-implicit-coercion':         'error',
		'no-implicit-globals':          'error',
		'no-implied-eval':              'error',
		'no-invalid-this':              'error',
		'no-iterator':                  'error',
		'no-labels':                    'error',
		'no-lone-blocks':               'error',
		'no-multi-spaces':              [ 'error', { exceptions: { Property: true, ImportDeclaration: true, BinaryExpression: true } } ],
		'no-multi-str':                 'error',
		'no-new-func':                  'error',
		'no-new-wrappers':              'error',
		'no-proto':                     'error',
		'no-redeclare':                 'error',
		'no-return-assign':             'error',
		'no-return-await':              'error',
		'no-self-compare':              'error',
		'no-sequences':                 'error',
		'no-throw-literal':             'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions':        [
			'error', {
				allowShortCircuit: true,
				allowTernary:      true
			}
		],
		'no-useless-call':     'error',
		'no-useless-concat':   'error',
		'no-useless-return':   'error',
		'no-void':             'error',
		'no-warning-comments': 1,
		radix:                 'error',
		'require-await':       'error',
		'vars-on-top':         'error',
		'wrap-iife':           [ 'error', 'outside' ],
		yoda:                  'error',

		// StrictMode
		strict: [ 'error', 'never' ],

		// Variables
		'no-restricted-globals': [
			'error',
			{
				name:    'event',
				message: 'Uselocalparameterinstead.'
			},
			{
				name:    'fdescribe',
				message: 'Donotcommitfdescribe.Usedescribeinstead.'
			}
		],
		'no-undef-init':        'error',
		'no-use-before-define': 'error',

		// StylisticIssues
		'array-bracket-newline': [
			2, {
				multiline: true,
				minItems:  4
			}
		],
		'array-bracket-spacing': [ 'error', 'always' ],
		'array-element-newline': [
			'error', {
				minItems: 3
			}
		],
		'block-spacing': 'error',
		'brace-style':   [
			2,
			'stroustrup',
			{
				allowSingleLine: true
			}
		],
		camelcase: [
			'error', {
				ignoreImports: true
			}
		],
		'comma-dangle': [
			'error', {
				arrays:    'never',
				objects:   'never',
				imports:   'never',
				exports:   'never',
				functions: 'never'
			}
		],
		'comma-spacing': [
			'error', {
				before: false,
				after:  true
			}
		],
		'comma-style':               [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'never' ],
		'consistent-this':           [ 'error', 'that' ],
		'func-call-spacing':         [ 'error', 'never' ],
		'func-name-matching':        [ 'error', 'always' ],
		'func-names':                [
			0,
			'as-needed',
			{
				generators: 'always'
			}
		],
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'function-call-argument-newline': [ 'error', 'never' ],
		'function-paren-newline':         [ 'error', 'never' ],
		indent:                           [
			'error',
			'tab',
			{
				SwitchCase:               1,
				VariableDeclarator:       1,
				outerIIFEBody:            1,
				MemberExpression:         1,
				ObjectExpression:         1,
				ImportDeclaration:        'first',
				flatTernaryExpressions:   false,
				offsetTernaryExpressions: true
			}
		],
		'implicit-arrow-linebreak': [ 'error', 'beside' ],
		'jsx-quotes':               [ 'error', 'prefer-single' ],
		'key-spacing':              [
			'error', {
				afterColon: true,
				mode:       'minimum',
				align:      'value'
			}
		],
		'keyword-spacing': [
			'error', {
				before: true,
				after:  true
			}
		],
		'lines-around-comment': [
			'error', {
				beforeBlockComment: true,
				beforeLineComment:  true,
				allowBlockStart:    true,
				allowObjectStart:   true,
				allowArrayStart:    true,
				allowClassStart:    true
			}
		],
		'max-depth':                [ 'error', 4 ],
		'max-nested-callbacks':     [ 'error', 3 ],
		'max-params':               [ 'error', 5 ],
		'multiline-ternary':        [ 'error', 'always-multiline' ],
		'new-parens':               'error',
		'newline-per-chained-call': [
			'error', {
				ignoreChainWithDepth: 2
			}
		],
		'no-array-constructor': 'error',
		'no-bitwise':           [
			'error', {
				int32Hint: true
			}
		],
		'no-continue':        'error',
		'no-lonely-if':       'error',
		'no-mixed-operators': [
			'error', {
				groups: [
					[
						'+',
						'-',
						'*',
						'/',
						'%',
						'**'
					],
					[
						'&',
						'|',
						'^',
						'~',
						'<<',
						'>>',
						'>>>'
					],
					[
						'==',
						'!=',
						'===',
						'!==',
						'>',
						'>=',
						'<',
						'<='
					],
					[ '&&', '||' ],
					[ 'in', 'instanceof' ]
				],
				allowSamePrecedence: true
			}
		],
		'no-multi-assign':         'error',
		'no-multiple-empty-lines': [
			'error', {
				max: 1
			}
		],
		'no-tabs': [
			'error', {
				allowIndentationTabs: true
			}
		],
		'no-trailing-spaces':   'error',
		'no-underscore-dangle': [
			1, {
				allowAfterThis:  true,
				allowAfterSuper: true
			}
		],
		'no-unneeded-ternary':              'error',
		'no-whitespace-before-property':    'error',
		'nonblock-statement-body-position': [
			'error',
			'beside',
			{ overrides: { for: 'below' } }
		],
		'space-infix-ops':         2,
		'object-curly-spacing':    [ 'error', 'always' ],
		'object-property-newline': [
			'error', {
				allowAllPropertiesOnSameLine: true
			}
		],
		'one-var':             [ 'error', 'never' ],
		'operator-assignment': [ 'error', 'always' ],
		'operator-linebreak':  [ 'error', 'before' ],
		'padded-blocks':       [
			'error', {
				blocks: 'never', classes: 'never'
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev:      [
					'const',
					'let',
					'var'
				],
				next: '*'
			},
			{
				blankLine: 'any',
				prev:      [
					'const',
					'let',
					'var'
				],
				next: [
					'const',
					'let',
					'var'
				]
			}
		],
		'prefer-exponentiation-operator': 'error',
		'quote-props':                    [ 'error', 'as-needed' ],
		quotes:                           [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		semi:                          [ 'error', 'always' ],
		'space-before-blocks':         [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', 'never' ],
		'space-in-parens':             [ 'error', 'never' ],
		'space-unary-ops':             [ 'error' ],
		'spaced-comment':              [
			'error',
			'always',
			{
				line: {
					markers:    [ '/' ],
					exceptions: [ '-', '+' ]
				},
				block: {
					markers:    [ '!' ],
					exceptions: [ '*' ],
					balanced:   true
				}
			}
		],
		'switch-colon-spacing': [ 'error' ],
		'template-tag-spacing': [ 'error', 'always' ],
		'wrap-regex':           'error',

		// ECMAScript 6
		'arrow-parens': [ 'error', 'as-needed' ],

		// PLUGINS

		// Jsdoc
		'jsdoc/check-alignment':             1, // Recommended
		'jsdoc/check-param-names':           1, // Recommended
		'jsdoc/check-tag-names':             1, // Recommended
		'jsdoc/check-types':                 1, // Recommended
		'jsdoc/implements-on-classes':       1, // Recommended
		'jsdoc/newline-after-description':   1, // Recommended
		'jsdoc/no-undefined-types':          1, // Recommended
		'jsdoc/require-jsdoc':               1, // Recommended
		'jsdoc/require-param':               1, // Recommended
		'jsdoc/require-param-description':   1, // Recommended
		'jsdoc/require-param-name':          1, // Recommended
		'jsdoc/require-param-type':          1, // Recommended
		'jsdoc/require-returns':             1, // Recommended
		'jsdoc/require-returns-check':       1, // Recommended
		'jsdoc/require-returns-description': 1, // Recommended
		'jsdoc/require-returns-type':        1, // Recommended
		'jsdoc/valid-types':                 1, // Recommended
	},
	globals: {
		$:                     false,
		jQuery:                false,
		mapState:              false,
		mapGetters:            false,
		mapActions:            false,
		mapMutations:          false,
		GSet:                  true,
		BX:                    false,
		_sc:                   false,
		DocumentTouch:         false,
		google:                false,
		Foundation:            false,
		Vue:                   false,
		VueResource:           false,
		Vuex:                  false,
		Swiper:                false,
		YT:                    false,
		FB:                    false,
		gtag:                  false,
		mainData:              false,
		zauiURL:               false,
		errorList:             false,
		noUiSlider:            false,
		LANG_ID:               false,
		i18n:                  false,
		L:                     false, // Leaflet (OpenStreetMap), using for initialization elements of map and directly full template
		dataLayer:             false, // Using for pushing ecommerce
		toastr:                false, // tooltip
		axios:                 false,
		PointerEventsPolyfill: false
	}
};
