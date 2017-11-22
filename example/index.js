import './main.css'
import confirm from '../confirm'

const $ = elemStr => document.querySelector(elemStr)

const log = logStr => () => {
  const newNode = document.createElement('p')
  newNode.innerText = `${logStr}：${new Date()}`
  $('.output').appendChild(newNode)
}

$('button').addEventListener('click', () => {
  confirm('pln', 'content goes here').then(log('YES'), log('cancle'))
})

$('.custom').addEventListener('click', () => {
  confirm('cus', {
    title: 'Confirm Your In-App Purchase',
    subtitle: 'Do you want to buy one pack of 100 Bux for $0.69?',
    cancle: 'Cancel',
    confirm: 'Buy',
  }).then(log('Buy'), log('Cancel'))
})
