const request = require('superagent');
var config = require('./config');

let mockApi = true;

// Before tests
 if (mockApi) {
     var superagentMock = require('superagent-mock')(request, config);
 }


let posts = [];

request
    .get('https://jsonplaceholder.typicode.com/posts')
    .withCredentials()
    .query({ action: 'edit', city: 'London' }) // query string
    .end(function(err, res){
        // Do something
        posts = res.body;
        console.log(posts)
    });