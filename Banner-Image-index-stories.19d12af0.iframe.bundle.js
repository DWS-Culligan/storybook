(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[950],{"./components/Banner/Image/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,Mobile:()=>Mobile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_views_Category_WaterDispensing_Hero_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./views/Category/WaterDispensing/Hero/data.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/Banner/Image/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Structures/Banner Image *",component:___WEBPACK_IMPORTED_MODULE_3__.Z,excludeStories:["Desktop","Mobile"]};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_3__.Z,args)};Template.displayName="Template";var Desktop=Template.bind({});Desktop.args=_objectSpread(_objectSpread({},_views_Category_WaterDispensing_Hero_data__WEBPACK_IMPORTED_MODULE_2__.UP.background),_views_Category_WaterDispensing_Hero_data__WEBPACK_IMPORTED_MODULE_2__.UP.background.image);var Mobile=Template.bind({});Mobile.args=_objectSpread(_objectSpread({},_views_Category_WaterDispensing_Hero_data__WEBPACK_IMPORTED_MODULE_2__.r2.background),_views_Category_WaterDispensing_Hero_data__WEBPACK_IMPORTED_MODULE_2__.r2.background.image);const __namedExportsOrder=["Desktop","Mobile"]},"./components/AdvancedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>AdvancedImage});var react=__webpack_require__("./node_modules/react/index.js"),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),imgFill=((0,globals.ZP)("transform-gpu"),(0,globals.ZP)("transition-opacity","duration-300","ease-in"),(0,globals.ZP)("opacity-100"),(0,globals.ZP)("opacity-0"),(0,globals.ZP)("absolute top-0 left-0 w-full h-full")),imgAuto=(0,globals.ZP)("w-full"),imgFixed=(0,globals.ZP)("inline-block overflow-hidden b-0 m-0 p-0 relative"),container=function container(type,width,height){return(0,globals.ZP)("max-w-full",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},imgFill,"fill"===type),imgFill,"responsive"===type),imgFixed,"fixed"===type),imgAuto,"auto"===type),function imgIntrinsic(width,height){return(0,globals.ZP)("relative inline-block",(0,defineProperty.Z)((0,defineProperty.Z)({},"max-w-[".concat(width,"]"),width),"max-h-[".concat(height,"]"),height))}(width,height),"intrinsic"===type))},img=(0,globals.ZP)("absolute top-0 left-0 w-full h-full m-auto p-0 block"),__jsx=react.createElement,AdvancedImage=function AdvancedImage(props){var _props$alt,_props$src,parseSizePx=function parseSizePx(size){return size?size.toString().replace(/px/g,"")+"px":""},containerStyle=container(props.layout),altText=null!==(_props$alt=null==props?void 0:props.alt)&&void 0!==_props$alt?_props$alt:null==props||null===(_props$src=props.src)||void 0===_props$src?void 0:_props$src.toString(),imgCustomStyle={},lazy=null==props.loading||props.loading?"lazy":"eager";props.objectFit&&(imgCustomStyle.objectFit=props.objectFit),props.objectPosition&&(imgCustomStyle.objectPosition=props.objectPosition);var parseSrc=(0,react.useCallback)((function(src){var width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",quality=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80,applyWidthMultiplier=arguments.length>3&&void 0!==arguments[3]&&arguments[3],widthMultiplier=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.4;if(!src)return"";var assets_url="http://wp.culligan.com/wp-content/uploads/",hasWidth=""!==width&&null!=width,splittedSrc=src.split("?"),outputSrc=src;if(hasWidth){if(applyWidthMultiplier){var baseWidth="string"==typeof width?parseInt(width):width;width=Math.floor(baseWidth*widthMultiplier)}outputSrc="".concat(splittedSrc[0],"?w=").concat(width)}return quality&&(hasWidth?outputSrc+="&quality=".concat(quality):outputSrc="".concat(splittedSrc[0],"?quality=").concat(quality)),!src.includes("http")&&assets_url&&(outputSrc="".concat(assets_url).concat(outputSrc)),outputSrc}),[]),containerInlineStyle=null!=props&&props.ignoreContainerSize?{}:{height:parseSizePx(null==props?void 0:props.height),width:parseSizePx(null==props?void 0:props.width)};return __jsx("div",{className:containerStyle,style:containerInlineStyle},(null==props?void 0:props.priority)&&!(null!=props&&props.srcSets)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(props.src,props.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("picture",{key:props.src},(null==props?void 0:props.srcSets)&&(null==props?void 0:props.srcSets.map((function(item){var _item$quality;return __jsx(react.Fragment,{key:"key-".concat(item.src).concat(item.mediaQuery)},(null==props?void 0:props.priority)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(item.src,item.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("source",{width:item.width,height:item.height,media:item.mediaQuery,srcSet:parseSrc(item.src,item.width,null!==(_item$quality=item.quality)&&void 0!==_item$quality?_item$quality:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier)}))}))),__jsx("img",{id:props.id,style:null!=imgCustomStyle?imgCustomStyle:{},className:"".concat(img," ").concat(props.imgStyles),src:parseSrc(props.src,null==props?void 0:props.width,null==props?void 0:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier),alt:altText,width:null==props?void 0:props.width,height:null==props?void 0:props.height,loading:lazy})))};AdvancedImage.displayName="AdvancedImage";try{AdvancedImage.displayName="AdvancedImage",AdvancedImage.__docgenInfo={description:"",displayName:"AdvancedImage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!1,type:{name:"string | number"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"PlaceholderValue"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:null,description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}},ignoreContainerSize:{defaultValue:null,description:"",name:"ignoreContainerSize",required:!1,type:{name:"boolean"}},applyWidthMultiplier:{defaultValue:null,description:"",name:"applyWidthMultiplier",required:!1,type:{name:"boolean"}},widthMultiplier:{defaultValue:null,description:"",name:"widthMultiplier",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AdvancedImage/index.tsx#AdvancedImage"]={docgenInfo:AdvancedImage.__docgenInfo,name:"AdvancedImage",path:"components/AdvancedImage/index.tsx#AdvancedImage"})}catch(__react_docgen_typescript_loader_error){}},"./components/Banner/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Banner_Image});var react=__webpack_require__("./node_modules/react/index.js"),AdvancedImage=__webpack_require__("./components/AdvancedImage/index.tsx"),useMediaQuery=__webpack_require__("./hooks/useMediaQuery.ts"),wrapper=(0,__webpack_require__("./styles/globals.ts").ZP)("relative","w-full","h-0"),__jsx=react.createElement,BannerImage=function BannerImage(_ref){var src=_ref.src,alt=_ref.alt,height=_ref.height,_ref$priority=_ref.priority,priority=void 0!==_ref$priority&&_ref$priority,_ref$objectFit=_ref.objectFit,objectFit=void 0===_ref$objectFit?"fill":_ref$objectFit,fixedHeight=_ref.fixedHeight,objectPosition=_ref.objectPosition,quality=_ref.quality,customStyles=_ref.customStyles,_ref$srcSets=_ref.srcSets,srcSets=void 0===_ref$srcSets?[]:_ref$srcSets,width=(0,useMediaQuery.Z)("(max-width: 1023px)")?"1023":"1920";return __jsx("div",{className:wrapper+" "+"".concat(customStyles||""),style:fixedHeight?{height:"".concat(height,"px")}:{paddingTop:"".concat(height,"%")}},src&&__jsx(AdvancedImage.p,{src,alt,layout:"fill",objectFit,objectPosition,priority,quality,srcSets,loading:!priority,height,width}))};BannerImage.displayName="BannerImage";const Banner_Image=BannerImage;try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"The image address",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"Image alt text for AA",name:"alt",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"Height of the image in percentage of the width\nThe height is used to indicate the image proportion",name:"height",required:!0,type:{name:"number"}},fixedHeight:{defaultValue:null,description:"If true, the above height will be interpreted as pixels",name:"fixedHeight",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"false"},description:"Whether or not the image shoul be preloaded (use for above the fold images only)",name:"priority",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:{value:"fill"},description:"Whether the image should fill up the space or hold proportions",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"cover"'}]}},objectPosition:{defaultValue:null,description:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",name:"objectPosition",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"Image quality in percentage",name:"quality",required:!1,type:{name:"number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:{value:"[]"},description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Banner/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"components/Banner/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./hooks/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useMediaQuery(query){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),matches=_useState[0],setMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var media=window.matchMedia(query);media.matches!==matches&&setMatches(media.matches);var listener=function listener(){return setMatches(media.matches)};return window.addEventListener("resize",listener),function(){return window.removeEventListener("resize",listener)}}),[matches,query]),matches}},"./styles/globals.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bd:()=>transitionTimingFunction,C3:()=>inset,Cz:()=>backgroundColor,E0:()=>borderRadius,FK:()=>position,Fw:()=>pointerEvents,I8:()=>fontFamily,J4:()=>borderWidth,JB:()=>fontSize,Kl:()=>justifyContent,Me:()=>flexDirection,Nv:()=>lineHeight,SG:()=>gap,Ue:()=>fontWeight,WO:()=>flexWrap,Xu:()=>brightness,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,bf:()=>width,cq:()=>alignItems,dh:()=>classnames,hl:()=>fill,ix:()=>boxSizing,jf:()=>display,jw:()=>minHeight,nV:()=>transitionDuration,n_:()=>transitionProperty,o3:()=>padding,rX:()=>letterSpacing,tv:()=>borderColor,zP:()=>textColor});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),backgroundColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderRadius=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderWidth=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,transitionProperty=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),transitionDuration=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,transitionTimingFunction=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,brightness=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),flexDirection=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),flexWrap=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,alignItems=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,justifyContent=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),gap=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),padding=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,pointerEvents=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),display=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),boxSizing=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),position=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),inset=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),width=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),minHeight=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fill=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontFamily=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontSize=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,fontWeight=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,letterSpacing=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,lineHeight=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,textColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),classnames=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=classnames},"./views/Category/WaterDispensing/Hero/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{UP:()=>DESKTOP_BANNER,r2:()=>MOBILE_BANNER});var globals=__webpack_require__("./styles/globals.ts"),underMenu={text:"Select and jump to using the menu below.",items:[{title:"Benefits",src:"benefits",offset:-170,offsetMobile:-70},{title:"Bottled Water Delivery",src:"delivery"},{title:"Water Dispensers",src:"dispensers"},{title:"Bottleless Coolers",src:"bottlelessCoolers"},{title:"Reviews",src:"reviews-banner"},{title:"FAQs",src:"faq"},{title:"Resources",src:"resources",offset:-160,offsetMobile:-80}],gutter:"xlg",customUnderMenuStyles:{underMenuContainerCustom:(0,globals.ZP)("!justify-center","!px-0","gap-x-10"),underMenuButtonContainerCustom:(0,globals.ZP)("!flex-none")}},DESKTOP_BANNER={background:{image:{src:"2022/11/man-replacing-water-dispenser-jug.jpg",alt:"Culligan delivery man replacing a water dispenser jug",priority:!0,objectFit:"fill",objectPosition:"",quality:80},color:"",height:37.43,fixedHeight:!1,customStyles:""},text:{superscript:{color:"blue-light",size:"lg",content:"WATER DISPENSING & DELIVERY",className:"",tag:"h1",tagStyle:"h5"},title:{color:"blue",tag:"h1",content:"Better Water Made<br />Refreshingly Simple",className:"",optimizeId:"",customStyles:""},subscript:{color:"black",size:"xl",content:"Culligan Water® provides your family with convenient, sustainable and<br />affordable drinking water. Choose from a range of high-quality water<br/> delivery and dispensing options to satisfy your family’s unique needs.",className:"leading-5"},position:{x:"left",y:"center"},align:"left",customStyles:"",customContainerStyles:""},cta:{content:"GET STARTED WITH WATER DELIVERY",href:"/water-dispensing/water-delivery-service",external:!1,variant:"fulled",label:"GET STARTED WITH WATER DELIVERY",size:"sm",customStyles:"uppercase text-lg  w-[401px] !px-6",offset:90,fireAnalytics:!0,labelAnalytics:"Get started with water delivery"},gutter:"sm",customStyles:"",customContainerStyles:"",underMenu},MOBILE_BANNER={background:{image:{src:"2022/11/mobile-man-replacing-water-dispenser-jug.jpeg",alt:"Culligan delivery man replacing a water dispenser jug",priority:!0,objectFit:"fill",objectPosition:"",quality:80},color:"",height:51,fixedHeight:!1,customStyles:""},text:{superscript:{color:"blue-light",content:"WATER DISPENSING & DELIVERY",tag:"h1",tagStyle:"p",size:"xl"},title:{color:"blue",tag:"p",content:"Better Water<br/> Made Refreshingly Simple",className:"w-[330px]",optimizeId:"",customStyles:"font-poppins text-[33px]",tagStyle:"h1"},position:{x:"left",y:"center"},align:"left",description:{color:"black",size:"md",content:"Culligan Water® provides your family with convenient, sustainable and affordable drinking water. Choose from a range of high-quality water delivery and dispensing options to satisfy your family’s unique needs.",className:"leading-base"}},cta:{content:"GET STARTED WITH<br/> WATER DELIVERY",href:"/water-dispensing/water-delivery-service",external:!1,variant:"filled",label:"GET STARTED WITH WATER DELIVERY",size:"lg",customStyles:"uppercase text-center text-lg h-[56px] min-w-full",offset:50,fireAnalytics:!0,labelAnalytics:"Get started with water delivery"},gutter:"none",underMenu,isRectangle:!0,customRectangleStyle:"xs:pb-4 xs:w-[88%] xs:-top-6",customContainerStyles:"px-3",customStyles:""}},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")}}]);