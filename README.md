# vuepress-plugin-headertags

> plugin for vuepress to add header tags

Adds specified header tags to rendered pages

## Install

```
npm i vuepress-plugin-canonical -D
```

## Usage
Read [How to use vuepress Plugin](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html) first, modify your `.vuepress/config.js`.
```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-canonical',
      {
        baseURL: 'https://mina.wiki', // base url for your canonical link, optional, default: ''
        stripExtension: true // strip '.html' , optional, default: false
      }
    ]
  ]
}
```

## Refrences

- [add extra tags to <head> per page](https://github.com/vuejs/vuepress/issues/894)
- [globalUIComponents](https://v1.vuepress.vuejs.org/plugin/option-api.html#globaluicomponents)