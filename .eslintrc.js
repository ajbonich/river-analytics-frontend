module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'google',
        'prettier',
        'prettier/react',
    ],
    parser: 'babel-eslint',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    plugins: ['react'],
    rules: {
        'max-len': ['warn', { code: 160 }],
        'linebreak-style': ['error', 'windows'],
        'require-jsdoc': [
            'off',
            {
                require: {
                    FunctionDeclaration: true,
                },
            },
        ],
        'react/prop-types': ['off'],
        'no-invalid-this': ['off'],
        'prefer-rest-params': ['off'],
        'new-cap': ['off'],
    },
}
