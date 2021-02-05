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


#### 如何选择配置

[配置区别](https://www.jmarkoski.com/understanding-babel-preset-env-and-transform-runtime)

> App: If you are authoring an app, use import 'core-js at the top of your app with useBuiltIns set to entry and @babel/transform-runtime only for helpers (@babel/runtime as dependency). This way you pollute the global environment but you don't care, its your app. You will have the benefit of helpers aliased to @babel/runtime and polyfills included at the top of your app. This way you also don't need to process node_modules (except when a dependency uses a syntax that has to be transpiled) because if some dependency used a feature that needs a polyfill, you already included that polyfill at the top of your app.

> Library: If you are authoring a library, use only @babel/transform-runtime with corejs option plus @babel/runtime-corejs3 as dependency, and @babel/preset-env for syntax transpilation with useBuiltIns: false. Also I would transpile packages I would use from node_modules. For this you will need to set the absoluteRuntime option (https://babeljs.io/docs/en/babel-plugin-transform-runtime#absoluteruntime) to resolve the runtime dependency from a single place, because @babel/transform-runtime imports from @babel/runtime-corejs3 directly, but that only works if @babel/runtime-corejs3 is in the node_modules of the file that is being compiled.


