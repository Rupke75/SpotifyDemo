import _ from 'lodash';

var s = _.join(['Hello', 'webpack'], ' ');
console.log(s);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
