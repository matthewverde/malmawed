module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/matthewgr/code/malmawed/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const itinerary = [{
  date: 'Sunday, December 22',
  location: 'Vienna, Imperial Riding School Renaissance Hotel',
  items: ["11:15 am - Carmen, Todd, Carolyn, Mike, Annie & Emma arrive in Vienna", "TBD - Katie arrives in Vienna", "Check into hotel: Imperial Riding School Renaissance", "Lunch - on your own", "Dinner - on your own"]
}, {
  date: 'Monday, December 23',
  location: 'Vienna, Imperial Riding School Renaissance Hotel',
  items: ["Breakfast - on your own", 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Tuesday, December 24 (Christmas Eve)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  items: ['Breakfast - on your own', 'Carmen, Todd, Katie, Carolyn, Mike, Annie, & Emma check out of Imperial Riding School Renaissance', 'Greens take train to Salzburg  (approx 2.5 hrs)', 'Check into hotel: Wyndham Grand Salzburg', 'Lunch - on your own', '1:40 pm - Joan, Trevor, & Julia arrive in Salzburg', '3:00 pm - Saccomannos to Silent Night Chapel Tour (anyone is welcome to book tickets)', '5:35 pm - Cynthia & Cory arrive in Salzburg', 'Dinner - on your own']
}, {
  date: 'Wednesday, December 25 (Christmas Day)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  items: ['6:00 am - Emmy, James, Elliot, and Issac arrive in Munich', 'Breakfast: on your own', '8:30 am - Depart Wyndham Grand on tour bus', 'Lunch: group lunch in Unken', '6:00 pm - Return to the Wyndham Grand', 'Dinner: group Christmas dinner at Wyndham Grand']
}, {
  date: 'Thursday, December 26 (Wedding Rehearsal Day)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  items: ['Breakfast: on your own', '8:45 am - Jeff, Kari, & Anna arrive in Vienna, travel to Salzburg', 'Lunch: on your own', 'Syd & Bart arrive in Salzburg', '4:00 pm - Wedding Rehearsal, dinner to follow at St. Peter Stiftskeller']
}, {
  date: 'Friday, December 27 (Matthew & Alma’s Wedding)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  items: ['Breakfast - bridal party in bridal suite - Hotel Stein, everyone else on your own', '7 am - 12 pm - makeup & hair appointments', 'Lunch - bridal party in bridal suite - Hotel Stein, everyone else on your own', '2:00 pm - pictures - Hotel Sacher, carriage rides/cabs to venue afterwards', '5:00 pm - wedding ceremony - St. Peter Stiftskeller, Hayden Hall', 'Dinner at wedding reception - St. Peter Stiftskeller, Baroque Hall (childcare provided)']
}, {
  date: 'Saturday, December 28 (Katie’s 30th Birthday)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  items: ['Breakfast - on your own, Matthew & Alma may have an optional open house style brunch at Tomaselli', 'TBD - “kids” spa outing - Hotel Schloss Monchstein', 'Lunch - on your own', 'Dinner - group birthday dinner at Hotel Sacher restaurant, drinks to follow in Hotel Sacher lounge bar (cocktail/dressy attire)']
}, {
  date: 'Sunday, December 29',
  location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
  items: ['Breakfast - on your own', 'TBD - Carmen, Todd, Carolyn, Mike, Annie, Emma, Katie, James, Jeff, Kari, Anna, Joan, Trevor, and Julia check out of Wyndham Grand Salzburg', 'TBD - Train to Bad Reichenhall (approx. 30 min)', 'TBD - Check in to hotel: Avalon Hotel Bad Reichenhall', 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Monday, December 30',
  location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
  items: ['Breakfast - on your own', '10:50 am - Cynthia & Cory depart Salzburg for home', 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Tuesday, December 31',
  location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
  items: ['TBD - Emmy, James, Elliot, & Isaac depart Salzburg for Vienna', 'Breakfast - on your own', 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Wednesday, January 1',
  location: 'Vienna: Moxy Hotel',
  items: ['Breakfast - on your own', 'Lunch - on your own', 'TBD - Carmen, Todd, Carolyn, Mike, Annie, Emma, Katie, James, Jeff, Kari, Anna, Joan, Trevor, and Julia check out of Avalon Bad Reichenhall', 'TBD - Train to Vienna', 'Check into hotel: hotel near Vienna airport', 'Dinner - on your own (Emmy & James are also in Vienna this evening)']
}, {
  date: 'Thursday, January 2',
  location: 'Going home',
  items: ['6:15 am - Carmen, Todd, Carolyn, Mike, Annie, & Emma depart Vienna for home', '10:10 am - Jeff, Kari, & Anna depart Vienna for home', '10: 40 am - Joan, Trevor, & Julia depart Vienna for home']
}];
const StyledLocation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    text-align: center;
`;
const StyledDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    margin-bottom: 8px;
    text-align: center;
`;
const StyledItemBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    text-align: center;
    margin-top: 16px;
`;
const StyledLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    width: 100px;
    border-bottom: 1px solid black;
`;
const StyledLineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;

const Line = () => __jsx(StyledLineWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, __jsx(StyledLine, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}));

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, itinerary.map(day => {
      const items = day.items.map(item => __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, item));
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, day.date), __jsx(StyledLocation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, day.location), __jsx(StyledItemBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, items), __jsx(Line, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }));
    }));
  }

}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthewgr/code/malmawed/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map