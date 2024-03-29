module.exports = function (api, opts) {
	const {
		typescript = true,
		react = true,
		envOpt = {
			useBuiltIns: 'entry',
			corejs: 3,
		},
		runtimeOpt = { "corejs": 3 }
	} = opts

	return {
		"presets": [
			["@babel/preset-env", envOpt],
			typescript && "@babel/preset-typescript",
			react && "@babel/preset-react"
		].filter(Boolean),
		"plugins": [
			"@babel/plugin-syntax-dynamic-import",
			"@babel/plugin-proposal-optional-chaining",
			"@babel/plugin-proposal-object-rest-spread",
			["@babel/plugin-proposal-decorators", { "legacy": true }],
			["@babel/plugin-proposal-class-properties", { "loose": true }],
			["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
			["@babel/plugin-proposal-private-methods", { "loose": true }],
			["@babel/plugin-transform-runtime", runtimeOpt],
		]

	}
}
