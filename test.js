var async = require('async');
console.time('waterfall');
async.waterfall([
    function(callback) {
        callback(null, 'one');
    },
    function(onearg, callback) {
        callback(null, onearg + '>>>two');
    },
    function(twoarg, callback) {
        callback(null, twoarg + '>>>three');
    },
    function(threearg, callback) {
        callback(null, threearg + '>>>four');
    }
], function(error, result) {
    console.log('error: ' + error);
    console.log('result: ' + result);
    console.timeEnd('waterfall');
});