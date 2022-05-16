const fs = require('fs')
fs.readFile('./两小儿辩日.txt', 'utf-8', (err, data) => {
  if (err) return console.log('读取错误', err)
  fs.writeFile('cope两小儿辩日.txt', data, (err, data) => {
    if (err) return console.log('写入失败', err)
    console.log('写入成功')
  })
})
