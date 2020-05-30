const path = require('path');  //使用require报错：可改.eslintrc.js配置、可改成import、可写 eslint ignore注释

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/charge-website/'
      : '/',
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons') //svg图标的路径

    config.module //vue将webpack封装后暴露出来的config接口
        .rule('svg-sprite') //添加规则
        .test(/\.svg$/)  //匹配.svg为结尾的文件
        .include.add(dir).end() // 只包含 icons 目录的路径
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()  //不需要解析成文件
        //.use('svgo-loader').loader('svgo-loader')  //删除svg中的fill填充色、npm install --dev svgo-loader一下（没装）
        //.tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))  //删除svg中的fill填充色
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录：loader 分功避免冲突

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
