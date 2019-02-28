module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018,
    },
    "extends": [
        "eslint:recommended"
        // "plugin:react/recommended"
    ],
    "rules": {
        // "react/prop-types": ["off"],
        "comma-dangle": ["error", "never"],
        "no-console": "warn",
        "operator-linebreak": "off",
        "eqeqeq": ["off"],
        "no-empty-function":"off",
        "no-useless-escape":"off",
        "no-unused-vars": ["error", { "vars": "local" }]
    }
};