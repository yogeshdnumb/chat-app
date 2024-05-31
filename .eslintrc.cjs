module.exports = {
  extends: ['mantine', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },
};
