(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Library = factory());
}(this, (function () { 'use strict';

var folks = 'folks';
var library = function library() {
  return 'That\'s all ' + folks + '!';
};

return library;

})));
