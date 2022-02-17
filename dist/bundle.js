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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://odin-todo/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://odin-todo/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"daysInWeek\": () => (/* binding */ daysInWeek),\n/* harmony export */   \"maxTime\": () => (/* binding */ maxTime),\n/* harmony export */   \"millisecondsInMinute\": () => (/* binding */ millisecondsInMinute),\n/* harmony export */   \"millisecondsInHour\": () => (/* binding */ millisecondsInHour),\n/* harmony export */   \"millisecondsInSecond\": () => (/* binding */ millisecondsInSecond),\n/* harmony export */   \"minTime\": () => (/* binding */ minTime),\n/* harmony export */   \"minutesInHour\": () => (/* binding */ minutesInHour),\n/* harmony export */   \"monthsInQuarter\": () => (/* binding */ monthsInQuarter),\n/* harmony export */   \"monthsInYear\": () => (/* binding */ monthsInYear),\n/* harmony export */   \"quartersInYear\": () => (/* binding */ quartersInYear),\n/* harmony export */   \"secondsInHour\": () => (/* binding */ secondsInHour),\n/* harmony export */   \"secondsInMinute\": () => (/* binding */ secondsInMinute)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInMinute = 60000;\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInHour = 3600000;\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInSecond = 1000;\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar minTime = -maxTime;\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar minutesInHour = 60;\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInQuarter = 3;\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInYear = 12;\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar quartersInYear = 4;\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInHour = 3600;\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMinute = 60;\n\n//# sourceURL=webpack://odin-todo/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * - The previous `parse` implementation was renamed to `parseISO`.\n *\n *   ```javascript\n *   // Before v2.0.0\n *   parse('2016-01-01')\n *\n *   // v2.0.0 onward\n *   parseISO('2016-01-01')\n *   ```\n *\n * - `parseISO` now validates separate date and time values in ISO-8601 strings\n *   and returns `Invalid Date` if the date is invalid.\n *\n *   ```javascript\n *   parseISO('2018-13-32')\n *   //=> Invalid Date\n *   ```\n *\n * - `parseISO` now doesn't fall back to `new Date` constructor\n *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.\n *\n * @param {String} argument - the value to convert\n * @param {Object} [options] - an object with options.\n * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\n\nfunction parseISO(argument, dirtyOptions) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var options = dirtyOptions || {};\n  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.additionalDigits);\n\n  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {\n    throw new RangeError('additionalDigits must be 0, 1 or 2');\n  }\n\n  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {\n    return new Date(NaN);\n  }\n\n  var dateStrings = splitDateString(argument);\n  var date;\n\n  if (dateStrings.date) {\n    var parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n\n  if (!date || isNaN(date.getTime())) {\n    return new Date(NaN);\n  }\n\n  var timestamp = date.getTime();\n  var time = 0;\n  var offset;\n\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n\n    if (isNaN(time)) {\n      return new Date(NaN);\n    }\n  }\n\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n\n    if (isNaN(offset)) {\n      return new Date(NaN);\n    }\n  } else {\n    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone\n    // but we need it to be parsed in our timezone\n    // so we use utc values to build date in our timezone.\n    // Year values from 0 to 99 map to the years 1900 to 1999\n    // so set year explicitly with setFullYear.\n\n    var result = new Date(0);\n    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());\n    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());\n    return result;\n  }\n\n  return new Date(timestamp + time + offset);\n}\nvar patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/\n};\nvar dateRegex = /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nvar timeRegex = /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nvar timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\n\nfunction splitDateString(dateString) {\n  var dateStrings = {};\n  var array = dateString.split(patterns.dateTimeDelimiter);\n  var timeString; // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n\n  if (array.length > 2) {\n    return dateStrings;\n  }\n\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(dateStrings.date.length, dateString.length);\n    }\n  }\n\n  if (timeString) {\n    var token = patterns.timezone.exec(timeString);\n\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '');\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n\n  return dateStrings;\n}\n\nfunction parseYear(dateString, additionalDigits) {\n  var regex = new RegExp('^(?:(\\\\d{4}|[+-]\\\\d{' + (4 + additionalDigits) + '})|(\\\\d{2}|[+-]\\\\d{' + (2 + additionalDigits) + '})$)');\n  var captures = dateString.match(regex); // Invalid ISO-formatted year\n\n  if (!captures) return {\n    year: NaN,\n    restDateString: ''\n  };\n  var year = captures[1] ? parseInt(captures[1]) : null;\n  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both\n\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length)\n  };\n}\n\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string\n\n  if (!captures) return new Date(NaN);\n  var isWeekDate = !!captures[4];\n  var dayOfYear = parseDateUnit(captures[1]);\n  var month = parseDateUnit(captures[2]) - 1;\n  var day = parseDateUnit(captures[3]);\n  var week = parseDateUnit(captures[4]);\n  var dayOfWeek = parseDateUnit(captures[5]) - 1;\n\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    var date = new Date(0);\n\n    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {\n      return new Date(NaN);\n    }\n\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\n\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\n\nfunction parseTime(timeString) {\n  var captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  var hours = parseTimeUnit(captures[1]);\n  var minutes = parseTimeUnit(captures[2]);\n  var seconds = parseTimeUnit(captures[3]);\n\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n\n  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;\n}\n\nfunction parseTimeUnit(value) {\n  return value && parseFloat(value.replace(',', '.')) || 0;\n}\n\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === 'Z') return 0;\n  var captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n  var sign = captures[1] === '+' ? -1 : 1;\n  var hours = parseInt(captures[2]);\n  var minutes = captures[3] && parseInt(captures[3]) || 0;\n\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n\n  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\n\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  var date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  var fourthOfJanuaryDay = date.getUTCDay() || 7;\n  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n} // Validation functions\n// February is null to handle the leap year (using ||)\n\n\nvar daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;\n}\n\nfunction validateDate(year, month, date) {\n  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));\n}\n\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\n\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\n\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n\n  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;\n}\n\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n//# sourceURL=webpack://odin-todo/./node_modules/date-fns/esm/parseISO/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/parseISO/index.js\");\n/* harmony import */ var _assets_checked_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/checked.png */ \"./src/assets/checked.png\");\n/* harmony import */ var _assets_unchecked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/unchecked.png */ \"./src/assets/unchecked.png\");\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n\n\n\n\n\n\nlet myLists = [];\nlet focusList = 0;\nlet loadingModuleUsedLast = undefined;\n\nfunction Todo(title, description, dueDate, priority, notes, checkList, markedForDeletion) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checkList = checkList;\n    this.markedForDeletion = markedForDeletion;\n}\n\nfunction List(todos, color, listName) {\n    this.todos = todos;\n    this.color = color;\n    this.listName = listName;\n}\n\nfunction AddSamples() {\n    myLists[0] = new List([], 'red', 'Default');\n    AddNewTodo('Do the dishes', `In the dishwasher`, new Date(2022, 1, 20), '8', 'none', false, false);\n    AddNewTodo('Learn JavaScript', 'and React', new Date(2022, 1, 22), '10', 'none', false, false);\n    AddNewTodo('Cook bulgogi', 'with soju', new Date(2022, 1, 22), '6', 'none', false, false);\n    // months in JavaScript are indexed 0-11; must account for this later\n    localStorage.setItem(\"myLists\", JSON.stringify(myLists));\n    //todo\n}\n\nfunction LoadPage() {\n    LoadSideBar();\n    LoadTodos();\n}\n\nfunction LoadTodos() {\n    let todosarea = document.getElementById('todos');\n    todosarea.innerHTML = \"&nbsp;\"\n    for (let i = 0; i < myLists[focusList].todos.length; i++) {\n        let thisTodo = document.createElement('div');\n        thisTodo.innerHTML = `Title: ${myLists[focusList].todos[i].title}. Description: ${myLists[focusList].todos[i].description}. Due date: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myLists[focusList].todos[i].dueDate).toLocaleDateString()}. Priority: ${myLists[focusList].todos[i].priority}. Notes: ${myLists[focusList].todos[i].notes}.`;\n        let thisIcon = document.createElement('img');\n        if (myLists[focusList].todos[i].checkList === false) {\n            thisIcon.src = _assets_unchecked_png__WEBPACK_IMPORTED_MODULE_1__;\n        }\n        else if (myLists[focusList].todos[i].checkList === true) {\n            thisIcon.src = _assets_checked_png__WEBPACK_IMPORTED_MODULE_0__;\n        }\n        thisIcon.classList.add('icon');\n        thisIcon.setAttribute('onclick', `ToggleChecked(${focusList}, ${i})`);\n        let DeleteIcon = document.createElement('img'); \n        DeleteIcon.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_2__;\n        DeleteIcon.classList.add('icon'); \n        DeleteIcon.style.cursor = 'pointer';\n        DeleteIcon.setAttribute('onclick', `DeleteTodo(${focusList}, ${i})`); \n        let thisElement = document.createElement('div');\n        thisElement.appendChild(thisIcon);\n        thisElement.appendChild(DeleteIcon); \n        thisElement.appendChild(thisTodo);\n        thisElement.classList.add('listitem');\n        todosarea.appendChild(thisElement);\n    }\n    loadingModuleUsedLast = 'LoadTodos';\n}\n\nfunction LoadSideBar() {\n    let sidebar = document.getElementById('sidebardynamic');\n    sidebar.innerHTML = \"&nbsp;\";\n    for (let i = 0; i < myLists.length; i++) {\n        let thisList = document.createElement('div');\n        thisList.innerHTML = `${myLists[i].listName}`;\n        thisList.classList.add('sidebaritem');\n        thisList.setAttribute(\"onclick\", `SwitchLists(${i});`);\n        sidebar.appendChild(thisList);\n    }\n}\n\nfunction AddNewTodo(title, description, dueDate, priority, notes, checkList, markedForDeletion) {\n    myLists[focusList].todos[myLists[focusList].todos.length] = new Todo(title, description, dueDate.toISOString(), priority, notes, checkList, markedForDeletion);\n    localStorage.setItem(\"myLists\", JSON.stringify(myLists));\n}\n\nfunction AddNewList(todos, color, listName) {\n    myLists[myLists.length] = new List(todos, color, listName);\n    localStorage.setItem(\"myLists\", JSON.stringify(myLists));\n}\n\nfunction SwitchLists(index) {\n    focusList = index;\n    LoadTodos();\n}\nwindow.SwitchLists = SwitchLists;\n\nfunction ToggleChecked(index1, index2) {\n    if (myLists[index1].todos[index2].checkList === true) {\n        myLists[index1].todos[index2].checkList = false;\n    }\n    else if (myLists[index1].todos[index2].checkList === false) {\n        myLists[index1].todos[index2].checkList = true;\n    }\n    localStorage.setItem(\"myLists\", JSON.stringify(myLists));\n    if (loadingModuleUsedLast === 'ShowAllTodos') {\n        ShowAllTodos();\n    }\n    else if (loadingModuleUsedLast === 'LoadTodos') {\n        LoadTodos();\n    }\n}\nwindow.ToggleChecked = ToggleChecked;\n\nfunction DeleteTodo(index1, index2) {\n    myLists[index1].todos.splice(index2, 1);\n    localStorage.setItem(\"myLists\", JSON.stringify(myLists));\n    if (loadingModuleUsedLast === 'ShowAllTodos') {\n        ShowAllTodos();\n    }\n    else if (loadingModuleUsedLast === 'LoadTodos') {\n        LoadTodos();\n    }\n    //todo\n}\nwindow.DeleteTodo = DeleteTodo;\n\nfunction ShowAllTodos() {\n    let todosarea = document.getElementById('todos');\n    todosarea.innerHTML = \"&nbsp;\"\n    for (let i = 0; i < myLists.length; i++) {\n        for (let j = 0; j < myLists[i].todos.length; j++) {\n            let thisTodo = document.createElement('div');\n            thisTodo.innerHTML = `In list: ${myLists[i].listName}. Title: ${myLists[i].todos[j].title}. Description: ${myLists[i].todos[j].description}. Due date: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myLists[i].todos[j].dueDate).toLocaleDateString()}. Priority: ${myLists[i].todos[j].priority}. Notes: ${myLists[i].todos[j].notes}.`;\n            let thisIcon = document.createElement('img');\n            if (myLists[i].todos[j].checkList === false) {\n                thisIcon.src = _assets_unchecked_png__WEBPACK_IMPORTED_MODULE_1__;\n            }\n            else if (myLists[i].todos[j].checkList === true) {\n                thisIcon.src = _assets_checked_png__WEBPACK_IMPORTED_MODULE_0__;\n            }\n            thisIcon.classList.add('icon');\n            thisIcon.setAttribute('onclick', `ToggleChecked(${i}, ${j})`);\n            let DeleteIcon = document.createElement('img'); \n            DeleteIcon.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_2__;\n            DeleteIcon.classList.add('icon'); \n            DeleteIcon.style.cursor = 'pointer';\n            DeleteIcon.setAttribute('onclick', `DeleteTodo(${i}, ${j})`); \n            let thisElement = document.createElement('div');\n            thisElement.appendChild(thisIcon);\n            thisElement.appendChild(DeleteIcon);\n            thisElement.appendChild(thisTodo);\n            thisElement.classList.add('listitem');\n            todosarea.appendChild(thisElement);\n        }\n    }\n    loadingModuleUsedLast = 'ShowAllTodos';\n}\nwindow.ShowAllTodos = ShowAllTodos;\n\nif (localStorage.getItem(\"myLists\") === null) {\n    AddSamples();\n    LoadPage();\n}\nelse {\n    myLists = JSON.parse(localStorage.getItem(\"myLists\")).slice();\n    LoadPage();\n}\n\nfunction newListForDebugPurposes() {\n    AddNewList([], 'red', 'anylist'); focusList = 1; AddNewTodo('oi', 'sim sou eu', new Date(2022, 8, 9), '10', 'empty', false, false); focusList = 0; LoadSideBar();\n}\nwindow.newListForDebugPurposes = newListForDebugPurposes;\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/assets/checked.png":
/*!********************************!*\
  !*** ./src/assets/checked.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8806c9952db34daf1af.png\";\n\n//# sourceURL=webpack://odin-todo/./src/assets/checked.png?");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"406326c5d7d848369881.png\";\n\n//# sourceURL=webpack://odin-todo/./src/assets/delete.png?");

/***/ }),

/***/ "./src/assets/unchecked.png":
/*!**********************************!*\
  !*** ./src/assets/unchecked.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31962ae2cdc59187458c.png\";\n\n//# sourceURL=webpack://odin-todo/./src/assets/unchecked.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;