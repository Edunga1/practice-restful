var Promise = function (s, f) {
    this.callbackSuccess = s;
    this.callbackFail = f;
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