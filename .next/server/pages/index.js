module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/adamtretera/Documents/GitHub/Netflix-clone/pages/index.tsx\";\n\n\nfunction Home() {\n  const [session, loading] = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"useSession\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-col min-h-screen py-2 \",\n    style: {\n      backgroundImage: \"linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./hero.jpeg) \"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Netflix clone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"flex justify-between w-full px-12 py-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0.238 0.034 919.406 248.488\",\n          className: \"w-28\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            fill: \"#e50914\",\n            d: \"M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: !session ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"signIn\"])('google'),\n          className: \"flex items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded\",\n          children: \"P\\u0159ihl\\xE1sit se\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"signOut\"])(),\n              className: \" bg-[#e50914] text-white text-sm px-4 py-2 rounded\",\n              children: \"Odhl\\xE1sit se\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: \"w-10 rounded-full ml-5\",\n              src: session.user.image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 4\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 6\n          }, this)\n        }, void 0, false)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"flex flex-col items-center justify-center flex-1 px-20 text-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-5xl text-white font-bold max-w-xl text-center\",\n        children: \"Neomezen\\xE1 pod\\xEDvan\\xE1 na filmy, TV po\\u0159ady a dal\\u0161\\xED.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-2xl text-white mt-4 mb-8\",\n        children: \"D\\xEDvejte se kdekoli. Zru\\u0161te kdykoli.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-white text-xl\",\n        children: \"Jste p\\u0159ipraveni se d\\xEDvat? Pro vytvo\\u0159en\\xED nebo obnoven\\xED \\xFA\\u010Dtu zadejte e-mail.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex mt-6\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          placeholder: \"Emailov\\xE1 adresa\",\n          className: \"p-4 rounded-none bg-white min-w-10 min-w-[30vw]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"signIn\"])(),\n          className: \"text-lg text-white bg-[#e50914]  font-light px-3 flex items-center \",\n          children: [\"Vyzkou\\u0161et na 30 zadarma\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-5\",\n            fill: \"none\",\n            stroke: \"currentColor\",\n            viewBox: \"0 0 24 24\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: \"2\",\n              d: \"M9 5l7 7-7 7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-white text-xl pt-12\",\n        children: \"Nab\\xEDdka je ur\\u010Den\\xE1 jenom pro nov\\xE9 \\u010Dleny.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTZXNzaW9uIiwiYmFja2dyb3VuZEltYWdlIiwic2lnbkluIiwic2lnbk91dCIsInVzZXIiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxHQUFnQjtBQUM5QixRQUFNLENBQUNDLE9BQUQsRUFBVUMsT0FBVixJQUFxQkMsbUVBQVUsRUFBckM7QUFDQSxzQkFDQztBQUNDLGFBQVMsRUFBQyxrQ0FEWDtBQUVDLFNBQUssRUFBRTtBQUNOQyxxQkFBZSxFQUNkO0FBRkssS0FGUjtBQUFBLDRCQU9DLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVdDO0FBQVEsZUFBUyxFQUFDLHdDQUFsQjtBQUFBLDhCQUNLO0FBQUEsK0JBQ0U7QUFDRSxlQUFLLEVBQUMsNEJBRFI7QUFFRSxpQkFBTyxFQUFDLDZCQUZWO0FBR0UsbUJBQVMsRUFBQyxNQUhaO0FBQUEsaUNBS0U7QUFDRSxnQkFBSSxFQUFDLFNBRFA7QUFFRSxhQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETCxlQWFLO0FBQUEsa0JBQ0csQ0FBQ0gsT0FBRCxnQkFDQztBQUNFLGlCQUFPLEVBQUUsTUFBTUksK0RBQU0sQ0FBQyxRQUFELENBRHZCO0FBRUUsbUJBQVMsRUFBQyxxRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFRTjtBQUFBLGlDQUNBO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG9DQUNPO0FBQ0UscUJBQU8sRUFBRSxNQUFNQyxnRUFBTyxFQUR4QjtBQUVFLHVCQUFTLEVBQUMsb0RBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRFAsZUFPRjtBQUFLLHVCQUFTLEVBQUMsd0JBQWY7QUFBd0MsaUJBQUcsRUFBRUwsT0FBTyxDQUFDTSxJQUFSLENBQWFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFURztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEQsZUErQ0M7QUFBTSxlQUFTLEVBQUMsb0VBQWhCO0FBQUEsOEJBRUM7QUFBSSxpQkFBUyxFQUFDLG9EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFLQztBQUFJLGlCQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQVFDO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJELGVBWUM7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDQztBQUNDLHFCQUFXLEVBQUMsb0JBRGI7QUFFQyxtQkFBUyxFQUFDO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUtDO0FBQ0MsaUJBQU8sRUFBRSxNQUFNSCwrREFBTSxFQUR0QjtBQUVDLG1CQUFTLEVBQUMscUVBRlg7QUFBQSxrRUFLQztBQUNDLHFCQUFTLEVBQUMsS0FEWDtBQUVDLGdCQUFJLEVBQUMsTUFGTjtBQUdDLGtCQUFNLEVBQUMsY0FIUjtBQUlDLG1CQUFPLEVBQUMsV0FKVDtBQUtDLGlCQUFLLEVBQUMsNEJBTFA7QUFBQSxtQ0FPQztBQUNDLDJCQUFhLEVBQUMsT0FEZjtBQUVDLDRCQUFjLEVBQUMsT0FGaEI7QUFHQyx5QkFBVyxFQUFDLEdBSGI7QUFJQyxlQUFDLEVBQUM7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkQsZUFzQ0M7QUFBRyxpQkFBUyxFQUFDLDBCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTRGQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXHRjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gcHktMiBcIlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOlxuXHRcdFx0XHRcdFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKC4vaGVyby5qcGVnKSBcIixcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5OZXRmbGl4IGNsb25lPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHgtMTIgcHktOFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAuMjM4IDAuMDM0IDkxOS40MDYgMjQ4LjQ4OFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPVwiI2U1MDkxNFwiXG4gICAgICAgICAgICAgIGQ9XCJNODcwLjQ2IDExOC4zMTRsNDkuMTg0IDEzMC4yMDhjLTE0LjQ5NS0yLjA3LTI4Ljk4Mi00LjY2My00My43MzMtNi45OTlsLTI3LjcwNy03MS45NDUtMjguNDY4IDY2LjAwNmMtMTMuOTczLTIuMzM2LTI3LjY5OC0zLjExNC00MS42NzItNC45MjhsNDkuOTU1LTExMy44OUw3ODIuNzEuMDM0aDQxLjkzN2wyNS4zNjIgNjUuMjJMODc3LjE5NC4wMzRoNDIuNDQyek03NDkuNTk2LjAzNGgtMzguMDUydjIyNS43MWMxMi40MjUuNzc5IDI1LjM2MiAxLjI5MiAzOC4wNTIgMi44NDF6bS03MC45MjcgMjIzLjExOGMtMzQuNjgtMi4zMjgtNjkuMzctNC4zOS0xMDQuODI5LTUuMTc3Vi4wMzVoMzguODIzdjE4MS4xODhjMjIuMjY0LjUxNCA0NC41MiAyLjMyIDY2LjAwNiAzLjM1NXpNNTMyLjQxNyA4OC4zMDV2MzguODIyaC01My4wNnY4OC4yNjNoLTM4LjNWLjAzNEg1NDkuNzd2MzguODIyaC03MC40MDV2NDkuNDVoNTMuMDZ6TTM3NS44MiAzOC44NTZ2MTc4LjYwNWMtMTIuOTQ2IDAtMjYuMTQgMC0zOC44My41MTRWMzguODU2aC00MC4xMjJWLjAzNEg0MTYuMTl2MzguODIyek0yNTQuOTQgMTI5LjE5Yy0xNy4wOCAwLTM3LjI3NCAwLTUxLjc2OS43ODd2NTcuNzE1YzIyLjc3OC0xLjU1NyA0NS41NTYtMy4zNjMgNjguNTktNC4xNDF2MzcuMjczbC0xMDcuNDEyIDguNTQ4Vi4wMzRoMTA3LjQwNXYzOC44MjJIMjAzLjE3djUyLjI5YzE1LjAxNyAwIDM4LjA1Mi0uNzc4IDUxLjc2OC0uNzc4djM4Ljgzek0zOS44MzEgMTA3LjQ0N1YyNDMuMDhjLTEzLjk2NSAxLjU1Ny0yNi4zOTggMy4zNzEtMzkuNTkzIDUuNDQyVi4wMzRoMzcuMDE3TDg3LjcyNCAxNDEuMTFWLjAzNGgzOC44M1YyMzIuNDdjLTEzLjcxNyAyLjMzNi0yNy42OTggMy4xMTQtNDIuNDUgNS4xNzd6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHshc2Vzc2lvbiA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCdnb29nbGUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctWyNlNTA5MTRdIHRleHQtd2hpdGUgdGV4dC1zbSBweC00IHB5LTIgcm91bmRlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFDFmWlobMOhc2l0IHNlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuXHRcdFx0ICA8PlxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLVsjZTUwOTE0XSB0ZXh0LXdoaXRlIHRleHQtc20gcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBPZGhsw6FzaXQgc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXHRcdFx0PGltZyBjbGFzc05hbWU9XCJ3LTEwIHJvdW5kZWQtZnVsbCBtbC01XCIgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtMSBweC0yMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIG1heC13LXhsIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0TmVvbWV6ZW7DoSBwb2TDrXZhbsOhIG5hIGZpbG15LCBUViBwb8WZYWR5IGEgZGFsxaHDrS5cblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgbXQtNCBtYi04XCI+XG5cdFx0XHRcdFx0RMOtdmVqdGUgc2Uga2Rla29saS4gWnJ1xaF0ZSBrZHlrb2xpLlxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj5cblx0XHRcdFx0XHRKc3RlIHDFmWlwcmF2ZW5pIHNlIGTDrXZhdD8gUHJvIHZ5dHZvxZllbsOtIG5lYm8gb2Jub3ZlbsOtIMO6xI10dSB6YWRlanRlXG5cdFx0XHRcdFx0ZS1tYWlsLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsb3bDoSBhZHJlc2FcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicC00IHJvdW5kZWQtbm9uZSBiZy13aGl0ZSBtaW4tdy0xMCBtaW4tdy1bMzB2d11cIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2lnbkluKCl9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtd2hpdGUgYmctWyNlNTA5MTRdICBmb250LWxpZ2h0IHB4LTMgZmxleCBpdGVtcy1jZW50ZXIgXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRWeXprb3XFoWV0IG5hIDMwIHphZGFybWFcblx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy01XCJcblx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjJcIlxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNOSA1bDcgNy03IDdcIlxuXHRcdFx0XHRcdFx0XHQ+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcHQtMTJcIj5cblx0XHRcdFx0XHROYWLDrWRrYSBqZSB1csSNZW7DoSBqZW5vbSBwcm8gbm92w6kgxI1sZW55LlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });