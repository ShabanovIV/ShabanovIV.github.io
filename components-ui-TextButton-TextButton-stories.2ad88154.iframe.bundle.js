"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[445],{"./src/components/ui/TextButton/TextButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextButtonLargeStory:()=>TextButtonLargeStory,TextButtonPlusStory:()=>TextButtonPlusStory,TextButtonStory:()=>TextButtonStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/TextButton/TextButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"ui/TextButton",component:_TextButton__WEBPACK_IMPORTED_MODULE_0__.A};function handleClick(){console.log("button click")}var TextButtonStory={render:function render(){var args={text:"Кнопка с надписью на ней",maxTextLength:6,borderVisible:!1,borderRounded:!0,handleClick};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextButton__WEBPACK_IMPORTED_MODULE_0__.A,_objectSpread({},args))}},TextButtonLargeStory={render:function render(){var args={text:"Кнопка с надписью на ней",maxTextLength:1/0,borderVisible:!1,borderRounded:!0,handleClick};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextButton__WEBPACK_IMPORTED_MODULE_0__.A,_objectSpread({},args))}},TextButtonPlusStory={render:function render(){var args={text:"+",maxTextLength:1/0,borderVisible:!0,borderRounded:!1,handleClick};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextButton__WEBPACK_IMPORTED_MODULE_0__.A,_objectSpread({},args))}};TextButtonStory.parameters={...TextButtonStory.parameters,docs:{...TextButtonStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      text: 'Кнопка с надписью на ней',\n      maxTextLength: 6,\n      borderVisible: false,\n      borderRounded: true,\n      handleClick: handleClick\n    };\n    return <TextButton {...args}></TextButton>;\n  }\n}",...TextButtonStory.parameters?.docs?.source}}},TextButtonLargeStory.parameters={...TextButtonLargeStory.parameters,docs:{...TextButtonLargeStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      text: 'Кнопка с надписью на ней',\n      maxTextLength: Infinity,\n      borderVisible: false,\n      borderRounded: true,\n      handleClick: handleClick\n    };\n    return <TextButton {...args}></TextButton>;\n  }\n}",...TextButtonLargeStory.parameters?.docs?.source}}},TextButtonPlusStory.parameters={...TextButtonPlusStory.parameters,docs:{...TextButtonPlusStory.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      text: '+',\n      maxTextLength: Infinity,\n      borderVisible: true,\n      borderRounded: false,\n      handleClick: handleClick\n    };\n    return <TextButton {...args}></TextButton>;\n  }\n}",...TextButtonPlusStory.parameters?.docs?.source}}};const __namedExportsOrder=["TextButtonStory","TextButtonLargeStory","TextButtonPlusStory"]},"./src/components/ui/TextButton/TextButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextButton});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/TextButton/TextButton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextButton_module.Z,options);const TextButton_TextButton_module=TextButton_module.Z&&TextButton_module.Z.locals?TextButton_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextButton=function TextButton(_ref){var text=_ref.text,maxTextLength=_ref.maxTextLength,borderVisible=_ref.borderVisible,borderRounded=_ref.borderRounded,handleClick=_ref.handleClick,truncatedText=maxTextLength>0&&maxTextLength<text.length?"".concat(text.substring(0,maxTextLength),"..."):text,classNames="".concat(borderVisible?TextButton_TextButton_module.borderVisible:TextButton_TextButton_module.borderHide," ").concat(borderRounded&&TextButton_TextButton_module.borderRound);return(0,jsx_runtime.jsx)("button",{title:text,onClick:handleClick,className:"".concat(TextButton_TextButton_module.button," ").concat(classNames),children:truncatedText})};TextButton.displayName="TextButton";try{TextButton.displayName="TextButton",TextButton.__docgenInfo={description:"",displayName:"TextButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},maxTextLength:{defaultValue:null,description:"",name:"maxTextLength",required:!0,type:{name:"number"}},borderVisible:{defaultValue:null,description:"",name:"borderVisible",required:!0,type:{name:"boolean"}},borderRounded:{defaultValue:null,description:"",name:"borderRounded",required:!0,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/TextButton/TextButton.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/ui/TextButton/TextButton.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ui/TextButton/TextButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.uwaZ2G2KhVpX77IosCgG{background-color:var(--myApp-background-color);color:var(--myApp-text-color);font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;display:inline-block;line-height:1;cursor:pointer;padding:5px 5px}.uwaZ2G2KhVpX77IosCgG:hover{background-color:var(--myApp-background-color-hover)}.U5FxTOBqCcFCfHnKKh4Y{border:1px solid;border-color:var(--myApp-border-color)}.Q1uWBAVDMl_YtET3DV9Y{border:0}._lFGxfcpC6fhxTYPHMBA{border-radius:5px}',"",{version:3,sources:["webpack://./src/components/ui/TextButton/TextButton.module.scss"],names:[],mappings:"AAAA,sBACE,8CAAA,CACA,6BAAA,CACA,qEAAA,CACA,eAAA,CACA,oBAAA,CACA,aAAA,CACA,cAAA,CACA,eAAA,CAGF,4BACE,oDAAA,CAGF,sBACE,gBAAA,CACA,sCAAA,CAGF,sBACE,QAAA,CAGF,sBACE,iBAAA",sourcesContent:[".button {\n  background-color: var(--myApp-background-color);\n  color: var(--myApp-text-color);\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  display: inline-block;\n  line-height: 1;\n  cursor: pointer;\n  padding: 5px 5px;\n}\n\n.button:hover {\n  background-color: var(--myApp-background-color-hover);\n}\n\n.borderVisible {\n  border: 1px solid;\n  border-color: var(--myApp-border-color);\n}\n\n.borderHide {\n  border: 0;\n}\n\n.borderRound {\n  border-radius: 5px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"uwaZ2G2KhVpX77IosCgG",borderVisible:"U5FxTOBqCcFCfHnKKh4Y",borderHide:"Q1uWBAVDMl_YtET3DV9Y",borderRound:"_lFGxfcpC6fhxTYPHMBA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);