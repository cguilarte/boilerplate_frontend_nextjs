module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:react/recommended", "prettier"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["react"],
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
