(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[521],{"./components/AdvancedImage/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/AdvancedImage/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"structures/Advanced Image",component:___WEBPACK_IMPORTED_MODULE_1__.p,parameters:{viewport:{defaultViewport:"banner",viewports:{banner:{name:"Banner Viewport",styles:{width:"768px",height:"350px"}}}}}};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.p,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={layout:"responsive",objectFit:"contain",priority:!0,loading:!1,src:"2022/06/rebuild-homepage-CulliganBetterWater.jpg",alt:"",quality:100},Default.argTypes={loading:{control:"boolean"},objectFit:{control:{type:"select",options:["cover","contain","fill","none"]}},layout:{control:{type:"select",options:["fill","responsive","fixed"]}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <AdvancedImage {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/AdvancedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>AdvancedImage});var react=__webpack_require__("./node_modules/react/index.js"),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),imgFill=((0,globals.ZP)("transform-gpu"),(0,globals.ZP)("transition-opacity","duration-300","ease-in"),(0,globals.ZP)("opacity-100"),(0,globals.ZP)("opacity-0"),(0,globals.ZP)("absolute top-0 left-0 w-full h-full")),imgAuto=(0,globals.ZP)("w-full"),imgFixed=(0,globals.ZP)("inline-block overflow-hidden b-0 m-0 p-0 relative"),container=function container(type,width,height){return(0,globals.ZP)("max-w-full",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},imgFill,"fill"===type),imgFill,"responsive"===type),imgFixed,"fixed"===type),imgAuto,"auto"===type),function imgIntrinsic(width,height){return(0,globals.ZP)("relative inline-block",(0,defineProperty.Z)((0,defineProperty.Z)({},"max-w-[".concat(width,"]"),width),"max-h-[".concat(height,"]"),height))}(width,height),"intrinsic"===type))},img=(0,globals.ZP)("absolute top-0 left-0 w-full h-full m-auto p-0 block"),__jsx=react.createElement,AdvancedImage=function AdvancedImage(props){var _props$alt,_props$src,parseSizePx=function parseSizePx(size){return size?size.toString().replace(/px/g,"")+"px":""},containerStyle=container(props.layout),altText=null!==(_props$alt=null==props?void 0:props.alt)&&void 0!==_props$alt?_props$alt:null==props||null===(_props$src=props.src)||void 0===_props$src?void 0:_props$src.toString(),imgCustomStyle={},lazy=null==props.loading||props.loading?"lazy":"eager";props.objectFit&&(imgCustomStyle.objectFit=props.objectFit),props.objectPosition&&(imgCustomStyle.objectPosition=props.objectPosition);var parseSrc=(0,react.useCallback)((function(src){var width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",quality=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80,applyWidthMultiplier=arguments.length>3&&void 0!==arguments[3]&&arguments[3],widthMultiplier=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.4;if(!src)return"";var assets_url="http://wp.culligan.com/wp-content/uploads/",hasWidth=""!==width&&null!=width,splittedSrc=src.split("?"),outputSrc=src;if(hasWidth){if(applyWidthMultiplier){var baseWidth="string"==typeof width?parseInt(width):width;width=Math.floor(baseWidth*widthMultiplier)}outputSrc="".concat(splittedSrc[0],"?w=").concat(width)}return quality&&(hasWidth?outputSrc+="&quality=".concat(quality):outputSrc="".concat(splittedSrc[0],"?quality=").concat(quality)),!src.includes("http")&&assets_url&&(outputSrc="".concat(assets_url).concat(outputSrc)),outputSrc}),[]),containerInlineStyle=null!=props&&props.ignoreContainerSize?{}:{height:parseSizePx(null==props?void 0:props.height),width:parseSizePx(null==props?void 0:props.width)};return __jsx("div",{className:containerStyle,style:containerInlineStyle},(null==props?void 0:props.priority)&&!(null!=props&&props.srcSets)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(props.src,props.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("picture",{key:props.src},(null==props?void 0:props.srcSets)&&(null==props?void 0:props.srcSets.map((function(item){var _item$quality;return __jsx(react.Fragment,{key:"key-".concat(item.src).concat(item.mediaQuery)},(null==props?void 0:props.priority)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(item.src,item.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("source",{width:item.width,height:item.height,media:item.mediaQuery,srcSet:parseSrc(item.src,item.width,null!==(_item$quality=item.quality)&&void 0!==_item$quality?_item$quality:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier)}))}))),__jsx("img",{id:props.id,style:null!=imgCustomStyle?imgCustomStyle:{},className:"".concat(img," ").concat(props.imgStyles),src:parseSrc(props.src,null==props?void 0:props.width,null==props?void 0:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier),alt:altText,width:null==props?void 0:props.width,height:null==props?void 0:props.height,loading:lazy})))};AdvancedImage.displayName="AdvancedImage";try{AdvancedImage.displayName="AdvancedImage",AdvancedImage.__docgenInfo={description:"",displayName:"AdvancedImage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!1,type:{name:"string | number"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"PlaceholderValue"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:null,description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}},ignoreContainerSize:{defaultValue:null,description:"",name:"ignoreContainerSize",required:!1,type:{name:"boolean"}},applyWidthMultiplier:{defaultValue:null,description:"",name:"applyWidthMultiplier",required:!1,type:{name:"boolean"}},widthMultiplier:{defaultValue:null,description:"",name:"widthMultiplier",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AdvancedImage/index.tsx#AdvancedImage"]={docgenInfo:AdvancedImage.__docgenInfo,name:"AdvancedImage",path:"components/AdvancedImage/index.tsx#AdvancedImage"})}catch(__react_docgen_typescript_loader_error){}},"./styles/globals.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bd:()=>transitionTimingFunction,C3:()=>inset,Cz:()=>backgroundColor,E0:()=>borderRadius,FK:()=>position,Fw:()=>pointerEvents,I8:()=>fontFamily,J4:()=>borderWidth,JB:()=>fontSize,Kl:()=>justifyContent,Me:()=>flexDirection,Nv:()=>lineHeight,SG:()=>gap,Ue:()=>fontWeight,WO:()=>flexWrap,Xu:()=>brightness,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,bf:()=>width,cq:()=>alignItems,dh:()=>classnames,hl:()=>fill,ix:()=>boxSizing,jf:()=>display,jw:()=>minHeight,nV:()=>transitionDuration,n_:()=>transitionProperty,o3:()=>padding,rX:()=>letterSpacing,tv:()=>borderColor,zP:()=>textColor});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),backgroundColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderRadius=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),borderWidth=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,transitionProperty=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),transitionDuration=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,transitionTimingFunction=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,brightness=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),flexDirection=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),flexWrap=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,alignItems=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,justifyContent=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),gap=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),padding=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,pointerEvents=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),display=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),boxSizing=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),position=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),inset=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),width=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),minHeight=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fill=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontFamily=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),fontSize=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,fontWeight=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,letterSpacing=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,lineHeight=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,textColor=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z),classnames=(clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z,clsx__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=classnames},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")}}]);