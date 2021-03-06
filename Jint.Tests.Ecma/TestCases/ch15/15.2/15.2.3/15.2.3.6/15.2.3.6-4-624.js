/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-624.js
 * @description ES5 Attributes - all attributes in Date.prototype.toJSON are correct
 */


function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, "toJSON");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Date.prototype.toJSON;

        try {
            Date.prototype.toJSON = "2010";

            var isWritable = (Date.prototype.toJSON === "2010");

            var isEnumerable = false;

            for (var prop in Date.prototype) {
                if (prop === "toJSON") {
                    isEnumerable = true;
                }
            }

            delete Date.prototype.toJSON;

            var isConfigurable = !Date.prototype.hasOwnProperty("toJSON");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Date.prototype, "toJSON", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
