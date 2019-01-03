module.exports = {
    output : {
        filename : 'bundle.js'
    },
    devtool: 'source-map',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            }
        ]
    }
}