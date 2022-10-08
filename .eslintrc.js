module.exports = {
  root: true, // false
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#supported-rules, https://typescript-eslint.io/docs/linting/typed-linting/
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended', // -essential
    'standard-with-typescript',
    'prettier' // Make sure "prettier" is the last element in this list.
  ],
  parser: '@typescript-eslint/parser', // 'vue-eslint-parser', //
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  ignorePatterns: ['.eslintrc.js', '*.vue'], // , '*.vue'],
  plugins: ['@typescript-eslint'], //
  // add your custom rules here
  rules: {
    // override/add rules settings here, such as:
    '@typescript-eslint/semi': 'off',

    indent: 'off',
    'comma-dangle': 'off',
    semi: 'off',
    // 'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    // '@typescript-eslint/no-unsafe-call': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ], //

    'no-undef': 'off', //
    'vue/valid-template-root': 'warn',
    'vue/no-unused-vars': 'warn',
    // 'vue/require-default-prop': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // '@typescript-eslint/strict-boolean-expressions': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'

    //OPCIONES POR REVISAR

    // quotes: 'off',
    // 'space-before-function-paren': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'vue/multiline-html-element-content-newline': 'off',

    // 'vue/html-closing-bracket-newline': 'off',

    // 'no-trailing-spaces': 'off',
    // 'no-multiple-empty-lines': 'off',
    // 'no-console': 'off',
    // 'key-spacing': 'off',
    // 'space-in-parens': 'off',
    // 'padded-blocks': 'off',
    // 'vue/html-indent': 'off',
    // 'vue/v-slot-style': 'off',
    // 'vue/no-deprecated-v-on-native-modifier': 'off',
    // 'vue/first-attribute-linebreak': 'off',
    // 'vue/max-attributes-per-line': 'off',
    // 'vue/no-multi-spaces': 'off',
    // 'vue/no-parsing-error': 'off',
    // 'vue/attributes-order': 'off',
    // 'vue/html-end-tags': 'off',
    // 'spaced-comment': 'off',
    // 'vue/no-unused-components': 'off',
    // 'vue/no-deprecated-slot-attribute': 'off'
  }
};
