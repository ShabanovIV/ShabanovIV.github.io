(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[179],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./src/homeworks/JSX_CSS/Components/ThemeProvider/ThemeProvider.tsx"),ThemeToggleButton=__webpack_require__("./src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.tsx"),LangProvider=__webpack_require__("./src/homeworks/JSX_CSS/Components/LangProvider/LangProvider.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LangSelectorButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LangSelectorButton_module.Z,options);const LangSelectorButton_LangSelectorButton_module=LangSelectorButton_module.Z&&LangSelectorButton_module.Z.locals?LangSelectorButton_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LangSelectorButton=function LangSelectorButton(){var _useLang=(0,LangProvider.J)(),langs=_useLang.langs,lang=_useLang.lang,toggleLang=_useLang.toggleLang;return(0,jsx_runtime.jsx)("div",{className:LangSelectorButton_LangSelectorButton_module.langSelector,children:(0,jsx_runtime.jsx)("select",{value:lang,onChange:function handleChange(event){toggleLang(event.target.value)},className:LangSelectorButton_LangSelectorButton_module.langDropdown,title:"Выберите язык",children:langs.map((function(value){return(0,jsx_runtime.jsx)("option",{value,children:value.toUpperCase()},value)}))})})};LangSelectorButton.displayName="LangSelectorButton";try{LangSelectorButton.displayName="LangSelectorButton",LangSelectorButton.__docgenInfo={description:"",displayName:"LangSelectorButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton.tsx#LangSelectorButton"]={docgenInfo:LangSelectorButton.__docgenInfo,name:"LangSelectorButton",path:"src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton.tsx#LangSelectorButton"})}catch(__react_docgen_typescript_loader_error){}var StoryDecorator_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/StoryDecorator/StoryDecorator.module.scss"),StoryDecorator_module_options={};StoryDecorator_module_options.styleTagTransform=styleTagTransform_default(),StoryDecorator_module_options.setAttributes=setAttributesWithoutAttributes_default(),StoryDecorator_module_options.insert=insertBySelector_default().bind(null,"head"),StoryDecorator_module_options.domAPI=styleDomAPI_default(),StoryDecorator_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(StoryDecorator_module.Z,StoryDecorator_module_options);const StoryDecorator_StoryDecorator_module=StoryDecorator_module.Z&&StoryDecorator_module.Z.locals?StoryDecorator_module.Z.locals:void 0;var StoryDecorator=function StoryDecorator(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(LangProvider.u,{children:(0,jsx_runtime.jsxs)(ThemeProvider.f6,{children:[(0,jsx_runtime.jsxs)("div",{className:StoryDecorator_StoryDecorator_module.container,children:[(0,jsx_runtime.jsx)(ThemeToggleButton.P,{}),(0,jsx_runtime.jsx)(LangSelectorButton,{})]}),children]})})};StoryDecorator.displayName="StoryDecorator";try{StoryDecorator.displayName="StoryDecorator",StoryDecorator.__docgenInfo={description:"",displayName:"StoryDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/JSX_CSS/Components/StoryDecorator/StoryDecorator.tsx#StoryDecorator"]={docgenInfo:StoryDecorator.__docgenInfo,name:"StoryDecorator",path:"src/homeworks/JSX_CSS/Components/StoryDecorator/StoryDecorator.tsx#StoryDecorator"})}catch(__react_docgen_typescript_loader_error){}var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");i18next.ZP.use(es.Db).init({resources:{ru:{translation:{welcome:{hello:"Привет! Меня зовут Иван.",work:"Я работаю в научно-исследовательском, проектом институте. Занимаюсь разработкой лабораторно-информационной,  менеджерской системы, предназначенной для автоматизации процессов лабораторных исследований керна и пластовых флюидов.",tasks:"На данный момент участвую в разработке новой версии приложения, в связи с переходом с Windows, .NET Framework,  WinForms, DevExpress, Oracle на Linux, .NET6, Asp.Net Core, PostgreSQL, React. Занимаюсь постановкой и контролем выполнения задач, проектированием архитектуры и разработкой серверной части приложения. Записался на данный курс чтобы получить необходимые знания для применения на текущей работе."},layout:{title:"Введите сообщение: ",show:"Показать"},contentModal:{close:"Закрыть"}}},en:{translation:{welcome:{hello:"Hello! My name is Ivan.",work:"I work at a research and design institute. My focus is developing a laboratory information management system (LIMS) designed to automate laboratory research processes for core samples and reservoir fluids.",tasks:"Currently, I am involved in the development of a new version of the application as part of a transition from Windows, .NET Framework, WinForms, DevExpress, and Oracle to Linux, .NET 6, ASP.NET Core, PostgreSQL, and React. My responsibilities include task planning and monitoring, architecture design, and backend application development. I enrolled in this course to gain the knowledge necessary for practical application in my current role."},layout:{title:"Input message: ",show:"Show"},contentModal:{close:"Close"}}}},lng:"ru",fallbackLng:"ru",interpolation:{escapeValue:!1}});const _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[function(Story){return(0,jsx_runtime.jsx)(StoryDecorator,{children:(0,jsx_runtime.jsx)(Story,{})})}]}},"./src/homeworks/JSX_CSS/Components/LangProvider/LangProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>useLang,u:()=>LangProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),react_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LangContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),LangProvider=function LangProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function getCurrentLangFromBody(){var _document$body$lang;return null!==(_document$body$lang=document.body.lang)&&void 0!==_document$body$lang?_document$body$lang:i18next__WEBPACK_IMPORTED_MODULE_1__.ZP.options.lng}()),2),lang=_useState2[0],setLang=_useState2[1],t=(0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.$G)().t,langs=Object.keys(i18next__WEBPACK_IMPORTED_MODULE_1__.ZP.options.resources);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LangContext.Provider,{value:{langs,lang,toggleLang:function toggleLang(lang){setLang(lang),document.body.lang=lang,i18next__WEBPACK_IMPORTED_MODULE_1__.ZP.changeLanguage(lang)},getTranslate:function getTranslate(key){return t(key)}},children})};LangProvider.displayName="LangProvider";var useLang=function useLang(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LangContext);if(!context)throw new Error("useLang должен использоваться внутри LangProvider");return context};try{LangProvider.displayName="LangProvider",LangProvider.__docgenInfo={description:"",displayName:"LangProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/JSX_CSS/Components/LangProvider/LangProvider.tsx#LangProvider"]={docgenInfo:LangProvider.__docgenInfo,name:"LangProvider",path:"src/homeworks/JSX_CSS/Components/LangProvider/LangProvider.tsx#LangProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/homeworks/JSX_CSS/Components/ThemeProvider/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f6:()=>ThemeProvider,b3:()=>Themes,Fg:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),theme=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/ThemeProvider/theme.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(theme.Z,options);theme.Z&&theme.Z.locals&&theme.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Themes={Dark:"myApp-dark",Light:"myApp-light"},ThemeContext=(0,react.createContext)(void 0),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react.useState)(function getCurrentThemeFromBody(){return document.body.classList.contains(Themes.Dark)?Themes.Dark:document.body.classList.contains(Themes.Light)?Themes.Light:Themes.Dark}()),2),theme=_useState2[0],setTheme=_useState2[1],toggleTheme=(0,react.useCallback)((function(){var newTheme=theme===Themes.Light?Themes.Dark:Themes.Light;setTheme(newTheme),document.body.classList.toggle(Themes.Dark,newTheme===Themes.Dark),document.body.classList.toggle(Themes.Light,newTheme===Themes.Light)}),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:{theme,toggleTheme},children})};ThemeProvider.displayName="ThemeProvider";var useTheme=function useTheme(){var context=(0,react.useContext)(ThemeContext);if(!context)throw new Error("useTheme должен использоваться внутри ThemeProvider");return context};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/JSX_CSS/Components/ThemeProvider/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/homeworks/JSX_CSS/Components/ThemeProvider/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>ThemeToggleButton});__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./src/homeworks/JSX_CSS/Components/ThemeProvider/ThemeProvider.tsx");const ToOn_namespaceObject=__webpack_require__.p+"static/media/ToOn.fcf2ad48.png",ToOff_namespaceObject=__webpack_require__.p+"static/media/ToOff.06ed0c50.png";var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThemeToggleButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThemeToggleButton_module.Z,options);const ThemeToggleButton_ThemeToggleButton_module=ThemeToggleButton_module.Z&&ThemeToggleButton_module.Z.locals?ThemeToggleButton_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeToggleButton=function ThemeToggleButton(){var _useTheme=(0,ThemeProvider.Fg)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme;return(0,jsx_runtime.jsx)("button",{className:ThemeToggleButton_ThemeToggleButton_module.button,onClick:toggleTheme,children:(0,jsx_runtime.jsx)("img",{src:theme===ThemeProvider.b3.Light?ToOff_namespaceObject:ToOn_namespaceObject,alt:theme===ThemeProvider.b3.Light?"Выключить свет":"Включить свет",className:ThemeToggleButton_ThemeToggleButton_module.icon})})};ThemeToggleButton.displayName="ThemeToggleButton";try{ThemeToggleButton.displayName="ThemeToggleButton",ThemeToggleButton.__docgenInfo={description:"",displayName:"ThemeToggleButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.tsx#ThemeToggleButton"]={docgenInfo:ThemeToggleButton.__docgenInfo,name:"ThemeToggleButton",path:"src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.tsx#ThemeToggleButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Vc6FieghzAjsXp3fSVeu{display:inline-block;width:65px}.UY4rxJ7bGkcb5pKLiw9D{background-color:var(--myApp-background-color);color:brown;border:none;width:100%;padding:5px 10px;font-size:14px;cursor:pointer;transition:all .3s ease}.UY4rxJ7bGkcb5pKLiw9D:focus{outline:none;border:none}","",{version:3,sources:["webpack://./src/homeworks/JSX_CSS/Components/LangSelectorButton/LangSelectorButton.module.scss"],names:[],mappings:"AAAA,sBACE,oBAAA,CACA,UAAA,CAGF,sBACE,8CAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,cAAA,CACA,cAAA,CACA,uBAAA,CAGF,4BACE,YAAA,CACA,WAAA",sourcesContent:[".langSelector {\n  display: inline-block;\n  width: 65px;\n}\n\n.langDropdown {\n  background-color: var(--myApp-background-color);\n  color: brown;\n  border: none;\n  width: 100%;\n  padding: 5px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.langDropdown:focus {\n  outline: none;\n  border: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={langSelector:"Vc6FieghzAjsXp3fSVeu",langDropdown:"UY4rxJ7bGkcb5pKLiw9D"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/StoryDecorator/StoryDecorator.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lzjBIM_uXH2SAUHkwfCs{display:flex;justify-content:flex-start;align-items:center;gap:10px;margin-bottom:20px}","",{version:3,sources:["webpack://./src/homeworks/JSX_CSS/Components/StoryDecorator/StoryDecorator.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,QAAA,CACA,kBAAA",sourcesContent:[".container {\n  display: flex; /* Выравнивание кнопок по горизонтали */\n  justify-content: flex-start; /* Выравнивание кнопок слева */\n  align-items: center; /* Центрирование по вертикали */\n  gap: 10px; /* Расстояние между кнопками */\n  margin-bottom: 20px; /* Отступ снизу для остальных элементов */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"lzjBIM_uXH2SAUHkwfCs"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/ThemeProvider/theme.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root{--myApp-background-color: #333333;--myApp-background-color-hover: #2c2c2c;--myApp-text-color: #ffffff}.myApp-light{--myApp-background-color: #ffffff;--myApp-background-color-hover: #d8d8d8;--myApp-text-color: #333333}.myApp-dark{--myApp-background-color: #333333;--myApp-background-color-hover: #2c2c2c;--myApp-text-color: #ffffff}body{background-color:var(--myApp-background-color);color:var(--myApp-text-color)}","",{version:3,sources:["webpack://./src/homeworks/JSX_CSS/Components/ThemeProvider/theme.scss"],names:[],mappings:"AAUA,MACE,iCAAA,CACA,uCAAA,CACA,2BAAA,CAGF,aACE,iCAAA,CACA,uCAAA,CACA,2BAAA,CAGF,YACE,iCAAA,CACA,uCAAA,CACA,2BAAA,CAGF,KACE,8CAAA,CACA,6BAAA",sourcesContent:["// Dark theme variables\n$dark-background-color: #333333;\n$dark-background-color-hover: #2c2c2c;\n$dark-text-color: #ffffff;\n\n// Light theme variables\n$light-background-color: #ffffff;\n$light-background-color-hover: #d8d8d8;\n$light-text-color: #333333;\n\n:root {\n  --myApp-background-color: #{$dark-background-color};\n  --myApp-background-color-hover: #{$dark-background-color-hover};\n  --myApp-text-color: #{$dark-text-color};\n}\n\n.myApp-light {\n  --myApp-background-color: #{$light-background-color};\n  --myApp-background-color-hover: #{$light-background-color-hover};\n  --myApp-text-color: #{$light-text-color};\n}\n\n.myApp-dark {\n  --myApp-background-color: #{$dark-background-color};\n  --myApp-background-color-hover: #{$dark-background-color-hover};\n  --myApp-text-color: #{$dark-text-color};\n}\n\nbody {\n  background-color: var(--myApp-background-color);\n  color: var(--myApp-text-color);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jyl6esfecsOVmDwpuOMl{background-color:var(--myApp-background-color);width:30px;height:30px;background-size:contain;background-repeat:no-repeat;background-position:center;border:none;cursor:pointer}.mX2L2i4GteK5MhahbWhF{background-color:var(--myApp-background-color);width:100%;height:100%;object-fit:contain}","",{version:3,sources:["webpack://./src/homeworks/JSX_CSS/Components/ThemeToggleButton/ThemeToggleButton.module.scss"],names:[],mappings:"AAAA,sBACE,8CAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,2BAAA,CACA,0BAAA,CACA,WAAA,CACA,cAAA,CAGF,sBACE,8CAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA",sourcesContent:[".button {\n  background-color: var(--myApp-background-color); // from theme\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n  cursor: pointer;\n}\n\n.icon {\n  background-color: var(--myApp-background-color); // from theme\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"jyl6esfecsOVmDwpuOMl",icon:"mX2L2i4GteK5MhahbWhF"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Introduction.mdx":["./src/stories/Introduction.mdx",719,799]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./homeworks/JSX_CSS/Components/AddToCart/AddToCart.stories":["./src/homeworks/JSX_CSS/Components/AddToCart/AddToCart.stories.tsx",624],"./homeworks/JSX_CSS/Components/AddToCart/AddToCart.stories.tsx":["./src/homeworks/JSX_CSS/Components/AddToCart/AddToCart.stories.tsx",624],"./homeworks/JSX_CSS/Components/AppLayout/AppLayout.stories":["./src/homeworks/JSX_CSS/Components/AppLayout/AppLayout.stories.tsx",605],"./homeworks/JSX_CSS/Components/AppLayout/AppLayout.stories.tsx":["./src/homeworks/JSX_CSS/Components/AppLayout/AppLayout.stories.tsx",605],"./homeworks/JSX_CSS/Components/CartItem/CartItem.stories":["./src/homeworks/JSX_CSS/Components/CartItem/CartItem.stories.tsx",902],"./homeworks/JSX_CSS/Components/CartItem/CartItem.stories.tsx":["./src/homeworks/JSX_CSS/Components/CartItem/CartItem.stories.tsx",902],"./homeworks/JSX_CSS/Components/ContentModal/ContentModal.stories":["./src/homeworks/JSX_CSS/Components/ContentModal/ContentModal.stories.tsx",574],"./homeworks/JSX_CSS/Components/ContentModal/ContentModal.stories.tsx":["./src/homeworks/JSX_CSS/Components/ContentModal/ContentModal.stories.tsx",574],"./homeworks/JSX_CSS/Components/HeaderMenu/HeaderMenu.stories":["./src/homeworks/JSX_CSS/Components/HeaderMenu/HeaderMenu.stories.tsx",765],"./homeworks/JSX_CSS/Components/HeaderMenu/HeaderMenu.stories.tsx":["./src/homeworks/JSX_CSS/Components/HeaderMenu/HeaderMenu.stories.tsx",765],"./homeworks/JSX_CSS/Components/Logo/Logo.stories":["./src/homeworks/JSX_CSS/Components/Logo/Logo.stories.tsx",641],"./homeworks/JSX_CSS/Components/Logo/Logo.stories.tsx":["./src/homeworks/JSX_CSS/Components/Logo/Logo.stories.tsx",641],"./homeworks/JSX_CSS/Components/Operation/Operation.stories":["./src/homeworks/JSX_CSS/Components/Operation/Operation.stories.tsx",614],"./homeworks/JSX_CSS/Components/Operation/Operation.stories.tsx":["./src/homeworks/JSX_CSS/Components/Operation/Operation.stories.tsx",614],"./homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.stories":["./src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.stories.tsx",668],"./homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.stories.tsx":["./src/homeworks/JSX_CSS/Components/OperationSummary/OperationSummary.stories.tsx",668],"./homeworks/JSX_CSS/Components/ProductSummary/ProductSummary.stories":["./src/homeworks/JSX_CSS/Components/ProductSummary/ProductSummary.stories.tsx",220],"./homeworks/JSX_CSS/Components/ProductSummary/ProductSummary.stories.tsx":["./src/homeworks/JSX_CSS/Components/ProductSummary/ProductSummary.stories.tsx",220],"./stories/Button.stories":["./src/stories/Button.stories.ts",256],"./stories/Button.stories.ts":["./src/stories/Button.stories.ts",256],"./stories/Header.stories":["./src/stories/Header.stories.ts",758],"./stories/Header.stories.ts":["./src/stories/Header.stories.ts",758],"./stories/Page.stories":["./src/stories/Page.stories.ts",926,62],"./stories/Page.stories.ts":["./src/stories/Page.stories.ts",926,62]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[104],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);