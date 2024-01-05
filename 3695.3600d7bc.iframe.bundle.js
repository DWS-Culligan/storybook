"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[3695],{"./components/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Image});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),imageLoader=__webpack_require__("./utils/imageLoader.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("transform-gpu"),transitions=(0,globals.ZP)("transition-opacity","duration-300","ease-in"),loaded=(0,globals.ZP)("opacity-100"),loading=(0,globals.ZP)("opacity-0"),imageLoaded=function imageLoaded(isLoaded){var hasTransitions=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],imgStyles=arguments.length>2?arguments[2]:void 0;return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},loaded,isLoaded),loading,!isLoaded),transitions,hasTransitions),imgStyles,imgStyles))},__jsx=react.createElement,Image=function Image(props){var _useState=(0,react.useState)(!1),loaded=_useState[0],setLoaded=_useState[1],ref=(0,react.useRef)(null);(0,react.useEffect)((function(){var _ref$current,_ref$current2,_ref$current3,img=null!==(null===(_ref$current=ref.current)||void 0===_ref$current||null===(_ref$current=_ref$current.firstChild)||void 0===_ref$current?void 0:_ref$current.firstChild.firstChild)?null===(_ref$current2=ref.current)||void 0===_ref$current2||null===(_ref$current2=_ref$current2.firstChild)||void 0===_ref$current2?void 0:_ref$current2.firstChild.firstChild:null===(_ref$current3=ref.current)||void 0===_ref$current3?void 0:_ref$current3.firstChild.firstChild;null!=img&&img.complete&&setLoaded(!0)}),[]);var quality=void 0!==props.quality?props.quality:80;return __jsx("div",{ref,className:props.className},__jsx(next_image.Z,(0,esm_extends.Z)({},props,{src:props.src,quality,alt:props.alt?props.alt:props.src.toString(),onLoad:function onLoad(){return setLoaded(!0)},className:imageLoaded(loaded,props.hasTransitions,props.imgStyles),sizes:props.sizes,loader:imageLoader.l,onLoadingComplete:function onLoadingComplete(){return setLoaded(!0)}})))};Image.displayName="Image";try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"Optional image quality\nIf no quality is provided, 100 will be used (customLoader default)",name:"quality",required:!1,type:{name:"number"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:'"TAILWIND_STRING"'}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string | StaticImport"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'}]}},loader:{defaultValue:null,description:"",name:"loader",required:!1,type:{name:"ImageLoader"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},lazyRoot:{defaultValue:null,description:"",name:"lazyRoot",required:!1,type:{name:"RefObject<HTMLElement>"}},lazyBoundary:{defaultValue:null,description:"",name:"lazyBoundary",required:!1,type:{name:"string"}},blurDataURL:{defaultValue:null,description:"",name:"blurDataURL",required:!1,type:{name:"string"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"components/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./components/Wave/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Waves});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Image/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Waves(waves){var WaveMap=new Map([["base","2021/10/wave-royalblue.svg"],["light","2021/11/waves-white.svg"],["dark","2021/10/wave-royalblue.svg"],["blue-light","2020/09/wave-accentblue-darker.svg"],["single-blue-dark","2022/11/single-wave-dark-blue.svg"],["three-blue-light","2023/02/three-wave-blue-light.png"]]);return __jsx("div",{style:{height:"".concat("lg"===waves.size?"30":"20","px"),position:"relative",marginTop:"15px"}},__jsx(_Image__WEBPACK_IMPORTED_MODULE_1__.E,{alt:"blue wave",src:WaveMap.get(waves.shade),width:"88px",height:"20px",layout:"fixed"}))}Waves.displayName="Waves";try{Wave.displayName="Wave",Wave.__docgenInfo={description:"",displayName:"Wave",props:{shade:{defaultValue:null,description:"",name:"shade",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"light"'},{value:'"dark"'},{value:'"blue-light"'},{value:'"single-blue-dark"'},{value:'"three-blue-light"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Wave/index.tsx#Wave"]={docgenInfo:Wave.__docgenInfo,name:"Wave",path:"components/Wave/index.tsx#Wave"})}catch(__react_docgen_typescript_loader_error){}},"./styles/globals.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bd:()=>transitionTimingFunction,C3:()=>inset,Cz:()=>backgroundColor,E0:()=>borderRadius,FK:()=>position,Fw:()=>pointerEvents,I8:()=>fontFamily,J4:()=>borderWidth,JB:()=>fontSize,Kl:()=>justifyContent,Me:()=>flexDirection,Nv:()=>lineHeight,SG:()=>gap,Ue:()=>fontWeight,WO:()=>flexWrap,Xu:()=>brightness,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,bf:()=>width,cq:()=>alignItems,dh:()=>classnames,hl:()=>fill,ix:()=>boxSizing,jf:()=>display,jw:()=>minHeight,nV:()=>transitionDuration,n_:()=>transitionProperty,o3:()=>padding,rX:()=>letterSpacing,tv:()=>borderColor,zP:()=>textColor});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),backgroundColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderRadius=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderWidth=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,transitionProperty=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),transitionDuration=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,transitionTimingFunction=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,brightness=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),flexDirection=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),flexWrap=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,alignItems=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,justifyContent=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),gap=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),padding=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,pointerEvents=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),display=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),boxSizing=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),position=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),inset=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),width=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),minHeight=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fill=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontFamily=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontSize=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,fontWeight=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,letterSpacing=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,lineHeight=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,textColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),classnames=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=classnames},"./utils/imageLoader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>customLoader});var assets_url="http://wp.culligan.com/wp-content/uploads/",customLoader=function customLoader(_ref){var src=_ref.src,width=_ref.width,_ref$quality=_ref.quality,quality=void 0===_ref$quality?80:_ref$quality;return"".concat(!src.includes("http")&&assets_url?assets_url:"").concat(src,"?w=").concat(null!=width?width:"","&quality=").concat(quality)}},"./node_modules/next/dist/client/normalize-trailing-slash.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.normalizePathTrailingSlash=void 0;var _removeTrailingSlash=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"),_parsePath=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/parse-path.js");exports.normalizePathTrailingSlash=path=>{if(!path.startsWith("/")||process.env.__NEXT_MANUAL_TRAILING_SLASH)return path;const{pathname,query,hash}=_parsePath.parsePath(path);return process.env.__NEXT_TRAILING_SLASH?/\.[^/]+\/?$/.test(pathname)?`${_removeTrailingSlash.removeTrailingSlash(pathname)}${query}${hash}`:pathname.endsWith("/")?`${pathname}${query}${hash}`:`${pathname}/${query}${hash}`:`${_removeTrailingSlash.removeTrailingSlash(pathname)}${query}${hash}`},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/request-idle-callback.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.cancelIdleCallback=exports.requestIdleCallback=void 0;const requestIdleCallback="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(cb){let start=Date.now();return setTimeout((function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})}),1)};exports.requestIdleCallback=requestIdleCallback;const cancelIdleCallback="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(id){return clearTimeout(id)};exports.cancelIdleCallback=cancelIdleCallback,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/use-intersection.js":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIntersection=function useIntersection({rootRef,rootMargin,disabled}){const isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=_react.useState(!1),[element,setElement]=_react.useState(null);_react.useEffect((()=>{if(hasIntersectionObserver){if(isDisabled||visible)return;if(element&&element.tagName){const unobserve=function observe(element,callback,options){const{id,observer,elements}=function createObserver(options){const id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find((obj=>obj.root===id.root&&obj.margin===id.margin));let instance;if(existing&&(instance=observers.get(existing),instance))return instance;const elements=new Map,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)}))}),options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function unobserve(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);const index=idList.findIndex((obj=>obj.root===id.root&&obj.margin===id.margin));index>-1&&idList.splice(index,1)}}}(element,(isVisible=>isVisible&&setVisible(isVisible)),{root:null==rootRef?void 0:rootRef.current,rootMargin});return unobserve}}else if(!visible){const idleCallback=_requestIdleCallback.requestIdleCallback((()=>setVisible(!0)));return()=>_requestIdleCallback.cancelIdleCallback(idleCallback)}}),[element,isDisabled,rootMargin,rootRef,visible]);const resetVisible=_react.useCallback((()=>{setVisible(!1)}),[]);return[setElement,visible,resetVisible]};var _react=__webpack_require__("./node_modules/react/index.js"),_requestIdleCallback=__webpack_require__("./node_modules/next/dist/client/request-idle-callback.js");const hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/router/utils/parse-path.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.parsePath=function parsePath(path){const hashIndex=path.indexOf("#"),queryIndex=path.indexOf("?"),hasQuery=queryIndex>-1&&(hashIndex<0||queryIndex<hashIndex);if(hasQuery||hashIndex>-1)return{pathname:path.substring(0,hasQuery?queryIndex:hashIndex),query:hasQuery?path.substring(queryIndex,hashIndex>-1?hashIndex:void 0):"",hash:hashIndex>-1?path.slice(hashIndex):""};return{pathname:path,query:"",hash:""}}},"./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeTrailingSlash=function removeTrailingSlash(route){return route.replace(/\/$/,"")||"/"}},"./node_modules/next/node_modules/@swc/helpers/lib/_object_without_properties_loose.js":(__unused_webpack_module,exports)=>{exports.Z=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}}}]);