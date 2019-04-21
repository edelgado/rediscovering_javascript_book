module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script"
    },
    "rules": {
        "eqeqeq": "error",
        "strict": "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-console": "off",
        "indent": [
          "error",
          2
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "quotes": [
          "error",
          "single",
          "avoid-escape"
        ],
        "semi": [
          "error",
          "always"
        ]
    }
};
