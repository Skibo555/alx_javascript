const addMeMaybe = function (x, theFunction) {
    return {
        value: x,
        theFunction: function () {
            return this.value + 1;
        },
    };
};
module.exports = {
    addMeMaybe: addMeMaybe
};