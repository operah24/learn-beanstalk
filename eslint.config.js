// eslint.config.js
const js = require('@eslint/js');
const jestPlugin= require('eslint-plugin-jest');

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        globals: {
            require: 'readonly',
            module: 'readonly',
            __dirname: 'readonly',
            process: 'readonly',
            describe: 'readonly',
            it: 'readonly',
            expect: 'readonly',
            console: 'readonly',
        },
    },
    rules: {
      "no-prototype-builtins": "warn",
        "indent": [
            "off",
            4
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "off",
            {
                "vars": "local"
            }
        ]
    },
  },
];
