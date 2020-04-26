const path = require('path');  //使用require报错：可改.eslintrc.js配置、可改成import、可写 eslint ignore注释

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end() // 包含 icons 目录
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
        //.use('svgo-loader').loader('svgo-loader')  //删除svg中的fill填充色、npm install --dev svgo-loader一下（没装）
        //.tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))  //删除svg中的fill填充色
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录

    // config.module
    //   .rule('svg-sprite')
    //   .test(/\.(svg)(\?.*)?$/)
    //   .include.add(dir).end()
    //   .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
    //   .use('svgo-loader').loader('svgo-loader')
    //   .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
    //   .end()
    // config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    // config.module.rule('svg').exclude.add(dir)
  }
}
