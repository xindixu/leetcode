module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    semi: ['error', 'never'],
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'max-len': ['error', { ignoreComments: true }],
  },
}
