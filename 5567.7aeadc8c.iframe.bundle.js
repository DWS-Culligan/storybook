(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[5567],{"./components/Blog/BlogPost/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Blog/BlogPost/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Section/Blog/Post Card",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{viewport:{defaultViewport:"mobile",viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}}}}}};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"How to Remove Fluoride From Water",description:"Here are a few approaches that work — and a few that don’t.",link:"blog/why-you-need-a-smart-reverse-osmosis-system",image:"2023/03/how-to-remove-fluoride-from-water-500x500-1.jpg",index:1,count:1,readTime:"10 MIN"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BlogPost {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/AdvancedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>AdvancedImage});var react=__webpack_require__("./node_modules/react/index.js"),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),imgFill=((0,globals.ZP)("transform-gpu"),(0,globals.ZP)("transition-opacity","duration-300","ease-in"),(0,globals.ZP)("opacity-100"),(0,globals.ZP)("opacity-0"),(0,globals.ZP)("absolute top-0 left-0 w-full h-full")),imgAuto=(0,globals.ZP)("w-full"),imgFixed=(0,globals.ZP)("inline-block overflow-hidden b-0 m-0 p-0 relative"),container=function container(type,width,height){return(0,globals.ZP)("max-w-full",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},imgFill,"fill"===type),imgFill,"responsive"===type),imgFixed,"fixed"===type),imgAuto,"auto"===type),function imgIntrinsic(width,height){return(0,globals.ZP)("relative inline-block",(0,defineProperty.Z)((0,defineProperty.Z)({},"max-w-[".concat(width,"]"),width),"max-h-[".concat(height,"]"),height))}(width,height),"intrinsic"===type))},img=(0,globals.ZP)("absolute top-0 left-0 w-full h-full m-auto p-0 block"),__jsx=react.createElement,AdvancedImage=function AdvancedImage(props){var _props$alt,_props$src,parseSizePx=function parseSizePx(size){return size?size.toString().replace(/px/g,"")+"px":""},containerStyle=container(props.layout),altText=null!==(_props$alt=null==props?void 0:props.alt)&&void 0!==_props$alt?_props$alt:null==props||null===(_props$src=props.src)||void 0===_props$src?void 0:_props$src.toString(),imgCustomStyle={},lazy=null==props.loading||props.loading?"lazy":"eager";props.objectFit&&(imgCustomStyle.objectFit=props.objectFit),props.objectPosition&&(imgCustomStyle.objectPosition=props.objectPosition);var parseSrc=(0,react.useCallback)((function(src){var width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",quality=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80,applyWidthMultiplier=arguments.length>3&&void 0!==arguments[3]&&arguments[3],widthMultiplier=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.4;if(!src)return"";var assets_url="http://wp.culligan.com/wp-content/uploads/",hasWidth=""!==width&&null!=width,splittedSrc=src.split("?"),outputSrc=src;if(hasWidth){if(applyWidthMultiplier){var baseWidth="string"==typeof width?parseInt(width):width;width=Math.floor(baseWidth*widthMultiplier)}outputSrc="".concat(splittedSrc[0],"?w=").concat(width)}return quality&&(hasWidth?outputSrc+="&quality=".concat(quality):outputSrc="".concat(splittedSrc[0],"?quality=").concat(quality)),!src.includes("http")&&assets_url&&(outputSrc="".concat(assets_url).concat(outputSrc)),outputSrc}),[]),containerInlineStyle=null!=props&&props.ignoreContainerSize?{}:{height:parseSizePx(null==props?void 0:props.height),width:parseSizePx(null==props?void 0:props.width)};return __jsx("div",{className:containerStyle,style:containerInlineStyle},(null==props?void 0:props.priority)&&!(null!=props&&props.srcSets)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(props.src,props.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("picture",{key:props.src},(null==props?void 0:props.srcSets)&&(null==props?void 0:props.srcSets.map((function(item){var _item$quality;return __jsx(react.Fragment,{key:"key-".concat(item.src).concat(item.mediaQuery)},(null==props?void 0:props.priority)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(item.src,item.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("source",{width:item.width,height:item.height,media:item.mediaQuery,srcSet:parseSrc(item.src,item.width,null!==(_item$quality=item.quality)&&void 0!==_item$quality?_item$quality:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier)}))}))),__jsx("img",{id:props.id,style:null!=imgCustomStyle?imgCustomStyle:{},className:"".concat(img," ").concat(props.imgStyles),src:parseSrc(props.src,null==props?void 0:props.width,null==props?void 0:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier),alt:altText,width:null==props?void 0:props.width,height:null==props?void 0:props.height,loading:lazy})))};AdvancedImage.displayName="AdvancedImage";try{AdvancedImage.displayName="AdvancedImage",AdvancedImage.__docgenInfo={description:"",displayName:"AdvancedImage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!1,type:{name:"string | number"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"PlaceholderValue"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:null,description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}},ignoreContainerSize:{defaultValue:null,description:"",name:"ignoreContainerSize",required:!1,type:{name:"boolean"}},applyWidthMultiplier:{defaultValue:null,description:"",name:"applyWidthMultiplier",required:!1,type:{name:"boolean"}},widthMultiplier:{defaultValue:null,description:"",name:"widthMultiplier",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AdvancedImage/index.tsx#AdvancedImage"]={docgenInfo:AdvancedImage.__docgenInfo,name:"AdvancedImage",path:"components/AdvancedImage/index.tsx#AdvancedImage"})}catch(__react_docgen_typescript_loader_error){}},"./components/Blog/BlogPost/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Blog_BlogPost});var react=__webpack_require__("./node_modules/react/index.js"),AdvancedImage=__webpack_require__("./components/AdvancedImage/index.tsx"),Button=__webpack_require__("./components/Button/index.tsx"),BodyStyle=__webpack_require__("./components/TextStyle/BodyStyle/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),post=function post(index,count){var base=(0,globals.ZP)("grid","grid-cols-1","col-span-2","grid-cols-[12px_1fr_12px]","grid-rows-[auto_1fr]","gap-y-4","bg-white","rounded-2xl","overflow-hidden","pb-3","h-full","justify-center"),twoPosts=2===count,isFirst=0===index,isSecond=1===index;return(0,globals.ZP)(base,{"col-start-2":twoPosts&&isFirst,"col-start-4":twoPosts&&isSecond})},styles_title=(0,globals.ZP)("font-poppins","col-start-1","row-start-1","text-center","text-white","text-[24px]","leading-[28px]","z-[15]","p-12","text-shadow"),header=(0,globals.ZP)("w-100","h-[250px]","grid","grid-cols-1","grid-rows-1","rounded-t-2xl","items-center","justify-center","overflow-hidden","row-start-1","col-span-3","col-start-1","z-10"),styles_image=(0,globals.ZP)("w-full","h-full","col-start-1","row-start-1","z-10","relative","brightness-75"),noImage=(0,globals.ZP)("w-full","h-full","bg-blue-dark","col-start-1","row-start-1","z-10"),styles_description=(0,globals.ZP)("lg:line-clamp-3","mb-4","grow","md:line-clamp-2","sm:line-clamp-2","xs:line-clamp-2","max-w-[590px]"),styles_text=(0,globals.ZP)("col-start-2","flex","flex-col","md:text-center","md:items-center","lg:items-start"),bottomLine=(0,globals.ZP)("flex","justify-between"),styles_readTime=(0,globals.ZP)("font-bold","uppercase","text-gray-dark"),__jsx=react.createElement,BlogPost=function BlogPost(_ref){var title=_ref.title,description=_ref.description,link=_ref.link,image=_ref.image,index=_ref.index,count=_ref.count,readTime=_ref.readTime;return __jsx("article",{className:post(index,count)},__jsx("header",{className:header},image?__jsx("figure",{className:styles_image},__jsx(AdvancedImage.p,{src:image,alt:image,layout:"fill",objectFit:"cover",priority:!0})):__jsx("div",{className:noImage}),__jsx("h2",{className:styles_title},title)),__jsx("div",{className:styles_text},__jsx("div",{className:styles_description},__jsx(BodyStyle.G,{color:"grey",size:"md"},description)),__jsx("div",{className:bottomLine},__jsx(Button.Z,{href:link,variant:"arrow-right",label:"Read More",fireAnalytics:!0},"Read More"),readTime&&__jsx("div",{className:styles_readTime},readTime))))};BlogPost.displayName="BlogPost";const Blog_BlogPost=BlogPost;try{BlogPost.displayName="BlogPost",BlogPost.__docgenInfo={description:"",displayName:"BlogPost",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},readTime:{defaultValue:null,description:"",name:"readTime",required:!1,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Blog/BlogPost/index.tsx#BlogPost"]={docgenInfo:BlogPost.__docgenInfo,name:"BlogPost",path:"components/Blog/BlogPost/index.tsx#BlogPost"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),anchor_link=__webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"),anchor_link_default=__webpack_require__.n(anchor_link),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),fi_index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),styles_button=((0,globals.ZP)("inline-block"),(0,globals.ZP)("relative","h-10","font-bold","text-sm","px-3","transition-colors","duration-200","ease-in","flex","flex-nowrap","items-center","justify-center","leading-base")),filled=(0,globals.ZP)(styles_button,"border-orange","bg-orange","text-white","hover:bg-orange-light","hover:border-orange-light"),ghost=(0,globals.ZP)(styles_button,"border-orange","bg-transparent","hover:bg-orange-light","hover:border-orange-light"),ghostAlt=(0,globals.ZP)(styles_button,"border-white","text-white","bg-transparent","hover:text-orange-light2","hover:bg-white","hover:border-white"),darkBlue=(0,globals.ZP)(styles_button,"border-blue-dark","bg-blue-dark","text-white","hover:bg-orange-light","hover:border-orange-light"),outlinedGray=(0,globals.ZP)(styles_button,"border-gray-dark","border-2","bg-transparent","text-gray-dark","hover:bg-orange-light","hover:border-orange-light","hover:text-white"),disabled=(0,globals.ZP)(styles_button,"bg-gray-lighter","border-gray-lighter","text-gray-dark","cursor-not-allowed"),orangeLink=(0,globals.ZP)("text-gray-dark","underline","underline-offset-2","decoration-orange","hover:text-orange-dark2","border-none","font-bold"),sizeBase=(0,globals.ZP)("text-base","leading-base"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeLg=(0,globals.ZP)("text-lg","leading-lg"),loadingIcon=function loadingIcon(visible){return(0,globals.ZP)("animate-spin","absolute","z-10",(0,defineProperty.Z)((0,defineProperty.Z)({},"visible",visible),"invisible",!visible))},linkDefaults=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light"),linkAlt=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light2"),linkArrow=(0,globals.ZP)(linkDefaults,"flex","flex-row","items-center"),linkArrowAlt=(0,globals.ZP)(linkAlt,"flex","flex-row","items-center"),linkArrowBlack=(0,globals.ZP)("text-gray-dark","font-bold","underline","flex","flex-row","items-center"),linkPlay=(0,globals.ZP)(linkAlt,"flex","flex-row","items-end","gap-1"),arrowBase=(0,globals.ZP)("w-6","h-6"),arrowSm=(0,globals.ZP)("w-5","h-5"),arrowLg=(0,globals.ZP)("w-7","h-7"),arrowLeft=(0,globals.ZP)("mr-2"),arrowRight=(0,globals.ZP)("ml-0.5"),arrowRightBlack=(0,globals.ZP)("ml-1","-mt-0.5","text-orange"),downloadLg=(0,globals.ZP)("w-5","h-5","ml-1","mb-1"),arrow=function arrow(size,variant){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},arrowBase,"base"===size),arrowSm,"sm"===size),arrowLg,"lg"===size),arrowLeft,"arrow-left"===variant),arrowRight,"arrow-right"===variant||"arrow-right-alt"===variant),arrowRightBlack,"arrow-right-black"===variant))},download=function download(size){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},downloadLg,"lg"===size||"sm"===size||"base"===size))},buttonVariant=function buttonVariant(variant,size,customBorder,customRounded){var _classnames5;return(0,globals.ZP)("cursor-pointer",(_classnames5={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,filled,"filled"===variant||"fulled"===variant),ghost,"ghost"===variant),ghostAlt,"ghostAlt"===variant),darkBlue,"dark-blue"===variant),outlinedGray,"outlined-gray"===variant),disabled,"disabled"===variant),linkArrow,"arrow-right"===variant||"arrow-left"===variant),linkArrowAlt,"arrow-right-alt"===variant),linkArrowBlack,"arrow-right-black"===variant),linkPlay,"play"===variant),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,orangeLink,"orangeLink"===variant),sizeBase,"base"===size),sizeSm,"sm"===size),sizeLg,"lg"===size),linkDefaults,"download"===variant),"border",!customBorder),"rounded",!customRounded)))},__jsx=react.createElement,InternalLink=function InternalLink(props){if("href"in props){var _props$size,_props$useLegacyLink,commonProps={"data-testid":props.data?props.data.testid:null,onClick:props.onClick,target:props.external?"_blank":null,"aria-label":props.label,className:buttonVariant(props.variant,null!==(_props$size=props.size)&&void 0!==_props$size?_props$size:"sm",!0)+" "+props.customStyles},useLegacyLink=null!==(_props$useLegacyLink=props.useLegacyLink)&&void 0!==_props$useLegacyLink&&_props$useLegacyLink;return props.href.startsWith("#")?__jsx(anchor_link_default(),(0,esm_extends.Z)({},commonProps,{href:props.href,offset:props.offset}),props.children):useLegacyLink?__jsx("a",(0,esm_extends.Z)({},commonProps,{href:props.href}),props.children):__jsx(link_default(),{href:props.href,passHref:!0},__jsx("a",commonProps,props.children))}},Button=function Button(props){var _props$data,_props$data2,_props$size2,_props$size3,_props$size4,handleClick=function handleClick(e){var _props$eventAnalytics,eventAnalytics=null!==(_props$eventAnalytics=props.eventAnalytics)&&void 0!==_props$eventAnalytics?_props$eventAnalytics:"cta";props.onClick&&props.onClick(e),props.fireAnalytics&&props.labelAnalytics&&analytics.c[eventAnalytics](props.labelAnalytics,null),props.fireAnalytics&&!props.labelAnalytics&&props.label&&analytics.c[eventAnalytics](props.label,null)},dataTestId=null!==(_props$data=props.data)&&void 0!==_props$data&&_props$data.isMobile?"button-mobile-".concat(props.data.testid):"button-desktop-".concat(null===(_props$data2=props.data)||void 0===_props$data2?void 0:_props$data2.testid);return"href"in props?__jsx(InternalLink,(0,esm_extends.Z)({},props,{onClick:handleClick,offset:props.offset}),__jsx("p",null,"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size2=props.size)&&void 0!==_props$size2?_props$size2:"base","arrow-left")}),props.children,props.variant.includes("arrow-right")&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"download"===props.variant&&__jsx(fi_index_esm._hL,{className:download(props.size?props.size:"base")}))):__jsx("button",{"data-testid":null!=dataTestId?dataTestId:null,onClick:handleClick,"aria-label":props.label,type:props.type,disabled:"loading"===props.state||"success"===props.state,className:buttonVariant(props.variant,null!==(_props$size3=props.size)&&void 0!==_props$size3?_props$size3:"sm",props.customBorder,props.customRounded)+" "+props.customStyles},"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size4=props.size)&&void 0!==_props$size4?_props$size4:"base","arrow-left")}),"loading"===props.state?__jsx(react.Fragment,null,__jsx(index_esm.xz6,{className:loadingIcon("loading"===props.state)}),__jsx("span",{className:"loading"===props.state?"invisible":"visible"},props.children)):props.children,"arrow-right"===props.variant&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"play"===props.variant&&__jsx(fa_index_esm.Gzj,{size:19}))};const components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},useLegacyLink:{defaultValue:null,description:"",name:"useLegacyLink",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"disabled"'},{value:'"icon"'},{value:'"link"'},{value:'"play"'},{value:'"download"'},{value:'"fulled"'},{value:'"filled"'},{value:'"ghost"'},{value:'"ghostAlt"'},{value:'"arrow-right"'},{value:'"arrow-right-black"'},{value:'"arrow-right-alt"'},{value:'"arrow-left"'},{value:'"dark-blue"'},{value:'"outlined-gray"'},{value:'"orangeLink"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"TTailwindString"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event?: any) => any"}},fireAnalytics:{defaultValue:null,description:"",name:"fireAnalytics",required:!1,type:{name:"boolean"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},customBorder:{defaultValue:null,description:"",name:"customBorder",required:!1,type:{name:"boolean"}},customRounded:{defaultValue:null,description:"",name:"customRounded",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"IButtonData"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},eventAnalytics:{defaultValue:null,description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"resourcesCard"'},{value:'"scheduleAnAppointment"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"success"'},{value:'"error"'},{value:'"loading"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/BodyStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>BalancerBodyStyle,G:()=>BodyStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),sizeLegal=(0,globals.ZP)("text-xs","leading-4"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeMd=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5"),sizeMdNoMobile=(0,globals.ZP)("text-base","leading-5"),sizeLg=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg"),sizeLgNoMobile=(0,globals.ZP)("text-lg","leading-lg"),sizeXl=(0,globals.ZP)("text-1.5xl","leading-1.5xl","lg:text-1.5xl","lg:leading-1.5xl"),size20px=(0,globals.ZP)("text-xl","leading-6"),styles_text=function text(size,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-blue"),"blue"==color),(0,globals.ZP)("text-blue-dark3"),"blue-dark3"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-blue-light"),"blue-light"==color),sizeLegal,"legal"==size),sizeSm,"sm"==size),haveMobile?sizeMd:sizeMdNoMobile,"md"==size),haveMobile?sizeLg:sizeLgNoMobile,"lg"==size),(0,defineProperty.Z)((0,defineProperty.Z)(_classnames,sizeXl,"xl"==size),size20px,"20px"==size)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var BodyStyle=function BodyStyle(_ref){var size=_ref.size,color=_ref.color,haveMobile=_ref.haveMobile,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,children=_ref.children,additionalProps=_ref.additionalProps,props=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(size,color,haveMobile)+" "+customStyles},additionalProps),isDiv="object"==typeof children&&"p"===children.type||Array.isArray(children)&&("p"===children[0].type||Array.isArray(children[0])&&"p"===children[0][0].type);return __jsx(isDiv?"div":"p",props,children)},BalancerBodyStyle=function BalancerBodyStyle(_ref2){var size=_ref2.size,color=_ref2.color,haveMobile=_ref2.haveMobile,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:"p",ratio:1,nonce:"",preferNative:!0}:_ref2$balancerOptions;return __jsx(dist.SA,(0,esm_extends.Z)({ratio:balancerOptions.ratio,as:balancerOptions.as,nonce:balancerOptions.nonce,preferNative:balancerOptions.preferNative,className:"".concat(styles_text(size,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerBodyStyle.displayName="BalancerBodyStyle";try{BodyStyle.displayName="BodyStyle",BodyStyle.__docgenInfo={description:"",displayName:"BodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BodyStyle"]={docgenInfo:BodyStyle.__docgenInfo,name:"BodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BodyStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerBodyStyle.displayName="BalancerBodyStyle",BalancerBodyStyle.__docgenInfo={description:"",displayName:"BalancerBodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"]={docgenInfo:BalancerBodyStyle.__docgenInfo,name:"BalancerBodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")},"./node_modules/react-wrap-balancer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SA:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),E="undefined"==typeof window,m=E?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,h=0,b=()=>++h,_=!1;function x(){let[n,r]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_?b:void 0);return m((()=>{void 0===n&&r(b()),_=!0}),[]),void 0===n?n:`rwb-${n.toString(32)}`}var y="__wrap_b",d="__wrap_n",v="__wrap_o",S=(n,r,e)=>{let t=(e=e||document.querySelector(`[data-br="${n}"]`)).parentElement,c=f=>e.style.maxWidth=f+"px";e.style.maxWidth="";let u,i=t.clientWidth,s=t.clientHeight,o=i/2-.25,a=i+.5;if(i){for(c(o),o=Math.max(e.scrollWidth,o);o+1<a;)u=Math.round((o+a)/2),c(u),t.clientHeight===s?a=u:o=u;c(a*r+i*(1-r))}e.__wrap_o||"undefined"!=typeof ResizeObserver&&(e.__wrap_o=new ResizeObserver((()=>{self.__wrap_b(0,+e.dataset.brr,e)}))).observe(t)},B=S.toString(),T=(n,r,e="")=>(e&&(e=`self.${d}!=1&&${e}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(n?"":`self.${d}=self.${d}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${y}=${B};`)+e},nonce:r})),g=react__WEBPACK_IMPORTED_MODULE_0__.createContext({preferNative:!0,hasProvider:!1}),w=({ratio:n=1,preferNative:r,nonce:e,children:t,...c})=>{let i=function R(){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>x),[])()}(),s=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(g),a=null!=r?r:o.preferNative,u=c.as||"span";return m((()=>{a&&1===self[d]||s.current&&(self[y]=S)(0,n,s.current)}),[t,a,n]),m((()=>{if(!a||1!==self[d])return()=>{if(!s.current)return;let f=s.current[v];f&&(f.disconnect(),delete s.current[v])}}),[a]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(u,{...c,"data-br":i,"data-brr":n,ref:s,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:a?"balance":"initial"},suppressHydrationWarning:!0},t),T(o.hasProvider,e,`self.${y}("${i}",${n})`))}}}]);