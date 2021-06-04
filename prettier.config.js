module.exports = {
	// endOfLine:      'crlf',
	tabWidth:       4,
	useTabs:        true,
	singleQuote:    true,
	semi:           true,
	bracketSpacing: true,
	arrowParens:    'avoid',
	overrides:      [
		{
			files:   '*.js',
			options: {
				parser:  'babel-flow'
			}
		},
		{
			files:   '*.vue',
			options: {
				parser:                  'vue',
				vueIndentScriptAndStyle: true
			}
		},
		{
			files:   '*.ts',
			options: {
				parser: 'babel-ts'
			}
		},
		{
			files:   '*.css',
			options: {
				parser:  'css'
			}
		},
		{
			files:   '*.scss',
			options: {
				parser:  'scss'
			}
		},
		{
			files:   '*.html',
			options: {
				parser: 'html'
			}
		},
		{
			files:   '*.json',
			options: {
				tabWidth: 4,
				useTabs:  true,
				parser:   'json'
			}
		},
		{
			files:   '*.jsonc',
			options: {
				tabWidth: 2,
				useTabs:  false,
				parser:   'json5'
			}
		}
	]
};
