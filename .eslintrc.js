module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended"
    // "@vue/standart"
  ],
  rules: {
    "no-console": "off",
    "no-debugger": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
