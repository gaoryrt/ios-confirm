import './main.css'
import confirm from '../confirm'

const $ = elemStr => document.querySelector(elemStr)

const confirmed = () => {
  $('.output').innerText = `确定：${new Date()}`
}

const cancled = () => {
  $('.output').innerText = `取消：${new Date()}`
}

$('button').addEventListener('click', () => {
  confirm('test', 'content goes here').then(confirmed, cancled)
})
