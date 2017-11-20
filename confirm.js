import 'amfe-flexible'
import Promise from 'promise-polyfill'
window.Promise = window.Promise || Promise

function $(s) {
  return document.querySelector(s)
}

export default (id, str) => {
  if ($(`.cfrm_${id}`)) return
  const x = document.createElement('div')
  x.className = `cfrm_${id} cfrm_hd`
  x.innerHTML = `<div class="cfrm"><div class="cfrm_up"><div class="cfrm_0">提示</div><div class="cfrm_1">${str}</div></div><div class="cfrm_dn"><div class="cfrm_l">取消</div><div class="cfrm_r">确定</div></div></div>`
  $('body').appendChild(x)
  const s = document.createElement("style")
  s.id = 'spin-css'
  s.type = 'text/css'
  s.innerHTML = `.cfrm_${id}{z-index:999;position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.4);opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center;-webkit-transition:all .2s;transition:all .2s}.cfrm_hd{opacity:0;-webkit-transform:scale(1.15);transform:scale(1.15)}.cfrm_hn{opacity:0;-webkit-transform:scale(1);transform:scale(1)}.cfrm{position:fixed;top:44%;left:50%;box-sizing:border-box;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:8.4rem;border-radius:.4rem;background:#fff}.cfrm_up{padding:.55rem;border-bottom:#aaa .013rem solid}.cfrm_l{border-right:#aaa .013rem solid}.cfrm_0,.cfrm_1{text-align:center;line-height:1.4;color:#202020}.cfrm_0{font-weight:600;font-size:.54rem}.cfrm_1{font-size:.4rem}.cfrm_dn{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cfrm_l,.cfrm_r{-webkit-box-flex:1;-webkit-flex:1 0 0;flex:1 0 0;text-align:center;padding:.44rem;line-height:1;font-size:.54rem;color:#2383eb}.cfrm_lo{background:#e7e7e9;border-bottom-left-radius:.4rem}.cfrm_ro{background:#e7e7e9;border-bottom-right-radius:.4rem}`
  $('head').appendChild(s)
  setTimeout(() => {
    $(`.cfrm_${id}`).className = `cfrm_${id}`
  }, 4)
  $('.cfrm_l').addEventListener("touchstart", () => {
    $('.cfrm_l').className = 'cfrm_l cfrm_lo'
  })
  $('.cfrm_r').addEventListener("touchstart", () => {
    $('.cfrm_r').className = 'cfrm_r cfrm_ro'
  })

  return new window.Promise((resolve, reject) => {
    $('.cfrm_l').addEventListener("touchend", () => {
      $(`.cfrm_${id}`).className = `cfrm_${id} cfrm_hn`
      setTimeout(() => {
        $(`.cfrm_${id}`).parentNode.removeChild($(`.cfrm_${id}`))
        reject('cancle')
      }, 200)
    })
    $('.cfrm_r').addEventListener("touchend", () => {
      $(`.cfrm_${id}`).className = `cfrm_${id} cfrm_hn`
      setTimeout(() => {
        $(`.cfrm_${id}`).parentNode.removeChild($(`.cfrm_${id}`))
        resolve('confirm')
      }, 200)
    })
  })
}
