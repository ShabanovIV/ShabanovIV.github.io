/*! For license information please see components-PriceGraph-PriceHistory-stories.b4dc6aae.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[193],{"./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{L:()=>useInsertionEffectAlwaysWithSyncFallback,j:()=>useInsertionEffectWithLayoutFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInsertionEffect=!!(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect&&(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect,useInsertionEffectAlwaysWithSyncFallback=useInsertionEffect||function syncFallback(create){return create()},useInsertionEffectWithLayoutFallback=useInsertionEffect||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./src/components/PriceGraph/PriceHistory.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PriceHistoryStory:()=>PriceHistoryStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PriceHistory_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),emotion_serialize_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),emotion_cache_browser_esm=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,emotion_serialize_esm.O)(args)}var ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),EmotionCacheContext=react.createContext("undefined"!=typeof HTMLElement?(0,emotion_cache_browser_esm.Z)({key:"css"}):null),emotion_element_5486c51c_browser_esm_withEmotionCache=(EmotionCacheContext.Provider,function withEmotionCache(func){return(0,react.forwardRef)((function(props,ref){var cache=(0,react.useContext)(EmotionCacheContext);return func(props,cache,ref)}))}),emotion_element_5486c51c_browser_esm_ThemeContext=react.createContext({});var emotion_element_5486c51c_browser_esm_hasOwn={}.hasOwnProperty,typePropName="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",emotion_element_5486c51c_browser_esm_Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},Emotion$1=emotion_element_5486c51c_browser_esm_withEmotionCache((function(props,cache,ref){var cssProp=props.css;"string"==typeof cssProp&&void 0!==cache.registered[cssProp]&&(cssProp=cache.registered[cssProp]);var WrappedComponent=props[typePropName],registeredStyles=[cssProp],className="";"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,registeredStyles,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_esm.O)(registeredStyles,void 0,react.useContext(emotion_element_5486c51c_browser_esm_ThemeContext));className+=cache.key+"-"+serialized.name;var newProps={};for(var key in props)emotion_element_5486c51c_browser_esm_hasOwn.call(props,key)&&"css"!==key&&key!==typePropName&&(newProps[key]=props[key]);return newProps.className=className,ref&&(newProps.ref=ref),react.createElement(react.Fragment,null,react.createElement(emotion_element_5486c51c_browser_esm_Insertion,{cache,serialized,isStringTag:"string"==typeof WrappedComponent}),react.createElement(WrappedComponent,newProps))}));jsx_runtime.Fragment;function emotion_react_jsx_runtime_browser_esm_jsx(type,props,key){return emotion_element_5486c51c_browser_esm_hasOwn.call(props,"css")?jsx_runtime.jsx(Emotion$1,function createEmotionProps(type,props){var newProps={};for(var key in props)emotion_element_5486c51c_browser_esm_hasOwn.call(props,key)&&(newProps[key]=props[key]);return newProps[typePropName]=type,newProps}(type,props),key):jsx_runtime.jsx(type,props,key)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var PriceHistory=function PriceHistory(_ref){var points=_ref.points,_ref$width=_ref.width,width=void 0===_ref$width?500:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?300:_ref$height,canvasRef=(0,react.useRef)(null),themeValues=(0,ThemeProvider.F)().themeValues,canvasStyles=css("position:absolute;width:",width,"px;height:",height,"px;","");return(0,react.useEffect)((function(){var canvas=canvasRef.current;if(canvas){var ctx=canvas.getContext("2d");if(ctx){ctx.clearRect(0,0,width,height),ctx.fillStyle="transparent",ctx.fillRect(0,0,width,height),ctx.strokeStyle="#007bff",ctx.lineWidth=2,ctx.font="10px Arial",ctx.fillStyle="#000000";var maxY=Math.max.apply(Math,_toConsumableArray(points.map((function(d){return d.y})))),minY=Math.min.apply(Math,_toConsumableArray(points.map((function(d){return d.y})))),scaleX=(width-80)/(points.length-1),scaleY=(height-80)/(maxY-minY||1);ctx.strokeStyle=themeValues.BorderColor,ctx.lineWidth=1,ctx.beginPath(),ctx.rect(40,40,width-80,height-80),ctx.stroke(),ctx.strokeStyle="#007bff",ctx.lineWidth=2,ctx.beginPath(),points.forEach((function(point,index){var x=40+index*scaleX,y=height-40-(point.y-minY)*scaleY;0===index?ctx.moveTo(x,y):ctx.lineTo(x,y),ctx.fillStyle=themeValues.TextColor,ctx.fillText(point.x,x-10,height-40+20)})),ctx.stroke()}}}),[points,width,height,themeValues]),emotion_react_jsx_runtime_browser_esm_jsx("canvas",{css:canvasStyles,ref:canvasRef,width,height})};PriceHistory.displayName="PriceHistory";const PriceGraph_PriceHistory=PriceHistory;try{PriceHistory.displayName="PriceHistory",PriceHistory.__docgenInfo={description:"",displayName:"PriceHistory",props:{points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"HistoryPoint[]"}},width:{defaultValue:{value:"500"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"300"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PriceGraph/PriceHistory.tsx#PriceHistory"]={docgenInfo:PriceHistory.__docgenInfo,name:"PriceHistory",path:"src/components/PriceGraph/PriceHistory.tsx#PriceHistory"})}catch(__react_docgen_typescript_loader_error){}var Resizer=__webpack_require__("./src/components/Resizer/Resizer.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const PriceHistory_stories={title:"components/PriceHistory",component:PriceGraph_PriceHistory};var renderPriceHistory=function renderPriceHistory(size){var args={points:[{x:"01.24",y:2e3},{x:"02.24",y:2e3},{x:"03.24",y:5e3},{x:"04.24",y:5e3},{x:"05.24",y:4e3},{x:"06.24",y:4e3},{x:"07.24",y:6e3},{x:"08.24",y:6e3}],width:size.width,height:size.height};return(0,jsx_runtime.jsx)(PriceGraph_PriceHistory,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};renderPriceHistory.displayName="renderPriceHistory";var PriceHistoryStory={render:function render(){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Resizer.w,{initialHeight:300,initialWidth:500,children:renderPriceHistory})})}};PriceHistoryStory.parameters={...PriceHistoryStory.parameters,docs:{...PriceHistoryStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <div>\n        {<Resizer initialHeight={300} initialWidth={500}>\n            {renderPriceHistory}\n          </Resizer>}\n      </div>;\n  }\n}",...PriceHistoryStory.parameters?.docs?.source}}};const __namedExportsOrder=["PriceHistoryStory"]},"./src/components/Resizer/Resizer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Resizer});var react=__webpack_require__("./node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const clsx_m=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Resizer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Resizer/Resizer.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Resizer_module.Z,options);const Resizer_Resizer_module=Resizer_module.Z&&Resizer_module.Z.locals?Resizer_module.Z.locals:void 0,resizeButton_namespaceObject=__webpack_require__.p+"static/media/resizeButton.9acbc9f7.png";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Resizer=function Resizer(_ref){var className=_ref.className,children=_ref.children,initialWidth=_ref.initialWidth,initialHeight=_ref.initialHeight,root=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)({width:initialWidth,height:initialHeight}),2),size=_useState2[0],setSize=_useState2[1],sizesCopy=(0,react.useRef)(size);sizesCopy.current=size;var onMouseDownResizer=(0,react.useMemo)((function(){var start={x:0,y:0,width:32,height:32},move=function move(e){if(e.preventDefault(),root.current){var rect=root.current.getBoundingClientRect(),x=start.x-(e.clientX-rect.x),y=start.y-(e.clientY-rect.y);!function safeSetSizes(_size){setSize({width:_size.width<32?32:Math.round(_size.width),height:_size.height<32?32:Math.round(_size.height)})}({width:start.width-x,height:start.height-y})}},up=function up(){window.removeEventListener("mousemove",move),window.removeEventListener("mouseup",up)};return{onMouseDownResizer:function onMouseDownResizer(e){if(e.stopPropagation(),root.current){var rect=root.current.getBoundingClientRect();start={x:e.clientX-rect.x,y:e.clientY-rect.y,width:sizesCopy.current.width,height:sizesCopy.current.height},window.addEventListener("mousemove",move),window.addEventListener("mouseup",up)}}}}),[]).onMouseDownResizer;return(0,jsx_runtime.jsxs)("div",{ref:root,className:clsx_m(Resizer_Resizer_module.root,className),style:{width:size.width,height:size.height},children:[(0,jsx_runtime.jsx)("div",{className:Resizer_Resizer_module.wrapper,children:children(size)}),(0,jsx_runtime.jsx)("button",{className:Resizer_Resizer_module.resizer,onMouseDown:onMouseDownResizer,children:(0,jsx_runtime.jsx)("img",{draggable:!1,src:resizeButton_namespaceObject,alt:"Изменение размера"})})]})};Resizer.displayName="Resizer";try{Resizer.displayName="Resizer",Resizer.__docgenInfo={description:"",displayName:"Resizer",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},initialWidth:{defaultValue:null,description:"",name:"initialWidth",required:!0,type:{name:"number"}},initialHeight:{defaultValue:null,description:"",name:"initialHeight",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Resizer/Resizer.tsx#Resizer"]={docgenInfo:Resizer.__docgenInfo,name:"Resizer",path:"src/components/Resizer/Resizer.tsx#Resizer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Resizer/Resizer.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BcQLg4peX7y8JsLBdaf1{position:relative;display:inline-block;transition:border-color .3s;border:1px solid rgba(0,0,0,0);z-index:1}.UkGf8tM3Y4M2azX3zPAD{padding:0;border:1px solid #eff1f3;border-color:var(--myApp-border-color);width:100%;height:100%;overflow:auto;box-sizing:border-box}._10OAE3gaaxYBWV1Ksk8t{background-color:rgba(0,0,0,0);border:none;display:flex;justify-content:center;align-content:center;padding:0;position:absolute;width:16px;height:16px;right:0;bottom:0;cursor:move;outline:none}._10OAE3gaaxYBWV1Ksk8t img{width:100%;height:100%;margin:0;object-fit:cover;pointer-events:none}","",{version:3,sources:["webpack://./src/components/Resizer/Resizer.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,oBAAA,CACA,2BAAA,CACA,8BAAA,CACA,SAAA,CAGF,sBACE,SAAA,CACA,wBAAA,CACA,sCAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,qBAAA,CAGF,uBACE,8BAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,oBAAA,CACA,SAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CACA,YAAA,CAGF,2BACE,UAAA,CACA,WAAA,CACA,QAAA,CACA,gBAAA,CACA,mBAAA",sourcesContent:[".root {\n  position: relative;\n  display: inline-block;\n  transition: border-color 0.3s;\n  border: 1px solid transparent;\n  z-index: 1;\n}\n\n.wrapper {\n  padding: 0;\n  border: 1px solid #eff1f3;\n  border-color: var(--myApp-border-color);\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n}\n\n.resizer {\n  background-color: transparent;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 0;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  right: 0;\n  bottom: 0;\n  cursor: move;\n  outline: none;\n}\n\n.resizer img {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  object-fit: cover;\n  pointer-events: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"BcQLg4peX7y8JsLBdaf1",wrapper:"UkGf8tM3Y4M2azX3zPAD",resizer:"_10OAE3gaaxYBWV1Ksk8t"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js")}}]);