var assert = require('assert');

module.exports = {
    emptyLiteral: function () {
        var res = {};
        assert.deepEqual(res, {});
        return res;
    },
    keyValueLiteral: function () {
        var res = {
            key: "value"
        };
        assert.deepEqual(res, {key:"value"});
        return res;
    },
    nestedKeyBooleanTrueLiteral: function () {
        var res = {
            key: {
                boolean: true
            }
        };
        assert.deepEqual(res, {key:{boolean: true}});
        return res;
    },
    keyValueNestedObjectBooleanTrueLiteral: function () {
        var nested = {
            boolean: true
        };
        var res = {
            key: "value",
            nested
        };
        assert.deepEqual(res, {key:"value", nested: {boolean: true}});
        return res;
    }
};