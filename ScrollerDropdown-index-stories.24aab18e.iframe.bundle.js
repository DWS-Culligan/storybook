"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[3627],{"./components/ScrollerDropdown/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_Menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./contexts/Menu/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ScrollerDropdown/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"ScrollerDropdown",component:___WEBPACK_IMPORTED_MODULE_2__.L,parameters:{viewport:{defaultViewport:"mobile",viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}}}}},includeStories:["Default"]};var Template=function Template(args){return __jsx(_contexts_Menu__WEBPACK_IMPORTED_MODULE_1__.K,null,__jsx(___WEBPACK_IMPORTED_MODULE_2__.L,args),";")};Template.displayName="Template";var Default=Template.bind({});Default.args={text:"Select and jump to using the menu below.",items:[{title:"Benefits",src:"benefits",offset:-170,offsetMobile:-70},{title:"Bottled Water Delivery",src:"delivery"},{title:"Water Dispensers",src:"dispensers"},{title:"Bottleless Coolers",src:"bottlelessCoolers"},{title:"Reviews",src:"reviews-banner"},{title:"FAQs",src:"faq"},{title:"Resources",src:"resources",offset:-160,offsetMobile:-80}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <MenuProvider>\r\n    <ScrollerDropdown {...args} />;\r\n  </MenuProvider>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/ScrollerDropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ScrollerDropdown});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),index_esm=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),modules=__webpack_require__("./node_modules/react-scroll/modules/index.js"),BodyStyle=__webpack_require__("./components/TextStyle/BodyStyle/index.tsx"),Menu=__webpack_require__("./contexts/Menu/index.tsx"),analytics=__webpack_require__("./utils/analytics/index.ts"),globals=__webpack_require__("./styles/globals.ts"),scrollerDropdownFlexContainer=(0,globals.ZP)("px-5","py-5","lg:hidden","flex","justify-center"),scrollerDropdownContainer=(0,globals.ZP)("relative","h-full","w-[304px]","px-1"),containerList=(0,globals.ZP)("w-full","bg-gray-lighter","rounded-b-md","px-5","z-10","absolute"),dropdown=(0,globals.ZP)("text-black","flex","flex-row","border-solid","border-1","border-gray-light5","justify-between","w-full","bg-white","font-medium","rounded-sm","text-sm","px-4","py-2.5"),dropdownText=(0,globals.ZP)("flex-0","font-bold","text-gray-dark"),scrollerDropdownListStyle=(0,globals.ZP)("py-1","text-sm","text-gray-700","divide-y","divide-solid","divide-gray-light"),scrollerDropdownButtonStyle=(0,globals.ZP)("block","py-4","w-full","text-left","hover:text-gray"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var ScrollerDropdown=function ScrollerDropdown(_ref){var items=_ref.items,paramScroll=_ref.paramScroll,text=_ref.text,customScrollerDropdownStyles=_ref.customScrollerDropdownStyles,additionalOnScrollAction=_ref.additionalOnScrollAction,_customScrollerDropdo=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},customScrollerDropdownStyles),scrollerDropdownFlexContainerCustom=_customScrollerDropdo.scrollerDropdownFlexContainerCustom,scrollerDropdownContainerCustom=_customScrollerDropdo.scrollerDropdownContainerCustom,scrollerDropdownButtonCustom=_customScrollerDropdo.scrollerDropdownButtonCustom;if(!items)return null;var _useState=(0,react.useState)(!1),dropdownToggle=_useState[0],setDropdownToggle=_useState[1],_useState2=(0,react.useState)(items[0].title),selectedItem=_useState2[0],setSelectedItem=_useState2[1],scrollPage=(0,react.useCallback)((function(_ref2){var src=_ref2.src,title=_ref2.title,_ref2$offsetMobile=_ref2.offsetMobile,offsetMobile=void 0===_ref2$offsetMobile?null:_ref2$offsetMobile;additionalOnScrollAction&&additionalOnScrollAction(src),modules.OK.scrollTo(src,{duration:800,smooth:"easeInOutQuart",offset:null!=offsetMobile?offsetMobile:-47}),setSelectedItem(title),setDropdownToggle(!1)}),[]),router=(0,next_router.useRouter)(),menuContext=(0,Menu.H)();return(0,react.useEffect)((function(){!function scrollOnPageLoad(){if(menuContext.state.isMobile&&paramScroll&&router.query[paramScroll]){var scrollTo=router.query[paramScroll];setTimeout((function(){if(scrollTo&&"string"==typeof scrollTo){var menuItem=items.find((function(item){return item.src===scrollTo}));menuItem&&scrollPage(menuItem)}}),100)}}()}),[router.query]),__jsx("div",{className:"".concat(scrollerDropdownFlexContainer," ").concat(scrollerDropdownFlexContainerCustom)},__jsx("div",{className:"".concat(scrollerDropdownContainer," ").concat(scrollerDropdownContainerCustom)},text?__jsx("div",{className:"mb-3"},__jsx(BodyStyle.G,{color:"grey",size:"md"},text)):"",__jsx("button",{id:"dropdownDefault","data-dropdown-toggle":"dropdown",className:"".concat(dropdown," ").concat(scrollerDropdownButtonCustom),type:"button",onClick:function handleDropDown(){var switchOpen=dropdownToggle;setDropdownToggle(switchOpen=!switchOpen)}},__jsx("span",{className:dropdownText},selectedItem||items[0].title),__jsx("span",{className:"w-4 h-4 p-0 m-0 flex-0"},dropdownToggle&&__jsx(index_esm.Tvk,{className:"text-xl"})||__jsx(index_esm.ebp,{className:"text-xl"}))),dropdownToggle&&__jsx("div",{id:"dropdown",className:containerList},__jsx("ul",{className:scrollerDropdownListStyle,"aria-labelledby":"dropdownDefault"},items.map((function(item,index){return __jsx("li",{key:index,onClick:function onClick(){return analytics.c.navigationToSection(item.title)}},__jsx("button",{onClick:function onClick(){return scrollPage(item)},className:scrollerDropdownButtonStyle},item.title))}))))))};ScrollerDropdown.displayName="ScrollerDropdown";try{ScrollerDropdown.displayName="ScrollerDropdown",ScrollerDropdown.__docgenInfo={description:"",displayName:"ScrollerDropdown",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"IScrollerDropdownItem[]"}},customScrollerDropdownStyles:{defaultValue:null,description:"",name:"customScrollerDropdownStyles",required:!1,type:{name:"CustomScrollerDropdownStyles"}},paramScroll:{defaultValue:null,description:"",name:"paramScroll",required:!1,type:{name:"string"}},additionalOnScrollAction:{defaultValue:null,description:"",name:"additionalOnScrollAction",required:!1,type:{name:"function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ScrollerDropdown/index.tsx#ScrollerDropdown"]={docgenInfo:ScrollerDropdown.__docgenInfo,name:"ScrollerDropdown",path:"components/ScrollerDropdown/index.tsx#ScrollerDropdown"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/BodyStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>BalancerBodyStyle,G:()=>BodyStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),sizeLegal=(0,globals.ZP)("text-xs","leading-4"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeMd=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5"),sizeMdNoMobile=(0,globals.ZP)("text-base","leading-5"),sizeLg=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg"),sizeLgNoMobile=(0,globals.ZP)("text-lg","leading-lg"),sizeXl=(0,globals.ZP)("text-1.5xl","leading-1.5xl","lg:text-1.5xl","lg:leading-1.5xl"),size20px=(0,globals.ZP)("text-xl","leading-6"),styles_text=function text(size,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-blue"),"blue"==color),(0,globals.ZP)("text-blue-dark3"),"blue-dark3"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-blue-light"),"blue-light"==color),sizeLegal,"legal"==size),sizeSm,"sm"==size),haveMobile?sizeMd:sizeMdNoMobile,"md"==size),haveMobile?sizeLg:sizeLgNoMobile,"lg"==size),(0,defineProperty.Z)((0,defineProperty.Z)(_classnames,sizeXl,"xl"==size),size20px,"20px"==size)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var BodyStyle=function BodyStyle(_ref){var size=_ref.size,color=_ref.color,haveMobile=_ref.haveMobile,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,children=_ref.children,additionalProps=_ref.additionalProps,props=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(size,color,haveMobile)+" "+customStyles},additionalProps),isDiv="object"==typeof children&&"p"===children.type||Array.isArray(children)&&("p"===children[0].type||Array.isArray(children[0])&&"p"===children[0][0].type);return __jsx(isDiv?"div":"p",props,children)},BalancerBodyStyle=function BalancerBodyStyle(_ref2){var size=_ref2.size,color=_ref2.color,haveMobile=_ref2.haveMobile,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:"p",ratio:1,nonce:"",preferNative:!0}:_ref2$balancerOptions;return __jsx(dist.SA,(0,esm_extends.Z)({ratio:balancerOptions.ratio,as:balancerOptions.as,nonce:balancerOptions.nonce,preferNative:balancerOptions.preferNative,className:"".concat(styles_text(size,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerBodyStyle.displayName="BalancerBodyStyle";try{BodyStyle.displayName="BodyStyle",BodyStyle.__docgenInfo={description:"",displayName:"BodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BodyStyle"]={docgenInfo:BodyStyle.__docgenInfo,name:"BodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BodyStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerBodyStyle.displayName="BalancerBodyStyle",BalancerBodyStyle.__docgenInfo={description:"",displayName:"BalancerBodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"]={docgenInfo:BalancerBodyStyle.__docgenInfo,name:"BalancerBodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"})}catch(__react_docgen_typescript_loader_error){}},"./contexts/Menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>useMenu,K:()=>MenuProvider});var C_Users_Marcelo_Ribeiro_Documents_GitHub_culligan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Marcelo_Ribeiro_Documents_GitHub_culligan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var MenuContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function menuReducer(_state,action){switch(action.type){case"set_menu":return _objectSpread(_objectSpread({},_state),{},{menu:action.payload.data});case"set_menu_toggle":return _objectSpread(_objectSpread({},_state),{},{menuOpen:action.payload.menuOpen});case"set_active_site":return _objectSpread(_objectSpread({},_state),{},{activeSite:action.payload.activeSite});case"set_show_dealer_button":return _objectSpread(_objectSpread({},_state),{},{showDealerButton:action.payload.showDealerButton});case"set_is_mobile":return _objectSpread(_objectSpread({},_state),{},{isMobile:action.payload.isMobile})}}var initialState={menu:void 0,menuOpen:!1},MenuProvider=function MenuProvider(_ref){var children=_ref.children,_useReducer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(menuReducer,initialState),value={state:_useReducer[0],dispatch:_useReducer[1]};return __jsx(MenuContext.Provider,{value},children)};MenuProvider.displayName="MenuProvider";var useMenu=function useMenu(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);if(void 0===context)throw new Error("useMenu must be used within a MenuProvider");return context};try{MenuProvider.displayName="MenuProvider",MenuProvider.__docgenInfo={description:"",displayName:"MenuProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["contexts/Menu/index.tsx#MenuProvider"]={docgenInfo:MenuProvider.__docgenInfo,name:"MenuProvider",path:"contexts/Menu/index.tsx#MenuProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);