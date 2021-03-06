module.exports = {

  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: '',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': [
      0,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'no-unused-vars': 0
  },
  globals: {}
}
