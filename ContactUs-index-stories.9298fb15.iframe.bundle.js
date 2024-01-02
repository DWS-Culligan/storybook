/*! For license information please see ContactUs-index-stories.9298fb15.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[9414],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./components/ContactUs/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_Recaptcha__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./contexts/Recaptcha/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ContactUs/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Contact Us *",component:___WEBPACK_IMPORTED_MODULE_2__.Z};var Template=function Template(args){return __jsx(_contexts_Recaptcha__WEBPACK_IMPORTED_MODULE_1__.x,null,__jsx(___WEBPACK_IMPORTED_MODULE_2__.Z,args))};Template.displayName="Template";var Default=Template.bind({});Default.args={customStyles:{wrapper:"h-full w-[350px] bg-gray-lighter p-5"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <RecaptchaProvider>\r\n    <ContactUs {...args} />\r\n  </RecaptchaProvider>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),anchor_link=__webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"),anchor_link_default=__webpack_require__.n(anchor_link),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),fi_index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),styles_button=((0,globals.ZP)("inline-block"),(0,globals.ZP)("relative","h-10","font-bold","text-sm","px-3","transition-colors","duration-200","ease-in","flex","flex-nowrap","items-center","justify-center","leading-base")),filled=(0,globals.ZP)(styles_button,"border-orange","bg-orange","text-white","hover:bg-orange-light","hover:border-orange-light"),ghost=(0,globals.ZP)(styles_button,"border-orange","bg-transparent","hover:bg-orange-light","hover:border-orange-light"),ghostAlt=(0,globals.ZP)(styles_button,"border-white","text-white","bg-transparent","hover:text-orange-light2","hover:bg-white","hover:border-white"),darkBlue=(0,globals.ZP)(styles_button,"border-blue-dark","bg-blue-dark","text-white","hover:bg-orange-light","hover:border-orange-light"),outlinedGray=(0,globals.ZP)(styles_button,"border-gray-dark","border-2","bg-transparent","text-gray-dark","hover:bg-orange-light","hover:border-orange-light","hover:text-white"),disabled=(0,globals.ZP)(styles_button,"bg-gray-lighter","border-gray-lighter","text-gray-dark","cursor-not-allowed"),orangeLink=(0,globals.ZP)("text-gray-dark","underline","underline-offset-2","decoration-orange","hover:text-orange-dark2","border-none","font-bold"),sizeBase=(0,globals.ZP)("text-base","leading-base"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeLg=(0,globals.ZP)("text-lg","leading-lg"),loadingIcon=function loadingIcon(visible){return(0,globals.ZP)("animate-spin","absolute","z-10",(0,defineProperty.Z)((0,defineProperty.Z)({},"visible",visible),"invisible",!visible))},linkDefaults=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light"),linkAlt=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light2"),linkArrow=(0,globals.ZP)(linkDefaults,"flex","flex-row","items-center"),linkArrowAlt=(0,globals.ZP)(linkAlt,"flex","flex-row","items-center"),linkArrowBlack=(0,globals.ZP)("text-gray-dark","font-bold","underline","flex","flex-row","items-center"),linkPlay=(0,globals.ZP)(linkAlt,"flex","flex-row","items-end","gap-1"),arrowBase=(0,globals.ZP)("w-6","h-6"),arrowSm=(0,globals.ZP)("w-5","h-5"),arrowLg=(0,globals.ZP)("w-7","h-7"),arrowLeft=(0,globals.ZP)("mr-2"),arrowRight=(0,globals.ZP)("ml-0.5"),arrowRightBlack=(0,globals.ZP)("ml-1","-mt-0.5","text-orange"),downloadLg=(0,globals.ZP)("w-5","h-5","ml-1","mb-1"),arrow=function arrow(size,variant){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},arrowBase,"base"===size),arrowSm,"sm"===size),arrowLg,"lg"===size),arrowLeft,"arrow-left"===variant),arrowRight,"arrow-right"===variant||"arrow-right-alt"===variant),arrowRightBlack,"arrow-right-black"===variant))},download=function download(size){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},downloadLg,"lg"===size||"sm"===size||"base"===size))},buttonVariant=function buttonVariant(variant,size,customBorder,customRounded){var _classnames5;return(0,globals.ZP)("cursor-pointer",(_classnames5={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,filled,"filled"===variant||"fulled"===variant),ghost,"ghost"===variant),ghostAlt,"ghostAlt"===variant),darkBlue,"dark-blue"===variant),outlinedGray,"outlined-gray"===variant),disabled,"disabled"===variant),linkArrow,"arrow-right"===variant||"arrow-left"===variant),linkArrowAlt,"arrow-right-alt"===variant),linkArrowBlack,"arrow-right-black"===variant),linkPlay,"play"===variant),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,orangeLink,"orangeLink"===variant),sizeBase,"base"===size),sizeSm,"sm"===size),sizeLg,"lg"===size),linkDefaults,"download"===variant),"border",!customBorder),"rounded",!customRounded)))},__jsx=react.createElement,InternalLink=function InternalLink(props){if("href"in props){var _props$size,_props$useLegacyLink,commonProps={"data-testid":props.data?props.data.testid:null,onClick:props.onClick,target:props.external?"_blank":null,"aria-label":props.label,className:buttonVariant(props.variant,null!==(_props$size=props.size)&&void 0!==_props$size?_props$size:"sm",!0)+" "+props.customStyles},useLegacyLink=null!==(_props$useLegacyLink=props.useLegacyLink)&&void 0!==_props$useLegacyLink&&_props$useLegacyLink;return props.href.startsWith("#")?__jsx(anchor_link_default(),(0,esm_extends.Z)({},commonProps,{href:props.href,offset:props.offset}),props.children):useLegacyLink?__jsx("a",(0,esm_extends.Z)({},commonProps,{href:props.href}),props.children):__jsx(link_default(),{href:props.href,passHref:!0},__jsx("a",commonProps,props.children))}},Button=function Button(props){var _props$data,_props$data2,_props$size2,_props$size3,_props$size4,handleClick=function handleClick(e){var _props$eventAnalytics,eventAnalytics=null!==(_props$eventAnalytics=props.eventAnalytics)&&void 0!==_props$eventAnalytics?_props$eventAnalytics:"cta";props.onClick&&props.onClick(e),props.fireAnalytics&&props.labelAnalytics&&analytics.c[eventAnalytics](props.labelAnalytics,null),props.fireAnalytics&&!props.labelAnalytics&&props.label&&analytics.c[eventAnalytics](props.label,null)},dataTestId=null!==(_props$data=props.data)&&void 0!==_props$data&&_props$data.isMobile?"button-mobile-".concat(props.data.testid):"button-desktop-".concat(null===(_props$data2=props.data)||void 0===_props$data2?void 0:_props$data2.testid);return"href"in props?__jsx(InternalLink,(0,esm_extends.Z)({},props,{onClick:handleClick,offset:props.offset}),__jsx("p",null,"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size2=props.size)&&void 0!==_props$size2?_props$size2:"base","arrow-left")}),props.children,props.variant.includes("arrow-right")&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"download"===props.variant&&__jsx(fi_index_esm._hL,{className:download(props.size?props.size:"base")}))):__jsx("button",{"data-testid":null!=dataTestId?dataTestId:null,onClick:handleClick,"aria-label":props.label,type:props.type,disabled:"loading"===props.state||"success"===props.state,className:buttonVariant(props.variant,null!==(_props$size3=props.size)&&void 0!==_props$size3?_props$size3:"sm",props.customBorder,props.customRounded)+" "+props.customStyles},"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size4=props.size)&&void 0!==_props$size4?_props$size4:"base","arrow-left")}),"loading"===props.state?__jsx(react.Fragment,null,__jsx(index_esm.xz6,{className:loadingIcon("loading"===props.state)}),__jsx("span",{className:"loading"===props.state?"invisible":"visible"},props.children)):props.children,"arrow-right"===props.variant&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"play"===props.variant&&__jsx(fa_index_esm.Gzj,{size:19}))};const components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},useLegacyLink:{defaultValue:null,description:"",name:"useLegacyLink",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"disabled"'},{value:'"link"'},{value:'"play"'},{value:'"icon"'},{value:'"download"'},{value:'"fulled"'},{value:'"filled"'},{value:'"ghost"'},{value:'"ghostAlt"'},{value:'"arrow-right"'},{value:'"arrow-right-black"'},{value:'"arrow-right-alt"'},{value:'"arrow-left"'},{value:'"dark-blue"'},{value:'"outlined-gray"'},{value:'"orangeLink"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"TTailwindString"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event?: any) => any"}},fireAnalytics:{defaultValue:null,description:"",name:"fireAnalytics",required:!1,type:{name:"boolean"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},customBorder:{defaultValue:null,description:"",name:"customBorder",required:!1,type:{name:"boolean"}},customRounded:{defaultValue:null,description:"",name:"customRounded",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"IButtonData"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},eventAnalytics:{defaultValue:null,description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"resourcesCard"'},{value:'"scheduleAnAppointment"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"success"'},{value:'"error"'},{value:'"loading"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./utils/imageLoader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>customLoader});var assets_url="https://wp.culligan.com/wp-content/uploads/",customLoader=function customLoader(_ref){var src=_ref.src,width=_ref.width,_ref$quality=_ref.quality,quality=void 0===_ref$quality?80:_ref$quality;return"".concat(!src.includes("http")&&assets_url?assets_url:"").concat(src,"?w=").concat(null!=width?width:"","&quality=").concat(quality)}},"./node_modules/next/dist/client/router.js":(module,exports,__webpack_require__)=>{"use strict";var console=__webpack_require__("./node_modules/console-browserify/index.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return _router.default}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function(){return _withRouter.default}}),exports.useRouter=function useRouter(){return _react.default.useContext(_routerContext.RouterContext)},exports.createRouter=function createRouter(...args){return singletonRouter.router=new _router.default(...args),singletonRouter.readyCallbacks.forEach((cb=>cb())),singletonRouter.readyCallbacks=[],singletonRouter.router},exports.makePublicRouterInstance=function makePublicRouterInstance(router){const scopedRouter=router,instance={};for(const property of urlPropertyFields)"object"!=typeof scopedRouter[property]?instance[property]=scopedRouter[property]:instance[property]=Object.assign(Array.isArray(scopedRouter[property])?[]:{},scopedRouter[property]);return instance.events=_router.default.events,coreMethodFields.forEach((field=>{instance[field]=(...args)=>scopedRouter[field](...args)})),instance},exports.default=void 0;var _interop_require_default=__webpack_require__("./node_modules/next/node_modules/@swc/helpers/lib/_interop_require_default.js").Z,_react=_interop_require_default(__webpack_require__("./node_modules/react/index.js")),_router=_interop_require_default(__webpack_require__("./node_modules/next/dist/shared/lib/router/router.js")),_routerContext=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.js"),_isError=_interop_require_default(__webpack_require__("./node_modules/next/dist/lib/is-error.js")),_withRouter=_interop_require_default(__webpack_require__("./node_modules/next/dist/client/with-router.js"));const singletonRouter={router:null,readyCallbacks:[],ready(cb){if(this.router)return cb();"undefined"!=typeof window&&this.readyCallbacks.push(cb)}},urlPropertyFields=["pathname","route","query","asPath","components","isFallback","basePath","locale","locales","defaultLocale","isReady","isPreview","isLocaleDomain","domainLocales"],coreMethodFields=["push","replace","reload","back","prefetch","beforePopState"];function getRouter(){if(!singletonRouter.router){throw new Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n')}return singletonRouter.router}Object.defineProperty(singletonRouter,"events",{get:()=>_router.default.events}),urlPropertyFields.forEach((field=>{Object.defineProperty(singletonRouter,field,{get:()=>getRouter()[field]})})),coreMethodFields.forEach((field=>{singletonRouter[field]=(...args)=>getRouter()[field](...args)})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((event=>{singletonRouter.ready((()=>{_router.default.events.on(event,((...args)=>{const eventField=`on${event.charAt(0).toUpperCase()}${event.substring(1)}`,_singletonRouter=singletonRouter;if(_singletonRouter[eventField])try{_singletonRouter[eventField](...args)}catch(err){console.error(`Error when running the Router event: ${eventField}`),console.error(_isError.default(err)?`${err.message}\n${err.stack}`:err+"")}}))}))}));var _default=singletonRouter;exports.default=_default,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/with-router.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function withRouter(ComposedComponent){function WithRouterWrapper(props){return _react.default.createElement(ComposedComponent,Object.assign({router:_router.useRouter()},props))}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,!1;return WithRouterWrapper};var _react=(0,__webpack_require__("./node_modules/next/node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/react/index.js")),_router=__webpack_require__("./node_modules/next/dist/client/router.js");("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/router.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/router.js")},"./node_modules/universal-cookie/es6/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>es6});var cookie=__webpack_require__("./node_modules/universal-cookie/node_modules/cookie/index.js");function readCookie(value,options){void 0===options&&(options={});var cleanValue=function cleanupCookieValue(value){if(value&&"j"===value[0]&&":"===value[1])return value.substr(2);return value}(value);if(function isParsingCookie(value,doNotParse){return void 0===doNotParse&&(doNotParse=!value||"{"!==value[0]&&"["!==value[0]&&'"'!==value[0]),!doNotParse}(cleanValue,options.doNotParse))try{return JSON.parse(cleanValue)}catch(e){}return value}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const es6=function(){function Cookies(cookies,options){var _this=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function parseCookies(cookies,options){return"string"==typeof cookies?cookie.Q(cookies,options):"object"==typeof cookies&&null!==cookies?cookies:{}}(cookies,options),new Promise((function(){_this.HAS_DOCUMENT_COOKIE=function hasDocumentCookie(){return"object"==typeof document&&"string"==typeof document.cookie}()})).catch((function(){}))}return Cookies.prototype._updateBrowserValues=function(parseOptions){this.HAS_DOCUMENT_COOKIE&&(this.cookies=cookie.Q(document.cookie,parseOptions))},Cookies.prototype._emitChange=function(params){for(var i=0;i<this.changeListeners.length;++i)this.changeListeners[i](params)},Cookies.prototype.get=function(name,options,parseOptions){return void 0===options&&(options={}),this._updateBrowserValues(parseOptions),readCookie(this.cookies[name],options)},Cookies.prototype.getAll=function(options,parseOptions){void 0===options&&(options={}),this._updateBrowserValues(parseOptions);var result={};for(var name_1 in this.cookies)result[name_1]=readCookie(this.cookies[name_1],options);return result},Cookies.prototype.set=function(name,value,options){var _a;"object"==typeof value&&(value=JSON.stringify(value)),this.cookies=__assign(__assign({},this.cookies),((_a={})[name]=value,_a)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=cookie.q(name,value,options)),this._emitChange({name,value,options})},Cookies.prototype.remove=function(name,options){var finalOptions=options=__assign(__assign({},options),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=__assign({},this.cookies),delete this.cookies[name],this.HAS_DOCUMENT_COOKIE&&(document.cookie=cookie.q(name,"",finalOptions)),this._emitChange({name,value:void 0,options})},Cookies.prototype.addChangeListener=function(callback){this.changeListeners.push(callback)},Cookies.prototype.removeChangeListener=function(callback){var idx=this.changeListeners.indexOf(callback);idx>=0&&this.changeListeners.splice(idx,1)},Cookies}()},"./node_modules/universal-cookie/node_modules/cookie/index.js":(__unused_webpack_module,exports)=>{"use strict";exports.Q=function parse(str,options){if("string"!=typeof str)throw new TypeError("argument str must be a string");for(var obj={},opt=options||{},pairs=str.split(";"),dec=opt.decode||decode,i=0;i<pairs.length;i++){var pair=pairs[i],index=pair.indexOf("=");if(!(index<0)){var key=pair.substring(0,index).trim();if(null==obj[key]){var val=pair.substring(index+1,pair.length).trim();'"'===val[0]&&(val=val.slice(1,-1)),obj[key]=tryDecode(val,dec)}}}return obj},exports.q=function serialize(name,val,options){var opt=options||{},enc=opt.encode||encode;if("function"!=typeof enc)throw new TypeError("option encode is invalid");if(!fieldContentRegExp.test(name))throw new TypeError("argument name is invalid");var value=enc(val);if(value&&!fieldContentRegExp.test(value))throw new TypeError("argument val is invalid");var str=name+"="+value;if(null!=opt.maxAge){var maxAge=opt.maxAge-0;if(isNaN(maxAge)||!isFinite(maxAge))throw new TypeError("option maxAge is invalid");str+="; Max-Age="+Math.floor(maxAge)}if(opt.domain){if(!fieldContentRegExp.test(opt.domain))throw new TypeError("option domain is invalid");str+="; Domain="+opt.domain}if(opt.path){if(!fieldContentRegExp.test(opt.path))throw new TypeError("option path is invalid");str+="; Path="+opt.path}if(opt.expires){if("function"!=typeof opt.expires.toUTCString)throw new TypeError("option expires is invalid");str+="; Expires="+opt.expires.toUTCString()}opt.httpOnly&&(str+="; HttpOnly");opt.secure&&(str+="; Secure");if(opt.sameSite){switch("string"==typeof opt.sameSite?opt.sameSite.toLowerCase():opt.sameSite){case!0:str+="; SameSite=Strict";break;case"lax":str+="; SameSite=Lax";break;case"strict":str+="; SameSite=Strict";break;case"none":str+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return str};var decode=decodeURIComponent,encode=encodeURIComponent,fieldContentRegExp=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function tryDecode(str,decode){try{return decode(str)}catch(e){return str}}}}]);