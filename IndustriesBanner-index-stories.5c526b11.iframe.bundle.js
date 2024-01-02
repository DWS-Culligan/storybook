"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[839,7250],{"./components/IndustriesBanner/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),Carousel=__webpack_require__("./components/Carousel/index.tsx"),TitleStyle=__webpack_require__("./components/TextStyle/TitleStyle/index.tsx"),useMediaQuery=__webpack_require__("./hooks/useMediaQuery.ts"),Container=__webpack_require__("./components/Container/index.tsx"),CardsImage_v2=__webpack_require__("./components/IndustriesBanner/CardsImage.v2/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),DEFAULT_STYLES={sectionWrapper:(0,globals.ZP)("grid","grid-cols-3","gap-1","4xl:grid-cols-4","4xl:gap-6"),containerWrapper:function containerWrapper(carouselIsShowing){return(0,globals.ZP)("pb-12",{"!pr-0 4xl:!pr-20":carouselIsShowing})},sectionTitleWrapper:(0,globals.ZP)("pb-5","lg:pb-11")},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var IndustriesBanner=function IndustriesBanner(_ref){var industriesBannerData=_ref.industriesBannerData,mobileCarousel=_ref.mobileCarousel,desktopCarousel=_ref.desktopCarousel,_ref$maxDepoimentCoun=_ref.maxDepoimentCountForGridDesktop,maxDepoimentCountForGridDesktop=void 0===_ref$maxDepoimentCoun?3:_ref$maxDepoimentCoun,_ref$maxDepoimentCoun2=_ref.maxDepoimentCountForGridMobile,maxDepoimentCountForGridMobile=void 0===_ref$maxDepoimentCoun2?1:_ref$maxDepoimentCoun2,customStyles=_ref.customStyles,sectionTitle=industriesBannerData.sectionTitle,href=industriesBannerData.href,cards=industriesBannerData.cards,styles=_objectSpread(_objectSpread({},DEFAULT_STYLES),customStyles),isMobile=(0,useMediaQuery.Z)("(max-width: 1023px)"),isBigScreen=(0,useMediaQuery.Z)("(min-width: 1920px)"),showDesktopCarousel=!isBigScreen&&cards.length>maxDepoimentCountForGridDesktop||isBigScreen&&cards.length>4,showMobileCarousel=cards.length>maxDepoimentCountForGridMobile,showCarousel=isMobile?showMobileCarousel:showDesktopCarousel,carouselData=isMobile?mobileCarousel:desktopCarousel;return __jsx("section",{id:href},__jsx(Container.Z,{gutter:isMobile?"lg":"sm",containerStyles:styles.containerWrapper(showCarousel)},__jsx("div",{className:styles.sectionTitleWrapper},__jsx(TitleStyle.V,{color:"blue",tag:"p",tagStyle:"h3"},(0,html_to_react.Parser)().parse(sectionTitle))),function renderCarousel(){if(cards)return showCarousel?__jsx(Carousel.Z,{cardsData:cards,carouselData}):__jsx("div",{className:styles.sectionWrapper},cards.map((function(item){return __jsx(CardsImage_v2.x,(0,esm_extends.Z)({},item,{key:item.id}))})))}()))};IndustriesBanner.displayName="IndustriesBanner";try{IndustriesBanner.displayName="IndustriesBanner",IndustriesBanner.__docgenInfo={description:"",displayName:"IndustriesBanner",props:{industriesBannerData:{defaultValue:null,description:"",name:"industriesBannerData",required:!0,type:{name:"IBannerIndustriesData"}},mobileCarousel:{defaultValue:null,description:"",name:"mobileCarousel",required:!1,type:{name:"CarouselData"}},desktopCarousel:{defaultValue:null,description:"",name:"desktopCarousel",required:!1,type:{name:"CarouselData"}},maxDepoimentCountForGridDesktop:{defaultValue:{value:"3"},description:"",name:"maxDepoimentCountForGridDesktop",required:!1,type:{name:"number"}},maxDepoimentCountForGridMobile:{defaultValue:{value:"1"},description:"",name:"maxDepoimentCountForGridMobile",required:!1,type:{name:"number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"IBannerIndustriesStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/IndustriesBanner/index.tsx#IndustriesBanner"]={docgenInfo:IndustriesBanner.__docgenInfo,name:"IndustriesBanner",path:"components/IndustriesBanner/index.tsx#IndustriesBanner"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;const index_stories={title:"Banner/Industries Banner",component:IndustriesBanner};var Template=function Template(args){return index_stories_jsx(IndustriesBanner,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={industriesBannerData:{sectionTitle:"Food Service",href:"foodService",cards:[{image:{src:"2023/02/food-service-giovannis.jpg",alt:""},title:"Giovanni's Restaurant",copy:"Giovanni's restaurant has been using Culligan® softeners for dishwashers, bathroom, and more since 1997.",downloadLink:"https://wp.culligan.com/wp-content/uploads/2020/07/37235_Giovannis_Restaurant_Vertical-a1-1.pdf"},{image:{src:"2023/02/food-service-pizza-house.jpg",alt:""},title:"Our Pizza House",copy:"Our House Pizza needed a hard water solution to help make their pizza taste as delicious as it could.",downloadLink:"https://wp.culligan.com/wp-content/uploads/2020/07/37271_Pizza_House_Vertical-a1.pdf"},{image:{src:"2023/02/food-service-pei-wei.jpg",alt:""},title:"Pei Wei",copy:"“At Pei Wei®, we strive to provide our customers with a quality dining experience, which is why we trust...",downloadLink:"https://wp.culligan.com/wp-content/uploads/2020/07/37251_Pei_Wei_Success_Story_a1.pdf"}]}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <IndustriesBanner {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/Banner/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Banner_Image});var react=__webpack_require__("./node_modules/react/index.js"),AdvancedImage=__webpack_require__("./components/AdvancedImage/index.tsx"),useMediaQuery=__webpack_require__("./hooks/useMediaQuery.ts"),wrapper=(0,__webpack_require__("./styles/globals.ts").ZP)("relative","w-full","h-0"),__jsx=react.createElement,BannerImage=function BannerImage(_ref){var src=_ref.src,alt=_ref.alt,height=_ref.height,_ref$priority=_ref.priority,priority=void 0!==_ref$priority&&_ref$priority,_ref$objectFit=_ref.objectFit,objectFit=void 0===_ref$objectFit?"fill":_ref$objectFit,fixedHeight=_ref.fixedHeight,objectPosition=_ref.objectPosition,quality=_ref.quality,customStyles=_ref.customStyles,_ref$srcSets=_ref.srcSets,srcSets=void 0===_ref$srcSets?[]:_ref$srcSets,width=(0,useMediaQuery.Z)("(max-width: 1023px)")?"1023":"1920";return __jsx("div",{className:wrapper+" "+"".concat(customStyles||""),style:fixedHeight?{height:"".concat(height,"px")}:{paddingTop:"".concat(height,"%")}},src&&__jsx(AdvancedImage.p,{src,alt,layout:"fill",objectFit,objectPosition,priority,quality,srcSets,loading:!priority,height,width}))};BannerImage.displayName="BannerImage";const Banner_Image=BannerImage;try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"The image address",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"Image alt text for AA",name:"alt",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"Height of the image in percentage of the width\nThe height is used to indicate the image proportion",name:"height",required:!0,type:{name:"number"}},fixedHeight:{defaultValue:null,description:"If true, the above height will be interpreted as pixels",name:"fixedHeight",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"false"},description:"Whether or not the image shoul be preloaded (use for above the fold images only)",name:"priority",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:{value:"fill"},description:"Whether the image should fill up the space or hold proportions",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"cover"'}]}},objectPosition:{defaultValue:null,description:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position",name:"objectPosition",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"Image quality in percentage",name:"quality",required:!1,type:{name:"number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:{value:"[]"},description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Banner/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"components/Banner/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),anchor_link=__webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"),anchor_link_default=__webpack_require__.n(anchor_link),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),fi_index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),analytics=__webpack_require__("./utils/analytics/index.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),styles_button=((0,globals.ZP)("inline-block"),(0,globals.ZP)("relative","h-10","font-bold","text-sm","px-3","transition-colors","duration-200","ease-in","flex","flex-nowrap","items-center","justify-center","leading-base")),filled=(0,globals.ZP)(styles_button,"border-orange","bg-orange","text-white","hover:bg-orange-light","hover:border-orange-light"),ghost=(0,globals.ZP)(styles_button,"border-orange","bg-transparent","hover:bg-orange-light","hover:border-orange-light"),ghostAlt=(0,globals.ZP)(styles_button,"border-white","text-white","bg-transparent","hover:text-orange-light2","hover:bg-white","hover:border-white"),darkBlue=(0,globals.ZP)(styles_button,"border-blue-dark","bg-blue-dark","text-white","hover:bg-orange-light","hover:border-orange-light"),outlinedGray=(0,globals.ZP)(styles_button,"border-gray-dark","border-2","bg-transparent","text-gray-dark","hover:bg-orange-light","hover:border-orange-light","hover:text-white"),disabled=(0,globals.ZP)(styles_button,"bg-gray-lighter","border-gray-lighter","text-gray-dark","cursor-not-allowed"),orangeLink=(0,globals.ZP)("text-gray-dark","underline","underline-offset-2","decoration-orange","hover:text-orange-dark2","border-none","font-bold"),sizeBase=(0,globals.ZP)("text-base","leading-base"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeLg=(0,globals.ZP)("text-lg","leading-lg"),loadingIcon=function loadingIcon(visible){return(0,globals.ZP)("animate-spin","absolute","z-10",(0,defineProperty.Z)((0,defineProperty.Z)({},"visible",visible),"invisible",!visible))},linkDefaults=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light"),linkAlt=(0,globals.ZP)("text-orange","font-bold","hover:text-orange-light2"),linkArrow=(0,globals.ZP)(linkDefaults,"flex","flex-row","items-center"),linkArrowAlt=(0,globals.ZP)(linkAlt,"flex","flex-row","items-center"),linkArrowBlack=(0,globals.ZP)("text-gray-dark","font-bold","underline","flex","flex-row","items-center"),linkPlay=(0,globals.ZP)(linkAlt,"flex","flex-row","items-end","gap-1"),arrowBase=(0,globals.ZP)("w-6","h-6"),arrowSm=(0,globals.ZP)("w-5","h-5"),arrowLg=(0,globals.ZP)("w-7","h-7"),arrowLeft=(0,globals.ZP)("mr-2"),arrowRight=(0,globals.ZP)("ml-0.5"),arrowRightBlack=(0,globals.ZP)("ml-1","-mt-0.5","text-orange"),downloadLg=(0,globals.ZP)("w-5","h-5","ml-1","mb-1"),arrow=function arrow(size,variant){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},arrowBase,"base"===size),arrowSm,"sm"===size),arrowLg,"lg"===size),arrowLeft,"arrow-left"===variant),arrowRight,"arrow-right"===variant||"arrow-right-alt"===variant),arrowRightBlack,"arrow-right-black"===variant))},download=function download(size){return(0,globals.ZP)("inline-block",(0,defineProperty.Z)({},downloadLg,"lg"===size||"sm"===size||"base"===size))},buttonVariant=function buttonVariant(variant,size,customBorder,customRounded){var _classnames5;return(0,globals.ZP)("cursor-pointer",(_classnames5={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,filled,"filled"===variant||"fulled"===variant),ghost,"ghost"===variant),ghostAlt,"ghostAlt"===variant),darkBlue,"dark-blue"===variant),outlinedGray,"outlined-gray"===variant),disabled,"disabled"===variant),linkArrow,"arrow-right"===variant||"arrow-left"===variant),linkArrowAlt,"arrow-right-alt"===variant),linkArrowBlack,"arrow-right-black"===variant),linkPlay,"play"===variant),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames5,orangeLink,"orangeLink"===variant),sizeBase,"base"===size),sizeSm,"sm"===size),sizeLg,"lg"===size),linkDefaults,"download"===variant),"border",!customBorder),"rounded",!customRounded)))},__jsx=react.createElement,InternalLink=function InternalLink(props){if("href"in props){var _props$size,_props$useLegacyLink,commonProps={"data-testid":props.data?props.data.testid:null,onClick:props.onClick,target:props.external?"_blank":null,"aria-label":props.label,className:buttonVariant(props.variant,null!==(_props$size=props.size)&&void 0!==_props$size?_props$size:"sm",!0)+" "+props.customStyles},useLegacyLink=null!==(_props$useLegacyLink=props.useLegacyLink)&&void 0!==_props$useLegacyLink&&_props$useLegacyLink;return props.href.startsWith("#")?__jsx(anchor_link_default(),(0,esm_extends.Z)({},commonProps,{href:props.href,offset:props.offset}),props.children):useLegacyLink?__jsx("a",(0,esm_extends.Z)({},commonProps,{href:props.href}),props.children):__jsx(link_default(),{href:props.href,passHref:!0},__jsx("a",commonProps,props.children))}},Button=function Button(props){var _props$data,_props$data2,_props$size2,_props$size3,_props$size4,handleClick=function handleClick(e){var _props$eventAnalytics,eventAnalytics=null!==(_props$eventAnalytics=props.eventAnalytics)&&void 0!==_props$eventAnalytics?_props$eventAnalytics:"cta";props.onClick&&props.onClick(e),props.fireAnalytics&&props.labelAnalytics&&analytics.c[eventAnalytics](props.labelAnalytics,null),props.fireAnalytics&&!props.labelAnalytics&&props.label&&analytics.c[eventAnalytics](props.label,null)},dataTestId=null!==(_props$data=props.data)&&void 0!==_props$data&&_props$data.isMobile?"button-mobile-".concat(props.data.testid):"button-desktop-".concat(null===(_props$data2=props.data)||void 0===_props$data2?void 0:_props$data2.testid);return"href"in props?__jsx(InternalLink,(0,esm_extends.Z)({},props,{onClick:handleClick,offset:props.offset}),__jsx("p",null,"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size2=props.size)&&void 0!==_props$size2?_props$size2:"base","arrow-left")}),props.children,props.variant.includes("arrow-right")&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"download"===props.variant&&__jsx(fi_index_esm._hL,{className:download(props.size?props.size:"base")}))):__jsx("button",{"data-testid":null!=dataTestId?dataTestId:null,onClick:handleClick,"aria-label":props.label,type:props.type,disabled:"loading"===props.state||"success"===props.state,className:buttonVariant(props.variant,null!==(_props$size3=props.size)&&void 0!==_props$size3?_props$size3:"sm",props.customBorder,props.customRounded)+" "+props.customStyles},"arrow-left"===props.variant&&__jsx(hi_index_esm.siY,{className:arrow(null!==(_props$size4=props.size)&&void 0!==_props$size4?_props$size4:"base","arrow-left")}),"loading"===props.state?__jsx(react.Fragment,null,__jsx(index_esm.xz6,{className:loadingIcon("loading"===props.state)}),__jsx("span",{className:"loading"===props.state?"invisible":"visible"},props.children)):props.children,"arrow-right"===props.variant&&__jsx(hi_index_esm.WFu,{className:arrow(props.size?props.size:"base",props.variant)}),"play"===props.variant&&__jsx(fa_index_esm.Gzj,{size:19}))};const components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},useLegacyLink:{defaultValue:null,description:"",name:"useLegacyLink",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"disabled"'},{value:'"link"'},{value:'"play"'},{value:'"icon"'},{value:'"download"'},{value:'"fulled"'},{value:'"filled"'},{value:'"ghost"'},{value:'"ghostAlt"'},{value:'"arrow-right"'},{value:'"arrow-right-black"'},{value:'"arrow-right-alt"'},{value:'"arrow-left"'},{value:'"dark-blue"'},{value:'"outlined-gray"'},{value:'"orangeLink"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"TTailwindString"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event?: any) => any"}},fireAnalytics:{defaultValue:null,description:"",name:"fireAnalytics",required:!1,type:{name:"boolean"}},labelAnalytics:{defaultValue:null,description:"",name:"labelAnalytics",required:!1,type:{name:"string"}},customBorder:{defaultValue:null,description:"",name:"customBorder",required:!1,type:{name:"boolean"}},customRounded:{defaultValue:null,description:"",name:"customRounded",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"IButtonData"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},eventAnalytics:{defaultValue:null,description:"",name:"eventAnalytics",required:!1,type:{name:"enum",value:[{value:'"cta"'},{value:'"internalLink"'},{value:'"resourcesCard"'},{value:'"scheduleAnAppointment"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"success"'},{value:'"error"'},{value:'"loading"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Container/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Container});var react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("container","mx-auto"),sm=(0,globals.ZP)("px-0","lg:px-20"),smAlt=(0,globals.ZP)("px-5","lg:px-20"),lg=(0,globals.ZP)("px-6","lg:px-36"),xlg=(0,globals.ZP)("px-5","sm:px-6","md:px-6","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xlgAlt=(0,globals.ZP)("px-0","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xxl=(0,globals.ZP)("px-8","lg:px-36"),containerGutter=function containerGutter(gutter){return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},sm,"sm"===gutter),smAlt,"smAlt"===gutter),lg,"lg"===gutter),xlg,"xlg"===gutter),xlgAlt,"xlgAlt"===gutter),xxl,"xxl"===gutter),"","none"===gutter))},containerWrapper=function containerWrapper(wrapper){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)({"lg:mx-auto":"center"===(null==wrapper?void 0:wrapper.align)},"lg:max-w-[1280px]","1280"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1600px]","1600"===(null==wrapper?void 0:wrapper.maxWidth)))},__jsx=react.createElement,Container=function Container(_ref){var gutter=_ref.gutter,children=_ref.children,containerStyles=_ref.containerStyles,id=_ref.id,style=_ref.style,wrappers=_ref.wrappers,_ref$tag=_ref.tag,tag=void 0===_ref$tag?"div":_ref$tag,props={id,style,className:containerGutter(gutter||"sm")+" "+containerWrapper(wrappers)+" "+(containerStyles||"")};return __jsx("section"===tag?"section":"div",props,children)};const components_Container=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{gutter:{defaultValue:null,description:"",name:"gutter",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"smAlt"'},{value:'"xlg"'},{value:'"xlgAlt"'},{value:'"xxl"'},{value:'"none"'}]}},containerStyles:{defaultValue:null,description:"",name:"containerStyles",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrappers:{defaultValue:null,description:"",name:"wrappers",required:!1,type:{name:"ContainerWrappers"}},tag:{defaultValue:{value:"div"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Container/index.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"components/Container/index.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./components/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Image});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),imageLoader=__webpack_require__("./utils/imageLoader.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("transform-gpu"),transitions=(0,globals.ZP)("transition-opacity","duration-300","ease-in"),loaded=(0,globals.ZP)("opacity-100"),loading=(0,globals.ZP)("opacity-0"),imageLoaded=function imageLoaded(isLoaded){var hasTransitions=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],imgStyles=arguments.length>2?arguments[2]:void 0;return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},loaded,isLoaded),loading,!isLoaded),transitions,hasTransitions),imgStyles,imgStyles))},__jsx=react.createElement,Image=function Image(props){var _useState=(0,react.useState)(!1),loaded=_useState[0],setLoaded=_useState[1],ref=(0,react.useRef)(null);(0,react.useEffect)((function(){var _ref$current,_ref$current2,_ref$current3,img=null!==(null===(_ref$current=ref.current)||void 0===_ref$current||null===(_ref$current=_ref$current.firstChild)||void 0===_ref$current?void 0:_ref$current.firstChild.firstChild)?null===(_ref$current2=ref.current)||void 0===_ref$current2||null===(_ref$current2=_ref$current2.firstChild)||void 0===_ref$current2?void 0:_ref$current2.firstChild.firstChild:null===(_ref$current3=ref.current)||void 0===_ref$current3?void 0:_ref$current3.firstChild.firstChild;null!=img&&img.complete&&setLoaded(!0)}),[]);var quality=void 0!==props.quality?props.quality:80;return __jsx("div",{ref,className:props.className},__jsx(next_image.Z,(0,esm_extends.Z)({},props,{src:props.src,quality,alt:props.alt?props.alt:props.src.toString(),onLoad:function onLoad(){return setLoaded(!0)},className:imageLoaded(loaded,props.hasTransitions,props.imgStyles),sizes:props.sizes,loader:imageLoader.l,onLoadingComplete:function onLoadingComplete(){return setLoaded(!0)}})))};Image.displayName="Image";try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"Optional image quality\nIf no quality is provided, 100 will be used (customLoader default)",name:"quality",required:!1,type:{name:"number"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:'"TAILWIND_STRING"'}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string | StaticImport"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"fill"'},{value:'"intrinsic"'},{value:'"responsive"'}]}},loader:{defaultValue:null,description:"",name:"loader",required:!1,type:{name:"ImageLoader"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},lazyRoot:{defaultValue:null,description:"",name:"lazyRoot",required:!1,type:{name:"RefObject<HTMLElement>"}},lazyBoundary:{defaultValue:null,description:"",name:"lazyBoundary",required:!1,type:{name:"string"}},blurDataURL:{defaultValue:null,description:"",name:"blurDataURL",required:!1,type:{name:"string"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"components/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/TitleStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>BalancerTitleStyle,V:()=>TitleStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),textH1=((0,globals.ZP)("lg:text-48px"),(0,globals.ZP)("text-35px","leading-39px","lg:text-55px","lg:leading-59px","font-poppins","font-medium")),textH1NoMobile=(0,globals.ZP)("text-55px","leading-59px","font-poppins","font-medium"),textH2=(0,globals.ZP)("text-25px","leading-29px","lg:text-35px","lg:leading-39px","font-poppins","font-normal"),textH2NoMobile=(0,globals.ZP)("text-35px","leading-39px","font-poppins","font-normal"),textH3=(0,globals.ZP)("text-xl","leading-6","lg:text-title-lg-mobile","lg:leading-8","font-poppins","font-normal"),textH3NoMobile=(0,globals.ZP)("text-title-lg-mobile","leading-8","font-poppins","font-normal"),textH4=(0,globals.ZP)("text-lg","leading-lg","lg:text-1.5xl","lg:leading-26px","font-poppins","font-normal","normal-case"),textH4Alt=(0,globals.ZP)("text-base-xl-bold-poppins","leading-lg","lg:text-1.5xl","lg:leading-26px","font-poppins","font-normal","normal-case"),textH4NoMobile=(0,globals.ZP)("text-1.5xl","leading-26px","font-poppins","font-normal","normal-case"),textH5=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg","font-poppins","font-semibold","uppercase"),textH5NoMobile=(0,globals.ZP)("text-lg","leading-lg","font-poppins","font-semibold","uppercase"),textH6=(0,globals.ZP)("text-base","lg:text-19px","leading-5","lg:leading-lg","font-poppins","font-bold"),textH6NoMobile=(0,globals.ZP)("text-19px","leading-lg","font-poppins","font-bold"),textH7=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5","font-poppins","font-bold"),textH7NoMobile=(0,globals.ZP)("text-base","leading-5","font-poppins","font-bold"),textH8=(0,globals.ZP)("text-sm","leading-sm","font-poppins","font-bold"),textH9=(0,globals.ZP)("text-45px","leading-68px","lg:text-45px","lg:leading-68px","font-poppins","font-bold"),textH9NoMobile=(0,globals.ZP)("text-45px","leading-68px","font-poppins","font-bold"),textH10=(0,globals.ZP)("text-[22px]","leading-[26px]","font-poppins","font-semibold"),styles_text=function text(theme,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-blue-light"),"blue"==color),(0,globals.ZP)("text-blue-dark"),"darkblue"==color),(0,globals.ZP)("text-blue-dark4"),"darkblue4"==color),(0,globals.ZP)("text-blue-dark5"),"darkblue5"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-black"),"black"==color),(0,globals.ZP)("text-green-lighter"),"lightergreen"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-gray-light"),"gray-light"==color),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,haveMobile?textH1:textH1NoMobile,"h1"==theme),haveMobile?textH2:textH2NoMobile,"h2"==theme),haveMobile?textH3:textH3NoMobile,"h3"==theme),haveMobile?textH4:textH4NoMobile,"h4"==theme),textH4Alt,"h4Alt"==theme),haveMobile?textH5:textH5NoMobile,"h5"==theme),haveMobile?textH6:textH6NoMobile,"h6"==theme),haveMobile?textH7:textH7NoMobile,"h7"==theme),textH8,"h8"==theme),haveMobile?textH9:textH9NoMobile,"h9"==theme),(0,defineProperty.Z)(_classnames,textH10,"h10"==theme)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var TitleStyle=function TitleStyle(_ref){var tag=_ref.tag,tagStyle=_ref.tagStyle,color=_ref.color,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,haveMobile=_ref.haveMobile,children=_ref.children,additionalProps=_ref.additionalProps;return(0,react.createElement)(tag,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(tagStyle||tag,color,haveMobile)+" "+customStyles},additionalProps),children)},BalancerTitleStyle=function BalancerTitleStyle(_ref2){var tag=_ref2.tag,tagStyle=_ref2.tagStyle,color=_ref2.color,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,haveMobile=_ref2.haveMobile,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:tag}:_ref2$balancerOptions,ratio=balancerOptions.ratio,as=balancerOptions.as,nonce=balancerOptions.nonce;return __jsx(dist.SA,(0,esm_extends.Z)({ratio,as,nonce,className:"".concat(styles_text(tagStyle||tag,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerTitleStyle.displayName="BalancerTitleStyle";try{TitleStyle.displayName="TitleStyle",TitleStyle.__docgenInfo={description:"",displayName:"TitleStyle",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"h4Alt"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'}]}},tagStyle:{defaultValue:null,description:"",name:"tagStyle",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"h4Alt"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'}]}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: tag }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/TitleStyle/index.tsx#TitleStyle"]={docgenInfo:TitleStyle.__docgenInfo,name:"TitleStyle",path:"components/TextStyle/TitleStyle/index.tsx#TitleStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerTitleStyle.displayName="BalancerTitleStyle",BalancerTitleStyle.__docgenInfo={description:"",displayName:"BalancerTitleStyle",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"h4Alt"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'}]}},tagStyle:{defaultValue:null,description:"",name:"tagStyle",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"h4Alt"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'}]}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: tag }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/TitleStyle/index.tsx#BalancerTitleStyle"]={docgenInfo:BalancerTitleStyle.__docgenInfo,name:"BalancerTitleStyle",path:"components/TextStyle/TitleStyle/index.tsx#BalancerTitleStyle"})}catch(__react_docgen_typescript_loader_error){}},"./hooks/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useMediaQuery(query){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),matches=_useState[0],setMatches=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var media=window.matchMedia(query);media.matches!==matches&&setMatches(media.matches);var listener=function listener(){return setMatches(media.matches)};return window.addEventListener("resize",listener),function(){return window.removeEventListener("resize",listener)}}),[matches,query]),matches}},"./hooks/useToggle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useToggle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useToggle=function useToggle(){var initialState=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),state=_useState[0],setState=_useState[1],toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setState((function(state){return!state}))}),[]);return[state,toggle]}},"./utils/imageLoader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>customLoader});var assets_url="https://wp.culligan.com/wp-content/uploads/",customLoader=function customLoader(_ref){var src=_ref.src,width=_ref.width,_ref$quality=_ref.quality,quality=void 0===_ref$quality?80:_ref$quality;return"".concat(!src.includes("http")&&assets_url?assets_url:"").concat(src,"?w=").concat(null!=width?width:"","&quality=").concat(quality)}}}]);