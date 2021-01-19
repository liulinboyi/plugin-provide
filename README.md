- 在 icejs 研发框架下编写一个 build-scripts 插件：
- 插件中实现新增一个 webpack 插件，webpack.ProvidePlugin
- 增加对 json 文件的处理，在 json 数据结构上任意新增一项配置，{ "test": "a"} -> {"test": "a", "added": "b"}

## 使用

icejs中使用，build.json配置示例如下
```
{
  "plugins": [
    [
      "plugin-provide",
      {
        "params": {
          "$": "jquery",
          "jquery": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery"
        }
      }
    ]
  ]
}

```