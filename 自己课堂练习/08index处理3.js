const fs = require('fs')
const reg = /<style>([\s\S]*)<\/style>/
const reg2 = /<script>([\s\S]*)<\/script>/
fs.readFile('./index.html', 'utf-8', (err, data) => {
  if (err) return console.log('读取失败', err)
  // console.log('源index读取成功', data)
  const newcss = reg.exec(data)
  // console.log(newcss)
  fs.writeFile('./clock3/index.css', newcss[1], (err, data) => {
    if (err) return console.log('创建css失败', err)
    console.log('创建css成功')
  })
  const newjs = reg2.exec(data)
  fs.writeFile('./clock3/index.js', newjs[1], (err, data) => {
    if (err) return console.log('创建js失败', err)
    console.log('创建js成功')
  })
  data = data.replace(reg, '<link rel="stylesheet" href="index.css" />').replace(reg2, '<script src="index.js"></script>')
  console.log(data)
  fs.writeFile('./clock3/index.html', data, (err, data) => {
    if (err) return console.log('创建html失败', err)
    console.log('创建html成功')
  })
})
