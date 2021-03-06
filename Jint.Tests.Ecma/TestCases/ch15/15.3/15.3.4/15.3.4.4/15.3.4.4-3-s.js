/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.4/15.3.4.4/15.3.4.4-3-s.js
 * @description Strict Mode - 'this' value is a boolean which cannot be converted to wrapper objects when the function is called without an array of arguments
 * @onlyStrict
 */


function testcase() {
        "use strict";
        function fun() {
            return (this instanceof Boolean);
        }
        return !fun.call(false);
    }
runTestCase(testcase);
