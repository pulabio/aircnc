module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", //controllers vão usar classes sem this
    "no-param-reassign": "off", // receber parametros e fazer alterações nele. Vamos usar isso no Sequelize
    "camelcase": "off",
    //"no-unused-vars": ["erro", { "argsIgnorePattern": "next" }]
  },
};
