// .eslintrc.cjs — minimal, JS/JSX, ESLint v8
module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  plugins: ["react", "react-hooks", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": { node: { extensions: [".js", ".jsx"] } }
  },
  ignorePatterns: ["node_modules/", "build/", "public/build/"],
  rules: {
    // keep only the critical correctness rules
    "react/jsx-no-undef": ["error", { allowGlobals: false }],
    "no-undef": "error",
    "import/no-unresolved": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/no-unescaped-entities": "off",

    // quiet down everything else
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": ["off"]
  }
};
