import './main.css'
import confirm from '../confirm'

const $ = elemStr => document.querySelector(elemStr)

const log = logStr => () => {
  const newNode = document.createElement('p')
  newNode.innerText = `${logStr}：${new Date()}`
  $('.output').appendChild(newNode)
}

$('button').addEventListener('click', () => {
  confirm('test', 'content goes here').then(log('确定'), log('取消'))
})
