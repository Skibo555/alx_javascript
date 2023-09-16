const addMeMaybe = function (x, theFunction) {
    let i = x + 1; {
        return theFunction(i);
    }
};
module.exports = {
    addMeMaybe: addMeMaybe
}