(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[621],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./components/Header/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_Dealer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./contexts/Dealer/index.tsx"),_contexts_Menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./contexts/Menu/index.tsx"),_contexts_Overlay__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./contexts/Overlay/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/Header/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Structures/Header",component:___WEBPACK_IMPORTED_MODULE_4__.default};var Template=function Template(args){return __jsx(_contexts_Menu__WEBPACK_IMPORTED_MODULE_2__.K,null,__jsx(_contexts_Overlay__WEBPACK_IMPORTED_MODULE_3__.N,null,__jsx(_contexts_Dealer__WEBPACK_IMPORTED_MODULE_1__.z,null,__jsx(___WEBPACK_IMPORTED_MODULE_4__.default,args))))};Template.displayName="Template";var Default=Template.bind({});Default.args={header:{mobile:{scrollCta:!0}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <MenuProvider>\n    <OverlayProvider>\n      <DealerProvider>\n        <Header {...args} />\n      </DealerProvider>\n    </OverlayProvider>\n  </MenuProvider>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/AdvancedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>AdvancedImage});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("transform-gpu"),transitions=(0,globals.ZP)("transition-opacity","duration-300","ease-in"),loaded=(0,globals.ZP)("opacity-100"),loading=(0,globals.ZP)("opacity-0"),imgFill=(0,globals.ZP)("absolute top-0 left-0 w-full h-full"),imgAuto=(0,globals.ZP)("w-full"),imgFixed=(0,globals.ZP)("inline-block overflow-hidden b-0 m-0 p-0 relative"),ADVANCED_IMAGE_DEFAULT_STYLES={img:(0,globals.ZP)("absolute top-0 left-0 w-full h-full m-auto p-0 block"),container:function container(type,width,height){return(0,globals.ZP)("max-w-full",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},imgFill,"fill"===type),imgFill,"responsive"===type),imgFixed,"fixed"===type),imgAuto,"auto"===type),function imgIntrinsic(width,height){return(0,globals.ZP)("relative inline-block",(0,defineProperty.Z)((0,defineProperty.Z)({},"max-w-[".concat(width,"]"),width),"max-h-[".concat(height,"]"),height))}(width,height),"intrinsic"===type))},imageLoaded:function imageLoaded(isLoaded){var hasTransitions=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],imgStyles=arguments.length>2?arguments[2]:void 0;return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},loaded,isLoaded),loading,!isLoaded),transitions,hasTransitions),imgStyles,imgStyles))}},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var AdvancedImage=function AdvancedImage(props){var _props$alt,_props$src,styles=_objectSpread(_objectSpread({},ADVANCED_IMAGE_DEFAULT_STYLES),props.customStyles),parseSizePx=function parseSizePx(size){return size?size.toString().replace(/px/g,"")+"px":""},containerStyle=styles.container(props.layout),altText=null!==(_props$alt=null==props?void 0:props.alt)&&void 0!==_props$alt?_props$alt:null==props||null===(_props$src=props.src)||void 0===_props$src?void 0:_props$src.toString(),imgCustomStyle={},lazy=null==props.loading||props.loading?"lazy":"eager";props.objectFit&&(imgCustomStyle.objectFit=props.objectFit),props.objectPosition&&(imgCustomStyle.objectPosition=props.objectPosition);var parseSrc=(0,react.useCallback)((function(src){var width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",quality=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80,applyWidthMultiplier=arguments.length>3&&void 0!==arguments[3]&&arguments[3],widthMultiplier=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.4;if(!src)return"";var assets_url="http://wp.culligan.com/wp-content/uploads/",hasWidth=""!==width&&null!=width,splittedSrc=src.split("?"),outputSrc=src;if(hasWidth){if(applyWidthMultiplier){var baseWidth="string"==typeof width?parseInt(width):width;width=Math.floor(baseWidth*widthMultiplier)}outputSrc="".concat(splittedSrc[0],"?w=").concat(width)}return quality&&(hasWidth?outputSrc+="&quality=".concat(quality):outputSrc="".concat(splittedSrc[0],"?quality=").concat(quality)),!src.includes("http")&&assets_url&&(outputSrc="".concat(assets_url).concat(outputSrc)),outputSrc}),[]),containerInlineStyle=null!=props&&props.ignoreContainerSize?{}:{height:parseSizePx(null==props?void 0:props.height),width:parseSizePx(null==props?void 0:props.width)};return __jsx("div",{className:containerStyle,style:containerInlineStyle},(null==props?void 0:props.priority)&&!(null!=props&&props.srcSets)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(props.src,props.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("picture",{key:props.src},(null==props?void 0:props.srcSets)&&(null==props?void 0:props.srcSets.map((function(item){var _item$quality;return __jsx(react.Fragment,{key:"key-".concat(item.src).concat(item.mediaQuery)},(null==props?void 0:props.priority)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(item.src,item.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("source",{width:item.width,height:item.height,media:item.mediaQuery,srcSet:parseSrc(item.src,item.width,null!==(_item$quality=item.quality)&&void 0!==_item$quality?_item$quality:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier)}))}))),__jsx("img",{id:props.id,style:null!=imgCustomStyle?imgCustomStyle:{},className:"".concat(styles.img," ").concat(props.imgStyles),src:parseSrc(props.src,null==props?void 0:props.width,null==props?void 0:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier),alt:altText,width:null==props?void 0:props.width,height:null==props?void 0:props.height,loading:lazy})))};AdvancedImage.displayName="AdvancedImage";try{AdvancedImage.displayName="AdvancedImage",AdvancedImage.__docgenInfo={description:"",displayName:"AdvancedImage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!1,type:{name:"string | number"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"PlaceholderValue"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:null,description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}},ignoreContainerSize:{defaultValue:null,description:"",name:"ignoreContainerSize",required:!1,type:{name:"boolean"}},applyWidthMultiplier:{defaultValue:null,description:"",name:"applyWidthMultiplier",required:!1,type:{name:"boolean"}},widthMultiplier:{defaultValue:null,description:"",name:"widthMultiplier",required:!1,type:{name:"number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"IAdvancedImageStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AdvancedImage/index.tsx#AdvancedImage"]={docgenInfo:AdvancedImage.__docgenInfo,name:"AdvancedImage",path:"components/AdvancedImage/index.tsx#AdvancedImage"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),anchor_link=__webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"),anchor_link_default=__webpack_require__.n(anchor_link),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),fi_index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),styles_button=((0,globals.ZP)("inline-block"),(0,globals.ZP)("relative","h-10","font-bold","text-sm","px-3","transition-colors","duration-200","ease-in","flex","flex-nowrap","items-center","justify-center","leading-base")),filled=(0,globals.ZP)(styles_button,"border-orange","bg-orange","text-white","hover:bg-orange-light","hover:border-orange-light"),ghost=(0,globals.ZP)(styles_button,"border-orange","bg-transparent","hover:bg-orange-light","hover:border-orange-light"),ghostAlt=(0,globals.ZP)(styles_button,"border-white","text-white","bg-transparent","hover:text-orange-light2","hover:bg-white","hover:border-white"),darkBlue=(0,globals.ZP)(styles_button,"border-blue-dark","bg-blue-dark","text-white","hover:bg-orange-light","hover:border-orange-light"),outlinedGray=(0,globals.ZP)(styles_button,"border-gray-dark","border-2","bg-transparent","text-gray-dark","hover:bg-orange-light","hover:border-orange-light","hover:text-white"),disabled=(0,globals.ZP)(styles_button,"bg-gray-lighter","border-gray-lighter","text-gray-dark","cursor-not-allowed"),orangeLink=(0,globals.ZP)("text-gray-dark","underline","underline-offset-2","decoration-orange","hover:text-orange-dark2","border-none","font-bold"),sizeBase=(0,globals.ZP)("text-base","leading-base"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeLg=(0,globals.ZP)("text-lg","leading-lg"),loadingIcon=function loadingIcon(visible){return(0,globals.ZP)("animate-spin","absolute","z-10",(0,defineProperty.Z)((0,defineProperty.Z)({},"visible",visible),"invisible",!visible))},linkDefaults=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light"),linkAlt=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light2"),linkArrow=(0,globals.ZP)(linkDefaults,"flex","flex-row","items-center"),linkArrowAlt=(0,globals.ZP)(linkAlt,"flex","flex-row","items-center"),linkArrowBlack=(0,globals.ZP)("text-gray-dark","font-bold","underline","flex","flex-row","items-center"),linkPlay=(0,globals.ZP)(linkAlt,"flex","flex-row","items-end","gap-1"),arrowBase=(0,globals.ZP)("w-6","h-6"),arrowSm=(0,globals.ZP)("w-5","h-5"),arrowLg=(0,globals.ZP)("w-7","h-7"),arrowLeft=(0,globals.ZP)("mr-2"),arrowRight=(0,globals.ZP)("ml-0.5"),arrowRightBlack=(0,globals.ZP)("ml-1","-mt-0.5","text-orange"),downloadLg=(0,globals.ZP)("w-5","h-5","ml-1","mb-1"),arrow=function arrow(size,variant){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},arrowBase,"base"===size),arrowSm,"sm"===size),arrowLg,"lg"===size),arrowLeft,"arrow-left"===variant),arrowRight,"arrow-right"===variant||"arrow-right-alt"===variant),arrowRightBlack,"arrow-right-black"===variant))},download=function download(size){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},downloadLg,"lg"===size||"sm"===size||"base"===size))},buttonVariant=function buttonVariant(variant,size,customBorder,customRounded){var _classnames5;return(0,globals.ZP)("cursor-pointer",(_classnames5={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,filled,"filled"===variant||"fulled"===variant),ghost,"ghost"===variant),ghostAlt,"ghostAlt"===variant),darkBlue,"dark-blue"===variant),outlinedGray,"outlined-gray"===variant),disabled,"disabled"===variant),linkArrow,"arrow-right"===variant||"arrow-left"===variant),linkArrowAlt,"arrow-right-alt"===variant),linkArrowBlack,"arrow-right-black"===variant),linkPlay,"play"===variant),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,orangeLink,"orangeLink"===variant),sizeBase,"base"===size),sizeSm,"sm"===size),sizeLg,"lg"===size),linkDefaults,"download"===variant),"border",!customBorder),"rounded",!customRounded)))},__jsx=react.createElement,InternalLink=function InternalLink(props){if("href"in props){var _props$size,_props$useLegacyLink,commonProps={"data-testid":props.data?props.data.testid:null,onClick:props.onClick,target:props.external?"_blank":null,"aria-label":props.label,className:buttonVariant(props.variant,null!==(_props$size=props.size)&&void 0!==_props$size?_props$size:"sm",!0)+" "+props.customStyles},useLegacyLink=null!==(_props$useLegacyLink=props.useLegacyLink)&&void 0!==_props$useLegacyLink&&_props$useLegacyLink;return props.href.startsWith("#")?__jsx(anchor_link_default(),(0,esm_extends.Z)({},commonProps,{href:props.href,offset:props.offset}),props.children):useLegacyLink?__jsx("a",(0,esm_extends.Z)({},commonProps,{href:props.href}),props.children):__jsx(link_default(),{href:props.href,passHref:!0},__jsx("a",commonProps,props.children))}},Button=function Button(props){var _props$data,_props$data2,_props$size2,_props$size3,_props$size4,handleClick=function handleClick(e){var _props$eventAnalytics,eventAnalytics=null!==(_props$eventAnalytics=props.eventAnalytics)&&void 0!==_props$eventAnalytics?_props$eventAnalytics:"cta";props.onClick&&props.onClick(e),props.fireAnalytics&&props.labelAnalytics&&analytics.c[eventAnalytics](props.labelAnalytics,null),props.fireAnalytics&&!props.labelAnalytics&&props.label&&analytics.c[eventAnalytics](props.label,null)},dataTestId=null!==(_props$data=props.data)&&void 0!==_props$data&&_props$data.isMobile?"button-mobile-".concat(props.data.testid):"button-desktop-".concat(null===(_props$data2=props.data)||void 0===_props$data2?void 0:_props$data2.testid);return"href"in props?__jsx(InternalLink,(0,esm_extends.Z)({},props,{onClick:handleClick,offset:props.offset}),__jsx("p",null,"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size2=props.size)&&void 0!==_props$size2?_props$size2:"base","arrow-left")}),props.children,props.variant.includes("arrow-right")&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"download"===props.variant&&__jsx(fi_index_esm._hL,{className:download(props.size?props.size:"base")}))):__jsx("button",{"data-testid":null!=dataTestId?dataTestId:null,onClick:handleClick,"aria-label":props.label,type:props.type,disabled:"loading"===props.state||"success"===props.state,className:buttonVariant(props.variant,null!==(_props$size3=props.size)&&void 0!==_props$size3?_props$size3:"sm",props.customBorder,props.customRounded)+" "+props.customStyles},"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size4=props.size)&&void 0!==_props$size4?_props$size4:"base","arrow-left")}),"loading"===props.state?__jsx(react.Fragment,null,__jsx(index_esm.xz6,{className:loadingIcon("loading"===props.state)}),__jsx("span",{className:"loading"===props.state?"invisible":"visible"},props.children)):props.children,"arrow-right"===props.variant&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"play"===props.variant&&__jsx(fa_index_esm.Gzj,{size:19}))};const components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},useLegacyLink:{defaultValue:null,description:"",name:"useLegacyLink",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"play"'},{value:'"disabled"'},{value:'"icon"'},{value:'"download"'},{value:'"fulled"'},{value:'"filled"'},{value:'"ghost"'},{value:'"ghostAlt"'},{value:'"arrow-right"'},{value:'"arrow-right-black"'},{value:'"arrow-right-alt"'},{value:'"arrow-left"'},{value:'"dark-blue"'},{value:'"outlined-gray"'},{value:'"orangeLink"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"TTailwindString"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event?: any) => any"}},fireAnalytics:{defaultValue:null,description:"",name:"fireAnalytics",required:!1,type:{name:"boolean"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},customBorder:{defaultValue:null,description:"",name:"customBorder",required:!1,type:{name:"boolean"}},customRounded:{defaultValue:null,description:"",name:"customRounded",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"IButtonData"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},eventAnalytics:{defaultValue:null,description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"resourcesCard"'},{value:'"scheduleAnAppointment"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"success"'},{value:'"error"'},{value:'"loading"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Container/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Container});var react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("container","mx-auto"),sm=(0,globals.ZP)("px-0","lg:px-20"),smAlt=(0,globals.ZP)("px-5","lg:px-20"),lg=(0,globals.ZP)("px-6","lg:px-36"),lgV2=(0,globals.ZP)("px-[15px]"),xlg=(0,globals.ZP)("px-5","sm:px-6","md:px-6","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xlgAlt=(0,globals.ZP)("px-0","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xxl=(0,globals.ZP)("px-8","lg:px-36"),containerGutter=function containerGutter(gutter){return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},sm,"sm"===gutter),smAlt,"smAlt"===gutter),lg,"lg"===gutter),lgV2,"lgV2"===gutter),xlg,"xlg"===gutter),xlgAlt,"xlgAlt"===gutter),xxl,"xxl"===gutter),"","none"===gutter))},containerWrapper=function containerWrapper(wrapper){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({"lg:mx-auto":"center"===(null==wrapper?void 0:wrapper.align)},"max-w-size-1216","1216"===(null==wrapper?void 0:wrapper.maxWidth)),"max-w-size-1246","1246"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1280px]","1280"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1600px]","1600"===(null==wrapper?void 0:wrapper.maxWidth)))},__jsx=react.createElement,Container=function Container(_ref){var gutter=_ref.gutter,children=_ref.children,containerStyles=_ref.containerStyles,id=_ref.id,style=_ref.style,wrappers=_ref.wrappers,_ref$tag=_ref.tag,tag=void 0===_ref$tag?"div":_ref$tag,props={id,style,className:containerGutter(gutter||"sm")+" "+containerWrapper(wrappers)+" "+(containerStyles||"")};return __jsx("section"===tag?"section":"div",props,children)};const components_Container=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{gutter:{defaultValue:null,description:"",name:"gutter",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"lgV2"'},{value:'"smAlt"'},{value:'"xlg"'},{value:'"xlgAlt"'},{value:'"xxl"'},{value:'"none"'}]}},containerStyles:{defaultValue:null,description:"",name:"containerStyles",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrappers:{defaultValue:null,description:"",name:"wrappers",required:!1,type:{name:"ContainerWrappers"}},tag:{defaultValue:{value:"div"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Container/index.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"components/Container/index.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./components/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Modal});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js");var useToggle=__webpack_require__("./hooks/useToggle.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),wrapper=(0,globals.ZP)("transform-gpu","transition-all","duration-700","ease-in-out"),visibleModal=(0,globals.ZP)("visible","translate-y-0","opacity-100"),hiddenModal=(0,globals.ZP)("invisible","translate-y-5","opacity-0"),modalVisibility=function modalVisibility(isVisible){return(0,globals.ZP)(wrapper,(0,defineProperty.Z)((0,defineProperty.Z)({},visibleModal,isVisible),hiddenModal,!isVisible))},__jsx=react.createElement,Modal=function Modal(_ref){var children=_ref.children,customStyles=_ref.customStyles,_useToggle=(0,useToggle.O)(!1),_useToggle2=(0,slicedToArray.Z)(_useToggle,2),show=_useToggle2[0],setShow=_useToggle2[1];return react.useEffect((function(){return setShow(!0),function(){setShow(!1)}})),function useLockBodyScroll(){(0,react.useLayoutEffect)((function(){var originalStyle=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",function(){return document.body.style.overflow=originalStyle}}),[])}(),__jsx("div",{className:modalVisibility(show)+" "+customStyles},children)};Modal.displayName="Modal";const components_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./contexts/Menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>useMenu,K:()=>MenuProvider});var _Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var MenuContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function menuReducer(_state,action){switch(action.type){case"set_menu":return _objectSpread(_objectSpread({},_state),{},{menu:action.payload.data,showCtaBanner:action.payload.showCtaBanner});case"set_menu_toggle":return _objectSpread(_objectSpread({},_state),{},{menuOpen:action.payload.menuOpen});case"set_active_site":return _objectSpread(_objectSpread({},_state),{},{activeSite:action.payload.activeSite});case"set_show_dealer_button":return _objectSpread(_objectSpread({},_state),{},{showDealerButton:action.payload.showDealerButton});case"set_is_mobile":return _objectSpread(_objectSpread({},_state),{},{isMobile:action.payload.isMobile})}}var initialState={menu:void 0,menuOpen:!1},MenuProvider=function MenuProvider(_ref){var children=_ref.children,_useReducer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(menuReducer,initialState),value={state:_useReducer[0],dispatch:_useReducer[1]};return __jsx(MenuContext.Provider,{value},children)};MenuProvider.displayName="MenuProvider";var useMenu=function useMenu(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);if(void 0===context)throw new Error("useMenu must be used within a MenuProvider");return context};try{MenuProvider.displayName="MenuProvider",MenuProvider.__docgenInfo={description:"",displayName:"MenuProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["contexts/Menu/index.tsx#MenuProvider"]={docgenInfo:MenuProvider.__docgenInfo,name:"MenuProvider",path:"contexts/Menu/index.tsx#MenuProvider"})}catch(__react_docgen_typescript_loader_error){}},"./contexts/Overlay/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>useOverlay,N:()=>OverlayProvider});var _Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,OverlayContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);function overlayReducer(_state,action){switch(action.type){case"show":case"switch":return{isVisible:!0,content:action.payload.content};case"hide":return{isVisible:!1}}}function OverlayProvider(_ref){var children=_ref.children,_React$useReducer=react__WEBPACK_IMPORTED_MODULE_0__.useReducer(overlayReducer,{isVisible:!0}),_React$useReducer2=(0,_Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_React$useReducer,2),value={state:_React$useReducer2[0],dispatch:_React$useReducer2[1]};return __jsx(OverlayContext.Provider,{value},children)}function useOverlay(){var context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(OverlayContext);if(void 0===context)throw new Error("useOverlay must be used within a OverlayProvider");return context}OverlayProvider.displayName="OverlayProvider";try{OverlayProvider.displayName="OverlayProvider",OverlayProvider.__docgenInfo={description:"",displayName:"OverlayProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["contexts/Overlay/index.tsx#OverlayProvider"]={docgenInfo:OverlayProvider.__docgenInfo,name:"OverlayProvider",path:"contexts/Overlay/index.tsx#OverlayProvider"})}catch(__react_docgen_typescript_loader_error){}},"./utils/formatString.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>parseKebabCase,y:()=>parseAmpersand});var parseAmpersand=function parseAmpersand(content){return content.replace(/&amp; /g,"& ")},parseKebabCase=function parseKebabCase(str){return null!=str&&str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).join("-").toLowerCase()}},"./utils/imageLoader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>customLoader});var assets_url="http://wp.culligan.com/wp-content/uploads/",customLoader=function customLoader(_ref){var src=_ref.src,width=_ref.width,_ref$quality=_ref.quality,quality=void 0===_ref$quality?80:_ref$quality;return"".concat(!src.includes("http")&&assets_url?assets_url:"").concat(src,"?w=").concat(null!=width?width:"","&quality=").concat(quality)}},"./utils/style/resolutions.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{EK:()=>showOnlyDesktop,Zo:()=>showOnlyMobile,jZ:()=>showOnlyDesktopFlex,lX:()=>showOnlyMobileFlex});var _styles_globals__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styles/globals.ts"),showOnlyMobile=(0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.ZP)((0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.jf)("block","lg:hidden")),showOnlyDesktop=(0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.ZP)((0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.jf)("hidden","lg:block")),showOnlyMobileFlex=(0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.ZP)((0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.jf)("flex","lg:hidden")),showOnlyDesktopFlex=(0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.ZP)((0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__.jf)("hidden","lg:flex"))},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")}}]);