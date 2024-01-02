"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[64,3514,6081],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/Wizard/Controls/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FirstPage:()=>FirstPage,LastPage:()=>LastPage,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Wizard/Controls/index.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Section/Scheduler/Controls",component:___WEBPACK_IMPORTED_MODULE_1__.Z};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={previousPage:function previousPage(values){console.log("Previous Page:",values)},isFirstPage:!1,isLastPage:!1,isSubmitting:!1,success:!1,error:!1,step:1,loading:!1};var FirstPage=Template.bind({});FirstPage.args={previousPage:function previousPage(values){console.log("Previous Page:",values)},isFirstPage:!0,isLastPage:!1,isSubmitting:!1,success:!1,error:!1,step:0,loading:!1};var LastPage=Template.bind({});LastPage.args={previousPage:function previousPage(values){console.log("Previous Page:",values)},isFirstPage:!1,isLastPage:!0,isSubmitting:!1,success:!1,error:!1,step:2,loading:!1};var Loading=Template.bind({});Loading.args={previousPage:function previousPage(values){console.log("Previous Page:",values)},isFirstPage:!1,isLastPage:!1,isSubmitting:!0,success:!1,error:!1,step:1,loading:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Controls {...args} />",...Default.parameters?.docs?.source}}},FirstPage.parameters={...FirstPage.parameters,docs:{...FirstPage.parameters?.docs,source:{originalSource:"args => <Controls {...args} />",...FirstPage.parameters?.docs?.source}}},LastPage.parameters={...LastPage.parameters,docs:{...LastPage.parameters?.docs,source:{originalSource:"args => <Controls {...args} />",...LastPage.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <Controls {...args} />",...Loading.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FirstPage","LastPage","Loading"]},"./components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),anchor_link=__webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"),anchor_link_default=__webpack_require__.n(anchor_link),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),fi_index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),styles_button=((0,globals.ZP)("inline-block"),(0,globals.ZP)("relative","h-10","font-bold","text-sm","px-3","transition-colors","duration-200","ease-in","flex","flex-nowrap","items-center","justify-center","leading-base")),filled=(0,globals.ZP)(styles_button,"border-orange","bg-orange","text-white","hover:bg-orange-light","hover:border-orange-light"),ghost=(0,globals.ZP)(styles_button,"border-orange","bg-transparent","hover:bg-orange-light","hover:border-orange-light"),ghostAlt=(0,globals.ZP)(styles_button,"border-white","text-white","bg-transparent","hover:text-orange-light2","hover:bg-white","hover:border-white"),darkBlue=(0,globals.ZP)(styles_button,"border-blue-dark","bg-blue-dark","text-white","hover:bg-orange-light","hover:border-orange-light"),outlinedGray=(0,globals.ZP)(styles_button,"border-gray-dark","border-2","bg-transparent","text-gray-dark","hover:bg-orange-light","hover:border-orange-light","hover:text-white"),disabled=(0,globals.ZP)(styles_button,"bg-gray-lighter","border-gray-lighter","text-gray-dark","cursor-not-allowed"),orangeLink=(0,globals.ZP)("text-gray-dark","underline","underline-offset-2","decoration-orange","hover:text-orange-dark2","border-none","font-bold"),sizeBase=(0,globals.ZP)("text-base","leading-base"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeLg=(0,globals.ZP)("text-lg","leading-lg"),loadingIcon=function loadingIcon(visible){return(0,globals.ZP)("animate-spin","absolute","z-10",(0,defineProperty.Z)((0,defineProperty.Z)({},"visible",visible),"invisible",!visible))},linkDefaults=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light"),linkAlt=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light2"),linkArrow=(0,globals.ZP)(linkDefaults,"flex","flex-row","items-center"),linkArrowAlt=(0,globals.ZP)(linkAlt,"flex","flex-row","items-center"),linkArrowBlack=(0,globals.ZP)("text-gray-dark","font-bold","underline","flex","flex-row","items-center"),linkPlay=(0,globals.ZP)(linkAlt,"flex","flex-row","items-end","gap-1"),arrowBase=(0,globals.ZP)("w-6","h-6"),arrowSm=(0,globals.ZP)("w-5","h-5"),arrowLg=(0,globals.ZP)("w-7","h-7"),arrowLeft=(0,globals.ZP)("mr-2"),arrowRight=(0,globals.ZP)("ml-0.5"),arrowRightBlack=(0,globals.ZP)("ml-1","-mt-0.5","text-orange"),downloadLg=(0,globals.ZP)("w-5","h-5","ml-1","mb-1"),arrow=function arrow(size,variant){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},arrowBase,"base"===size),arrowSm,"sm"===size),arrowLg,"lg"===size),arrowLeft,"arrow-left"===variant),arrowRight,"arrow-right"===variant||"arrow-right-alt"===variant),arrowRightBlack,"arrow-right-black"===variant))},download=function download(size){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},downloadLg,"lg"===size||"sm"===size||"base"===size))},buttonVariant=function buttonVariant(variant,size,customBorder,customRounded){var _classnames5;return(0,globals.ZP)("cursor-pointer",(_classnames5={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,filled,"filled"===variant||"fulled"===variant),ghost,"ghost"===variant),ghostAlt,"ghostAlt"===variant),darkBlue,"dark-blue"===variant),outlinedGray,"outlined-gray"===variant),disabled,"disabled"===variant),linkArrow,"arrow-right"===variant||"arrow-left"===variant),linkArrowAlt,"arrow-right-alt"===variant),linkArrowBlack,"arrow-right-black"===variant),linkPlay,"play"===variant),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,orangeLink,"orangeLink"===variant),sizeBase,"base"===size),sizeSm,"sm"===size),sizeLg,"lg"===size),linkDefaults,"download"===variant),"border",!customBorder),"rounded",!customRounded)))},__jsx=react.createElement,InternalLink=function InternalLink(props){if("href"in props){var _props$size,_props$useLegacyLink,commonProps={"data-testid":props.data?props.data.testid:null,onClick:props.onClick,target:props.external?"_blank":null,"aria-label":props.label,className:buttonVariant(props.variant,null!==(_props$size=props.size)&&void 0!==_props$size?_props$size:"sm",!0)+" "+props.customStyles},useLegacyLink=null!==(_props$useLegacyLink=props.useLegacyLink)&&void 0!==_props$useLegacyLink&&_props$useLegacyLink;return props.href.startsWith("#")?__jsx(anchor_link_default(),(0,esm_extends.Z)({},commonProps,{href:props.href,offset:props.offset}),props.children):useLegacyLink?__jsx("a",(0,esm_extends.Z)({},commonProps,{href:props.href}),props.children):__jsx(link_default(),{href:props.href,passHref:!0},__jsx("a",commonProps,props.children))}},Button=function Button(props){var _props$data,_props$data2,_props$size2,_props$size3,_props$size4,handleClick=function handleClick(e){var _props$eventAnalytics,eventAnalytics=null!==(_props$eventAnalytics=props.eventAnalytics)&&void 0!==_props$eventAnalytics?_props$eventAnalytics:"cta";props.onClick&&props.onClick(e),props.fireAnalytics&&props.labelAnalytics&&analytics.c[eventAnalytics](props.labelAnalytics,null),props.fireAnalytics&&!props.labelAnalytics&&props.label&&analytics.c[eventAnalytics](props.label,null)},dataTestId=null!==(_props$data=props.data)&&void 0!==_props$data&&_props$data.isMobile?"button-mobile-".concat(props.data.testid):"button-desktop-".concat(null===(_props$data2=props.data)||void 0===_props$data2?void 0:_props$data2.testid);return"href"in props?__jsx(InternalLink,(0,esm_extends.Z)({},props,{onClick:handleClick,offset:props.offset}),__jsx("p",null,"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size2=props.size)&&void 0!==_props$size2?_props$size2:"base","arrow-left")}),props.children,props.variant.includes("arrow-right")&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"download"===props.variant&&__jsx(fi_index_esm._hL,{className:download(props.size?props.size:"base")}))):__jsx("button",{"data-testid":null!=dataTestId?dataTestId:null,onClick:handleClick,"aria-label":props.label,type:props.type,disabled:"loading"===props.state||"success"===props.state,className:buttonVariant(props.variant,null!==(_props$size3=props.size)&&void 0!==_props$size3?_props$size3:"sm",props.customBorder,props.customRounded)+" "+props.customStyles},"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size4=props.size)&&void 0!==_props$size4?_props$size4:"base","arrow-left")}),"loading"===props.state?__jsx(react.Fragment,null,__jsx(index_esm.xz6,{className:loadingIcon("loading"===props.state)}),__jsx("span",{className:"loading"===props.state?"invisible":"visible"},props.children)):props.children,"arrow-right"===props.variant&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"play"===props.variant&&__jsx(fa_index_esm.Gzj,{size:19}))};const components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},useLegacyLink:{defaultValue:null,description:"",name:"useLegacyLink",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"play"'},{value:'"icon"'},{value:'"download"'},{value:'"fulled"'},{value:'"filled"'},{value:'"ghost"'},{value:'"ghostAlt"'},{value:'"arrow-right"'},{value:'"arrow-right-black"'},{value:'"arrow-right-alt"'},{value:'"arrow-left"'},{value:'"dark-blue"'},{value:'"outlined-gray"'},{value:'"disabled"'},{value:'"orangeLink"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"TTailwindString"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event?: any) => any"}},fireAnalytics:{defaultValue:null,description:"",name:"fireAnalytics",required:!1,type:{name:"boolean"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},customBorder:{defaultValue:null,description:"",name:"customBorder",required:!1,type:{name:"boolean"}},customRounded:{defaultValue:null,description:"",name:"customRounded",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"IButtonData"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},eventAnalytics:{defaultValue:null,description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"resourcesCard"'},{value:'"scheduleAnAppointment"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"success"'},{value:'"error"'},{value:'"loading"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Wizard/Controls/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Wizard_Controls});var react=__webpack_require__("./node_modules/react/index.js"),modules=__webpack_require__("./node_modules/react-scroll/modules/index.js"),Button=__webpack_require__("./components/Button/index.tsx"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),basebtnCustomStyles=((0,globals.ZP)("flex","justify-between","flex-col-reverse","items-start","md:gap-y-0"),(0,globals.ZP)("min-w-full","md:w-64","md:min-w-max","border-orange","bg-orange","text-white","border-2")),basebtnTransparentCustomStyles=(0,globals.ZP)("min-w-full","md:w-64","md:min-w-max","border-orange","bg-transparent","text-orange","border-2","hover:text-white","uppercase"),baseBackBtnCustomStyles=(0,globals.ZP)("text-sm","md:text-sm","mt-10","text-gray"),mainWrapper=(0,globals.ZP)("flex","justify-between","flex-col","items-start","md:gap-y-0","w-full"),textWrapper=(0,globals.ZP)("flex","justify-between","items-start","w-full","flex-col","pb-10"),buttonsWrapper=(0,globals.ZP)("flex","justify-between","flex-col-reverse","items-start","md:gap-y-0","w-full"),textMobile=(0,globals.ZP)("block","md:hidden","text-sm","leading-5","font-bold","w-48","xs:w-auto","text-gray-dark"),textDesktop=(0,globals.ZP)("md:block","hidden","text-sm","leading-5","font-bold","text-gray-dark"),visiblebtnCustomStyles=(0,globals.ZP)("visible","uppercase"),invisiblebtnCustomStyles=(0,globals.ZP)("invisible"),btnCustomStyles=function btnCustomStyles(visible){return(0,globals.ZP)(basebtnCustomStyles,(0,defineProperty.Z)((0,defineProperty.Z)({},visiblebtnCustomStyles,visible),invisiblebtnCustomStyles,!visible))},visiblebtnBackBtn=(0,globals.ZP)("visible"),backBtnCustomStyles=function backBtnCustomStyles(visible){return(0,globals.ZP)(baseBackBtnCustomStyles,(0,defineProperty.Z)((0,defineProperty.Z)({},visiblebtnBackBtn,visible),invisiblebtnCustomStyles,!visible))},__jsx=react.createElement,Controls=function Controls(props){var changeButtonText=function changeButtonText(step){switch(step){case 0:return"Next: choose date & time";case 1:return"Submit";default:return"Next"}};function scrollPage(){modules.OK.scrollTo("scroll-container",{duration:800,smooth:"easeInOutQuart",offset:-75})}return __jsx(react.Fragment,null,__jsx("div",{className:mainWrapper,style:{gridColumn:"auto / span 12"}},1===props.step?__jsx("div",{className:textWrapper},__jsx("p",{className:textMobile},"Click 'Submit' to Schedule Your Appointment"),__jsx("p",{className:textDesktop},"Click 'Submit' to Schedule Your Appointment"),__jsx("p",{className:"text-sm leading-5"},"A local Culligan Water expert will contact you to confirm your availability and tell you what to expect.")):null,__jsx("div",{className:buttonsWrapper},0!==props.step&&__jsx(Button.Z,{data:{testid:"scheduler-back-button"},variant:"arrow-left",type:"button",onClick:function onClick(){return function scrollPageButtonBack(){scrollPage(),props.previousPage(1)}()},customStyles:backBtnCustomStyles(0!==props.step),label:"Back",customBorder:!0},"Back"),0===props.step&&__jsx("span",null),2!==props.step&&0!==props.step&&__jsx(react.Fragment,null,__jsx(Button.Z,{onClick:function onClick(){return scrollPage()},data:{testid:"scheduler-next-button"},variant:"filled",type:"submit",state:props.loading?"loading":null,customBorder:!0,customStyles:btnCustomStyles(2!==props.step),label:"Next"},changeButtonText(props.step))),0===props.step&&__jsx(react.Fragment,null,__jsx(Button.Z,{onClick:function onClick(){return scrollPage()},data:{testid:"scheduler-next-button"},variant:"ghost",type:"submit",customBorder:!0,customStyles:basebtnTransparentCustomStyles,label:"Next"},changeButtonText(props.step))))))};const Wizard_Controls=Controls;try{Controls.displayName="Controls",Controls.__docgenInfo={description:"",displayName:"Controls",props:{previousPage:{defaultValue:null,description:"",name:"previousPage",required:!0,type:{name:"(values: any) => void"}},isFirstPage:{defaultValue:null,description:"",name:"isFirstPage",required:!0,type:{name:"boolean"}},isLastPage:{defaultValue:null,description:"",name:"isLastPage",required:!0,type:{name:"boolean"}},isSubmitting:{defaultValue:null,description:"",name:"isSubmitting",required:!0,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Wizard/Controls/index.tsx#Controls"]={docgenInfo:Controls.__docgenInfo,name:"Controls",path:"components/Wizard/Controls/index.tsx#Controls"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/next/dist/shared/lib/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.execOnce=function execOnce(fn){let result,used=!1;return(...args)=>(used||(used=!0,result=fn(...args)),result)},exports.getLocationOrigin=getLocationOrigin,exports.getURL=function getURL(){const{href}=window.location,origin=getLocationOrigin();return href.substring(origin.length)},exports.getDisplayName=getDisplayName,exports.isResSent=isResSent,exports.normalizeRepeatedSlashes=function normalizeRepeatedSlashes(url){const urlParts=url.split("?");return urlParts[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(urlParts[1]?`?${urlParts.slice(1).join("?")}`:"")},exports.loadGetInitialProps=loadGetInitialProps,exports.ST=exports.SP=exports.warnOnce=exports.isAbsoluteUrl=void 0;var _async_to_generator=__webpack_require__("./node_modules/next/node_modules/@swc/helpers/lib/_async_to_generator.js").Z;const ABSOLUTE_URL_REGEX=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/;function getLocationOrigin(){const{protocol,hostname,port}=window.location;return`${protocol}//${hostname}${port?":"+port:""}`}function getDisplayName(Component){return"string"==typeof Component?Component:Component.displayName||Component.name||"Unknown"}function isResSent(res){return res.finished||res.headersSent}function loadGetInitialProps(App,ctx){return _loadGetInitialProps.apply(this,arguments)}function _loadGetInitialProps(){return(_loadGetInitialProps=_async_to_generator((function*(App,ctx){const res=ctx.res||ctx.ctx&&ctx.ctx.res;if(!App.getInitialProps)return ctx.ctx&&ctx.Component?{pageProps:yield loadGetInitialProps(ctx.Component,ctx.ctx)}:{};const props=yield App.getInitialProps(ctx);if(res&&isResSent(res))return props;if(!props){const message=`"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;throw new Error(message)}return props}))).apply(this,arguments)}exports.isAbsoluteUrl=url=>ABSOLUTE_URL_REGEX.test(url);const SP="undefined"!=typeof performance;exports.SP=SP;const ST=SP&&["mark","measure","getEntriesByName"].every((method=>"function"==typeof performance[method]));exports.ST=ST;class DecodeError extends Error{}exports.DecodeError=DecodeError;class NormalizeError extends Error{}exports.NormalizeError=NormalizeError;class PageNotFoundError extends Error{constructor(page){super(),this.code="ENOENT",this.message=`Cannot find module for page: ${page}`}}exports.PageNotFoundError=PageNotFoundError;class MissingStaticPage extends Error{constructor(page,message){super(),this.message=`Failed to load static file for page: ${page} ${message}`}}exports.MissingStaticPage=MissingStaticPage;class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}exports.MiddlewareNotFoundError=MiddlewareNotFoundError,exports.warnOnce=_=>{}},"./node_modules/next/node_modules/@swc/helpers/lib/_async_to_generator.js":(__unused_webpack_module,exports)=>{function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}exports.Z=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}},"./node_modules/next/node_modules/@swc/helpers/lib/_extends.js":(__unused_webpack_module,exports)=>{function extends_(){return extends_=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},extends_.apply(this,arguments)}exports.Z=function _extends(){return extends_.apply(this,arguments)}},"./node_modules/next/node_modules/@swc/helpers/lib/_interop_require_wildcard.js":(__unused_webpack_module,exports)=>{function _getRequireWildcardCache(nodeInterop1){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop1)}exports.Z=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);