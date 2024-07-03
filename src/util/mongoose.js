module.exports = {
    mongooseArrayToObject: function (mongoArrays) {
        return mongoArrays.map((mongoArray) => mongoArray.toObject());
    },
    mongooseToObject: function (mongoArray) {
        return mongoArray ? mongoArray.toObject() : mongoArray;
    },
};
