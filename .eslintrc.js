module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  "extends": [
    "google",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "import",
  ],
  "rules": {
    "require-jsdoc": ["error", {
      "require": {
          "FunctionDeclaration": false,
          "MethodDefinition": false,
          "ClassDeclaration": false,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
      }
  }],
  "max-len": [
    "error",
    {
      "code": 150,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }
  ],
  "react/prop-types": [0],
  "no-invalid-this": "warn",
  "object-curly-spacing": ["error", "always"],
  "jsx-quotes": ["error", "prefer-double"],
  "space-infix-ops": ["error", {"int32Hint": false}],
  "array-bracket-spacing": 2,
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-spacing": 2,
    "comma-style": 2,
    "consistent-return": 2,
    "curly": 2,
    "eol-last": 2,
    "func-call-spacing": 2,
    "func-name-matching": 2,
    "import/default": 2,
    "import/export": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/newline-after-import": [2, { "count": 2 }],
    "import/no-duplicates": 2,
    "import/no-extraneous-dependencies": 2,
    "import/no-mutable-exports": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-unresolved": 2,
    "import/order": [2, { "groups": ["builtin", "external", "internal", "parent", "sibling", "index"] }],
    "indent": [2, 2, {"SwitchCase": 1}],
    "key-spacing": [2, { "beforeColon": false }],
    "keyword-spacing": 2,

    "max-statements-per-line": [2, { "max": 1 }],
    "no-async-promise-executor": 2,
    "no-await-in-loop": 2,
    "no-debugger": 2,
    "no-else-return": 2,
    "no-global-assign": 2,
    "no-lonely-if": 2,
    "no-misleading-character-class": 2,
    "no-mixed-operators": 2,
    "no-multiple-empty-lines": 2,
    "no-native-reassign": 2,
    "no-nested-ternary": 2,

    "no-spaced-func": 2,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-unsafe-negation": 2,
    "no-useless-computed-key": 2,
    "no-var": 2,
    "no-warning-comments": 1,
    "object-curly-newline": [2, { "consistent": true }],
    "padded-blocks": [2, "never"],
    "padding-line-between-statements": [
      2,
      { "blankLine": "always", "prev": "*", "next": "block" },
      { "blankLine": "always", "prev": "*", "next": "for" },
      { "blankLine": "always", "prev": "*", "next": "if" },
      { "blankLine": "always", "prev": "*", "next": "switch" },
      { "blankLine": "always", "prev": "*", "next": "try" },
      { "blankLine": "always", "prev": "*", "next": "while" },
      { "blankLine": "always", "prev": "block", "next": "*" },
      { "blankLine": "always", "prev": "for", "next": "*" },
      { "blankLine": "always", "prev": "if", "next": "*" },
      { "blankLine": "always", "prev": "switch", "next": "*" },
      { "blankLine": "always", "prev": "try", "next": "*" },
      { "blankLine": "always", "prev": "while", "next": "*" }
    ],
    "prefer-arrow-callback": [2, { "allowNamedFunctions": true }],
    "prefer-const": 2,
    "prefer-destructuring": 2,
    "prefer-numeric-literals": 1,
    "prefer-reflect": 1,
    "prefer-rest-params": 2,
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "template-curly-spacing": 2,
    "unicode-bom": 2,

    "jsx-quotes": 2,
  },
};
