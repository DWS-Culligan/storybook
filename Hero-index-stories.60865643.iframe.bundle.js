(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[1677,5417],{"./components/Hero/HeroBannerImage/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Hero/HeroBannerImage/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Banner/Hero Banner Image *",component:___WEBPACK_IMPORTED_MODULE_1__.Z,excludeStories:["Default"]};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={text:{title:{content:"We know your local water in the Denver area and are ready to  serve all your better water needs.",color:"blue"},description:{content:"",className:""}},cta:{content:"",href:""},imgSrc:"2022/07/family-at-sink.jpg",imgAlt:"Man helping his daughter wash strawberries with clean, filtered water"};const __namedExportsOrder=["Default"]},"./components/Hero/HeroMenu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Hero/HeroMenu/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Banner/Vokal Hero Menu *",component:___WEBPACK_IMPORTED_MODULE_1__.Z,excludeStories:["Default"]};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={background:{image:{src:"/2022/06/waves-1.png?w=3840&quality=80",alt:"An abstract illustration of waves",priority:"",objectFit:"cover",objectPosition:"top",quality:80},height:"auto",fixedHeight:!0},navButtons:[{label:"Schedule Free Consultation",href:"#free-consultation",offset:110}]};const __namedExportsOrder=["Default"]},"./components/Hero/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hero_index_stories});var react=__webpack_require__("./node_modules/react/index.js"),HeroBannerImage=__webpack_require__("./components/Hero/HeroBannerImage/index.tsx"),HeroMenu=__webpack_require__("./components/Hero/HeroMenu/index.tsx"),__jsx=react.createElement,Hero=function Hero(_ref){var heroMenu=_ref.heroMenu,hero=_ref.hero,showBreadcrumb=_ref.showBreadcrumb,dealerName=_ref.dealerName,twoColumnsOnMobile=_ref.twoColumnsOnMobile,_ref$isShort=_ref.isShort,isShort=void 0!==_ref$isShort&&_ref$isShort,text=hero.text,cta=hero.cta,imgSrc=hero.imgSrc,imgAlt=hero.imgAlt,navButtons=heroMenu.navButtons,background=heroMenu.background,bannerImageProps={text,cta,imgSrc,imgAlt,showBreadcrumb,dealerName};return __jsx("section",{role:"region","aria-label":"Hero",className:"bg-blue-light3"},__jsx(HeroBannerImage.Z,bannerImageProps),__jsx(HeroMenu.Z,{navButtons,background,twoColumnsOnMobile,isShort}))};Hero.displayName="Hero";const components_Hero=Hero;try{Hero.displayName="Hero",Hero.__docgenInfo={description:"",displayName:"Hero",props:{hero:{defaultValue:null,description:"",name:"hero",required:!0,type:{name:"HeroBannerProps"}},heroMenu:{defaultValue:null,description:"",name:"heroMenu",required:!0,type:{name:"HeroMenuProps"}},showBreadcrumb:{defaultValue:null,description:"",name:"showBreadcrumb",required:!1,type:{name:"boolean"}},dealerName:{defaultValue:null,description:"",name:"dealerName",required:!1,type:{name:"string"}},twoColumnsOnMobile:{defaultValue:null,description:"",name:"twoColumnsOnMobile",required:!1,type:{name:"boolean"}},isShort:{defaultValue:{value:"false"},description:"",name:"isShort",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Hero/index.tsx#Hero"]={docgenInfo:Hero.__docgenInfo,name:"Hero",path:"components/Hero/index.tsx#Hero"})}catch(__react_docgen_typescript_loader_error){}var index_stories=__webpack_require__("./components/Hero/HeroBannerImage/index.stories.tsx"),HeroMenu_index_stories=__webpack_require__("./components/Hero/HeroMenu/index.stories.tsx"),index_stories_jsx=react.createElement;const Hero_index_stories={title:"Banner/Vokal Hero",component:components_Hero};var Template=function Template(args){return index_stories_jsx(components_Hero,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={heroMenu:HeroMenu_index_stories.Default.args,hero:index_stories.Default.args},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Hero {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/Hero/HeroBannerImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Hero_HeroBannerImage});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),next_router=__webpack_require__("./node_modules/next/router.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./components/Button/index.tsx"),Image=__webpack_require__("./components/Image/index.tsx"),useMediaQuery=__webpack_require__("./hooks/useMediaQuery.ts"),Text=__webpack_require__("./components/Banner/Text/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),wrapper=(0,globals.ZP)("bg-blue-light3","lg:h-[620px]","flex","flex-col"),bannerText=(0,globals.ZP)("flex","flex-col","justify-center","px-6","lg:max-w-[50%]","overflow-wrap","z-1","py-14","lg:pl-[120px]"),back=(0,globals.ZP)("hidden","md:block","mb-8","lg:mb-0"),title=(0,globals.ZP)("lg:!text-5xl","lg:!leading-[52px]","md:!text-5xl","md:!leading-[52px]","xs:!text-[32px]","sm:!leading-[42px]","xs:!text-[32px]","xs:!leading-[42px]","text-center","md:text-left","md:mt-[45px]","2xl:mt-[100px]"),description=(0,globals.ZP)("text-center","md:text-left"),ctaCustom=(0,globals.ZP)("text-center","justify-self-center","md:justify-self-start","uppercase"),innerContent=(0,globals.ZP)("flex","flex-col"),sideImg=(0,globals.ZP)("-mt-8","lg:mt-0","lg:h-[720px]","h-[375px]","lg:w-[45%]","w-full","overflow-hidden","lg:absolute","relative","row-start-1","col-start-2","lg:right-0","z-0"),rounded=(0,globals.ZP)("rounded-tl-[300px]"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var HeroBannerImage=function HeroBannerImage(_ref){var text=_ref.text,cta=_ref.cta,imgSrc=_ref.imgSrc,imgAlt=_ref.imgAlt,showBreadcrumb=_ref.showBreadcrumb,dealerName=_ref.dealerName,titleStyles=_ref.titleStyles,isMobile=(0,useMediaQuery.Z)("(max-width: 1023px)"),styledText=text;styledText.title.customStyles=titleStyles||title,styledText.description.className=description,styledText.description.size="lg";var home="/"+(0,next_router.useRouter)().asPath.split("/").slice(1,-1).join("/");return __jsx("div",{className:wrapper},__jsx("div",{className:bannerText},__jsx("div",{className:innerContent},showBreadcrumb&&dealerName&&__jsx(Button.Z,{variant:"arrow-left",href:home,label:"Back to ".concat(dealerName),fireAnalytics:!0,type:"button",customStyles:back},"Back to ",dealerName),__jsx(Text.Z,{text:styledText,cta:_objectSpread(_objectSpread({},cta),{},{customStyles:ctaCustom}),gutter:"none"}))),__jsx(Image.E,{src:imgSrc,alt:imgAlt,layout:"fill",objectFit:"cover",priority:!0,quality:80,sizes:isMobile?"100vw":"50vw",className:sideImg,imgStyles:rounded}))};HeroBannerImage.displayName="HeroBannerImage";const Hero_HeroBannerImage=HeroBannerImage;try{HeroBannerImage.displayName="HeroBannerImage",HeroBannerImage.__docgenInfo={description:"",displayName:"HeroBannerImage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"BannerInterface.text"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"BannerInterface.cta"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!0,type:{name:"string"}},imgAlt:{defaultValue:null,description:"",name:"imgAlt",required:!0,type:{name:"string"}},showBreadcrumb:{defaultValue:null,description:"",name:"showBreadcrumb",required:!1,type:{name:"boolean"}},dealerName:{defaultValue:null,description:"",name:"dealerName",required:!1,type:{name:"string"}},titleStyles:{defaultValue:null,description:"",name:"titleStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Hero/HeroBannerImage/index.tsx#HeroBannerImage"]={docgenInfo:HeroBannerImage.__docgenInfo,name:"HeroBannerImage",path:"components/Hero/HeroBannerImage/index.tsx#HeroBannerImage"})}catch(__react_docgen_typescript_loader_error){}},"./components/Hero/HeroMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Hero_HeroMenu});var next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),react=__webpack_require__("./node_modules/react/index.js"),anchor_link=__webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"),anchor_link_default=__webpack_require__.n(anchor_link),Image=__webpack_require__("./components/Image/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),wrapper=function wrapper(isShort){return(0,globals.ZP)("place-items-center","pt-0","".concat(isShort?"lg:-mt-[15rem]":"lg:-mt-36"),"bg-blue-light3","lg:bg-transparent","grid","grid-cols-1","items-end")},styles_btn=function btn(index,count,twoColumnsOnMobile){var isLast=index===count-1,isPenultimate=index===count-2,isMobileOrphan=count%2==1&&index===count-1,noOrphans=count%3==0,hasTwoOrphans=count%3==2,hasSingleOrphan=count%3==1,base=(0,globals.ZP)("rounded","bg-white","text-dark","text-sm","text-center","text-blue-dark","font-normal","min-h-[56px]","hover:bg-blue-dark","hover:text-white","col-span-2","px-3","py-2","transition-colors","duration-200","ease-in","flex","flex-nowrap","items-center","justify-center","leading-base");return(0,globals.ZP)(base,{"col-start-2":isMobileOrphan&&twoColumnsOnMobile,"lg:col-start-2":hasTwoOrphans&&isPenultimate,"lg:col-start-4":hasTwoOrphans&&isLast,"lg:col-start-3":hasSingleOrphan&&isLast,"lg:col-start-auto":noOrphans})},backgroundFigure=function backgroundFigure(buttonCount,twoColumnsOnMobile){var base=(0,globals.ZP)("col-start-1","row-start-1","w-full","min-h-[275px]","relative"),rowCount=twoColumnsOnMobile?Math.ceil(buttonCount/2):buttonCount,rowCountLarge=Math.ceil(buttonCount/3);return(0,globals.ZP)(base,{"h-[168px]":rowCount<=2,"h-[240px]":3===rowCount,"h-[312px]":4===rowCount,"h-[384px]":5===rowCount,"h-[456px]":6===rowCount,"h-[528px]":7===rowCount,"h-[600px]":8===rowCount,"h-[672px]":9===rowCount,"h-[744px]":10===rowCount,"h-[816px]":11===rowCount,"h-[888px]":rowCount>=12,"lg:h-[236px]":rowCountLarge<=2,"lg:h-[316px]":3===rowCountLarge,"lg:h-[396px]":4===rowCountLarge,"lg:h-[476px]":5===rowCountLarge})},backgroundImage=(0,globals.ZP)("h-full","overflow-visible","col-start-1","row-start-1"),navWrapper=function navWrapper(twoColumnsOnMobile){var base=(0,globals.ZP)("px-6","lg:px-[120px]","z-1","grid","lg:grid-cols-6","mb-6","gap-4","lg:gap-6","w-full","col-start-1","row-start-1");return(0,globals.ZP)(base,{"grid-cols-2":!twoColumnsOnMobile,"grid-cols-4":twoColumnsOnMobile})},__jsx=react.createElement,HeroMenu=function HeroMenu(_ref){var navButtons=_ref.navButtons,background=_ref.background,twoColumnsOnMobile=_ref.twoColumnsOnMobile,_ref$isShort=_ref.isShort,isShort=void 0!==_ref$isShort&&_ref$isShort,image=background.image,src=image.src,objectPosition=image.objectPosition,quality=image.quality;return __jsx("div",{className:wrapper(isShort)},__jsx("div",{className:navWrapper(twoColumnsOnMobile)},navButtons.length>0&&navButtons.map((function(btn,index){return btn.href.startsWith("#")?__jsx(anchor_link_default(),{key:index,className:styles_btn(index,navButtons.length,twoColumnsOnMobile),href:btn.href,offset:btn.offset||0},btn.label):__jsx(link_default(),{href:btn.href,passHref:!0,key:index},__jsx("a",{className:styles_btn(index,navButtons.length,twoColumnsOnMobile)},btn.label))}))),__jsx("figure",{className:backgroundFigure(navButtons.length,twoColumnsOnMobile)},__jsx(Image.E,{src,alt:"",layout:"fill",objectFit:"cover",objectPosition,priority:!0,quality,className:backgroundImage})))};HeroMenu.displayName="HeroMenu";const Hero_HeroMenu=HeroMenu;try{HeroMenu.displayName="HeroMenu",HeroMenu.__docgenInfo={description:"",displayName:"HeroMenu",props:{navButtons:{defaultValue:null,description:"",name:"navButtons",required:!0,type:{name:"NavButton[]"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"BannerInterface.background"}},twoColumnsOnMobile:{defaultValue:null,description:"",name:"twoColumnsOnMobile",required:!1,type:{name:"boolean"}},isShort:{defaultValue:{value:"false"},description:"",name:"isShort",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Hero/HeroMenu/index.tsx#HeroMenu"]={docgenInfo:HeroMenu.__docgenInfo,name:"HeroMenu",path:"components/Hero/HeroMenu/index.tsx#HeroMenu"})}catch(__react_docgen_typescript_loader_error){}},"./hooks/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useMediaQuery(query){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),matches=_useState[0],setMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var media=window.matchMedia(query);media.matches!==matches&&setMatches(media.matches);var listener=function listener(){return setMatches(media.matches)};return window.addEventListener("resize",listener),function(){return window.removeEventListener("resize",listener)}}),[matches,query]),matches}},"./node_modules/next/dist/client/router.js":(module,exports,__webpack_require__)=>{"use strict";var console=__webpack_require__("./node_modules/console-browserify/index.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return _router.default}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function(){return _withRouter.default}}),exports.useRouter=function useRouter(){return _react.default.useContext(_routerContext.RouterContext)},exports.createRouter=function createRouter(...args){return singletonRouter.router=new _router.default(...args),singletonRouter.readyCallbacks.forEach((cb=>cb())),singletonRouter.readyCallbacks=[],singletonRouter.router},exports.makePublicRouterInstance=function makePublicRouterInstance(router){const scopedRouter=router,instance={};for(const property of urlPropertyFields)"object"!=typeof scopedRouter[property]?instance[property]=scopedRouter[property]:instance[property]=Object.assign(Array.isArray(scopedRouter[property])?[]:{},scopedRouter[property]);return instance.events=_router.default.events,coreMethodFields.forEach((field=>{instance[field]=(...args)=>scopedRouter[field](...args)})),instance},exports.default=void 0;var _interop_require_default=__webpack_require__("./node_modules/next/node_modules/@swc/helpers/lib/_interop_require_default.js").Z,_react=_interop_require_default(__webpack_require__("./node_modules/react/index.js")),_router=_interop_require_default(__webpack_require__("./node_modules/next/dist/shared/lib/router/router.js")),_routerContext=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.js"),_isError=_interop_require_default(__webpack_require__("./node_modules/next/dist/lib/is-error.js")),_withRouter=_interop_require_default(__webpack_require__("./node_modules/next/dist/client/with-router.js"));const singletonRouter={router:null,readyCallbacks:[],ready(cb){if(this.router)return cb();"undefined"!=typeof window&&this.readyCallbacks.push(cb)}},urlPropertyFields=["pathname","route","query","asPath","components","isFallback","basePath","locale","locales","defaultLocale","isReady","isPreview","isLocaleDomain","domainLocales"],coreMethodFields=["push","replace","reload","back","prefetch","beforePopState"];function getRouter(){if(!singletonRouter.router){throw new Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n')}return singletonRouter.router}Object.defineProperty(singletonRouter,"events",{get:()=>_router.default.events}),urlPropertyFields.forEach((field=>{Object.defineProperty(singletonRouter,field,{get:()=>getRouter()[field]})})),coreMethodFields.forEach((field=>{singletonRouter[field]=(...args)=>getRouter()[field](...args)})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((event=>{singletonRouter.ready((()=>{_router.default.events.on(event,((...args)=>{const eventField=`on${event.charAt(0).toUpperCase()}${event.substring(1)}`,_singletonRouter=singletonRouter;if(_singletonRouter[eventField])try{_singletonRouter[eventField](...args)}catch(err){console.error(`Error when running the Router event: ${eventField}`),console.error(_isError.default(err)?`${err.message}\n${err.stack}`:err+"")}}))}))}));var _default=singletonRouter;exports.default=_default,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/with-router.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function withRouter(ComposedComponent){function WithRouterWrapper(props){return _react.default.createElement(ComposedComponent,Object.assign({router:_router.useRouter()},props))}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,!1;return WithRouterWrapper};var _react=(0,__webpack_require__("./node_modules/next/node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/react/index.js")),_router=__webpack_require__("./node_modules/next/dist/client/router.js");("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/router.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/router.js")},"./node_modules/react-wrap-balancer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SA:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),E="undefined"==typeof window,m=E?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,h=0,b=()=>++h,_=!1;function x(){let[n,r]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_?b:void 0);return m((()=>{void 0===n&&r(b()),_=!0}),[]),void 0===n?n:`rwb-${n.toString(32)}`}var y="__wrap_b",d="__wrap_n",v="__wrap_o",S=(n,r,e)=>{let t=(e=e||document.querySelector(`[data-br="${n}"]`)).parentElement,c=f=>e.style.maxWidth=f+"px";e.style.maxWidth="";let u,i=t.clientWidth,s=t.clientHeight,o=i/2-.25,a=i+.5;if(i){for(c(o),o=Math.max(e.scrollWidth,o);o+1<a;)u=Math.round((o+a)/2),c(u),t.clientHeight===s?a=u:o=u;c(a*r+i*(1-r))}e.__wrap_o||"undefined"!=typeof ResizeObserver&&(e.__wrap_o=new ResizeObserver((()=>{self.__wrap_b(0,+e.dataset.brr,e)}))).observe(t)},B=S.toString(),T=(n,r,e="")=>(e&&(e=`self.${d}!=1&&${e}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(n?"":`self.${d}=self.${d}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${y}=${B};`)+e},nonce:r})),g=react__WEBPACK_IMPORTED_MODULE_0__.createContext({preferNative:!0,hasProvider:!1}),w=({ratio:n=1,preferNative:r,nonce:e,children:t,...c})=>{let i=function R(){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>x),[])()}(),s=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(g),a=null!=r?r:o.preferNative,u=c.as||"span";return m((()=>{a&&1===self[d]||s.current&&(self[y]=S)(0,n,s.current)}),[t,a,n]),m((()=>{if(!a||1!==self[d])return()=>{if(!s.current)return;let f=s.current[v];f&&(f.disconnect(),delete s.current[v])}}),[a]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(u,{...c,"data-br":i,"data-brr":n,ref:s,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:a?"balance":"initial"},suppressHydrationWarning:!0},t),T(o.hasProvider,e,`self.${y}("${i}",${n})`))}}}]);