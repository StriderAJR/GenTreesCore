/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/login/login.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/login/login.jsx":
/*!************************************!*\
  !*** ./wwwroot/js/login/login.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function App() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(LogIn, null));\n}\n\nfunction LogIn() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"row my-lg-4\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"col-md-3\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"col-md-6\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"card\"\n  }, /*#__PURE__*/React.createElement(\"form\", {\n    \"class\": \"text-center border border-white p-5\",\n    action: \"#!\"\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    \"class\": \"h4 mb-4\"\n  }, \"Sign in\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"email\",\n    id: \"defaultloginformemail\",\n    \"class\": \"form-control mb-4\",\n    placeholder: \"E-mail\"\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"password\",\n    id: \"defaultloginformpassword\",\n    \"class\": \"form-control mb-4\",\n    placeholder: \"Password\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"d-flex justify-content-around\"\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"custom-control custom-checkbox\"\n  }, /*#__PURE__*/React.createElement(\"input\", {\n    type: \"checkbox\",\n    \"class\": \"custom-control-input\",\n    id: \"defaultloginformremember\"\n  }), /*#__PURE__*/React.createElement(\"label\", {\n    \"class\": \"custom-control-label\",\n    \"for\": \"defaultloginformremember\"\n  }, \"Remember me\"))), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"\"\n  }, \"Forgot password?\"))), /*#__PURE__*/React.createElement(\"button\", {\n    \"class\": \"btn btn-block btn-primary my-4\",\n    type: \"submit\"\n  }, \"Sign in\"), /*#__PURE__*/React.createElement(\"p\", null, \"Not a member?\", /*#__PURE__*/React.createElement(\"a\", {\n    href: \"\"\n  }, \"Create an Account\")))), /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"clearfix\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    \"class\": \"col-md-3\"\n  }));\n}\n\nReactDOM.render(React.createElement(App, null), document.getElementById('logInContent'));\n\n//# sourceURL=webpack:///./wwwroot/js/login/login.jsx?");

/***/ })

/******/ });