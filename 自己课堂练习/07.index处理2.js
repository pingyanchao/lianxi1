const fs = require('fs')
const reg = /<style>([\s\S]*)<\/style>/
const reg2 = /<script>([\s\S]*)<\/script>/
// 读取源html
fs.readFile('./index.html', 'utf-8', (err, data) => {
  if (err) return console.log('读取错误', err)
  const cssreg = reg.exec(data)

  // css写入
  fs.writeFile('./clock2/index.css', cssreg[1], (err, data) => {
    if (err) return console.log('写入错误', err)
    console.log('css文件生成成功')
  })
  // js写入
  const regjs = reg2.exec(data)
  fs.writeFile('./clock2/index.js', regjs[1], (err, data) => {
    if (err) return console.log('吸入失败', err)
    console.log('js文件生成成功')
  })
  // html写入
  data = data.replace(reg, '<link rel="stylesheet" href="index.css">')
  data = data.replace(reg2, ' <script src="./index.js"></script>')
  fs.writeFile('./clock2/index.html', data, (err, data) => {
    if (err) return console.log('创建html失败', err)
    console.log('html生成成功')
  })
})
