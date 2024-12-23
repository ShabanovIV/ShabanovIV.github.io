"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[886],{"./src/forms/OperationForm/OperationForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddOperation:()=>AddOperation,EditOperation:()=>EditOperation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),dist_index_esm=__webpack_require__("./node_modules/react-currency-input-field/dist/index.esm.js"),react_datepicker_min=__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.min.js"),react_datepicker_min_default=__webpack_require__.n(react_datepicker_min),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OperationForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/forms/OperationForm/OperationForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OperationForm_module.Z,options);const OperationForm_OperationForm_module=OperationForm_module.Z&&OperationForm_module.Z.locals?OperationForm_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var OperationForm=function OperationForm(_ref){var operation=_ref.operation,categories=_ref.categories,onSubmit=_ref.onSubmit,_useForm=(0,index_esm.cI)({defaultValues:operation||{amount:0,category:categories[0]||"",title:"",description:"",date:new Date}}),control=_useForm.control,handleSubmit=_useForm.handleSubmit,register=_useForm.register,errors=_useForm.formState.errors;return(0,jsx_runtime.jsxs)("form",{className:OperationForm_OperationForm_module.form,onSubmit:handleSubmit((function submitHandler(data){onSubmit(data)})),children:[(0,jsx_runtime.jsx)("h2",{className:OperationForm_OperationForm_module.title,children:operation?"Редактировать операцию":"Добавить операцию"}),(0,jsx_runtime.jsxs)("div",{className:OperationForm_OperationForm_module.field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:"title",className:OperationForm_OperationForm_module.label,children:"Название"}),(0,jsx_runtime.jsx)("input",_objectSpread({id:"title",className:OperationForm_OperationForm_module.input},register("title",{required:"Введите название операции"}))),errors.title&&(0,jsx_runtime.jsx)("p",{className:OperationForm_OperationForm_module.error,children:errors.title.message})]}),(0,jsx_runtime.jsxs)("div",{className:OperationForm_OperationForm_module.field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:"amount",className:OperationForm_OperationForm_module.label,children:"Сумма"}),(0,jsx_runtime.jsx)(index_esm.Qr,{control,name:"amount",rules:{required:"Введите сумму операции",validate:function validate(value){return value>0||"Сумма должна быть больше 0"}},render:function render(_ref2){var field=_ref2.field;return(0,jsx_runtime.jsx)(dist_index_esm.ZP,{id:"amount",className:OperationForm_OperationForm_module.input,value:field.value,onValueChange:function onValueChange(value){return field.onChange(value)},decimalsLimit:2,decimalSeparator:",",groupSeparator:" ",prefix:"₽ ",placeholder:"Введите сумму"})}}),errors.amount&&(0,jsx_runtime.jsx)("p",{className:OperationForm_OperationForm_module.error,children:errors.amount.message})]}),(0,jsx_runtime.jsxs)("div",{className:OperationForm_OperationForm_module.field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:"category",className:OperationForm_OperationForm_module.label,children:"Категория"}),(0,jsx_runtime.jsx)("select",_objectSpread(_objectSpread({id:"category",className:OperationForm_OperationForm_module.select},register("category",{required:"Выберите категорию операции"})),{},{children:categories.map((function(category){return(0,jsx_runtime.jsx)("option",{value:category,children:category},category)}))})),errors.category&&(0,jsx_runtime.jsx)("p",{className:OperationForm_OperationForm_module.error,children:errors.category.message})]}),(0,jsx_runtime.jsxs)("div",{className:OperationForm_OperationForm_module.field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:"description",className:OperationForm_OperationForm_module.label,children:"Описание"}),(0,jsx_runtime.jsx)("textarea",_objectSpread(_objectSpread({id:"description",className:OperationForm_OperationForm_module.textarea},register("description")),{},{placeholder:"Введите описание"}))]}),(0,jsx_runtime.jsxs)("div",{className:OperationForm_OperationForm_module.field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:"date",className:OperationForm_OperationForm_module.label,children:"Дата"}),(0,jsx_runtime.jsx)(index_esm.Qr,{control,name:"date",rules:{required:"Выберите дату операции"},render:function render(_ref3){var field=_ref3.field;return(0,jsx_runtime.jsx)(react_datepicker_min_default(),{className:OperationForm_OperationForm_module.input,selected:field.value,onChange:function onChange(date){return field.onChange(date)},dateFormat:"dd.MM.yyyy",placeholderText:"Выберите дату"})}}),errors.date&&(0,jsx_runtime.jsx)("p",{className:OperationForm_OperationForm_module.error,children:errors.date.message})]}),(0,jsx_runtime.jsx)("button",{type:"submit",className:OperationForm_OperationForm_module.button,children:operation?"Сохранить изменения":"Добавить операцию"})]})};OperationForm.displayName="OperationForm";const OperationForm_OperationForm=OperationForm;try{OperationForm.displayName="OperationForm",OperationForm.__docgenInfo={description:"",displayName:"OperationForm",props:{operation:{defaultValue:null,description:"",name:"operation",required:!1,type:{name:"OperationProps"}},categories:{defaultValue:null,description:"",name:"categories",required:!0,type:{name:"string[]"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:'(data: Omit<OperationProps, "id" | "createComponent">) => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/forms/OperationForm/OperationForm.tsx#OperationForm"]={docgenInfo:OperationForm.__docgenInfo,name:"OperationForm",path:"src/forms/OperationForm/OperationForm.tsx#OperationForm"})}catch(__react_docgen_typescript_loader_error){}var Operation=__webpack_require__("./src/components/Operation/Operation.tsx"),operationCategories=__webpack_require__("./src/components/Helpers/operationCategories.json");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const OperationForm_stories={title:"forms/OperationForm",component:OperationForm_OperationForm};var categoryNames=operationCategories.map((function(category){return category.name})),AddOperation={render:function render(){return(0,jsx_runtime.jsx)(RenderAddOperation,{})}},EditOperation={render:function render(){return(0,jsx_runtime.jsx)(RenderEditOperation,{})}},RenderAddOperation=function RenderAddOperation(){var _useState2=_slicedToArray((0,react.useState)(null),2),newOperation=_useState2[0],setNewOperation=_useState2[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(OperationForm_OperationForm,{categories:categoryNames,onSubmit:function handleSubmit(data){var createdOperation=new Operation.r("".concat(Date.now()),data.amount,data.category,data.title,data.description,new Date(data.date));setNewOperation(createdOperation)}}),(0,jsx_runtime.jsx)("h3",{children:"Добавленная операция:"}),newOperation?newOperation.createComponent():(0,jsx_runtime.jsx)("p",{children:"Пока ничего не добавлено"})]})};RenderAddOperation.displayName="RenderAddOperation";var RenderEditOperation=function RenderEditOperation(){var initialOperation=new Operation.r("1",1500,categoryNames[2],"Купить новый ноутбук","Покупка ноутбука для работы.",new Date),_useState4=_slicedToArray((0,react.useState)(new Operation.r(initialOperation.id,initialOperation.amount,initialOperation.category,initialOperation.title,initialOperation.description,new Date(initialOperation.date))),2),modifiedOperation=_useState4[0],setModifiedOperation=_useState4[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(OperationForm_OperationForm,{operation:modifiedOperation,categories:categoryNames,onSubmit:function handleSubmit(data){var updatedOperation=new Operation.r(modifiedOperation.id,data.amount,data.category,data.title,data.description,new Date(data.date));setModifiedOperation(updatedOperation)}}),(0,jsx_runtime.jsx)("h3",{children:"Исходная операция:"}),initialOperation.createComponent(),(0,jsx_runtime.jsx)("h3",{children:"Обновлённая операция:"}),modifiedOperation.createComponent()]})};RenderEditOperation.displayName="RenderEditOperation",AddOperation.parameters={...AddOperation.parameters,docs:{...AddOperation.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <RenderAddOperation />;\n  }\n}",...AddOperation.parameters?.docs?.source}}},EditOperation.parameters={...EditOperation.parameters,docs:{...EditOperation.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <RenderEditOperation />;\n  }\n}",...EditOperation.parameters?.docs?.source}}};const __namedExportsOrder=["AddOperation","EditOperation"]},"./src/components/Operation/Operation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>OperationProps,Z:()=>Operation_Operation});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Operation_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Operation/Operation.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Operation_module.Z,options);const Operation_Operation_module=Operation_module.Z&&Operation_module.Z.locals?Operation_module.Z.locals:void 0;var formats=__webpack_require__("./src/components/formats.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var OperationProps=function(){function OperationProps(id,amount,category,title,description,date){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,OperationProps),this.id=id,this.amount=amount,this.category=category,this.title=title,this.description=description,this.date=date}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(OperationProps,[{key:"key",get:function get(){return this.id}},{key:"createComponent",value:function createComponent(){return(0,jsx_runtime.jsx)(Operation,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},this))}}]),OperationProps}(),Operation=function Operation(_ref){var amount=_ref.amount,category=_ref.category,title=_ref.title,description=_ref.description,date=_ref.date,formattedAmount=formats.Y.format(amount);return(0,jsx_runtime.jsxs)("div",{className:Operation_Operation_module.operation,children:[(0,jsx_runtime.jsxs)("h3",{children:[title," от ",date.toLocaleDateString()]}),(0,jsx_runtime.jsxs)("p",{children:[category," ",formattedAmount]}),(0,jsx_runtime.jsx)("p",{children:description})]})};Operation.displayName="Operation";const Operation_Operation=Operation;try{Operation.displayName="Operation",Operation.__docgenInfo={description:"",displayName:"Operation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"number"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},createComponent:{defaultValue:null,description:"",name:"createComponent",required:!0,type:{name:"() => Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Operation/Operation.tsx#Operation"]={docgenInfo:Operation.__docgenInfo,name:"Operation",path:"src/components/Operation/Operation.tsx#Operation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/formats.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>rubFormatter});var rubFormatter=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:2})},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Operation/Operation.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.LNqQsWAUFPdjmmFsK_Ta{font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;background-color:var(--myApp-background-color);color:var(--myApp-text-color);cursor:pointer;border:1px solid var(--myApp-border-color);padding:5px;margin-top:0px;margin-bottom:0px;transition:box-shadow .3s ease,transform .3s ease}.LNqQsWAUFPdjmmFsK_Ta:hover{box-shadow:0 3px 3px var(--myApp-shadow-color);transform:translateY(-2px)}.LNqQsWAUFPdjmmFsK_Ta h3{font-size:1.5rem;font-weight:600;margin-top:auto;margin-bottom:auto;color:var(--myApp-title-color, inherit)}.LNqQsWAUFPdjmmFsK_Ta p{font-size:1rem;line-height:1.5;margin:4px 0}.LNqQsWAUFPdjmmFsK_Ta p:last-of-type{margin-top:8px;font-style:italic;opacity:.8}',"",{version:3,sources:["webpack://./src/components/Operation/Operation.module.scss"],names:[],mappings:"AAAA,sBACE,qEAAA,CACA,8CAAA,CACA,6BAAA,CACA,cAAA,CACA,0CAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CACA,iDAAA,CAGF,4BACE,8CAAA,CACA,0BAAA,CAGF,yBACE,gBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,uCAAA,CAGF,wBACE,cAAA,CACA,eAAA,CACA,YAAA,CAGF,qCACE,cAAA,CACA,iBAAA,CACA,UAAA",sourcesContent:[".operation {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: var(--myApp-background-color);\n  color: var(--myApp-text-color);\n  cursor: pointer;\n  border: 1px solid var(--myApp-border-color);\n  padding: 5px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n}\n\n.operation:hover {\n  box-shadow: 0 3px 3px var(--myApp-shadow-color);\n  transform: translateY(-2px);\n}\n\n.operation h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-top: auto;\n  margin-bottom: auto;\n  color: var(--myApp-title-color, inherit);\n}\n\n.operation p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 4px 0;\n}\n\n.operation p:last-of-type {\n  margin-top: 8px;\n  font-style: italic;\n  opacity: 0.8;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={operation:"LNqQsWAUFPdjmmFsK_Ta"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/forms/OperationForm/OperationForm.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sSx1v4GwRme0HYMym_e3{display:flex;flex-direction:column;gap:20px;width:100%;max-width:400px;margin:0 auto;padding:20px;border-radius:10px;box-shadow:0 4px 8px var(--myApp-shadow-color);background-color:var(--myApp-background-color)}.Id6F__dvFeZPXfV0itFA{font-size:1.8rem;font-weight:bold;text-align:center;color:var(--myApp-text-color);margin-bottom:10px}.sxZy3fV8w6veXvNiiENJ{display:flex;flex-direction:column;gap:5px}.rc4MgrJZ1ZmbQXlespbw{font-size:1rem;color:var(--myApp-text-color)}.k5nd9MTi0_5OjjaiuyN7,.Zp7nU55KqTOmXAGDMJNn,.poEO1iEWCWEp32nsYWm0{padding:10px;border:1px solid var(--myApp-shadow-color);border-radius:5px;background-color:var(--myApp-background-color);color:var(--myApp-text-color);font-size:1rem;width:100%;box-sizing:border-box}.poEO1iEWCWEp32nsYWm0{min-height:80px;resize:none;overflow:auto}.JVqQdC4oF3p3zATzl7UG{padding:10px 0;border:none;border-radius:5px;background-color:var(--myApp-background-color);color:var(--myApp-text-color);font-size:1rem;font-weight:bold;cursor:pointer;transition:background-color .2s ease-in-out;text-align:center}.JVqQdC4oF3p3zATzl7UG:hover{background-color:var(--myApp-background-color-hover)}.gupPc0ZR7OimpfBP49Nw{font-size:.9rem;color:#d9534f;margin-top:-5px}.PYi8OfSXfTlMEmBqpos8{font-size:.9rem;color:var(--myApp-text-color);margin-top:-5px}","",{version:3,sources:["webpack://./src/forms/OperationForm/OperationForm.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,UAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,8CAAA,CACA,8CAAA,CAGF,sBACE,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,6BAAA,CACA,kBAAA,CAGF,sBACE,YAAA,CACA,qBAAA,CACA,OAAA,CAGF,sBACE,cAAA,CACA,6BAAA,CAGF,kEAGE,YAAA,CACA,0CAAA,CACA,iBAAA,CACA,8CAAA,CACA,6BAAA,CACA,cAAA,CACA,UAAA,CACA,qBAAA,CAGF,sBACE,eAAA,CACA,WAAA,CACA,aAAA,CAGF,sBACE,cAAA,CACA,WAAA,CACA,iBAAA,CACA,8CAAA,CACA,6BAAA,CACA,cAAA,CACA,gBAAA,CACA,cAAA,CACA,2CAAA,CACA,iBAAA,CAGF,4BACE,oDAAA,CAGF,sBACE,eAAA,CACA,aAAA,CACA,eAAA,CAGF,sBACE,eAAA,CACA,6BAAA,CACA,eAAA",sourcesContent:[".form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px var(--myApp-shadow-color);\n  background-color: var(--myApp-background-color);\n}\n\n.title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  text-align: center;\n  color: var(--myApp-text-color);\n  margin-bottom: 10px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.label {\n  font-size: 1rem;\n  color: var(--myApp-text-color);\n}\n\n.input,\n.select,\n.textarea {\n  padding: 10px;\n  border: 1px solid var(--myApp-shadow-color);\n  border-radius: 5px;\n  background-color: var(--myApp-background-color);\n  color: var(--myApp-text-color);\n  font-size: 1rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.textarea {\n  min-height: 80px;\n  resize: none;\n  overflow: auto;\n}\n\n.button {\n  padding: 10px 0;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--myApp-background-color);\n  color: var(--myApp-text-color);\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n  text-align: center;\n}\n\n.button:hover {\n  background-color: var(--myApp-background-color-hover);\n}\n\n.error {\n  font-size: 0.9rem;\n  color: #d9534f;\n  margin-top: -5px;\n}\n\n.amountPreview {\n  font-size: 0.9rem;\n  color: var(--myApp-text-color);\n  margin-top: -5px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={form:"sSx1v4GwRme0HYMym_e3",title:"Id6F__dvFeZPXfV0itFA",field:"sxZy3fV8w6veXvNiiENJ",label:"rc4MgrJZ1ZmbQXlespbw",input:"k5nd9MTi0_5OjjaiuyN7",select:"Zp7nU55KqTOmXAGDMJNn",textarea:"poEO1iEWCWEp32nsYWm0",button:"JVqQdC4oF3p3zATzl7UG",error:"gupPc0ZR7OimpfBP49Nw",amountPreview:"PYi8OfSXfTlMEmBqpos8"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Helpers/operationCategories.json":module=>{module.exports=JSON.parse('[{"name":"Покупка товара","title":"Клиентские операции","description":"Операция, связанная с покупкой товара клиентом в магазине."},{"name":"Возврат товара","title":"Клиентские операции","description":"Операция возврата приобретенного товара клиентом."},{"name":"Приход товара","title":"Складские операции","description":"Процесс приема товара на склад от поставщиков."},{"name":"Инвентаризация","title":"Складские операции","description":"Операция проверки наличия и состояния товаров на складе."},{"name":"Списание товара","title":"Складские операции","description":"Удаление товара из учета из-за повреждений или истечения срока годности."},{"name":"Перемещение товара","title":"Складские операции","description":"Операция перемещения товара между различными складами или отделами."},{"name":"Резервирование товара","title":"Клиентские операции","description":"Процесс бронирования товара для клиента."},{"name":"Начисление бонусов","title":"Финансовые операции","description":"Операция добавления бонусных баллов клиентам за покупки."},{"name":"Списание бонусов","title":"Финансовые операции","description":"Удаление бонусных баллов после их использования клиентом."},{"name":"Регистрация клиента","title":"Клиентские операции","description":"Добавление нового клиента в базу данных магазина."},{"name":"Активация скидки","title":"Клиентские операции","description":"Применение скидки к товару или услуге для клиента."},{"name":"Начисление зарплаты","title":"Финансовые операции","description":"Процесс выплаты заработной платы сотрудникам магазина."},{"name":"Выдача премий","title":"Финансовые операции","description":"Выплата дополнительного вознаграждения сотрудникам."},{"name":"Оплата аренды","title":"Финансовые операции","description":"Платежи за аренду помещений магазина."},{"name":"Оплата коммунальных услуг","title":"Финансовые операции","description":"Расходы на электроэнергию, воду, отопление и другие коммунальные услуги."},{"name":"Рекламные расходы","title":"Финансовые операции","description":"Расходы на продвижение товаров и услуг магазина."},{"name":"Закупка оборудования","title":"Финансовые операции","description":"Приобретение оборудования для работы магазина."}]')}}]);