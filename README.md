# file-loader@1.0.0 not working with Babel/JSX

Minimum setup to reproduce file-loader@1.0.0 error with JSX/Babel.

On the `package.json`:

```javascript
...
"devDependencies": {
  "babel-core": "6.26.0",
  "babel-loader": "7.1.2",
  "babel-preset-react-app": "3.0.2",
  "file-loader": "1.0.0",
  "html-webpack-plugin": "2.30.1",
  "webpack": "3.5.6",
  "webpack-dev-server": "2.7.1"
}
...
```

If you replace `"file-loader": "1.0.0"` by `"file-loader": "0.11.2"`, everything works as expected.

