var webpack = require('webpack');

module.exports = {

  output: {
    library: 'ReactRouter',
    libraryTarget: 'var'
  },

  externals: {
    react: 'React'
  },

  node: {
    buffer: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
  
};
