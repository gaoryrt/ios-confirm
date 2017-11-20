import './main.css'
import confirm from '../confirm.js'

const $ = elemStr => {
  return document.querySelector(elemStr)
}

const confirmed = () => {
  $('.output').innerText = 'you clicked yes' + new Date()
}

const cancled = () => {
  $('.output').innerText = 'you clicked no' + new Date()
}

$('button').addEventListener('click', () => {
  confirm('test', 'content goes here').then(confirmed, cancled)
})