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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dateformat */ "dateformat");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_timeSince__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/timeSince */ "./src/timeSince.js");

var _jsxFileName = "/Users/matthewgr/code/malmawed/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const itinerary = [{
  date: 'Sunday, December 22',
  location: 'Vienna, Imperial Riding School Renaissance Hotel',
  img: '/imperialSchool.jpg',
  items: ["11:15 am - Carmen, Todd, Carolyn, Mike, Annie & Emma arrive in Vienna", "TBD - Katie arrives in Vienna", "Check into hotel: Imperial Riding School Renaissance", "Lunch - on your own", "Dinner - on your own"]
}, {
  date: 'Monday, December 23',
  location: 'Vienna, Imperial Riding School Renaissance Hotel',
  img: '/imperialSchool.jpg',
  items: ["Breakfast - on your own", 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Tuesday, December 24 (Christmas Eve)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  img: '/wyndham.jpg',
  items: ['Breakfast - on your own', 'Carmen, Todd, Katie, Carolyn, Mike, Annie, & Emma check out of Imperial Riding School Renaissance', 'Greens take train to Salzburg  (approx 2.5 hrs)', 'Check into hotel: Wyndham Grand Salzburg', 'Lunch - on your own', '1:40 pm - Joan, Trevor, & Julia arrive in Salzburg', '3:00 pm - Saccomannos to Silent Night Chapel Tour (anyone is welcome to book tickets)', '5:35 pm - Cynthia & Cory arrive in Salzburg', 'Dinner - on your own']
}, {
  date: 'Wednesday, December 25 (Christmas Day)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  img: '/wyndham.jpg',
  items: ['6:00 am - Emmy, James, Elliot, and Issac arrive in Munich', 'Breakfast: on your own', '8:30 am - Depart Wyndham Grand on tour bus', 'Lunch: group lunch in Unken', '6:00 pm - Return to the Wyndham Grand', 'Dinner: group Christmas dinner at Wyndham Grand']
}, {
  date: 'Thursday, December 26 (Wedding Rehearsal Day)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  img: '/stpeterfood.jpg',
  items: ['Breakfast: on your own', '8:45 am - Jeff, Kari, & Anna arrive in Vienna, travel to Salzburg', 'Lunch: on your own', 'Syd & Bart arrive in Salzburg', '4:00 pm - Wedding Rehearsal, dinner to follow at St. Peter Stiftskeller']
}, {
  date: 'Friday, December 27 (Matthew & Alma’s Wedding)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  img: '/stpeter.jpg',
  items: ['Breakfast - bridal party in bridal suite - Hotel Stein, everyone else on your own', '7 am - 12 pm - makeup & hair appointments', 'Lunch - bridal party in bridal suite - Hotel Stein, everyone else on your own', '2:00 pm - pictures - Hotel Sacher, carriage rides/cabs to venue afterwards', '5:00 pm - wedding ceremony - St. Peter Stiftskeller, Hayden Hall', 'Dinner at wedding reception - St. Peter Stiftskeller, Baroque Hall (childcare provided)']
}, {
  date: 'Saturday, December 28 (Katie’s 30th Birthday)',
  location: 'Salzburg: Wyndham Grand Salzburg',
  img: '/wyndham.jpg',
  items: ['Breakfast - on your own, Matthew & Alma may have an optional open house style brunch at Tomaselli', 'TBD - “kids” spa outing - Hotel Schloss Monchstein', 'Lunch - on your own', 'Dinner - group birthday dinner at Hotel Sacher restaurant, drinks to follow in Hotel Sacher lounge bar (cocktail/dressy attire)']
}, {
  date: 'Sunday, December 29',
  location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
  img: '/avalon.jpg',
  items: ['Breakfast - on your own', 'TBD - Carmen, Todd, Carolyn, Mike, Annie, Emma, Katie, James, Jeff, Kari, Anna, Joan, Trevor, and Julia check out of Wyndham Grand Salzburg', 'TBD - Train to Bad Reichenhall (approx. 30 min)', 'TBD - Check in to hotel: Avalon Hotel Bad Reichenhall', 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Monday, December 30',
  location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
  img: '/avalon.jpg',
  items: ['Breakfast - on your own', '10:50 am - Cynthia & Cory depart Salzburg for home', 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Tuesday, December 31',
  location: 'Bad Reichenhall: Avalon Hotel Bad Reichenhall',
  img: '/avalon.jpg',
  items: ['TBD - Emmy, James, Elliot, & Isaac depart Salzburg for Vienna', 'Breakfast - on your own', 'Lunch - on your own', 'Dinner - on your own']
}, {
  date: 'Wednesday, January 1',
  location: 'Vienna: Moxy Hotel',
  img: '/moxy.jpg',
  items: ['Breakfast - on your own', 'Lunch - on your own', 'TBD - Carmen, Todd, Carolyn, Mike, Annie, Emma, Katie, James, Jeff, Kari, Anna, Joan, Trevor, and Julia check out of Avalon Bad Reichenhall', 'TBD - Train to Vienna', 'Check into hotel: hotel near Vienna airport', 'Dinner - on your own (Emmy & James are also in Vienna this evening)']
}, {
  date: 'Thursday, January 2',
  location: 'Going home',
  img: '/lufthansa.jpg',
  items: ['6:15 am - Carmen, Todd, Carolyn, Mike, Annie, & Emma depart Vienna for home', '10:10 am - Jeff, Kari, & Anna depart Vienna for home', '10: 40 am - Joan, Trevor, & Julia depart Vienna for home']
}];
const StyledLocation = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    text-align: center;
`;
const StyledDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    margin-bottom: 8px;
    text-align: center;
`;
const StyledItemBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    text-align: start;
    margin-top: 16px;
`;
const StyledLine = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    width: 100px;
    border-bottom: 1px solid black;
`;
const StyledLineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;

const Line = () => __jsx(StyledLineWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, __jsx(StyledLine, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}));

const Flex = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display: flex;
    position: relative;
    ${({
  flexDirection
}) => flexDirection && `flex-direction: ${flexDirection}`}
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    margin-bottom: 12px;
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li`
    padding-bottom: 4px;
    font-weight: 600;
`;

const DisplayDay = ({
  dayObj
}) => {
  const items = dayObj.items.map(item => __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, item));
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, __jsx(StyledImg, {
    src: dayObj.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(StyledBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }), __jsx(DaySection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx(StyledDate, {
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, dayObj.date), __jsx(StyledLocation, {
    as: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, dayObj.location), __jsx(StyledItemBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, items))))));
};

