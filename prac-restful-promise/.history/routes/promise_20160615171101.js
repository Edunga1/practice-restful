var Promise = function () {

}

Promise.prototype.then = function (callback) {

    return this;
}

exports = function () {
    return function () {
        var obj = new Promise();
        return {
            then: obj.then
        }
    };
};