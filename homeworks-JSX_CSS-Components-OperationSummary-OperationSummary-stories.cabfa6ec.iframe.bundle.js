"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[668],{"./src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OperationSummaryLargeDescriptionStory:()=>OperationSummaryLargeDescriptionStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationSummary_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OperationSummary_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OperationSummary_module.Z,options);const OperationSummary_OperationSummary_module=OperationSummary_module.Z&&OperationSummary_module.Z.locals?OperationSummary_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OperationSummary=function OperationSummary(_ref){var amount=_ref.amount,category=_ref.category,title=_ref.title,description=_ref.description,truncateDescription=description.length>50?description.slice(0,50)+"...":description;return(0,jsx_runtime.jsxs)("div",{className:OperationSummary_OperationSummary_module.operationSummary,children:[(0,jsx_runtime.jsx)("h3",{children:title}),(0,jsx_runtime.jsxs)("p",{children:["Категория: ",category]}),(0,jsx_runtime.jsxs)("p",{children:["Сумма: ",amount," ₽"]}),(0,jsx_runtime.jsxs)("p",{title:description,children:["Описание: ",truncateDescription]})]})};OperationSummary.displayName="OperationSummary";const OperationSummary_OperationSummary=OperationSummary;try{OperationSummary.displayName="OperationSummary",OperationSummary.__docgenInfo={description:"",displayName:"OperationSummary",props:{amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"number"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.tsx#OperationSummary"]={docgenInfo:OperationSummary.__docgenInfo,name:"OperationSummary",path:"src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.tsx#OperationSummary"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const OperationSummary_stories={title:"Homework/JSX_CSS/OperationSummary",component:OperationSummary_OperationSummary};var OperationSummaryLargeDescriptionStory={render:function render(){var description="Покупка канцелярских товаров для офиса — ручки, блокноты и стикеры. Обеспечение рабочей зоны необходимыми мелочами для комфортной работы.",args={title:"Покупка",category:"Канцелярия",amount:10,description};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("p",{children:["Полный текст описания: ",description]})}),(0,jsx_runtime.jsx)(OperationSummary_OperationSummary,_objectSpread({},args))]})}};OperationSummaryLargeDescriptionStory.parameters={...OperationSummaryLargeDescriptionStory.parameters,docs:{...OperationSummaryLargeDescriptionStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const description = 'Покупка канцелярских товаров для офиса — ручки, блокноты и стикеры. Обеспечение рабочей зоны необходимыми мелочами для комфортной работы.';\n    const args: OperationSummaryProps = {\n      title: 'Покупка',\n      category: 'Канцелярия',\n      amount: 10,\n      description: description\n    };\n    return <>\n        <div>\n          <p>Полный текст описания: {description}</p>\n        </div>\n        <OperationSummary {...args} />\n      </>;\n  }\n}",...OperationSummaryLargeDescriptionStory.parameters?.docs?.source}}};const __namedExportsOrder=["OperationSummaryLargeDescriptionStory"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".fOclrnPDgMOXQM7ATcv0{background-color:var(--myApp-background-color);color:var(--myApp-text-color);width:300px;min-height:200px;position:relative;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:4px 4px 10px rgba(0,0,0,.6);border-radius:8px}","",{version:3,sources:["webpack://./src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.module.scss"],names:[],mappings:"AAAA,sBACE,8CAAA,CACA,6BAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,sCAAA,CACA,iBAAA",sourcesContent:[".operationSummary {\n  background-color: var(--myApp-background-color); // from theme\n  color: var(--myApp-text-color); // from theme\n  width: 300px;\n  min-height: 200px;\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);\n  border-radius: 8px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={operationSummary:"fOclrnPDgMOXQM7ATcv0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);