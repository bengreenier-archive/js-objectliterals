var assert = require('assert');
var behaviors = require('../index');

describe("js-objectliterals", function () {
    for (var prop in behaviors) {
        if (typeof(behaviors[prop]) === "function") {
            it(prop, function () {
                assert.doesNotThrow(function () {
                    behaviors[prop]();
                });
            });
        }
    }
});