const TodaySection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`

`;
const DaySection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    padding: 8px;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    position: absolute;
    background-color: white;
    border-radius: 5px;
    top: 0;
    left: 0;
    opacity: 0.65;
    width: 100%;
    height: 100%;
`;
const StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
    height: 400px;
    width: 100%;
    max-width: 900px;
    border-radius: 5px;
`;
const ToggleAll = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    height: 60px;
    width: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
const BottomBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    height: 80px;
    width: calc(100% - 16px);
    z-index: 100;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 7px #333;
`;
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    font-family: Open Sans; 
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
    height: 100%;
    width: 100px;
`;

const MistleToe = () => __jsx(Image, {
  src: "/mistletoe.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292
  },
  __self: undefined
});

const Bells = () => __jsx(Image, {
  src: "/bells.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296
  },
  __self: undefined
});

class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleClick", () => {
      this.setState(prev => ({
        showAll: !prev.showAll
      }));
    });

    this.state = {
      showAll: true
    }; // Dec 22 2019

    const daysFromStart = Object(_src_timeSince__WEBPACK_IMPORTED_MODULE_4__["default"])(1576972800000).days();
    this.todayObj = itinerary[daysFromStart];
    this.restOfIten = itinerary.slice(daysFromStart);
  }

  render() {
    const {
      showAll
    } = this.state;
    return __jsx(ContentWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, __jsx(BottomBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx(Bells, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }), __jsx(MistleToe, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }), __jsx(ToggleAll, {
      onClick: this.onToggleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, `${showAll ? 'Hide' : 'Show'} all`)), __jsx(MistleToe, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }), __jsx(Bells, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    })), !showAll && __jsx(TodaySection, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, __jsx(DisplayDay, {
      dayObj: this.todayObj,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    })), showAll && __jsx(Flex, {
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, this.restOfIten.map(day => __jsx(DisplayDay, {
      dayObj: day,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }))));
  }

}

/***/ }),

/***/ "./src/timeSince.js":
/*!**************************!*\
  !*** ./src/timeSince.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return since; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);

var MS_IN_SEC = 1000;
var MS_IN_MIN = MS_IN_SEC * 60;
var MS_IN_HOUR = MS_IN_MIN * 60;
var MS_IN_DAY = MS_IN_HOUR * 24;
var MS_IN_WEEK = MS_IN_DAY * 7;
function since(timestamp) {
  return {
    "millis": function () {
      return _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timestamp;
    },
    "secs": function () {
      return Math.floor((_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timestamp) / MS_IN_SEC);
    },
    "mins": function () {
      return Math.floor((_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timestamp) / MS_IN_MIN);
    },
    "hours": function () {
      return Math.floor((_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timestamp) / MS_IN_HOUR);
    },
    "days": function () {
      return Math.floor((_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timestamp) / MS_IN_DAY);
    },
    "weeks": function () {
      return Math.floor((_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timestamp) / MS_IN_WEEK);
    }
  };
}
;

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthewgr/code/malmawed/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

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