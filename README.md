# ios-confirm
> An ios-like confirm based on Promise.

![](./example/demo.gif)

## install
```javascript
yarn add ios-confirm
```

## usage
1. import:
```javascript
import confirm from 'ios-confirm'
```

2. use it like promise:
```javascript
  $('button').addEventListener('click', () => {
    confirm('test', 'content goes here').then(() => {
      // confirmed
    }, () => {
      // cancled
    })
  })
```

## todo
- [ ] i18n / customize
- [ ] decoupling

## contributing
1. Fork it!
2. Create your feature branch: `git checkout -b MY-NEW-FEATURE`
3. Commit your changes: `git commit -am 'ADD SOME FEATURE'`
4. Push to the branch: `git push origin MY-NEW-FEATURE`
5. Submit a pull request :D

