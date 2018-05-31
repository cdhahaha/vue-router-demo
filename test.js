var merge = require('webpack-merge')

var z = merge({
  name: {a: 1}
}, {
  name: {b: 2}
})

console.log(z)