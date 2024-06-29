const cssnano = {
    cssnano: {
        preset: 'advanced',
        discardComments: { removeAll: true },
        normalizeUrl: false,
    },
};

export default {
    plugins: {
        'postcss-import': {},
        'tailwindcss': {},
        'postcss-preset-env': {
            stage: 2,
        },
        ...(process.env.NODE_ENV === 'production' ? cssnano : {}),
        'autoprefixer': {},
    },
};
