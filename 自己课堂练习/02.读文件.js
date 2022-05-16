const fs = require('fs')
// fs.readFile('./两小儿辩日.txt', (err, data) => {
//   if (err) {
//     console.log('读取错误', err)
//   } else {
//     console.log(data.toString())
//   }
// })
fs.readFile('./两小儿辩日.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('读取文件错误', err)
  } else {
    console.log('读取文件成功', data)
  }
})
