#!/usr/bin/env node
console.log('zce-page')
// #!/usr/bin/env node 只有加上这个，他才会作为cli命令去运行
// argv 是一个数组
process.argv.push('--cwd') // cwd 所在路径
process.argv.push(process.cwd()) // 当前目录
process.argv.push('--gulpfile') // gulpfile所在路径
// require 是载入，resolve是找到这个模块，他们都可以传相对路径，用 '..' 寻找上一层从而找到lib下的index.js
// 直接用 '..'的方式，他会直接匹配package.json下main里面引用的字段，如果main没有就要定义全 '../lib/index.js'
process.argv.push(require.resolve('..')) 

require('gulp/bin/gulp')