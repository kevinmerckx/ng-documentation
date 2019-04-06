# NgDocs

## Documentation

[https://kevinmerckx.github.io/ng-docs/](https://kevinmerckx.github.io/ng-docs/)

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
<docs-app [brandLogo]="…'">
  <li><a>…</a></li>
  <li><a>…</a></li>
  <li><a>…</a></li>
</docs-app>

```