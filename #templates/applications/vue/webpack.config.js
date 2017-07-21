module.exports = {
    entry: './vue/main.js',
    output: {
        filename: './public/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'vue']
                }
            }
        ]
    }
}