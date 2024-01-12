(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[5925,3514],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./components/TopArticleLarge/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),analytics=__webpack_require__("./utils/analytics/index.ts"),AdvancedImage=__webpack_require__("./components/AdvancedImage/index.tsx"),Tag=__webpack_require__("./components/Tag/index.tsx"),BodyStyle=__webpack_require__("./components/TextStyle/BodyStyle/index.tsx"),TitleStyle=__webpack_require__("./components/TextStyle/TitleStyle/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),DEFAULT_STYLES={wrapper:(0,globals.ZP)("grid","grid-cols-1","lg:grid-cols-2","gap-6","shadow-card1","h-full"),imageWrapper:(0,globals.ZP)("relative","aspect-square","lg:aspect-auto","lg:h-auto"),textContainer:(0,globals.ZP)("pr-6","py-6","flex-1","flex","flex-col","justify-center","gap-5","bg-white","relative","z-10","mx-4","mt-[-115px]","pl-6","lg:mx-0","lg:mt-0","lg:pl-0","lg:gap-8"),topArticleTime:(0,globals.ZP)("!font-bold","uppercase","mt-[30px]","lg:mt-[40px]"),title:(0,globals.ZP)("hover:text-orange-light2","mt-5","lg:mt-0"),description:(0,globals.ZP)("my-5","lg:my-8"),tagContainer:(0,globals.ZP)("absolute","top-[-20px]","lg:relative","lg:top-0"),showDesktop:(0,globals.ZP)("hidden","lg:block"),showMobile:(0,globals.ZP)("flex","lg:hidden")},__jsx=react.createElement;function TopArticleLarge(_ref){var article=_ref.article,category=article.tags[0],cardMemoImage=(0,react.useMemo)((function(){return __jsx(AdvancedImage.p,{src:article.image.url?article.image.url:"",alt:article.image.alt,srcSets:[{src:article.image.url,width:335,height:335,mediaQuery:"(max-width: 500px)"},{src:article.image.url,width:468,height:468,mediaQuery:"(max-width: 1280px)"}],layout:"fill",objectFit:"cover",loading:!1})}),[]),textCardMobile=__jsx("div",{className:DEFAULT_STYLES.showMobile},__jsx(link_default(),{href:article.link,passHref:!0},__jsx("a",null,__jsx(TitleStyle.V,{customStyles:DEFAULT_STYLES.title,color:"blue",tag:"h2",tagStyle:"h3"},(0,html_to_react.Parser)().parse(article.title)),__jsx(BodyStyle.G,{color:"grey",size:"lg",haveMobile:!1,customStyles:DEFAULT_STYLES.description},(0,html_to_react.Parser)().parse(article.description)),__jsx(BodyStyle.G,{color:"grey",size:"md",haveMobile:!1,customStyles:DEFAULT_STYLES.topArticleTime},article.minRead," read")))),textCardDesktop=__jsx("div",{className:DEFAULT_STYLES.showDesktop},__jsx(link_default(),{href:article.link,passHref:!0},__jsx("a",null,__jsx(TitleStyle.V,{customStyles:DEFAULT_STYLES.title,color:"blue",tag:"h3"},(0,html_to_react.Parser)().parse(article.title)))),__jsx(BodyStyle.G,{color:"grey",size:"lg",haveMobile:!1,customStyles:DEFAULT_STYLES.description},(0,html_to_react.Parser)().parse(article.description)),__jsx(BodyStyle.G,{color:"grey",size:"md",haveMobile:!1,customStyles:DEFAULT_STYLES.topArticleTime},article.minRead," read"));return __jsx("div",{className:DEFAULT_STYLES.wrapper},__jsx("div",{className:"".concat(DEFAULT_STYLES.imageWrapper," ").concat(DEFAULT_STYLES.showDesktop)},__jsx(link_default(),{href:article.link,passHref:!0},__jsx("a",null,cardMemoImage))),__jsx("div",{className:"".concat(DEFAULT_STYLES.imageWrapper," ").concat(DEFAULT_STYLES.showMobile)},cardMemoImage),__jsx("div",{className:DEFAULT_STYLES.textContainer},category&&__jsx("div",{className:DEFAULT_STYLES.tagContainer},__jsx(link_default(),{href:category.link,passHref:!0},__jsx("a",{onClick:function onClick(){return function handlePillClick(){return analytics.c.blogCategoryLink(category.shortName,"blog category viewed - featured pills")}()}},__jsx(Tag.Z,{color:category.color,name:category.shortName})))),textCardDesktop,textCardMobile))}TopArticleLarge.displayName="TopArticleLarge";try{TopArticleLarge.displayName="TopArticleLarge",TopArticleLarge.__docgenInfo={description:"",displayName:"TopArticleLarge",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"IItemArticle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TopArticleLarge/index.tsx#TopArticleLarge"]={docgenInfo:TopArticleLarge.__docgenInfo,name:"TopArticleLarge",path:"components/TopArticleLarge/index.tsx#TopArticleLarge"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;const index_stories={title:"Cards/Article/Top Article Card Large",component:TopArticleLarge};var Template=function Template(args){return index_stories_jsx(TopArticleLarge,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={article:{link:"https://website-preprod.culligan.com/blog/5-common-myths-about-water-explained",image:{url:"https://wp-preprod.culligan.com/wp-content/uploads/2021/03/world-water-day-blog-myths.jpg",alt:""},title:"5 Common Myths About Water, Explained",description:"Our recent World Water Day survey aims to help people better understand the role water plays in our lives.",minRead:"5 min",tags:[{name:"Water Basics",link:"https://website-preprod.culligan.com/blog/category/water-basics",shortName:"Water Basics",color:"#0084ff",bg:"https://wp-preprod.culligan.com/wp-content/uploads/2020/09/CategoryHeroImg-1-1.png"}]}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TopArticleLarge {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/AdvancedImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>AdvancedImage});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("transform-gpu"),transitions=(0,globals.ZP)("transition-opacity","duration-300","ease-in"),loaded=(0,globals.ZP)("opacity-100"),loading=(0,globals.ZP)("opacity-0"),imgFill=(0,globals.ZP)("absolute top-0 left-0 w-full h-full"),imgAuto=(0,globals.ZP)("w-full"),imgFixed=(0,globals.ZP)("inline-block overflow-hidden b-0 m-0 p-0 relative"),ADVANCED_IMAGE_DEFAULT_STYLES={img:(0,globals.ZP)("absolute top-0 left-0 w-full h-full m-auto p-0 block"),container:function container(type,width,height){return(0,globals.ZP)("max-w-full",(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},imgFill,"fill"===type),imgFill,"responsive"===type),imgFixed,"fixed"===type),imgAuto,"auto"===type),function imgIntrinsic(width,height){return(0,globals.ZP)("relative inline-block",(0,defineProperty.Z)((0,defineProperty.Z)({},"max-w-[".concat(width,"]"),width),"max-h-[".concat(height,"]"),height))}(width,height),"intrinsic"===type))},imageLoaded:function imageLoaded(isLoaded){var hasTransitions=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],imgStyles=arguments.length>2?arguments[2]:void 0;return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},loaded,isLoaded),loading,!isLoaded),transitions,hasTransitions),imgStyles,imgStyles))}},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var AdvancedImage=function AdvancedImage(props){var _props$alt,_props$src,styles=_objectSpread(_objectSpread({},ADVANCED_IMAGE_DEFAULT_STYLES),props.customStyles),parseSizePx=function parseSizePx(size){return size?size.toString().replace(/px/g,"")+"px":""},containerStyle=styles.container(props.layout),altText=null!==(_props$alt=null==props?void 0:props.alt)&&void 0!==_props$alt?_props$alt:null==props||null===(_props$src=props.src)||void 0===_props$src?void 0:_props$src.toString(),imgCustomStyle={},lazy=null==props.loading||props.loading?"lazy":"eager";props.objectFit&&(imgCustomStyle.objectFit=props.objectFit),props.objectPosition&&(imgCustomStyle.objectPosition=props.objectPosition);var parseSrc=(0,react.useCallback)((function(src){var width=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",quality=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80,applyWidthMultiplier=arguments.length>3&&void 0!==arguments[3]&&arguments[3],widthMultiplier=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1.4;if(!src)return"";var assets_url="http://wp.culligan.com/wp-content/uploads/",hasWidth=""!==width&&null!=width,splittedSrc=src.split("?"),outputSrc=src;if(hasWidth){if(applyWidthMultiplier){var baseWidth="string"==typeof width?parseInt(width):width;width=Math.floor(baseWidth*widthMultiplier)}outputSrc="".concat(splittedSrc[0],"?w=").concat(width)}return quality&&(hasWidth?outputSrc+="&quality=".concat(quality):outputSrc="".concat(splittedSrc[0],"?quality=").concat(quality)),!src.includes("http")&&assets_url&&(outputSrc="".concat(assets_url).concat(outputSrc)),outputSrc}),[]),containerInlineStyle=null!=props&&props.ignoreContainerSize?{}:{height:parseSizePx(null==props?void 0:props.height),width:parseSizePx(null==props?void 0:props.width)};return __jsx("div",{className:containerStyle,style:containerInlineStyle},(null==props?void 0:props.priority)&&!(null!=props&&props.srcSets)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(props.src,props.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("picture",{key:props.src},(null==props?void 0:props.srcSets)&&(null==props?void 0:props.srcSets.map((function(item){var _item$quality;return __jsx(react.Fragment,{key:"key-".concat(item.src).concat(item.mediaQuery)},(null==props?void 0:props.priority)&&__jsx(head_default(),null,__jsx("link",{rel:"preload",as:"image",href:parseSrc(item.src,item.width,props.quality,props.applyWidthMultiplier,props.widthMultiplier)})),__jsx("source",{width:item.width,height:item.height,media:item.mediaQuery,srcSet:parseSrc(item.src,item.width,null!==(_item$quality=item.quality)&&void 0!==_item$quality?_item$quality:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier)}))}))),__jsx("img",{id:props.id,style:null!=imgCustomStyle?imgCustomStyle:{},className:"".concat(styles.img," ").concat(props.imgStyles),src:parseSrc(props.src,null==props?void 0:props.width,null==props?void 0:props.quality,props.applyWidthMultiplier,null==props?void 0:props.widthMultiplier),alt:altText,width:null==props?void 0:props.width,height:null==props?void 0:props.height,loading:lazy})))};AdvancedImage.displayName="AdvancedImage";try{AdvancedImage.displayName="AdvancedImage",AdvancedImage.__docgenInfo={description:"",displayName:"AdvancedImage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"fixed"'},{value:'"intrinsic"'},{value:'"responsive"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!1,type:{name:"string | number"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"boolean"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"PlaceholderValue"}},unoptimized:{defaultValue:null,description:"",name:"unoptimized",required:!1,type:{name:"boolean"}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"none"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},onLoadingComplete:{defaultValue:null,description:"",name:"onLoadingComplete",required:!1,type:{name:"OnLoadingComplete"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!1,type:{name:"string"}},hasTransitions:{defaultValue:null,description:"",name:"hasTransitions",required:!1,type:{name:"boolean"}},imgStyles:{defaultValue:null,description:"",name:"imgStyles",required:!1,type:{name:"string"}},srcSets:{defaultValue:null,description:"",name:"srcSets",required:!1,type:{name:"AdvancedImageSrcSet[]"}},ignoreContainerSize:{defaultValue:null,description:"",name:"ignoreContainerSize",required:!1,type:{name:"boolean"}},applyWidthMultiplier:{defaultValue:null,description:"",name:"applyWidthMultiplier",required:!1,type:{name:"boolean"}},widthMultiplier:{defaultValue:null,description:"",name:"widthMultiplier",required:!1,type:{name:"number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"IAdvancedImageStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/AdvancedImage/index.tsx#AdvancedImage"]={docgenInfo:AdvancedImage.__docgenInfo,name:"AdvancedImage",path:"components/AdvancedImage/index.tsx#AdvancedImage"})}catch(__react_docgen_typescript_loader_error){}},"./components/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Tag});var react=__webpack_require__("./node_modules/react/index.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),tagHover=(0,globals.ZP)("hover:bg-orange-light2","hover:border-orange-light2"),tag=function tag(hasHoverEffect,size){return(0,globals.ZP)("rounded-full","px-4","py-1","w-fit","h-fit","text-center","justify-center","items-center","font-bold","uppercase","z-10","relative","max-w-[300px]","text-ellipsis","truncate","text-white","border-2","text-md","border-transparent","transform-gpu",(0,defineProperty.Z)((0,defineProperty.Z)({},tagHover,hasHoverEffect),"text-lg","lg"===size))},__jsx=react.createElement;function Tag(_ref){var color=_ref.color,name=_ref.name,customStyles=_ref.customStyles,_ref$hasHoverEffect=_ref.hasHoverEffect,hasHoverEffect=void 0===_ref$hasHoverEffect||_ref$hasHoverEffect,_ref$size=_ref.size;return __jsx("div",{style:{"--category-color":color},className:"".concat(tag(hasHoverEffect,void 0===_ref$size?"base":_ref$size)," ").concat(customStyles," bg-[var(--category-color)]")},(0,html_to_react.Parser)().parse(name))}Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},hasHoverEffect:{defaultValue:{value:"true"},description:"",name:"hasHoverEffect",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"components/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/BodyStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>BalancerBodyStyle,G:()=>BodyStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),sizeLegal=(0,globals.ZP)("text-xs","leading-4"),sizeSm=(0,globals.ZP)("text-sm","leading-sm"),sizeMd=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5"),sizeMdNoMobile=(0,globals.ZP)("text-base","leading-5"),sizeLg=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg"),sizeLgNoMobile=(0,globals.ZP)("text-lg","leading-lg"),sizeXl=(0,globals.ZP)("text-1.5xl","leading-1.5xl","lg:text-1.5xl","lg:leading-1.5xl"),size20px=(0,globals.ZP)("text-xl","leading-6"),styles_text=function text(size,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-blue"),"blue"==color),(0,globals.ZP)("text-blue-dark3"),"blue-dark3"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-blue-light"),"blue-light"==color),sizeLegal,"legal"==size),sizeSm,"sm"==size),haveMobile?sizeMd:sizeMdNoMobile,"md"==size),haveMobile?sizeLg:sizeLgNoMobile,"lg"==size),(0,defineProperty.Z)((0,defineProperty.Z)(_classnames,sizeXl,"xl"==size),size20px,"20px"==size)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var BodyStyle=function BodyStyle(_ref){var size=_ref.size,color=_ref.color,haveMobile=_ref.haveMobile,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,children=_ref.children,additionalProps=_ref.additionalProps,props=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(size,color,haveMobile)+" "+customStyles},additionalProps),isDiv="object"==typeof children&&"p"===children.type||Array.isArray(children)&&("p"===children[0].type||Array.isArray(children[0])&&"p"===children[0][0].type);return __jsx(isDiv?"div":"p",props,children)},BalancerBodyStyle=function BalancerBodyStyle(_ref2){var size=_ref2.size,color=_ref2.color,haveMobile=_ref2.haveMobile,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:"p",ratio:1,nonce:"",preferNative:!0}:_ref2$balancerOptions;return __jsx(dist.SA,(0,esm_extends.Z)({ratio:balancerOptions.ratio,as:balancerOptions.as,nonce:balancerOptions.nonce,preferNative:balancerOptions.preferNative,className:"".concat(styles_text(size,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerBodyStyle.displayName="BalancerBodyStyle";try{BodyStyle.displayName="BodyStyle",BodyStyle.__docgenInfo={description:"",displayName:"BodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BodyStyle"]={docgenInfo:BodyStyle.__docgenInfo,name:"BodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BodyStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerBodyStyle.displayName="BalancerBodyStyle",BalancerBodyStyle.__docgenInfo={description:"",displayName:"BalancerBodyStyle",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xxl"'},{value:'"md"'},{value:'"xl"'},{value:'"title-base"'},{value:'"legal"'},{value:'"20px"'},{value:'"lg-mobile"'},{value:'"xl-mobile"'},{value:'"text-mobile"'},{value:'"custom"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'},{value:'"mdgrey"'},{value:'"blue-dark3"'}]}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: 'p', ratio: 1, nonce: '', preferNative: true }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"]={docgenInfo:BalancerBodyStyle.__docgenInfo,name:"BalancerBodyStyle",path:"components/TextStyle/BodyStyle/index.tsx#BalancerBodyStyle"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextStyle/TitleStyle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>BalancerTitleStyle,V:()=>TitleStyle});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-wrap-balancer/dist/index.mjs"),globals=__webpack_require__("./styles/globals.ts"),textH1=((0,globals.ZP)("lg:text-48px"),(0,globals.ZP)("text-35px","leading-39px","lg:text-55px","lg:leading-59px","font-poppins","font-medium")),textH1NoMobile=(0,globals.ZP)("text-55px","leading-59px","font-poppins","font-medium"),textH2=(0,globals.ZP)("text-25px","leading-29px","lg:text-35px","lg:leading-39px","font-poppins","font-normal"),textH2NoMobile=(0,globals.ZP)("text-35px","leading-39px","font-poppins","font-normal"),textH3=(0,globals.ZP)("text-xl","leading-6","lg:text-title-lg-mobile","lg:leading-8","font-poppins","font-normal"),textH3NoMobile=(0,globals.ZP)("text-title-lg-mobile","leading-8","font-poppins","font-normal"),textH4=(0,globals.ZP)("text-lg","leading-lg","lg:text-1.5xl","lg:leading-26px","font-poppins","font-normal","normal-case"),textH4Alt=(0,globals.ZP)("text-base-xl-bold-poppins","leading-lg","lg:text-1.5xl","lg:leading-26px","font-poppins","font-normal","normal-case"),textH4NoMobile=(0,globals.ZP)("text-1.5xl","leading-26px","font-poppins","font-normal","normal-case"),textH5=(0,globals.ZP)("text-base","leading-5","lg:text-lg","lg:leading-lg","font-poppins","font-semibold","uppercase"),textH5NoMobile=(0,globals.ZP)("text-lg","leading-lg","font-poppins","font-semibold","uppercase"),textH6=(0,globals.ZP)("text-base","lg:text-19px","leading-5","lg:leading-lg","font-poppins","font-bold"),textH6NoMobile=(0,globals.ZP)("text-19px","leading-lg","font-poppins","font-bold"),textH7=(0,globals.ZP)("text-sm","leading-sm","lg:text-base","lg:leading-5","font-poppins","font-bold"),textH7NoMobile=(0,globals.ZP)("text-base","leading-5","font-poppins","font-bold"),textH8=(0,globals.ZP)("text-sm","leading-sm","font-poppins","font-bold"),textH9=(0,globals.ZP)("text-45px","leading-68px","lg:text-45px","lg:leading-68px","font-poppins","font-bold"),textH9NoMobile=(0,globals.ZP)("text-45px","leading-68px","font-poppins","font-bold"),textH10=(0,globals.ZP)("text-[22px]","leading-[26px]","font-poppins","font-semibold"),styles_text=function text(theme,color){var _classnames,haveMobile=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,globals.ZP)((_classnames={},(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,(0,globals.ZP)("text-blue-light"),"blue"==color),(0,globals.ZP)("text-blue-dark"),"darkblue"==color),(0,globals.ZP)("text-blue-dark4"),"darkblue4"==color),(0,globals.ZP)("text-blue-dark5"),"darkblue5"==color),(0,globals.ZP)("text-white"),"white"==color),(0,globals.ZP)("text-gray-dark"),"grey"==color),(0,globals.ZP)("text-black"),"black"==color),(0,globals.ZP)("text-green-lighter"),"lightergreen"==color),(0,globals.ZP)("text-orange"),"orange"==color),(0,globals.ZP)("text-gray-light"),"gray-light"==color),(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)(_classnames,haveMobile?textH1:textH1NoMobile,"h1"==theme),haveMobile?textH2:textH2NoMobile,"h2"==theme),haveMobile?textH3:textH3NoMobile,"h3"==theme),haveMobile?textH4:textH4NoMobile,"h4"==theme),textH4Alt,"h4Alt"==theme),haveMobile?textH5:textH5NoMobile,"h5"==theme),haveMobile?textH6:textH6NoMobile,"h6"==theme),haveMobile?textH7:textH7NoMobile,"h7"==theme),textH8,"h8"==theme),haveMobile?textH9:textH9NoMobile,"h9"==theme),(0,defineProperty.Z)(_classnames,textH10,"h10"==theme)))},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var TitleStyle=function TitleStyle(_ref){var tag=_ref.tag,tagStyle=_ref.tagStyle,color=_ref.color,_ref$customStyles=_ref.customStyles,customStyles=void 0===_ref$customStyles?"":_ref$customStyles,haveMobile=_ref.haveMobile,children=_ref.children,additionalProps=_ref.additionalProps;return(0,react.createElement)(tag,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:styles_text(tagStyle||tag,color,haveMobile)+" "+customStyles},additionalProps),children)},BalancerTitleStyle=function BalancerTitleStyle(_ref2){var tag=_ref2.tag,tagStyle=_ref2.tagStyle,color=_ref2.color,_ref2$customStyles=_ref2.customStyles,customStyles=void 0===_ref2$customStyles?"":_ref2$customStyles,haveMobile=_ref2.haveMobile,children=_ref2.children,additionalProps=_ref2.additionalProps,_ref2$balancerOptions=_ref2.balancerOptions,balancerOptions=void 0===_ref2$balancerOptions?{as:tag}:_ref2$balancerOptions,ratio=balancerOptions.ratio,as=balancerOptions.as,nonce=balancerOptions.nonce;return __jsx(dist.SA,(0,esm_extends.Z)({ratio,as,nonce,className:"".concat(styles_text(tagStyle||tag,color,haveMobile)," ").concat(customStyles)},additionalProps),children)};BalancerTitleStyle.displayName="BalancerTitleStyle";try{TitleStyle.displayName="TitleStyle",TitleStyle.__docgenInfo={description:"",displayName:"TitleStyle",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},tagStyle:{defaultValue:null,description:"",name:"tagStyle",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'}]}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: tag }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/TitleStyle/index.tsx#TitleStyle"]={docgenInfo:TitleStyle.__docgenInfo,name:"TitleStyle",path:"components/TextStyle/TitleStyle/index.tsx#TitleStyle"})}catch(__react_docgen_typescript_loader_error){}try{BalancerTitleStyle.displayName="BalancerTitleStyle",BalancerTitleStyle.__docgenInfo={description:"",displayName:"BalancerTitleStyle",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},tagStyle:{defaultValue:null,description:"",name:"tagStyle",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue-light"'},{value:'"blue"'},{value:'"white"'},{value:'"grey"'},{value:'"darkblue"'},{value:'"black"'},{value:'"lightergreen"'},{value:'"orange"'},{value:'"darkblue4"'},{value:'"gray-light"'},{value:'"darkblue5"'}]}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},haveMobile:{defaultValue:null,description:"",name:"haveMobile",required:!1,type:{name:"boolean"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"object"}},balancerOptions:{defaultValue:{value:"{ as: tag }"},description:"",name:"balancerOptions",required:!1,type:{name:"IBalancerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextStyle/TitleStyle/index.tsx#BalancerTitleStyle"]={docgenInfo:BalancerTitleStyle.__docgenInfo,name:"BalancerTitleStyle",path:"components/TextStyle/TitleStyle/index.tsx#BalancerTitleStyle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")},"./node_modules/react-wrap-balancer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SA:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),E="undefined"==typeof window,m=E?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,h=0,b=()=>++h,_=!1;function x(){let[n,r]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_?b:void 0);return m((()=>{void 0===n&&r(b()),_=!0}),[]),void 0===n?n:`rwb-${n.toString(32)}`}var y="__wrap_b",d="__wrap_n",v="__wrap_o",S=(n,r,e)=>{let t=(e=e||document.querySelector(`[data-br="${n}"]`)).parentElement,c=f=>e.style.maxWidth=f+"px";e.style.maxWidth="";let u,i=t.clientWidth,s=t.clientHeight,o=i/2-.25,a=i+.5;if(i){for(c(o),o=Math.max(e.scrollWidth,o);o+1<a;)u=Math.round((o+a)/2),c(u),t.clientHeight===s?a=u:o=u;c(a*r+i*(1-r))}e.__wrap_o||"undefined"!=typeof ResizeObserver&&(e.__wrap_o=new ResizeObserver((()=>{self.__wrap_b(0,+e.dataset.brr,e)}))).observe(t)},B=S.toString(),T=(n,r,e="")=>(e&&(e=`self.${d}!=1&&${e}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(n?"":`self.${d}=self.${d}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${y}=${B};`)+e},nonce:r})),g=react__WEBPACK_IMPORTED_MODULE_0__.createContext({preferNative:!0,hasProvider:!1}),w=({ratio:n=1,preferNative:r,nonce:e,children:t,...c})=>{let i=function R(){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>x),[])()}(),s=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(g),a=null!=r?r:o.preferNative,u=c.as||"span";return m((()=>{a&&1===self[d]||s.current&&(self[y]=S)(0,n,s.current)}),[t,a,n]),m((()=>{if(!a||1!==self[d])return()=>{if(!s.current)return;let f=s.current[v];f&&(f.disconnect(),delete s.current[v])}}),[a]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(u,{...c,"data-br":i,"data-brr":n,ref:s,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:a?"balance":"initial"},suppressHydrationWarning:!0},t),T(o.hasProvider,e,`self.${y}("${i}",${n})`))}}}]);