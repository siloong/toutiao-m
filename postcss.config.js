module.exports = {
  plugins: {
    // Add the browser prefix plugin
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    //  
    'postcss-pxtorem': {
      rootValue: 37.5,
      // rootValue: 75,
      propList: ['*']
    }
  }
}