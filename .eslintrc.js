module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, // Or your desired ECMAScript version
      sourceType: 'module',
      project: './tsconfig.json', // Path to your TypeScript configuration
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // Use recommended rules
      'plugin:@typescript-eslint/recommended-requiring-type-checking', // For type-aware linting
      'prettier', // Disable formatting rules that conflict with Prettier
      'plugin:prettier/recommended', // Enable Prettier rules
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error', // Prevent unused variables
      '@typescript-eslint/explicit-function-return-type': 'warn', // Encourage explicit return types
    },
  };