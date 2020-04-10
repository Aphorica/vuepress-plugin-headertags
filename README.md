# vuepress-plugin-headertags

> plugin for vuepress to add header tags

Adds specified header tags to rendered pages

## Rationale
Had a use case where I need to add headers to a page.  There is a somewhat easy way to add headers to all pages using the 'head' tag in the .vuepress/config.js file, but no easy way to tune it for specific pages.

You will need to fork or copy this repo and make modifications to your copy to add tuning code.  For an example of how this is done, look at this plugin: [](vuepress-plugin-netlifycms).  Look in the 'HeaderTags.vue' to see how the action is filtered to only the main ("/") page.

## Install

```
yarn add vuepress-plugin-headertags -D
```

(Note the __-D__ is _very_ important...)

## Usage
In .vuepress/config.js:
```
module.exports = {
  plugins: [
    [
      'vuepress-plugin-headerTags',
      {
        headerTags: ['<script src="somewhere.js"></script>',
                     '<link rel="somelink"></link>',
                      (etc)
                      ]
      }
    ]
  ]
}
```
