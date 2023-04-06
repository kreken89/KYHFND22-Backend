/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\r\n\r\nconst verifyToken = () => {\r\n  try {\r\n    const token = localStorage.getItem('token')\r\n    const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token);\r\n\r\n    const now = + Date.now().toString().slice(0, 10)\r\n\r\n    console.log('exp: ' + decoded.exp, 'now: ' + now)\r\n    if (decoded.exp < now) {\r\n      localStorage.removeItem('token')\r\n      console.log('token expired')\r\n      throw new Error('token expired')\r\n    } else {\r\n      console.log('token valid')\r\n    }\r\n\r\n\r\n  } catch (err) {\r\n    console.log(err)\r\n    location.replace('login.html')\r\n  }\r\n}\r\nverifyToken()\r\n\r\nconst getPosts = async () => {\r\n  const res = await fetch('http://localhost:7778/api/blog')\r\n  const posts = await res.json()\r\n\r\n\r\n  posts.forEach(post => {\r\n\r\n    document.querySelector('#output').insertAdjacentHTML('beforeend', `\r\n    <a href=\"edit.html?id=${post._id}\" class=\"post\">\r\n        <div class=\"img-container\">\r\n          <img src=\"${post.imgURL}\" alt=\"${post.title}\">\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"top\">\r\n            <div>\r\n              <h3>${post.title}</h3>\r\n              <small>${post.author.firstName} ${post.author.lastName}</small>\r\n            </div>\r\n            <ul id=\"tags${post._id}\" class=\"tags\">\r\n            </ul>\r\n          </div>\r\n          <div class=\"body\">\r\n            <p class=\"snippet\">${post.body.slice(0, 50)}...</p>\r\n            <p class=\"likes\">likes: <span>${post.likes}</span></p>\r\n          </div>\r\n        </div> \r\n      </a>\r\n    `)\r\n    const ul = document.querySelector('#tags' + post._id)\r\n    post.tags.forEach(tag => {\r\n      const li = document.createElement('li')\r\n      li.className = 'tag'\r\n      li.innerText = tag\r\n      ul.append(li)\r\n    })\r\n\r\n  })\r\n\r\n}\r\ngetPosts()\r\n\r\n\r\ndocument.querySelector('#logoutBtn').addEventListener('click', () => {\r\n  localStorage.removeItem('token')\r\n  location.replace('login.html')\r\n})\n\n//# sourceURL=webpack://lektion-9/./client/src/index.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InvalidTokenError\": () => (/* binding */ n),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction e(e){this.message=e}e.prototype=new Error,e.prototype.name=\"InvalidCharacterError\";var r=\"undefined\"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,\"\");if(t.length%4==1)throw new e(\"'atob' failed: The string to be decoded is not correctly encoded.\");for(var n,o,a=0,i=0,c=\"\";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\".indexOf(o);return c};function t(e){var t=e.replace(/-/g,\"+\").replace(/_/g,\"/\");switch(t.length%4){case 0:break;case 2:t+=\"==\";break;case 3:t+=\"=\";break;default:throw\"Illegal base64url string!\"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t=\"0\"+t),\"%\"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if(\"string\"!=typeof e)throw new n(\"Invalid token specified\");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(\".\")[o]))}catch(e){throw new n(\"Invalid token specified: \"+e.message)}}n.prototype=new Error,n.prototype.name=\"InvalidTokenError\";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);\n//# sourceMappingURL=jwt-decode.esm.js.map\n\n\n//# sourceURL=webpack://lektion-9/./node_modules/jwt-decode/build/jwt-decode.esm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/index.js");
/******/ 	
/******/ })()
;