var Promise = function () {
    this.callbackSuccess = null,
    this.callbackFail = null;
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