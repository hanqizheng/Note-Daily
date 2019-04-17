const Vue = require('./vue')

var d = { value: 5 }

var vm = new Vue({
    data: d
})

console.log(vm.value)