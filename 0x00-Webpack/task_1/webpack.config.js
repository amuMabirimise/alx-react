const path = require('path');

module.exports = {
    mode: 'production', // Set Webpack config mode to production
    entry: './src/index.js', // Assuming this is your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};
