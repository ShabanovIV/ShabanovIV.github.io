"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[349],{"./src/components/GenericList/GenericList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GenericListOperationListStory:()=>GenericListOperationListStory,GenericListOperationSummaryListStory:()=>GenericListOperationSummaryListStory,GenericListProductSummaryListStory:()=>GenericListProductSummaryListStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GenericList_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),GenericList_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/GenericList/GenericList.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(GenericList_module.Z,options);const GenericList_GenericList_module=GenericList_module.Z&&GenericList_module.Z.locals?GenericList_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GenericList=function GenericList(_ref){var isGrid=_ref.isGrid,items=_ref.items;return(0,jsx_runtime.jsx)("ul",{className:"".concat(GenericList_GenericList_module.list," ").concat(isGrid?GenericList_GenericList_module.listGrid:""),children:items.map((function(item){return(0,jsx_runtime.jsx)("li",{className:GenericList_GenericList_module.listItem,children:item.createComponent()},item.key)}))})};GenericList.displayName="GenericList";try{GenericList.displayName="GenericList",GenericList.__docgenInfo={description:"",displayName:"GenericList",props:{isGrid:{defaultValue:null,description:"",name:"isGrid",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GenericList/GenericList.tsx#GenericList"]={docgenInfo:GenericList.__docgenInfo,name:"GenericList",path:"src/components/GenericList/GenericList.tsx#GenericList"})}catch(__react_docgen_typescript_loader_error){}var GenericListItemFactory=__webpack_require__("./src/components/Helpers/GenericListItemFactory.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const GenericList_stories={title:"components/GenericList",component:GenericList};var GenericListProductSummaryListStory={render:function render(){var args={isGrid:!0,items:(0,GenericListItemFactory.BL)(5,GenericListItemFactory.wR)};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(GenericList,_objectSpread({},args))})}},GenericListOperationListStory={render:function render(){var args={isGrid:!1,items:(0,GenericListItemFactory.BL)(20,GenericListItemFactory.zi)};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(GenericList,_objectSpread({},args))})}},GenericListOperationSummaryListStory={render:function render(){var args={isGrid:!1,items:(0,GenericListItemFactory.BL)(20,GenericListItemFactory.Y5)};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(GenericList,_objectSpread({},args))})}};GenericListProductSummaryListStory.parameters={...GenericListProductSummaryListStory.parameters,docs:{...GenericListProductSummaryListStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      isGrid: true,\n      items: createCollection(5, createProductSummary)\n    };\n    return <>\n        <GenericList {...args} />\n      </>;\n  }\n}",...GenericListProductSummaryListStory.parameters?.docs?.source}}},GenericListOperationListStory.parameters={...GenericListOperationListStory.parameters,docs:{...GenericListOperationListStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      isGrid: false,\n      items: createCollection(20, createOperation)\n    };\n    return <>\n        <GenericList {...args} />\n      </>;\n  }\n}",...GenericListOperationListStory.parameters?.docs?.source}}},GenericListOperationSummaryListStory.parameters={...GenericListOperationSummaryListStory.parameters,docs:{...GenericListOperationSummaryListStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      isGrid: false,\n      items: createCollection(20, createOperationSummary)\n    };\n    return <>\n        <GenericList {...args} />\n      </>;\n  }\n}",...GenericListOperationSummaryListStory.parameters?.docs?.source}}};const __namedExportsOrder=["GenericListProductSummaryListStory","GenericListOperationListStory","GenericListOperationSummaryListStory"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/GenericList/GenericList.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ZKoL84k6h5ZndIcy4bbh{background-color:rgba(0,0,0,0);list-style:none;padding:0;margin:0;display:flex;flex-direction:column;align-items:stretch}.VkF20piUhTzdB0YRLI5w{background-color:rgba(0,0,0,0);display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));grid-auto-rows:500px;gap:20px;justify-content:center}.Oy2IqKQ0SAE3JT3sHpLh{background-color:rgba(0,0,0,0);margin-bottom:5px}.Oy2IqKQ0SAE3JT3sHpLh:nth-child(odd){animation:LLmU3AuzRmioCxaEFa0K .5s ease-in-out}.Oy2IqKQ0SAE3JT3sHpLh:nth-child(even){animation:LLmU3AuzRmioCxaEFa0K 1s ease-in-out}@keyframes LLmU3AuzRmioCxaEFa0K{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}","",{version:3,sources:["webpack://./src/components/GenericList/GenericList.module.scss"],names:[],mappings:"AAAA,sBACE,8BAAA,CACA,eAAA,CACA,SAAA,CACA,QAAA,CACA,YAAA,CACA,qBAAA,CACA,mBAAA,CAGF,sBACE,8BAAA,CACA,YAAA,CACA,0DAAA,CACA,oBAAA,CACA,QAAA,CACA,sBAAA,CAGF,sBACE,8BAAA,CACA,iBAAA,CAEA,qCACE,8CAAA,CAEF,sCACE,6CAAA,CAIJ,gCACE,KACE,SAAA,CACA,0BAAA,CAEF,GACE,SAAA,CACA,uBAAA,CAAA",sourcesContent:[".list {\n  background-color: transparent;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.listGrid {\n  background-color: transparent;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: 500px;\n  gap: 20px;\n  justify-content: center;\n}\n\n.listItem {\n  background-color: transparent;\n  margin-bottom: 5px;\n\n  &:nth-child(odd) {\n    animation: fadeIn 0.5s ease-in-out;\n  }\n  &:nth-child(even) {\n    animation: fadeIn 1s ease-in-out;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={list:"ZKoL84k6h5ZndIcy4bbh",listGrid:"VkF20piUhTzdB0YRLI5w",listItem:"Oy2IqKQ0SAE3JT3sHpLh",fadeIn:"LLmU3AuzRmioCxaEFa0K"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);