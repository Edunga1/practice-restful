var Promise = function () {
    this.callbackSuccess = null;
    this.callbackFail = null;
}

Promise.prototype.then = function (callback) {

    return this;
}

exports = function (callbackSuccess, callbackFail) {
    return function () {
        var obj = new Promise(callbackSuccess, callbackFail);
        return {
            then: obj.then
        }
    };
};