"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[7994,6081],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/Tabs/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Tabs/index.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Texts and Buttons/Tabs *",component:___WEBPACK_IMPORTED_MODULE_1__.m};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.m,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={tabsData:[{id:10,name:"Benefits"},{id:20,name:"System Features"}],contentsData:[{id:5,component:__jsx("div",null,"benefits")},{id:2,component:__jsx("div",null,"system features")}],contextSlug:"",selectedIndexTable:1,setSelectedIndexTable:function setSelectedIndexTable(){return console.log("teste")}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Tabs {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/Container/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Container});var react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("container","mx-auto"),sm=(0,globals.ZP)("px-0","lg:px-20"),smAlt=(0,globals.ZP)("px-5","lg:px-20"),lg=(0,globals.ZP)("px-6","lg:px-36"),lgV2=(0,globals.ZP)("px-[15px]"),xlg=(0,globals.ZP)("px-5","sm:px-6","md:px-6","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xlgAlt=(0,globals.ZP)("px-0","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xxl=(0,globals.ZP)("px-8","lg:px-36"),containerGutter=function containerGutter(gutter){return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},sm,"sm"===gutter),smAlt,"smAlt"===gutter),lg,"lg"===gutter),lgV2,"lgV2"===gutter),xlg,"xlg"===gutter),xlgAlt,"xlgAlt"===gutter),xxl,"xxl"===gutter),"","none"===gutter))},containerWrapper=function containerWrapper(wrapper){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({"lg:mx-auto":"center"===(null==wrapper?void 0:wrapper.align)},"max-w-size-1216","1216"===(null==wrapper?void 0:wrapper.maxWidth)),"max-w-size-1246","1246"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1280px]","1280"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1600px]","1600"===(null==wrapper?void 0:wrapper.maxWidth)))},__jsx=react.createElement,Container=function Container(_ref){var gutter=_ref.gutter,children=_ref.children,containerStyles=_ref.containerStyles,id=_ref.id,style=_ref.style,wrappers=_ref.wrappers,_ref$tag=_ref.tag,tag=void 0===_ref$tag?"div":_ref$tag,props={id,style,className:containerGutter(gutter||"sm")+" "+containerWrapper(wrappers)+" "+(containerStyles||"")};return __jsx("section"===tag?"section":"div",props,children)};const components_Container=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{gutter:{defaultValue:null,description:"",name:"gutter",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"lgV2"'},{value:'"smAlt"'},{value:'"xlg"'},{value:'"xlgAlt"'},{value:'"xxl"'},{value:'"none"'}]}},containerStyles:{defaultValue:null,description:"",name:"containerStyles",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrappers:{defaultValue:null,description:"",name:"wrappers",required:!1,type:{name:"ContainerWrappers"}},tag:{defaultValue:{value:"div"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Container/index.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"components/Container/index.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./components/Tabs/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tabs});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),LinkStyle=__webpack_require__("./components/TextStyle/LinkStyle/index.tsx"),analytics=__webpack_require__("./utils/analytics/index.ts"),Container=__webpack_require__("./components/Container/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),DEFAULT_STYLES={flex:(0,globals.ZP)("flex"),buttonContainer:(0,globals.ZP)("flex","justify-between","mt-10","mb-4","w-full","px-2"),prevButtonMargin:(0,globals.ZP)(),nextButtonMargin:(0,globals.ZP)(),tabsDesktopContainer:(0,globals.ZP)("mb-20"),marginBottom:(0,globals.ZP)("mb-12","ml-6"),tabs:function tabs(active){return(0,globals.ZP)("border","border-[#E2E2E2]","lg:py-6","xl:py-12","lg:px-4","xl:px-13",{block:!0===active,hidden:!1===active})},button:function button(active){return(0,globals.ZP)("text-left","pl-6","first:ml-20","mx-2","w-72","text-lg","h-14","relative",'after:content-[""] after:absolute after:h-[2px] after:w-full after:block after:bg-[#E2E2E2] after:-bottom-[2px] after:left-0 after:z-1',{"bg-white border-b-0 after:bg-white after:opacity-1 font-bold text-[#0160A8] border border-[#E2E2E2] border-b-0":!0===active,"bg-gray-lighter relative after:opacity-0 text-gray-dark":!1===active})}},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Tabs=function Tabs(_ref){var tabsData=_ref.tabsData,contentsData=_ref.contentsData,selectedIndexTable=_ref.selectedIndexTable,setSelectedIndexTable=_ref.setSelectedIndexTable,contextSlug=_ref.contextSlug,_ref$containerGutter=_ref.containerGutter,containerGutter=void 0===_ref$containerGutter?"sm":_ref$containerGutter,customStyles=_ref.customStyles,_useState=(0,react.useState)(selectedIndexTable),activeTab=_useState[0],setActiveTab=_useState[1],styles=_objectSpread(_objectSpread({},DEFAULT_STYLES),customStyles),totalTabs=contentsData.length;(0,react.useEffect)((function(){setSelectedIndexTable(activeTab)}),[activeTab]);return __jsx(Container.Z,{gutter:containerGutter},__jsx("div",{className:styles.tabsDesktopContainer},__jsx("div",null,__jsx("div",{className:styles.flex},tabsData.map((function(_ref2,index){var id=_ref2.id,name=_ref2.name;return __jsx("button",{key:id,className:styles.button(contentsData[index].id===activeTab),onClick:function onClick(){return function onTabClick(index){analytics.c.tabClick(contextSlug,tabsData[index].name),setActiveTab(contentsData[index].id)}(index)}},name)}))),__jsx("div",{className:styles.tabs(contentsData[activeTab].id===activeTab)},contentsData[activeTab].component,function Buttons(){return __jsx("div",{className:styles.buttonContainer},__jsx("div",{className:styles.prevButtonMargin},activeTab>0&&__jsx("button",{onClick:function onClick(){return function Previous(){setActiveTab((function(prev){return prev-1}))}()}},__jsx(LinkStyle.Z,{arrowLeft:!0,text:"Previous",color:"gray",theme:"small",underline:!1,customStylesArrow:"!mr-1 !ml-0"}))),__jsx("div",{className:styles.nextButtonMargin},activeTab>=0&&activeTab<totalTabs-1&&__jsx("button",{onClick:function onClick(){return function Next(){setActiveTab((function(prev){return prev+1}))}()}},__jsx(LinkStyle.Z,{arrow:!0,text:"Next",color:"orange",theme:"small",underline:!1}))))}()))))};Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabsData:{defaultValue:null,description:"",name:"tabsData",required:!0,type:{name:"Tab[]"}},contentsData:{defaultValue:null,description:"",name:"contentsData",required:!0,type:{name:"Content[]"}},selectedIndexTable:{defaultValue:null,description:"",name:"selectedIndexTable",required:!1,type:{name:"number"}},setSelectedIndexTable:{defaultValue:null,description:"",name:"setSelectedIndexTable",required:!1,type:{name:"Dispatch<SetStateAction<number>>"}},contextSlug:{defaultValue:null,description:"",name:"contextSlug",required:!0,type:{name:"string"}},containerGutter:{defaultValue:{value:"sm"},description:"",name:"containerGutter",required:!1,type:{name:"GutterSize"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"ITabsStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Tabs/index.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"components/Tabs/index.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/LinkStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TextStyle_LinkStyle});var react=__webpack_require__("./node_modules/react/index.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),wrapper=(0,globals.ZP)("flex","flex-row","items-center","group"),styles_text=function text(theme,color,underline){var _classnames;return(0,globals.ZP)("cursor-pointer","font-bold","hover:underline",(_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-blue-light","group-hover:text-orange-light2"),"blue"==color),(0,globals.ZP)("text-orange","group-hover:text-orange-light2"),"orange"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-gray-light3","group-hover:text-orange-light2"),"gray"==color),(0,globals.ZP)("text-gray-dark","lg:text-orange","lg:group-hover:text-orange-light2"),"orangeBlackMobile"==color||"fullOrangeBlackMobile"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2"),"grayDark"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2","decoration-orange"),"orangeGray"==color),(0,globals.ZP)("text-xl","!leading-5"),"large"==theme),(0,globals.ZP)("text-lg","leading-lg"),"small"==theme),(0,globals.ZP)("text-base"),"base"==theme),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-sm"),"sm"==theme),(0,globals.ZP)("md:text-lg","md:leading-lg"),"mobile-base-desktop-lg"==theme),(0,globals.ZP)("text-base","md:text-base-xl"),"mobile-base-desktop-base-xl"==theme),(0,globals.ZP)("text-sm","md:text-base-xl"),"mobile-sm-desktop-large"==theme),(0,globals.ZP)("underline"),underline)))},styles_arrow=function arrow(theme,color){return(0,globals.ZP)("ml-1","inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},(0,globals.ZP)("text-orange","lg:group-hover:text-orange-light2"),"orange"==color||"orangeBlackMobile"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2"),"grayDark"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2"),"fullOrangeBlackMobile"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-gray-light3","group-hover:text-orange-light2"),"gray"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-orange","group-hover:text-orange-light2"),"orangeGray"==color),(0,globals.ZP)("text-2xl"),"large"==theme),(0,globals.ZP)("text-xl"),"small"==theme))},lastWordArrowWrapper=function lastWordArrowWrapper(underline){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},(0,globals.ZP)("underline"),underline))},playIcon=(0,globals.ZP)("ml-2","inline-block","align-middle","text-orange","group-hover:text-orange-light2","pb-1"),downloadIcon=function downloadIcon(theme,color){return(0,globals.ZP)("ml-1","inline-block","-mt-1",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},(0,globals.ZP)("text-orange","lg:group-hover:text-orange-light2"),"orange"==color||"orangeBlackMobile"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-gray-light3","group-hover:text-orange-light2"),"gray"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-2xl"),"large"==theme),(0,globals.ZP)("text-xl"),"small"==theme))},__jsx=react.createElement,LinkStyle=function LinkStyle(_ref){var text=_ref.text,_ref$arrow=_ref.arrow,arrow=void 0!==_ref$arrow&&_ref$arrow,_ref$arrowLeft=_ref.arrowLeft,arrowLeft=void 0!==_ref$arrowLeft&&_ref$arrowLeft,_ref$arrowIcon=_ref.arrowIcon,arrowIcon=void 0===_ref$arrowIcon?"right":_ref$arrowIcon,theme=_ref.theme,color=_ref.color,_ref$underline=_ref.underline,underline=void 0!==_ref$underline&&_ref$underline,labelAnalytics=_ref.labelAnalytics,customStyles=_ref.customStyles,customStylesArrow=_ref.customStylesArrow,_ref$eventAnalytics=_ref.eventAnalytics,eventAnalytics=void 0===_ref$eventAnalytics?"cta":_ref$eventAnalytics,_ref$breakArrowAndLas=_ref.breakArrowAndLastWord,breakArrowAndLastWord=void 0!==_ref$breakArrowAndLas&&_ref$breakArrowAndLas,actionAnalytics=_ref.actionAnalytics,_useState=(0,react.useState)(text),linkText=_useState[0],setLinkText=_useState[1],_useState2=(0,react.useState)(text),lastWord=_useState2[0],setLastWord=_useState2[1];(0,react.useEffect)((function(){var _text$substring,lastSpaceIndex=text.lastIndexOf(" ");breakArrowAndLastWord&&lastSpaceIndex>0?(setLinkText(text.substring(0,lastSpaceIndex)+" "),setLastWord(null!==(_text$substring=text.substring(lastSpaceIndex))&&void 0!==_text$substring?_text$substring:"")):(setLinkText(text),setLastWord(""))}),[text,breakArrowAndLastWord]);var getArrowElement=function getArrowElement(){switch(arrowIcon){case"right":return __jsx(hi_index_esm.WFu,{className:customStylesArrow+" "+styles_arrow(theme,color)});case"play":return __jsx(index_esm.Gzj,{className:playIcon,size:21});case"download":return __jsx(hi_index_esm.yFZ,{className:customStylesArrow+" "+downloadIcon(theme,color),size:26});case"circledDown":return __jsx(hi_index_esm.PeR,{className:customStylesArrow+" "+styles_arrow(theme,color)});case"chevronDown":return __jsx(hi_index_esm.kzR,{className:customStylesArrow+" "+styles_arrow(theme,color)});case"chevronUp":return __jsx(hi_index_esm.lVW,{className:customStylesArrow+" "+styles_arrow(theme,color)})}};return __jsx("div",{className:wrapper,onClick:function onClick(){return function handleClick(labelAnalytics){labelAnalytics&&analytics.c[eventAnalytics](labelAnalytics,actionAnalytics)}(labelAnalytics)}},__jsx("p",{className:styles_text(theme,color,underline)+" "+customStyles},arrowLeft&&__jsx(hi_index_esm.siY,{className:customStylesArrow+" "+styles_arrow(theme,color)}),(0,html_to_react.Parser)().parse(linkText),arrow&&function renderArrow(){return!arrowLeft&&breakArrowAndLastWord?__jsx("span",{className:lastWordArrowWrapper(underline)},lastWord,getArrowElement()):getArrowElement()}()))};LinkStyle.displayName="LinkStyle";const TextStyle_LinkStyle=LinkStyle;try{LinkStyle.displayName="LinkStyle",LinkStyle.__docgenInfo={description:"",displayName:"LinkStyle",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},arrow:{defaultValue:{value:"false"},description:"",name:"arrow",required:!1,type:{name:"boolean"}},arrowLeft:{defaultValue:{value:"false"},description:"",name:"arrowLeft",required:!1,type:{name:"boolean"}},arrowIcon:{defaultValue:{value:"right"},description:"",name:"arrowIcon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"right"'},{value:'"download"'},{value:'"circledDown"'},{value:'"chevronDown"'},{value:'"chevronUp"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"small"'},{value:'"large"'},{value:'"mobile-sm-desktop-large"'},{value:'"mobile-base-desktop-lg"'},{value:'"mobile-base-desktop-base-xl"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"white"'},{value:'"orange"'},{value:'"gray"'},{value:'"grayDark"'},{value:'"orangeGray"'},{value:'"orangeBlackMobile"'},{value:'"fullOrangeBlackMobile"'}]}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},customStylesArrow:{defaultValue:null,description:"",name:"customStylesArrow",required:!1,type:{name:"string"}},eventAnalytics:{defaultValue:{value:"cta"},description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"navigationToSection"'},{value:'"assets"'}]}},breakArrowAndLastWord:{defaultValue:{value:"false"},description:"",name:"breakArrowAndLastWord",required:!1,type:{name:"boolean"}},actionAnalytics:{defaultValue:null,description:"",name:"actionAnalytics",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/LinkStyle/index.tsx#LinkStyle"]={docgenInfo:LinkStyle.__docgenInfo,name:"LinkStyle",path:"components/TextStyle/LinkStyle/index.tsx#LinkStyle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);