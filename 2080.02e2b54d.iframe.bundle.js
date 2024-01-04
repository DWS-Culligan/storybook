(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[2080,3514],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./components/AdvancedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>AdvancedImage});var react=__webpack_require__("./node_modules/react/index.js"),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),imgFill=((0,globals.ZP)("transform-gpu"),(0,globals.ZP)("transition-opacity","duration-300","ease-in"),(0,globals.ZP)("opacity-100"),(0,globals.ZP)("opacity-0"),(0,globals.ZP)("absolute top-0 left-0 w-full h-full")),imgAuto=(0,globals.ZP)("w-full"),imgFixed=(0,globals.ZP)("inline-block overflow-hidden b-0 m-0 p-0 relative"),container=function container(type,width,height){return(0,globals.ZP)("max-w-full",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},imgFill,"fill"===type),imgFill,"responsive"===type),imgFixed,"fixed"===type),imgAuto,"auto"===type),function imgIntrinsic(width,height){return(0,globals.ZP)("relative inline-block",(0,defineProperty.Z)((0,defineProperty.Z)({},"max-w-[".concat(width,"]"),width),"max-h-[".concat(height,"]"),height))}(width,height),"intrinsic"===type))},img=(0,globals.ZP)("absolute top-0 left-0 w-full h-full m-auto p-0 block"),__jsx=react.createElement,AdvancedImage=function AdvancedImage(props){var _props$alt,_props$src,parseSizePx=function parseSizePx(size){return size?size.toString().replace(/px/g,"")+"px":""},containerStyle=container(props.layout),altText=null!==(_props$alt=null==props?void 0:props.alt)&&void 0!==_props$alt?_props$alt:null==props||null===(_props$src=props.src)||void 0===_props$src?void 0:_props$src.toString(),imgCustomStyle={},lazy=null==props.loading||props.loading?"lazy":"eager";props.objectFit&&(imgCustomStyle.objectFit=props.objectFit),props.objectPosition&&(imgCustomStyle.objectPosition=props.objectPosition);var parseSrc=(0,react.useCallback)((function(src){var width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",quality=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80,applyWidthMultiplier=arguments.length>3&&void 0!==arguments[3]&&arguments[3],widthMultiplier=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.4;if(!src)return"";var assets_url="https://wp.culligan.com/wp-content/uploads/",hasWidth=""!==width&&null!=width,splittedSrc=src.split("?"),outputSrc=src;if(hasWidth){if(applyWidthMultiplier){var baseWidth="string"==typeof width?parseInt(width):width;width=Math.floor(baseWidth*widthMultiplier)}outputSrc="".concat(splittedSrc[0],"?w=").concat(width)}return quality&&(hasWidth?outputSrc+="&quality=".concat(quality):outputSrc="".concat(splittedSrc[0],"?quality=").concat(quality)),!src.includes("http")&&assets_url&&(outputSrc="".concat(assets_url).concat(outputSrc)),outputSrc}),[]),containerInlineStyle=null!=props&&props.ignoreContainerSize?{}:{height:parseSizePx(null==props?void 0:props.height),width:parseSizePx(null==props?void 0:props.width)};return __jsx("div",{className:containerStyle,style:containerInlineStyle},(null==props?void 0:props.priority)&&!(null!=props&&props.srcSets)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(props.src,props.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("picture",{key:props.src},(null==props?void 0:props.srcSets)&&(null==props?void 0:props.srcSets.map((function(item){var _item$quality;return __jsx(react.Fragment,{key:"key-".concat(item.src).concat(item.mediaQuery)},(null==props?void 0:props.priority)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(item.src,item.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("source",{width:item.width,height:item.height,media:item.mediaQuery,srcSet:parseSrc(item.src,item.width,null!==(_item$quality=item.quality)&&void 0!==_item$quality?_item$quality:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier)}))}))),__jsx("img",{id:props.id,style:null!=imgCustomStyle?imgCustomStyle:{},className:"".concat(img," ").concat(props.imgStyles),src:parseSrc(props.src,null==props?void 0:props.width,null==props?void 0:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier),alt:altText,width:null==props?void 0:props.width,height:null==props?void 0:props.height,loading:lazy})))};AdvancedImage.displayName="AdvancedImage";try{AdvancedImage.displayName="AdvancedImage",AdvancedImage.__docgenInfo={description:"",displayName:"AdvancedImage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!1,type:{name:"string | number"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"PlaceholderValue"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:null,description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}},ignoreContainerSize:{defaultValue:null,description:"",name:"ignoreContainerSize",required:!1,type:{name:"boolean"}},applyWidthMultiplier:{defaultValue:null,description:"",name:"applyWidthMultiplier",required:!1,type:{name:"boolean"}},widthMultiplier:{defaultValue:null,description:"",name:"widthMultiplier",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AdvancedImage/index.tsx#AdvancedImage"]={docgenInfo:AdvancedImage.__docgenInfo,name:"AdvancedImage",path:"components/AdvancedImage/index.tsx#AdvancedImage"})}catch(__react_docgen_typescript_loader_error){}},"./components/ProductCard/Variants/ProductCardDefault/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Variants_ProductCardDefault});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),AdvancedImage=__webpack_require__("./components/AdvancedImage/index.tsx"),LinkStyle=__webpack_require__("./components/TextStyle/LinkStyle/index.tsx"),TitleStyle=__webpack_require__("./components/TextStyle/TitleStyle/index.tsx"),analytics=__webpack_require__("./utils/analytics/index.ts"),globals=__webpack_require__("./styles/globals.ts"),DEFAULT_PRODUCT_CARD_STYLES={title:(0,globals.ZP)("!font-normal"),wrapper:(0,globals.ZP)("flex","flex-col","shadow-card1","h-auto"),imgContainer:(0,globals.ZP)("bg-gray-lighter","relative","max-h-[280px]","flex","justify-center"),textContainer:(0,globals.ZP)("p-6","bg-white","h-full","flex","flex-col","justify-between"),description:(0,globals.ZP)("flex","text-sm","text-gray-dark","leading-tight","my-[0.9375rem]","leading-sm")},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ProductCardDefault=function ProductCardDefault(_ref){var title=_ref.title,description=_ref.description,ctaHref=_ref.ctaHref,ctaText=_ref.ctaText,_ref$ctaHasUnderline=_ref.ctaHasUnderline,ctaHasUnderline=void 0===_ref$ctaHasUnderline||_ref$ctaHasUnderline,_ref$ctaHasArrow=_ref.ctaHasArrow,ctaHasArrow=void 0===_ref$ctaHasArrow||_ref$ctaHasArrow,_ref$ctaColor=_ref.ctaColor,ctaColor=void 0===_ref$ctaColor?"orangeBlackMobile":_ref$ctaColor,imgSrc=_ref.imgSrc,imgHeight=_ref.imgHeight,imgWidth=_ref.imgWidth,_ref$imgLayout=_ref.imgLayout,imgLayout=void 0===_ref$imgLayout?"intrinsic":_ref$imgLayout,customGaEvent=_ref.customGaEvent,customStyles=_ref.customStyles,_ref$useLegacyLinks=_ref.useLegacyLinks,useLegacyLinks=void 0!==_ref$useLegacyLinks&&_ref$useLegacyLinks,styles=_objectSpread(_objectSpread({},DEFAULT_PRODUCT_CARD_STYLES),customStyles),parsedTitle=(0,html_to_react.Parser)().parse(title),handleClick=function handleClick(){if(customGaEvent){var event=customGaEvent.event,label=customGaEvent.label,action=customGaEvent.action;analytics.c[event](label,action)}else analytics.c.cta(parsedTitle)};return __jsx("div",{className:styles.wrapper},useLegacyLinks?function legacyLinks(){return __jsx(react.Fragment,null,__jsx("div",{onClick:function onClick(){return handleClick()}},__jsx("a",{className:styles.imgContainer,href:ctaHref},__jsx(AdvancedImage.p,{alt:title,src:imgSrc,layout:imgLayout,height:imgHeight,width:imgWidth,className:styles.imgSize}))),__jsx("div",{className:styles.textContainer},__jsx("div",null,__jsx("div",{onClick:function onClick(){return handleClick()}},__jsx("a",{href:ctaHref},__jsx(TitleStyle.V,{color:"blue",tag:"h3",tagStyle:"h6",customStyles:styles.title},parsedTitle))),__jsx("p",{className:styles.description},(0,html_to_react.Parser)().parse(description))),__jsx("a",{href:ctaHref},__jsx(LinkStyle.Z,{arrow:ctaHasArrow,underline:ctaHasUnderline,text:ctaText,color:ctaColor,theme:"mobile-sm-desktop-large",eventAnalytics:"cta",labelAnalytics:ctaText}))))}():function rebuildLinks(){return __jsx(react.Fragment,null,__jsx(link_default(),{href:ctaHref,passHref:!0},__jsx("a",{className:styles.imgContainer,onClick:function onClick(){return handleClick()}},__jsx(AdvancedImage.p,{alt:title,src:imgSrc,layout:imgLayout,height:imgHeight,width:imgWidth,className:styles.imgSize}))),__jsx("div",{className:styles.textContainer},__jsx("div",null,__jsx(link_default(),{href:ctaHref,passHref:!0},__jsx("a",{onClick:function onClick(){return handleClick()}},__jsx(TitleStyle.V,{color:"blue",tag:"h3",tagStyle:"h6",customStyles:styles.title},parsedTitle))),__jsx("p",{className:styles.description},(0,html_to_react.Parser)().parse(description))),__jsx(link_default(),{href:ctaHref,passHref:!0},__jsx("a",null,__jsx(LinkStyle.Z,{arrow:ctaHasArrow,underline:ctaHasUnderline,text:ctaText,color:ctaColor,theme:"mobile-sm-desktop-large",eventAnalytics:"cta",labelAnalytics:ctaText})))))}())};ProductCardDefault.displayName="ProductCardDefault";const Variants_ProductCardDefault=ProductCardDefault;try{ProductCardDefault.displayName="ProductCardDefault",ProductCardDefault.__docgenInfo={description:"",displayName:"ProductCardDefault",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},ctaText:{defaultValue:null,description:"",name:"ctaText",required:!0,type:{name:"string"}},ctaHref:{defaultValue:null,description:"",name:"ctaHref",required:!0,type:{name:"string"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!0,type:{name:"string"}},mobileImgSrc:{defaultValue:null,description:"",name:"mobileImgSrc",required:!1,type:{name:"string"}},imgHeight:{defaultValue:null,description:"",name:"imgHeight",required:!0,type:{name:"string"}},imgWidth:{defaultValue:null,description:"",name:"imgWidth",required:!0,type:{name:"string"}},imgHeightMobile:{defaultValue:null,description:"",name:"imgHeightMobile",required:!1,type:{name:"string"}},imgWidthMobile:{defaultValue:null,description:"",name:"imgWidthMobile",required:!1,type:{name:"string"}},imgWithMargin:{defaultValue:null,description:"",name:"imgWithMargin",required:!1,type:{name:"boolean"}},imgLayout:{defaultValue:{value:"intrinsic"},description:"",name:"imgLayout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"intrinsic"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"IProductCardStyles"}},isMobileCompact:{defaultValue:null,description:"",name:"isMobileCompact",required:!1,type:{name:"boolean"}},ctaHasArrow:{defaultValue:{value:"true"},description:"",name:"ctaHasArrow",required:!1,type:{name:"boolean"}},ctaHasUnderline:{defaultValue:{value:"true"},description:"",name:"ctaHasUnderline",required:!1,type:{name:"boolean"}},ctaColor:{defaultValue:{value:"orangeBlackMobile"},description:"",name:"ctaColor",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"white"'},{value:'"orange"'},{value:'"gray"'},{value:'"grayDark"'},{value:'"orangeGray"'},{value:'"orangeBlackMobile"'},{value:'"fullOrangeBlackMobile"'}]}},customGaEvent:{defaultValue:null,description:"",name:"customGaEvent",required:!1,type:{name:"ILinkCustomGaEvent"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"IProductCardStyles"}},useLegacyLinks:{defaultValue:{value:"false"},description:"",name:"useLegacyLinks",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ProductCard/Variants/ProductCardDefault/index.tsx#ProductCardDefault"]={docgenInfo:ProductCardDefault.__docgenInfo,name:"ProductCardDefault",path:"components/ProductCard/Variants/ProductCardDefault/index.tsx#ProductCardDefault"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/LinkStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>TextStyle_LinkStyle});var react=__webpack_require__("./node_modules/react/index.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),wrapper=(0,globals.ZP)("flex","flex-row","items-center","group"),styles_text=function text(theme,color,underline){var _classnames;return(0,globals.ZP)("cursor-pointer","font-bold","hover:underline",(_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-blue-light","group-hover:text-orange-light2"),"blue"==color),(0,globals.ZP)("text-orange","group-hover:text-orange-light2"),"orange"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-gray-light3","group-hover:text-orange-light2"),"gray"==color),(0,globals.ZP)("text-gray-dark","lg:text-orange","lg:group-hover:text-orange-light2"),"orangeBlackMobile"==color||"fullOrangeBlackMobile"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2"),"grayDark"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2","decoration-orange"),"orangeGray"==color),(0,globals.ZP)("text-xl","!leading-5"),"large"==theme),(0,globals.ZP)("text-lg","leading-lg"),"small"==theme),(0,globals.ZP)("text-base"),"base"==theme),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-sm"),"sm"==theme),(0,globals.ZP)("md:text-lg","md:leading-lg"),"mobile-base-desktop-lg"==theme),(0,globals.ZP)("text-base","md:text-base-xl"),"mobile-base-desktop-base-xl"==theme),(0,globals.ZP)("text-sm","md:text-base-xl"),"mobile-sm-desktop-large"==theme),(0,globals.ZP)("underline"),underline)))},styles_arrow=function arrow(theme,color){return(0,globals.ZP)("ml-1","inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},(0,globals.ZP)("text-orange","lg:group-hover:text-orange-light2"),"orange"==color||"orangeBlackMobile"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2"),"grayDark"==color),(0,globals.ZP)("text-gray-dark","lg:group-hover:text-orange-light2"),"fullOrangeBlackMobile"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-gray-light3","group-hover:text-orange-light2"),"gray"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-orange","group-hover:text-orange-light2"),"orangeGray"==color),(0,globals.ZP)("text-2xl"),"large"==theme),(0,globals.ZP)("text-xl"),"small"==theme))},lastWordArrowWrapper=function lastWordArrowWrapper(underline){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},(0,globals.ZP)("underline"),underline))},playIcon=(0,globals.ZP)("ml-2","inline-block","align-middle","text-orange","group-hover:text-orange-light2","pb-1"),downloadIcon=function downloadIcon(theme,color){return(0,globals.ZP)("ml-1","inline-block","-mt-1",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},(0,globals.ZP)("text-orange","lg:group-hover:text-orange-light2"),"orange"==color||"orangeBlackMobile"==color),(0,globals.ZP)("text-white","group-hover:text-orange-light2"),"white"==color),(0,globals.ZP)("text-gray-light3","group-hover:text-orange-light2"),"gray"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-2xl"),"large"==theme),(0,globals.ZP)("text-xl"),"small"==theme))},__jsx=react.createElement,LinkStyle=function LinkStyle(_ref){var text=_ref.text,_ref$arrow=_ref.arrow,arrow=void 0!==_ref$arrow&&_ref$arrow,_ref$arrowLeft=_ref.arrowLeft,arrowLeft=void 0!==_ref$arrowLeft&&_ref$arrowLeft,_ref$arrowIcon=_ref.arrowIcon,arrowIcon=void 0===_ref$arrowIcon?"right":_ref$arrowIcon,theme=_ref.theme,color=_ref.color,_ref$underline=_ref.underline,underline=void 0!==_ref$underline&&_ref$underline,labelAnalytics=_ref.labelAnalytics,customStyles=_ref.customStyles,customStylesArrow=_ref.customStylesArrow,_ref$eventAnalytics=_ref.eventAnalytics,eventAnalytics=void 0===_ref$eventAnalytics?"cta":_ref$eventAnalytics,_ref$breakArrowAndLas=_ref.breakArrowAndLastWord,breakArrowAndLastWord=void 0!==_ref$breakArrowAndLas&&_ref$breakArrowAndLas,actionAnalytics=_ref.actionAnalytics,_useState=(0,react.useState)(text),linkText=_useState[0],setLinkText=_useState[1],_useState2=(0,react.useState)(text),lastWord=_useState2[0],setLastWord=_useState2[1];(0,react.useEffect)((function(){var _text$substring,lastSpaceIndex=text.lastIndexOf(" ");breakArrowAndLastWord&&lastSpaceIndex>0?(setLinkText(text.substring(0,lastSpaceIndex)+" "),setLastWord(null!==(_text$substring=text.substring(lastSpaceIndex))&&void 0!==_text$substring?_text$substring:"")):(setLinkText(text),setLastWord(""))}),[text,breakArrowAndLastWord]);var getArrowElement=function getArrowElement(){switch(arrowIcon){case"right":return __jsx(hi_index_esm.WFu,{className:customStylesArrow+" "+styles_arrow(theme,color)});case"play":return __jsx(index_esm.Gzj,{className:playIcon,size:21});case"download":return __jsx(hi_index_esm.yFZ,{className:customStylesArrow+" "+downloadIcon(theme,color),size:26});case"circledDown":return __jsx(hi_index_esm.PeR,{className:customStylesArrow+" "+styles_arrow(theme,color)});case"chevronDown":return __jsx(hi_index_esm.kzR,{className:customStylesArrow+" "+styles_arrow(theme,color)});case"chevronUp":return __jsx(hi_index_esm.lVW,{className:customStylesArrow+" "+styles_arrow(theme,color)})}};return __jsx("div",{className:wrapper,onClick:function onClick(){return function handleClick(labelAnalytics){labelAnalytics&&analytics.c[eventAnalytics](labelAnalytics,actionAnalytics)}(labelAnalytics)}},__jsx("p",{className:styles_text(theme,color,underline)+" "+customStyles},arrowLeft&&__jsx(hi_index_esm.siY,{className:customStylesArrow+" "+styles_arrow(theme,color)}),(0,html_to_react.Parser)().parse(linkText),arrow&&function renderArrow(){return!arrowLeft&&breakArrowAndLastWord?__jsx("span",{className:lastWordArrowWrapper(underline)},lastWord,getArrowElement()):getArrowElement()}()))};LinkStyle.displayName="LinkStyle";const TextStyle_LinkStyle=LinkStyle;try{LinkStyle.displayName="LinkStyle",LinkStyle.__docgenInfo={description:"",displayName:"LinkStyle",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},arrow:{defaultValue:{value:"false"},description:"",name:"arrow",required:!1,type:{name:"boolean"}},arrowLeft:{defaultValue:{value:"false"},description:"",name:"arrowLeft",required:!1,type:{name:"boolean"}},arrowIcon:{defaultValue:{value:"right"},description:"",name:"arrowIcon",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"play"'},{value:'"download"'},{value:'"circledDown"'},{value:'"chevronDown"'},{value:'"chevronUp"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"small"'},{value:'"large"'},{value:'"mobile-sm-desktop-large"'},{value:'"mobile-base-desktop-lg"'},{value:'"mobile-base-desktop-base-xl"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"white"'},{value:'"orange"'},{value:'"gray"'},{value:'"grayDark"'},{value:'"orangeGray"'},{value:'"orangeBlackMobile"'},{value:'"fullOrangeBlackMobile"'}]}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},customStylesArrow:{defaultValue:null,description:"",name:"customStylesArrow",required:!1,type:{name:"string"}},eventAnalytics:{defaultValue:{value:"cta"},description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"navigationToSection"'},{value:'"assets"'}]}},breakArrowAndLastWord:{defaultValue:{value:"false"},description:"",name:"breakArrowAndLastWord",required:!1,type:{name:"boolean"}},actionAnalytics:{defaultValue:null,description:"",name:"actionAnalytics",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/LinkStyle/index.tsx#LinkStyle"]={docgenInfo:LinkStyle.__docgenInfo,name:"LinkStyle",path:"components/TextStyle/LinkStyle/index.tsx#LinkStyle"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/TitleStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>BalancerTitleStyle,V:()=>TitleStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),textH1=((0,globals.ZP)("lg:text-48px"),(0,globals.ZP)("text-35px","leading-39px","lg:text-55px","lg:leading-59px","font-poppins","font-medium")),textH1NoMobile=(0,globals.ZP)("text-55px","leading-59px","font-poppins","font-medium"),textH2=(0,globals.ZP)("text-25px","leading-29px","lg:text-35px","lg:leading-39px","font-poppins","font-normal"),textH2NoMobile=(0,globals.ZP)("text-35px","leading-39px","font-poppins","font-normal"),textH3=(0,globals.ZP)("text-xl","leading-6","lg:text-title-lg-mobile","lg:leading-8","font-poppins","font-normal"),textH3NoMobile=(0,globals.ZP)("text-title-lg-mobile","leading-8","font-poppins","font-normal"),textH4=(0,globals.ZP)("text-lg","leading-lg","lg:text-1.5xl","lg:leading-26px","font-poppins","font-normal","normal-case"),textH4Alt=(0,globals.ZP)("text-base-xl-bold-poppins","leading-lg","lg:text-1.5xl","lg:leading-26px","font-poppins","font-normal","normal-case"),textH4NoMobile=(0,globals.ZP)("text-1.5xl","leading-26px","font-poppins","font-normal","normal-case"),textH5=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg","font-poppins","font-semibold","uppercase"),textH5NoMobile=(0,globals.ZP)("text-lg","leading-lg","font-poppins","font-semibold","uppercase"),textH6=(0,globals.ZP)("text-base","lg:text-19px","leading-5","lg:leading-lg","font-poppins","font-bold"),textH6NoMobile=(0,globals.ZP)("text-19px","leading-lg","font-poppins","font-bold"),textH7=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5","font-poppins","font-bold"),textH7NoMobile=(0,globals.ZP)("text-base","leading-5","font-poppins","font-bold"),textH8=(0,globals.ZP)("text-sm","leading-sm","font-poppins","font-bold"),textH9=(0,globals.ZP)("text-45px","leading-68px","lg:text-45px","lg:leading-68px","font-poppins","font-bold"),textH9NoMobile=(0,globals.ZP)("text-45px","leading-68px","font-poppins","font-bold"),textH10=(0,globals.ZP)("text-[22px]","leading-[26px]","font-poppins","font-semibold"),styles_text=function text(theme,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-blue-light"),"blue"==color),(0,globals.ZP)("text-blue-dark"),"darkblue"==color),(0,globals.ZP)("text-blue-dark4"),"darkblue4"==color),(0,globals.ZP)("text-blue-dark5"),"darkblue5"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-black"),"black"==color),(0,globals.ZP)("text-green-lighter"),"lightergreen"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-gray-light"),"gray-light"==color),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,haveMobile?textH1:textH1NoMobile,"h1"==theme),haveMobile?textH2:textH2NoMobile,"h2"==theme),haveMobile?textH3:textH3NoMobile,"h3"==theme),haveMobile?textH4:textH4NoMobile,"h4"==theme),textH4Alt,"h4Alt"==theme),haveMobile?textH5:textH5NoMobile,"h5"==theme),haveMobile?textH6:textH6NoMobile,"h6"==theme),haveMobile?textH7:textH7NoMobile,"h7"==theme),textH8,"h8"==theme),haveMobile?textH9:textH9NoMobile,"h9"==theme),(0,defineProperty.Z)(_classnames,textH10,"h10"==theme)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var TitleStyle=function TitleStyle(_ref){var tag=_ref.tag,tagStyle=_ref.tagStyle,color=_ref.color,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,haveMobile=_ref.haveMobile,children=_ref.children,additionalProps=_ref.additionalProps;return(0,react.createElement)(tag,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(tagStyle||tag,color,haveMobile)+" "+customStyles},additionalProps),children)},BalancerTitleStyle=function BalancerTitleStyle(_ref2){var tag=_ref2.tag,tagStyle=_ref2.tagStyle,color=_ref2.color,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,haveMobile=_ref2.haveMobile,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:tag}:_ref2$balancerOptions,ratio=balancerOptions.ratio,as=balancerOptions.as,nonce=balancerOptions.nonce;return __jsx(dist.SA,(0,esm_extends.Z)({ratio,as,nonce,className:"".concat(styles_text(tagStyle||tag,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerTitleStyle.displayName="BalancerTitleStyle";try{TitleStyle.displayName="TitleStyle",TitleStyle.__docgenInfo={description:"",displayName:"TitleStyle",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},tagStyle:{defaultValue:null,description:"",name:"tagStyle",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'}]}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: tag }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/TitleStyle/index.tsx#TitleStyle"]={docgenInfo:TitleStyle.__docgenInfo,name:"TitleStyle",path:"components/TextStyle/TitleStyle/index.tsx#TitleStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerTitleStyle.displayName="BalancerTitleStyle",BalancerTitleStyle.__docgenInfo={description:"",displayName:"BalancerTitleStyle",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},tagStyle:{defaultValue:null,description:"",name:"tagStyle",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'}]}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: tag }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/TitleStyle/index.tsx#BalancerTitleStyle"]={docgenInfo:BalancerTitleStyle.__docgenInfo,name:"BalancerTitleStyle",path:"components/TextStyle/TitleStyle/index.tsx#BalancerTitleStyle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")},"./node_modules/react-wrap-balancer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SA:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),E="undefined"==typeof window,m=E?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,h=0,b=()=>++h,_=!1;function x(){let[n,r]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_?b:void 0);return m((()=>{void 0===n&&r(b()),_=!0}),[]),void 0===n?n:`rwb-${n.toString(32)}`}var y="__wrap_b",d="__wrap_n",v="__wrap_o",S=(n,r,e)=>{let t=(e=e||document.querySelector(`[data-br="${n}"]`)).parentElement,c=f=>e.style.maxWidth=f+"px";e.style.maxWidth="";let u,i=t.clientWidth,s=t.clientHeight,o=i/2-.25,a=i+.5;if(i){for(c(o),o=Math.max(e.scrollWidth,o);o+1<a;)u=Math.round((o+a)/2),c(u),t.clientHeight===s?a=u:o=u;c(a*r+i*(1-r))}e.__wrap_o||"undefined"!=typeof ResizeObserver&&(e.__wrap_o=new ResizeObserver((()=>{self.__wrap_b(0,+e.dataset.brr,e)}))).observe(t)},B=S.toString(),T=(n,r,e="")=>(e&&(e=`self.${d}!=1&&${e}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(n?"":`self.${d}=self.${d}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${y}=${B};`)+e},nonce:r})),g=react__WEBPACK_IMPORTED_MODULE_0__.createContext({preferNative:!0,hasProvider:!1}),w=({ratio:n=1,preferNative:r,nonce:e,children:t,...c})=>{let i=function R(){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>x),[])()}(),s=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(g),a=null!=r?r:o.preferNative,u=c.as||"span";return m((()=>{a&&1===self[d]||s.current&&(self[y]=S)(0,n,s.current)}),[t,a,n]),m((()=>{if(!a||1!==self[d])return()=>{if(!s.current)return;let f=s.current[v];f&&(f.disconnect(),delete s.current[v])}}),[a]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(u,{...c,"data-br":i,"data-brr":n,ref:s,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:a?"balance":"initial"},suppressHydrationWarning:!0},t),T(o.hasProvider,e,`self.${y}("${i}",${n})`))}}}]);