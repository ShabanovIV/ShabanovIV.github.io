"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[914],{"./src/components/CartItem/CartItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CartItemStory:()=>CartItemStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CartItem_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CartItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CartItem_module.Z,options);const CartItem_CartItem_module=CartItem_module.Z&&CartItem_module.Z.locals?CartItem_module.Z.locals:void 0,Remove_light_namespaceObject=__webpack_require__.p+"static/media/Remove_light.011cecf1.png",Remove_dark_namespaceObject=__webpack_require__.p+"static/media/Remove_dark.c81a9357.png";var ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartItem=function CartItem(_ref){var id=_ref.id,name=_ref.name,price=_ref.price,image=_ref.image,onRemove=_ref.onRemove,theme=(0,ThemeProvider.Fg)().theme;return(0,jsx_runtime.jsxs)("div",{className:CartItem_CartItem_module.cartItem,children:[(0,jsx_runtime.jsx)("img",{src:image,alt:name,className:CartItem_CartItem_module.cartItemImage}),(0,jsx_runtime.jsxs)("div",{className:CartItem_CartItem_module.cartItemDetails,children:[(0,jsx_runtime.jsxs)("div",{className:CartItem_CartItem_module.cartItemHeader,children:[(0,jsx_runtime.jsx)("h3",{children:name}),(0,jsx_runtime.jsxs)("p",{children:[price," ₽"]})]}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return onRemove(id)},className:CartItem_CartItem_module.cartItemRemoveButton,children:(0,jsx_runtime.jsx)("img",{src:theme===ThemeProvider.b3.Dark?Remove_dark_namespaceObject:Remove_light_namespaceObject,alt:"Удалить товар"})})]})]})};CartItem.displayName="CartItem";const CartItem_CartItem=CartItem;try{CartItem.displayName="CartItem",CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CartItem/CartItem.tsx#CartItem"]={docgenInfo:CartItem.__docgenInfo,name:"CartItem",path:"src/components/CartItem/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}var _1=__webpack_require__("./src/components/StoryImages/1.jpg");const CartItem_stories={title:"components/CartItem",component:CartItem_CartItem};var CartItemStory={render:function render(){return(0,jsx_runtime.jsx)("div",{style:{width:"400px"},children:(0,jsx_runtime.jsx)(CartItem_CartItem,{id:1,name:"Бюджетный сноуборд",price:999,image:_1,onRemove:function onRemove(id){return console.log("Удаление элемента с id: ".concat(id))}})})}};CartItemStory.parameters={...CartItemStory.parameters,docs:{...CartItemStory.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    width: '400px'\n  }}>\n      <CartItem id={1} name={'Бюджетный сноуборд'} price={999} image={greenSnowboard} onRemove={id => console.log(`Удаление элемента с id: ${id}`)} />\n    </div>\n}",...CartItemStory.parameters?.docs?.source}}};const __namedExportsOrder=["CartItemStory"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".iSLCo5UfTsug2PIOqWVg{background-color:var(--myApp-background-color);color:var(--myApp-text-color);display:flex;align-items:center;margin-bottom:20px;padding:0px;border:1px solid #ddd;border-radius:8px;height:100px;position:relative}._GXIzeionPXU7qnANaVZ{height:100%;object-fit:cover;border-radius:8px;margin-right:20px}.kPD3w2Mc7lIMoPJvdYm5{background-color:var(--myApp-background-color);color:var(--myApp-text-color);flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;height:100%;position:relative}.q4HgXEvwefzyMxlXn9vd{background-color:var(--myApp-background-color);color:var(--myApp-text-color);display:flex;flex-direction:column;justify-content:center;margin-bottom:10px}.q4HgXEvwefzyMxlXn9vd h3{background-color:var(--myApp-background-color);color:var(--myApp-text-color);margin:0;font-size:18px;font-weight:bold}.q4HgXEvwefzyMxlXn9vd p{background-color:var(--myApp-background-color);color:var(--myApp-text-color);margin:5px 0;font-size:16px}.CiLo9Ww26tMhEBVKhhdu{background-color:rgba(0,0,0,0);position:absolute;top:0;right:0;width:32px;height:32px;border:none;cursor:pointer;padding:0}.CiLo9Ww26tMhEBVKhhdu img{width:100%;height:100%;opacity:.7}","",{version:3,sources:["webpack://./src/components/CartItem/CartItem.module.scss"],names:[],mappings:"AAAA,sBACE,8CAAA,CACA,6BAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,YAAA,CACA,iBAAA,CAGF,sBACE,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,iBAAA,CAGF,sBACE,8CAAA,CACA,6BAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,iBAAA,CAGF,sBACE,8CAAA,CACA,6BAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CAGF,yBACE,8CAAA,CACA,6BAAA,CACA,QAAA,CACA,cAAA,CACA,gBAAA,CAGF,wBACE,8CAAA,CACA,6BAAA,CACA,YAAA,CACA,cAAA,CAGF,sBACE,8BAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,SAAA,CAGF,0BACE,UAAA,CACA,WAAA,CACA,UAAA",sourcesContent:[".cartItem {\n  background-color: var(--myApp-background-color); // from theme\n  color: var(--myApp-text-color); // from theme\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 0px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 100px;\n  position: relative;\n}\n\n.cartItemImage {\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-right: 20px;\n}\n\n.cartItemDetails {\n  background-color: var(--myApp-background-color); // from theme\n  color: var(--myApp-text-color); // from theme\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  position: relative;\n}\n\n.cartItemHeader {\n  background-color: var(--myApp-background-color); // from theme\n  color: var(--myApp-text-color); // from theme\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.cartItemHeader h3 {\n  background-color: var(--myApp-background-color); // from theme\n  color: var(--myApp-text-color); // from theme\n  margin: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.cartItemHeader p {\n  background-color: var(--myApp-background-color); // from theme\n  color: var(--myApp-text-color); // from theme\n  margin: 5px 0;\n  font-size: 16px;\n}\n\n.cartItemRemoveButton {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.cartItemRemoveButton img {\n  width: 100%;\n  height: 100%;\n  opacity: 0.7;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={cartItem:"iSLCo5UfTsug2PIOqWVg",cartItemImage:"_GXIzeionPXU7qnANaVZ",cartItemDetails:"kPD3w2Mc7lIMoPJvdYm5",cartItemHeader:"q4HgXEvwefzyMxlXn9vd",cartItemRemoveButton:"CiLo9Ww26tMhEBVKhhdu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/StoryImages/1.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/1.2e48d281.jpg"}}]);