'use strict'

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  ignorePatterns: ['node_modules/*', 'dist/*', 'vendor/*'],
  plugins: ['ember', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'logical-assignment-operators': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-constant-binary-expression': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-duplicate-imports': 'error',
    'no-floating-decimal': 'error',
    'no-lonely-if': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    semi: ['error', 'never'],
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignore: [-2, -1, 0, 0.1, 0.5, 1, 2, 3, 4, 5, 6, 10],
      },
    ],
  },
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
}
