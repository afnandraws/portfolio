"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.module.css */ \"(app-pages-browser)/./components/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_selection_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/selection.context */ \"(app-pages-browser)/./src/context/selection.context.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Footer = ()=>{\n    _s();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_selection_context__WEBPACK_IMPORTED_MODULE_2__.SelectionContext);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mediaQuery1 = window.matchMedia(\"(max-width: 768px)\");\n        mediaQuery1.addEventListener(\"change\");\n        return ()=>mediaQuery1.removeEventListener(\"change\", handleChange);\n    }, []);\n    function selectionHandler(event) {\n        console.log(event.currentTarget.id);\n        dispatch({\n            type: event.currentTarget.id\n        });\n    }\n    function toggleOpen() {\n        setIsOpen((prev)=>!prev);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isOpen ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: state.page === \"Projects\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                        onClick: selectionHandler,\n                        id: \"Projects\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: state.page === \"Experience\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                        onClick: selectionHandler,\n                        id: \"Experience\",\n                        children: \"Experience\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: state.page === \"About\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                        onClick: selectionHandler,\n                        id: \"About\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: state.page === \"Socials\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                        onClick: selectionHandler,\n                        id: \"Socials\",\n                        children: \"Socials\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined),\n            mediaQuery.matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().toggle),\n                onClick: toggleOpen,\n                children: isOpen ? \"Close\" : \"Menu\"\n            }, void 0, false, {\n                fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                lineNumber: 67,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: state.page === \"Projects\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                    onClick: selectionHandler,\n                    id: \"Projects\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: state.page === \"Experience\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                    onClick: selectionHandler,\n                    id: \"Experience\",\n                    children: \"Experience\"\n                }, void 0, false, {\n                    fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: state.page === \"About\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                    onClick: selectionHandler,\n                    id: \"About\",\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: state.page === \"Socials\" ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().unselected),\n                    onClick: selectionHandler,\n                    id: \"Socials\",\n                    children: \"Socials\"\n                }, void 0, false, {\n                    fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n            lineNumber: 76,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/afnankhan/Documents/Coding/portfolio/components/Footer.tsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Footer, \"dlFoogS+qCqwQJmTWPevJLWSQdA=\");\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFd0Q7QUFDZjtBQUNzQjtBQUUvRCxNQUFNSyxTQUFTOztJQUNkLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsaURBQVVBLENBQUNJLHdFQUFnQkE7SUFDdkQsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNULE1BQU1TLGNBQWFDLE9BQU9DLFVBQVUsQ0FBQztRQUVyQ0YsWUFBV0csZ0JBQWdCLENBQUM7UUFFNUIsT0FBTyxJQUFNSCxZQUFXSSxtQkFBbUIsQ0FBQyxVQUFVQztJQUN2RCxHQUFHLEVBQUU7SUFFTCxTQUFTQyxpQkFBaUJDLEtBQW9DO1FBQzdEQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLGFBQWEsQ0FBQ0MsRUFBRTtRQUNsQ2QsU0FBUztZQUFFZSxNQUFNTCxNQUFNRyxhQUFhLENBQUNDLEVBQUU7UUFBQztJQUN6QztJQUVBLFNBQVNFO1FBQ1JkLFVBQVUsQ0FBQ2UsT0FBUyxDQUFDQTtJQUN0QjtJQUVBLHFCQUNDLDhEQUFDQztRQUFPQyxXQUFXdkIsa0VBQWE7OzBCQUMvQiw4REFBQ3dCO2dCQUFJRCxXQUFXbEIsU0FBU0wsZ0VBQVcsR0FBRzs7b0JBQ3JDO2tDQUNELDhEQUFDMEI7d0JBQ0FILFdBQ0NwQixNQUFNd0IsSUFBSSxLQUFLLGFBQWEzQixvRUFBZSxHQUFHQSxzRUFBaUI7d0JBRWhFOEIsU0FBU2pCO3dCQUNUSyxJQUFHO2tDQUFXOzs7Ozs7a0NBR2YsOERBQUNRO3dCQUNBSCxXQUNDcEIsTUFBTXdCLElBQUksS0FBSyxlQUFlM0Isb0VBQWUsR0FBR0Esc0VBQWlCO3dCQUVsRThCLFNBQVNqQjt3QkFDVEssSUFBRztrQ0FBYTs7Ozs7O2tDQUdqQiw4REFBQ1E7d0JBQ0FILFdBQ0NwQixNQUFNd0IsSUFBSSxLQUFLLFVBQVUzQixvRUFBZSxHQUFHQSxzRUFBaUI7d0JBRTdEOEIsU0FBU2pCO3dCQUNUSyxJQUFHO2tDQUFROzs7Ozs7a0NBR1osOERBQUNRO3dCQUNBSCxXQUNDcEIsTUFBTXdCLElBQUksS0FBSyxZQUFZM0Isb0VBQWUsR0FBR0Esc0VBQWlCO3dCQUUvRDhCLFNBQVNqQjt3QkFDVEssSUFBRztrQ0FBVTs7Ozs7Ozs7Ozs7O1lBS2RYLFdBQVd3QixPQUFPLGtCQUNsQiw4REFBQ0w7Z0JBQU9ILFdBQVd2QixrRUFBYTtnQkFBRThCLFNBQVNWOzBCQUN6Q2YsU0FBUyxVQUFVOzs7Ozs7Ozs7Ozs7SUFNeEIscUJBQ0MsOERBQUNpQjtRQUFPQyxXQUFXdkIsa0VBQWE7a0JBQy9CLDRFQUFDd0I7OzhCQUNBLDhEQUFDRTtvQkFDQUgsV0FDQ3BCLE1BQU13QixJQUFJLEtBQUssYUFBYTNCLG9FQUFlLEdBQUdBLHNFQUFpQjtvQkFFaEU4QixTQUFTakI7b0JBQ1RLLElBQUc7OEJBQVc7Ozs7Ozs4QkFHZiw4REFBQ1E7b0JBQ0FILFdBQ0NwQixNQUFNd0IsSUFBSSxLQUFLLGVBQWUzQixvRUFBZSxHQUFHQSxzRUFBaUI7b0JBRWxFOEIsU0FBU2pCO29CQUNUSyxJQUFHOzhCQUFhOzs7Ozs7OEJBR2pCLDhEQUFDUTtvQkFDQUgsV0FDQ3BCLE1BQU13QixJQUFJLEtBQUssVUFBVTNCLG9FQUFlLEdBQUdBLHNFQUFpQjtvQkFFN0Q4QixTQUFTakI7b0JBQ1RLLElBQUc7OEJBQVE7Ozs7Ozs4QkFHWiw4REFBQ1E7b0JBQ0FILFdBQ0NwQixNQUFNd0IsSUFBSSxLQUFLLFlBQVkzQixvRUFBZSxHQUFHQSxzRUFBaUI7b0JBRS9EOEIsU0FBU2pCO29CQUNUSyxJQUFHOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQXpHTWhCO0tBQUFBO0FBMkdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeD9hNzlmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Zvb3Rlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb25Db250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9zZWxlY3Rpb24uY29udGV4dFwiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFNlbGVjdGlvbkNvbnRleHQpO1xuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY4cHgpXCIpO1xuXG5cdFx0bWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIpO1xuXG5cdFx0cmV0dXJuICgpID0+IG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDaGFuZ2UpO1xuXHR9LCBbXSk7XG5cblx0ZnVuY3Rpb24gc2VsZWN0aW9uSGFuZGxlcihldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pIHtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcblx0XHRkaXNwYXRjaCh7IHR5cGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgfSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVPcGVuKCkge1xuXHRcdHNldElzT3BlbigocHJldikgPT4gIXByZXYpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17aXNPcGVuID8gc3R5bGVzLm9wZW4gOiBcIlwifT5cblx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiUHJvamVjdHNcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IHN0eWxlcy51bnNlbGVjdGVkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3NlbGVjdGlvbkhhbmRsZXJ9XG5cdFx0XHRcdFx0aWQ9XCJQcm9qZWN0c1wiPlxuXHRcdFx0XHRcdFByb2plY3RzXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiRXhwZXJpZW5jZVwiID8gc3R5bGVzLnNlbGVjdGVkIDogc3R5bGVzLnVuc2VsZWN0ZWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17c2VsZWN0aW9uSGFuZGxlcn1cblx0XHRcdFx0XHRpZD1cIkV4cGVyaWVuY2VcIj5cblx0XHRcdFx0XHRFeHBlcmllbmNlXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiQWJvdXRcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IHN0eWxlcy51bnNlbGVjdGVkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3NlbGVjdGlvbkhhbmRsZXJ9XG5cdFx0XHRcdFx0aWQ9XCJBYm91dFwiPlxuXHRcdFx0XHRcdEFib3V0XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiU29jaWFsc1wiID8gc3R5bGVzLnNlbGVjdGVkIDogc3R5bGVzLnVuc2VsZWN0ZWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17c2VsZWN0aW9uSGFuZGxlcn1cblx0XHRcdFx0XHRpZD1cIlNvY2lhbHNcIj5cblx0XHRcdFx0XHRTb2NpYWxzXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHttZWRpYVF1ZXJ5Lm1hdGNoZXMgJiYgKFxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZX0gb25DbGljaz17dG9nZ2xlT3Blbn0+XG5cdFx0XHRcdFx0e2lzT3BlbiA/IFwiQ2xvc2VcIiA6IFwiTWVudVwifVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdCl9XG5cdFx0PC9mb290ZXI+XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiUHJvamVjdHNcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IHN0eWxlcy51bnNlbGVjdGVkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3NlbGVjdGlvbkhhbmRsZXJ9XG5cdFx0XHRcdFx0aWQ9XCJQcm9qZWN0c1wiPlxuXHRcdFx0XHRcdFByb2plY3RzXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiRXhwZXJpZW5jZVwiID8gc3R5bGVzLnNlbGVjdGVkIDogc3R5bGVzLnVuc2VsZWN0ZWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17c2VsZWN0aW9uSGFuZGxlcn1cblx0XHRcdFx0XHRpZD1cIkV4cGVyaWVuY2VcIj5cblx0XHRcdFx0XHRFeHBlcmllbmNlXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiQWJvdXRcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IHN0eWxlcy51bnNlbGVjdGVkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3NlbGVjdGlvbkhhbmRsZXJ9XG5cdFx0XHRcdFx0aWQ9XCJBYm91dFwiPlxuXHRcdFx0XHRcdEFib3V0XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHN0YXRlLnBhZ2UgPT09IFwiU29jaWFsc1wiID8gc3R5bGVzLnNlbGVjdGVkIDogc3R5bGVzLnVuc2VsZWN0ZWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DbGljaz17c2VsZWN0aW9uSGFuZGxlcn1cblx0XHRcdFx0XHRpZD1cIlNvY2lhbHNcIj5cblx0XHRcdFx0XHRTb2NpYWxzXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb290ZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2VsZWN0aW9uQ29udGV4dCIsIkZvb3RlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2hhbmdlIiwic2VsZWN0aW9uSGFuZGxlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInR5cGUiLCJ0b2dnbGVPcGVuIiwicHJldiIsImZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsIm9wZW4iLCJidXR0b24iLCJwYWdlIiwic2VsZWN0ZWQiLCJ1bnNlbGVjdGVkIiwib25DbGljayIsIm1hdGNoZXMiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Footer.tsx\n"));

/***/ })

});