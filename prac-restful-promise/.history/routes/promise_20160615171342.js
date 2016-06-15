var Promise = function (s, f) {
    this.callbackSuccess = s;
    this.callbackFail = f;
}

Promise.prototype.then = function (callback) {

    return this;
}

exports = function (callbackSuccess, callbackFail) {
    return function () {
        return new Promise(callbackSuccess, callbackFail);
    };
};