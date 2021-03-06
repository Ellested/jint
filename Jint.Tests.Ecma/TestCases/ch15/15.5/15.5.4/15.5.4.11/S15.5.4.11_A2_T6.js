// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The $ replacements are done left-to-right, and, once such are placement is performed, the new
 * replacement text is not subject to further replacements
 *
 * @path ch15/15.5/15.5.4/15.5.4.11/S15.5.4.11_A2_T6.js
 * @description Don`t use $ in replaceValue, searchValue is regular expression /sh/
 */

var __str = 'She sells seashells by the seashore.';
var __re = /sh/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__re, 'sch')!=='She sells seaschells by the seashore.') {
  $ERROR('#1: var __str = \'She sells seashells by the seashore.\'; var __re = /sh/; __str.replace(__re, \'sch\')===\'She sells seaschells by the seashore.\'. Actual: '+__str.replace(__re, 'sch'));
}
//
//////////////////////////////////////////////////////////////////////////////

