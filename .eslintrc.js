module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  extends: [
    'standard',
    'standard-react',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false
    }],
    'array-bracket-newline': ['error', { 'multiline': true }],
    'max-len': ['error', {
      code: 100,
      tabWidth: 2
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline'
    }],
    'sort-imports': ['error', { memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'] }],
    'prefer-template': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-newline': ["error", { "multiline": true }]
  }
}
