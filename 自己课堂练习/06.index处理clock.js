const fs = require('fs')
const reg = /<style>([\s\S]*)<\/style>/
const reg2 = /<script>([\s\S]*)<\/script>/
fs.readFile('./index.html', 'utf-8', (err, data) => {
  if (err) return console.log('读取失败', err)

  const newreg = reg.exec(data)
  // console.log(newreg[1])
  fs.writeFile('./clock/index.css', newreg[1], (err, data) => {
    if (err) return console.log('css写入错误', err)
    console.log('css创建成功')
  })
  const indexjs = reg2.exec(data)

  fs.writeFile('./clock/index.js', indexjs[1], (err, data) => {
    if (err) return console.log('js写入失败', err)
    console.log('js创建成功')
  })
  data = data.replace(newreg[0], '<link rel="stylesheet" href="index.css">').replace(indexjs[0], '<script src="./index.js"></script>')

  fs.writeFile('./clock/index.html', data, (err, data) => {
    if (err) return console.log('html创建失败', 'err')
    console.log('html创建成功')
  })
})
