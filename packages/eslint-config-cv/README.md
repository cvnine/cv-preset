# eslint-config-cv
>新版 `eslint-config-react-app` 已经支持默认依赖安装了，但是关于 `eslint-plugin-flowtype` 还是有依赖问题。
>```
>npm install --save-dev eslint-config-react-app eslint@^8.0.0
>
>// .eslintrc.js
>{
>  "extends": "react-app"
>}
>```
>提示 `@babel/plugin-syntax-flow` 和 `@babel/plugin-transform-react-jsx` 需要额外依赖安装。



和直接使用 `eslint-config-react-app` 没有区别，仅可以少手动按照一些`eslint`依赖。
如想使用`Jest`相关lint，请查看 [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/README.md)

#### 安装

```
yarn add eslint-config-cv -D
```

#### 使用

在 `.eslintrc.js` 文件内加上

```
{
	"extends": ["cv"]
}
```

#### 实际引用
```
{
	"extends": [ "react-app" ],
}
```

#### 覆盖配置

直接通过`rules`，或者`overrides`进行覆写


