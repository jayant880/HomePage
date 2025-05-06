module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: ['last 2 versions', 'not dead', '> 0.5%']
            }
        }]
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            regenerator: true,
            helpers: true
        }]
    ]
};