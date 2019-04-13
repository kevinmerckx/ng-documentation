# NgDocs

[![Build Status](https://travis-ci.org/kevinmerckx/ng-documentation.svg?branch=develop)](https://travis-ci.org/kevinmerckx/ng-documentation)
[![Greenkeeper badge](https://badges.greenkeeper.io/kevinmerckx/ng-documentation.svg)](https://greenkeeper.io/)

## Documentation

[https://kevinmerckx.github.io/ng-documentation/](https://kevinmerckx.github.io/ng-documentation/)

## Setup

"Automatic" documentation.

* Generate `documentation.json` in `src/assets` with compodoc
* Generate `examples.json` in `src/assets`
* add styles
  * "projects/docs/src/lib/styles.sass"
  * "projects/docs/src/lib/styles/font-awesome-4.7.0/css/font-awesome.css",
  * "projects/demo/src/styles.sass"
* configure your documentation app
  ```
  DocsModule.configure({
      componentPages: {
      }
    })
  ```
* add the template for the documentation in your root component
```
<docs-app>
  <ng-template docsBrandHeader>
    … your logo here, some text, whatever
  </ng-template>
  <li><a>…</a></li>
  <li><a>…</a></li>
  <li><a>…</a></li>
</docs-app>

```
