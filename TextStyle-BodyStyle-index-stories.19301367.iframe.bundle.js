"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[9924,3514,6081],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/TextStyle/BodyStyle/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithBalancer:()=>WithBalancer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/TextStyle/BodyStyle/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Texts and Buttons/Body Text",component:___WEBPACK_IMPORTED_MODULE_1__.G,argTypes:{haveMobile:{table:{disable:!0}},size:{control:{type:"select"}}}};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.G,{size:args.size,color:args.color},args.children)};Template.displayName="Template";var Default=Template.bind({});Default.args={size:"lg",color:"grey",children:"This is the default body text. Feel free to change the color and size down below."};var BalancerTemplate=function BalancerTemplate(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.X,{size:args.size,color:args.color},args.children)};BalancerTemplate.displayName="BalancerTemplate";var WithBalancer=BalancerTemplate.bind({});WithBalancer.args={size:"lg",color:"grey",children:"This is the body text with Balancer. Feel free to change the color and size down below."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BodyStyle size={args.size} color={args.color}>\r\n    {args.children}\r\n  </BodyStyle>",...Default.parameters?.docs?.source}}},WithBalancer.parameters={...WithBalancer.parameters,docs:{...WithBalancer.parameters?.docs,source:{originalSource:"args => <BalancerBodyStyle size={args.size} color={args.color}>\r\n    {args.children}\r\n  </BalancerBodyStyle>",...WithBalancer.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithBalancer"]},"./components/TextStyle/BodyStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>BalancerBodyStyle,G:()=>BodyStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),sizeLegal=(0,globals.ZP)("text-xs","leading-4"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeMd=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5"),sizeMdNoMobile=(0,globals.ZP)("text-base","leading-5"),sizeLg=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg"),sizeLgNoMobile=(0,globals.ZP)("text-lg","leading-lg"),sizeXl=(0,globals.ZP)("text-1.5xl","leading-1.5xl","lg:text-1.5xl","lg:leading-1.5xl"),size20px=(0,globals.ZP)("text-xl","leading-6"),styles_text=function text(size,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-blue"),"blue"==color),(0,globals.ZP)("text-blue-dark3"),"blue-dark3"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-blue-light"),"blue-light"==color),sizeLegal,"legal"==size),sizeSm,"sm"==size),haveMobile?sizeMd:sizeMdNoMobile,"md"==size),haveMobile?sizeLg:sizeLgNoMobile,"lg"==size),(0,defineProperty.Z)((0,defineProperty.Z)(_classnames,sizeXl,"xl"==size),size20px,"20px"==size)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var BodyStyle=function BodyStyle(_ref){var size=_ref.size,color=_ref.color,haveMobile=_ref.haveMobile,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,children=_ref.children,additionalProps=_ref.additionalProps,props=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(size,color,haveMobile)+" "+customStyles},additionalProps),isDiv="object"==typeof children&&"p"===children.type||Array.isArray(children)&&("p"===children[0].type||Array.isArray(children[0])&&"p"===children[0][0].type);return __jsx(isDiv?"div":"p",props,children)},BalancerBodyStyle=function BalancerBodyStyle(_ref2){var size=_ref2.size,color=_ref2.color,haveMobile=_ref2.haveMobile,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:"p",ratio:1,nonce:"",preferNative:!0}:_ref2$balancerOptions;return __jsx(dist.SA,(0,esm_extends.Z)({ratio:balancerOptions.ratio,as:balancerOptions.as,nonce:balancerOptions.nonce,preferNative:balancerOptions.preferNative,className:"".concat(styles_text(size,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerBodyStyle.displayName="BalancerBodyStyle";try{BodyStyle.displayName="BodyStyle",BodyStyle.__docgenInfo={description:"",displayName:"BodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BodyStyle"]={docgenInfo:BodyStyle.__docgenInfo,name:"BodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BodyStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerBodyStyle.displayName="BalancerBodyStyle",BalancerBodyStyle.__docgenInfo={description:"",displayName:"BalancerBodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"]={docgenInfo:BalancerBodyStyle.__docgenInfo,name:"BalancerBodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"})}catch(__react_docgen_typescript_loader_error){}},"./styles/globals.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C3:()=>inset,FK:()=>position,I8:()=>fontFamily,JB:()=>fontSize,Nv:()=>lineHeight,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,dh:()=>classnames,jf:()=>display,zP:()=>textColor});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),display=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),position=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),inset=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontFamily=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontSize=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,lineHeight=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),textColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),classnames=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=classnames},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react-wrap-balancer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SA:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),E="undefined"==typeof window,m=E?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,h=0,b=()=>++h,_=!1;function x(){let[n,r]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_?b:void 0);return m((()=>{void 0===n&&r(b()),_=!0}),[]),void 0===n?n:`rwb-${n.toString(32)}`}var y="__wrap_b",d="__wrap_n",v="__wrap_o",S=(n,r,e)=>{let t=(e=e||document.querySelector(`[data-br="${n}"]`)).parentElement,c=f=>e.style.maxWidth=f+"px";e.style.maxWidth="";let u,i=t.clientWidth,s=t.clientHeight,o=i/2-.25,a=i+.5;if(i){for(c(o),o=Math.max(e.scrollWidth,o);o+1<a;)u=Math.round((o+a)/2),c(u),t.clientHeight===s?a=u:o=u;c(a*r+i*(1-r))}e.__wrap_o||"undefined"!=typeof ResizeObserver&&(e.__wrap_o=new ResizeObserver((()=>{self.__wrap_b(0,+e.dataset.brr,e)}))).observe(t)},B=S.toString(),T=(n,r,e="")=>(e&&(e=`self.${d}!=1&&${e}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(n?"":`self.${d}=self.${d}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${y}=${B};`)+e},nonce:r})),g=react__WEBPACK_IMPORTED_MODULE_0__.createContext({preferNative:!0,hasProvider:!1}),w=({ratio:n=1,preferNative:r,nonce:e,children:t,...c})=>{let i=function R(){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>x),[])()}(),s=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(g),a=null!=r?r:o.preferNative,u=c.as||"span";return m((()=>{a&&1===self[d]||s.current&&(self[y]=S)(0,n,s.current)}),[t,a,n]),m((()=>{if(!a||1!==self[d])return()=>{if(!s.current)return;let f=s.current[v];f&&(f.disconnect(),delete s.current[v])}}),[a]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(u,{...c,"data-br":i,"data-brr":n,ref:s,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:a?"balance":"initial"},suppressHydrationWarning:!0},t),T(o.hasProvider,e,`self.${y}("${i}",${n})`))}}}]);