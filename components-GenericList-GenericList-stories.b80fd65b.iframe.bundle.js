"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[349],{"./src/components/GenericList/GenericList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GenericListOperationLazyLoadStory:()=>GenericListOperationLazyLoadStory,GenericListOperationListStory:()=>GenericListOperationListStory,GenericListOperationSummaryListStory:()=>GenericListOperationSummaryListStory,GenericListProductSummaryLazyLoadStory:()=>GenericListProductSummaryLazyLoadStory,GenericListProductSummaryListStory:()=>GenericListProductSummaryListStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_GenericList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/GenericList/GenericList.tsx"),_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Helpers/GenericListItemFactory.ts"),_GenericListObserver__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/GenericList/GenericListObserver.tsx"),_ui_TextButton_TextButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/TextButton/TextButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"components/GenericList",component:_GenericList__WEBPACK_IMPORTED_MODULE_1__.p};var fetchProducts=function fetchProducts(){return(0,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.BL)(20,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.wR)},fetchOperations=function fetchOperations(){return(0,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.BL)(20,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.zi)},GenericListLazyLoadStory=function GenericListLazyLoadStory(_ref){var isGrid=_ref.isGrid,fetchItems=_ref.fetchItems,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isGrid),2),isGridStore=_useState2[0],setIsGrid=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_TextButton_TextButton__WEBPACK_IMPORTED_MODULE_4__.A,{text:"Использовать сетку: ".concat(isGridStore),borderVisible:!1,borderRounded:!0,maxTextLength:1/0,handleClick:function handleChange(){setIsGrid((function(prevIsGridStore){return!prevIsGridStore}))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GenericListObserver__WEBPACK_IMPORTED_MODULE_3__.Z,{isGrid:isGridStore,fetchItems})]})};GenericListLazyLoadStory.displayName="GenericListLazyLoadStory";var GenericListProductSummaryLazyLoadStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GenericListLazyLoadStory,{isGrid:!0,fetchItems:fetchProducts})}},GenericListOperationLazyLoadStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GenericListLazyLoadStory,{isGrid:!1,fetchItems:fetchOperations})}},GenericListProductSummaryListStory={render:function render(){var args={isGrid:!0,items:(0,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.BL)(5,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.wR)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GenericList__WEBPACK_IMPORTED_MODULE_1__.p,_objectSpread({},args))})}},GenericListOperationListStory={render:function render(){var args={isGrid:!1,items:(0,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.BL)(20,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.zi)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GenericList__WEBPACK_IMPORTED_MODULE_1__.p,_objectSpread({},args))})}},GenericListOperationSummaryListStory={render:function render(){var args={isGrid:!1,items:(0,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.BL)(20,_Helpers_GenericListItemFactory__WEBPACK_IMPORTED_MODULE_2__.Y5)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GenericList__WEBPACK_IMPORTED_MODULE_1__.p,_objectSpread({},args))})}};GenericListProductSummaryLazyLoadStory.parameters={...GenericListProductSummaryLazyLoadStory.parameters,docs:{...GenericListProductSummaryLazyLoadStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <GenericListLazyLoadStory isGrid={true} fetchItems={fetchProducts}></GenericListLazyLoadStory>;\n  }\n}",...GenericListProductSummaryLazyLoadStory.parameters?.docs?.source}}},GenericListOperationLazyLoadStory.parameters={...GenericListOperationLazyLoadStory.parameters,docs:{...GenericListOperationLazyLoadStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <GenericListLazyLoadStory isGrid={false} fetchItems={fetchOperations}></GenericListLazyLoadStory>;\n  }\n}",...GenericListOperationLazyLoadStory.parameters?.docs?.source}}},GenericListProductSummaryListStory.parameters={...GenericListProductSummaryListStory.parameters,docs:{...GenericListProductSummaryListStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      isGrid: true,\n      items: createCollection(5, createProductSummary)\n    };\n    return <>\n        <GenericList {...args} />\n      </>;\n  }\n}",...GenericListProductSummaryListStory.parameters?.docs?.source}}},GenericListOperationListStory.parameters={...GenericListOperationListStory.parameters,docs:{...GenericListOperationListStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      isGrid: false,\n      items: createCollection(20, createOperation)\n    };\n    return <>\n        <GenericList {...args} />\n      </>;\n  }\n}",...GenericListOperationListStory.parameters?.docs?.source}}},GenericListOperationSummaryListStory.parameters={...GenericListOperationSummaryListStory.parameters,docs:{...GenericListOperationSummaryListStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      isGrid: false,\n      items: createCollection(20, createOperationSummary)\n    };\n    return <>\n        <GenericList {...args} />\n      </>;\n  }\n}",...GenericListOperationSummaryListStory.parameters?.docs?.source}}};const __namedExportsOrder=["GenericListProductSummaryLazyLoadStory","GenericListOperationLazyLoadStory","GenericListProductSummaryListStory","GenericListOperationListStory","GenericListOperationSummaryListStory"]},"./src/components/GenericList/GenericList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>GenericList,Z:()=>GenericList_GenericList});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),GenericList_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/GenericList/GenericList.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(GenericList_module.Z,options);const GenericList_GenericList_module=GenericList_module.Z&&GenericList_module.Z.locals?GenericList_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GenericList=function GenericList(_ref){var isGrid=_ref.isGrid,items=_ref.items,lastItemRef=_ref.lastItemRef,memoItems=react.useMemo((function(){return items.map((function(item,index){return(0,jsx_runtime.jsx)(MemoizedListItem,{item,ref:setRefForLast(items.length,index,lastItemRef)},item.key)}))}),[items,lastItemRef]);return(0,jsx_runtime.jsx)("ul",{className:"".concat(GenericList_GenericList_module.list," ").concat(isGrid?GenericList_GenericList_module.listGrid:""),children:memoItems})};GenericList.displayName="GenericList";var ListItem=react.forwardRef((function(_ref2,ref){var item=_ref2.item;return(0,jsx_runtime.jsx)("li",{id:item.key,ref,className:GenericList_GenericList_module.listItem,children:item.createComponent()})}));ListItem.displayName="ListItem";var MemoizedListItem=react.memo(ListItem),setRefForLast=function setRefForLast(length,index,lastItemRef){return index===length-1?lastItemRef:null};const GenericList_GenericList=GenericList;try{GenericList.displayName="ListItem",GenericList.__docgenInfo={description:"",displayName:"ListItem",props:{isGrid:{defaultValue:null,description:"",name:"isGrid",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TItem[]"}},lastItemRef:{defaultValue:null,description:"",name:"lastItemRef",required:!1,type:{name:"MutableRefObject<HTMLLIElement | null>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GenericList/GenericList.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/GenericList/GenericList.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/GenericList/GenericListObserver.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_GenericList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/GenericList/GenericList.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var GenericListObserver=function GenericListObserver(_ref){var isGrid=_ref.isGrid,fetchItems=_ref.fetchItems,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fetchItems()),2),items=_useState2[0],setItems=_useState2[1],lastItemRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleIntersection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(entries){var entry=entries[0];null!=entry&&entry.isIntersecting&&setItems((function(prevItems){return[].concat(_toConsumableArray(prevItems),_toConsumableArray(fetchItems()))}))}),[fetchItems]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var observer=new IntersectionObserver(handleIntersection,{threshold:.1}),currentLastItem=lastItemRef.current;return currentLastItem&&observer.observe(currentLastItem),function(){currentLastItem&&observer.unobserve(currentLastItem)}}),[handleIntersection,items]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_GenericList__WEBPACK_IMPORTED_MODULE_1__.Z,{isGrid,items,lastItemRef})};GenericListObserver.displayName="GenericListObserver";const __WEBPACK_DEFAULT_EXPORT__=GenericListObserver;try{GenericListObserver.displayName="GenericListObserver",GenericListObserver.__docgenInfo={description:"",displayName:"GenericListObserver",props:{isGrid:{defaultValue:null,description:"",name:"isGrid",required:!1,type:{name:"boolean"}},fetchItems:{defaultValue:null,description:"",name:"fetchItems",required:!0,type:{name:"() => IGenericListItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GenericList/GenericListObserver.tsx#GenericListObserver"]={docgenInfo:GenericListObserver.__docgenInfo,name:"GenericListObserver",path:"src/components/GenericList/GenericListObserver.tsx#GenericListObserver"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/GenericList/GenericList.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ZKoL84k6h5ZndIcy4bbh{background-color:rgba(0,0,0,0);list-style:none;padding:0;margin:0;display:flex;flex-direction:column;align-items:stretch}.VkF20piUhTzdB0YRLI5w{background-color:rgba(0,0,0,0);display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));grid-auto-rows:auto;gap:20px;justify-content:center}.Oy2IqKQ0SAE3JT3sHpLh{background-color:rgba(0,0,0,0);margin-bottom:5px}.Oy2IqKQ0SAE3JT3sHpLh:nth-child(odd){animation:LLmU3AuzRmioCxaEFa0K .5s ease-in-out}.Oy2IqKQ0SAE3JT3sHpLh:nth-child(even){animation:LLmU3AuzRmioCxaEFa0K 1s ease-in-out}@keyframes LLmU3AuzRmioCxaEFa0K{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}","",{version:3,sources:["webpack://./src/components/GenericList/GenericList.module.scss"],names:[],mappings:"AAAA,sBACE,8BAAA,CACA,eAAA,CACA,SAAA,CACA,QAAA,CACA,YAAA,CACA,qBAAA,CACA,mBAAA,CAGF,sBACE,8BAAA,CACA,YAAA,CACA,0DAAA,CACA,mBAAA,CACA,QAAA,CACA,sBAAA,CAGF,sBACE,8BAAA,CACA,iBAAA,CAEA,qCACE,8CAAA,CAEF,sCACE,6CAAA,CAIJ,gCACE,KACE,SAAA,CACA,0BAAA,CAEF,GACE,SAAA,CACA,uBAAA,CAAA",sourcesContent:[".list {\n  background-color: transparent;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.listGrid {\n  background-color: transparent;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: auto;\n  gap: 20px;\n  justify-content: center;\n}\n\n.listItem {\n  background-color: transparent;\n  margin-bottom: 5px;\n\n  &:nth-child(odd) {\n    animation: fadeIn 0.5s ease-in-out;\n  }\n  &:nth-child(even) {\n    animation: fadeIn 1s ease-in-out;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={list:"ZKoL84k6h5ZndIcy4bbh",listGrid:"VkF20piUhTzdB0YRLI5w",listItem:"Oy2IqKQ0SAE3JT3sHpLh",fadeIn:"LLmU3AuzRmioCxaEFa0K"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}}}]);