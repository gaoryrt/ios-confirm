import './main.css'
import confirm from '../confirm.js'

const $ = elemStr => {
  return document.querySelector(elemStr)
}

const confirmed = () => {
  $('.output').innerText = '确定：' + new Date()
}

const cancled = () => {
  $('.output').innerText = '取消：' + new Date()
}

$('button').addEventListener('click', () => {
  confirm('test', 'content goes here').then(confirmed, cancled)
})