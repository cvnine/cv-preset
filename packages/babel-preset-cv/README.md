# babel-preset-cv

#### 安装

```
yarn add babel-preset-cv -D
```

#### 使用
在 `babel.config.js` 文件内加上

```
{
	"preset": ["cv"]
}
```

#### 默认配置

```
{
	"presets": [
		["@babel/preset-env", { useBuiltIns: 'entry', corejs: 3 }],
		"@babel/preset-typescript",
		"@babel/preset-react"
	],
	"plugins": [
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-object-rest-spread",
		["@babel/plugin-proposal-decorators", { "legacy": true }],
		["@babel/plugin-proposal-class-properties", { "loose": true }],
		["@babel/plugin-transform-runtime", { "corejs": 3 }],
	]
}
```

#### 参数配置

* `typescript` - 使用 `@babel/preset-typescript` ，默认开启。 若想取消该配置：
	```
	{
		"preset": [{ "cv", { "typescript": false } }]
	}
	```

* `react` - 使用 `@babel/preset-react` ，默认开启。 若想取消该配置：
	```
	{
		"preset": [{ "cv", { "react": false } }]
	}
	```

* `envOpt` - 改变 `@babel/preset-env` 的参数，默认配置将被覆盖 ：
	```
	{
		"preset": [{ "cv", { "envOpt": { target: 'node' } } }]
	}
	```

* `runtimeOpt` - 改变 `@babel/plugin-transform-runtime` 的参数，默认配置将被覆盖：
	```
	{
		"preset": [{ "cv", { "runtimeOpt": { "corejs" : 2 } } }]
	}
	```

#### 覆盖配置
若参数配置无法满足条件，可直接基于默认配置内的包编写自己的 `babel.config.js`

