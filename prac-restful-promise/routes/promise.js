var Promise = function () {
}

Promise.prototype.then = function (callbackSuccess, callbackFail) {

    return this;
}

exports = function () {
    return function () {
        return new Promise();
    };
};