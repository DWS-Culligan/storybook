"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[3405],{"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}__webpack_require__.d(__webpack_exports__,{Z:()=>_classCallCheck})},"./node_modules/@babel/runtime/helpers/esm/createClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_createClass});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}},"./components/HeroWithForm/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultProps:()=>DefaultProps,HeroFormWithoutProduct:()=>HeroFormWithoutProduct,HeroFormWithoutProductProps:()=>HeroFormWithoutProductProps,HeroWithFormReferral:()=>HeroWithFormReferral,HeroWithFormReferralProps:()=>HeroWithFormReferralProps,HeroWithFormWithProducts:()=>HeroWithFormWithProducts,HeroWithFormWithProductsProps:()=>HeroWithFormWithProductsProps,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Menu=__webpack_require__("./contexts/Menu/index.tsx"),Recaptcha=__webpack_require__("./contexts/Recaptcha/index.tsx"),data=__webpack_require__("./views/LandingPage/data.ts"),BannerWithForm=__webpack_require__("./components/BannerWithForm/index.tsx"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),BannerC=function(){function BannerC(data,viewType,descriptionBackground,titleColor,descriptionColor,descriptionWidth,isDescriptionOverImage,descriptionSize,mobileTitleStyles){var _data$waves,_data$ctaBottom,_data$ctaScroll;(0,classCallCheck.Z)(this,BannerC),(0,defineProperty.Z)(this,"gutter",void 0),(0,defineProperty.Z)(this,"background",void 0),(0,defineProperty.Z)(this,"text",void 0),(0,defineProperty.Z)(this,"isRectangle",void 0),(0,defineProperty.Z)(this,"customContainerStyles",void 0),(0,defineProperty.Z)(this,"customRectangleStyle",void 0),(0,defineProperty.Z)(this,"mobileCopy",void 0),(0,defineProperty.Z)(this,"descriptionBackground",void 0),(0,defineProperty.Z)(this,"waves",void 0),(0,defineProperty.Z)(this,"ctaBottom",void 0),(0,defineProperty.Z)(this,"ctaScroll",void 0),this.gutter="mobileView"===viewType?"lg":"smAlt",this.background=this.setBackGround(data,viewType),this.text=this.setText(data,viewType,titleColor,mobileTitleStyles,descriptionColor,descriptionWidth,isDescriptionOverImage,descriptionSize),this.isRectangle="mobileView"===viewType,this.customRectangleStyle="mobileView"===viewType?"pb-4 w-[88%] -top-6":"",this.customContainerStyles="mobileView"===viewType?"pl-9 pr-2 xs:pr-6":"",this.mobileCopy=isDescriptionOverImage?null:data.copy,this.descriptionBackground=descriptionBackground||"darkblue",this.waves=null!==(_data$waves=data.waves)&&void 0!==_data$waves?_data$waves:void 0,this.ctaBottom=null!==(_data$ctaBottom=data.ctaBottom)&&void 0!==_data$ctaBottom?_data$ctaBottom:void 0,this.ctaScroll=null!==(_data$ctaScroll=data.ctaScroll)&&void 0!==_data$ctaScroll?_data$ctaScroll:void 0}return(0,createClass.Z)(BannerC,[{key:"setBackGround",value:function setBackGround(data,viewType){return"desktopView"===viewType?{image:{src:data.images.desktopImg.src,priority:!0,alt:data.images.desktopImg.alt,objectFit:"cover",quality:80},height:data.desktopHeight?data.desktopHeight:539,fixedHeight:!1,hasBackgroundMask:data.hasBackgroundMask,srcSets:[{src:data.images.desktopImg.src,width:1024,mediaQuery:"(max-width: 1023px)"},{src:data.images.desktopImg.src,width:1280,mediaQuery:"(max-width: 1279px)"},{src:data.images.desktopImg.src,width:1440,mediaQuery:"(max-width: 1439px)"},{src:data.images.desktopImg.src,width:1920,quality:90,mediaQuery:"(max-width: 1919px)"},{src:data.images.desktopImg.src,width:2400,quality:100,mediaQuery:"(min-width: 1920px)"}]}:"mobileView"===viewType?{image:{src:data.images.mobileImg.src,priority:!0,alt:data.images.mobileImg.alt,objectFit:"cover",quality:80},height:data.mobileHeight?data.mobileHeight:170,fixedHeight:!1,hasBackgroundMask:data.hasBackgroundMask,srcSets:[{src:data.images.mobileImg.src,width:375,mediaQuery:"(max-width: 375px)",quality:90},{src:data.images.mobileImg.src,width:500,mediaQuery:"(max-width: 499px)",quality:90},{src:data.images.mobileImg.src,width:1024,mediaQuery:"(max-width: 1023px)"}]}:void 0}},{key:"setText",value:function setText(data,viewType){var _data$eyebrow,_data$eyebrow2,_data$eyebrow3,titleColor=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white",mobileTitleStyles=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"!text-[32px] leading-[39px] font-poppins",descriptionColor=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"white",descriptionWidth=arguments.length>5?arguments[5]:void 0,isDescriptionOverImage=arguments.length>6?arguments[6]:void 0,descriptionSize=arguments.length>7?arguments[7]:void 0;return{title:{content:data.title,color:titleColor,customStyles:"desktopView"===viewType?"lg:max-w-[562px] font-poppins":mobileTitleStyles,tag:"h1",tagStyle:"h1"},position:{x:"left",y:"center"},align:"left",description:this.setDescription(data,viewType,descriptionColor,descriptionWidth,isDescriptionOverImage,descriptionSize),superscript:{content:null!==(_data$eyebrow=data.eyebrow)&&void 0!==_data$eyebrow&&_data$eyebrow.text?data.eyebrow.text:"",color:null!==(_data$eyebrow2=data.eyebrow)&&void 0!==_data$eyebrow2&&_data$eyebrow2.color?data.eyebrow.color:"blue-light",size:"desktopView"===viewType?"lg":"xl-mobile",customStyles:null!==(_data$eyebrow3=data.eyebrow)&&void 0!==_data$eyebrow3&&_data$eyebrow3.customStyles?data.eyebrow.customStyles:"desktopView"===viewType?"lg:font-semibold":"uppercase leading-lg pt-3 pb-1 w-full",tag:"p",tagStyle:"p"}}}},{key:"setDescription",value:function setDescription(data,viewType){var descriptionColor=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white",descriptionWidth=arguments.length>3?arguments[3]:void 0,isDescriptionOverImage=arguments.length>4?arguments[4]:void 0,size=arguments.length>5?arguments[5]:void 0;return"desktopView"===viewType?{content:data.copy?data.copy:"",color:descriptionColor,size:size||"base",width:descriptionWidth||405,className:""}:"mobileView"===viewType?{content:data.copy&&isDescriptionOverImage?data.copy:"",color:descriptionColor,size:size||"lg",width:descriptionWidth||null,className:"leading-base"}:void 0}}]),BannerC}(),globals=__webpack_require__("./styles/globals.ts"),DEFAULT_HERO_WITH_FORM_STYLES={heroDesktopCustomContainer:function heroDesktopCustomContainer(hasProductImage){return(0,globals.ZP)("2xl:!p-0","2xl:mr-0","2xl:w-[calc(1440px*0.5+79px)]",{"lg:!pr-32":hasProductImage})}},__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var HeroWithFormType=function(HeroWithFormType){return HeroWithFormType.HeroWithForm="heroWithForm",HeroWithFormType.HeroFormWithoutProduct="heroFormWithoutProduct",HeroWithFormType.HeroWithFormReferral="heroWithFormReferral",HeroWithFormType}({}),HeroWithForm=function HeroWithForm(_ref){var _content$productImage,_content$productImage2,_content$productImage3,_content$productImage4,content=_ref.content,_ref$type=(_ref.breadcrumbs,_ref.type),type=void 0===_ref$type?HeroWithFormType.HeroWithForm:_ref$type,contactForm=_ref.contactForm,referralData=_ref.referralData,styles=_objectSpread({},DEFAULT_HERO_WITH_FORM_STYLES),menuContext=(0,Menu.H)(),heroMobile=function getHeroMobile(){var _content$titleTextCol,_content$copyTextColo,_content$titleTextCol2,_content$copyTextColo2;switch(type){case HeroWithFormType.HeroWithForm:return new BannerC(_objectSpread({hasBackgroundMask:!0},content),"mobileView","transparent",null===(_content$titleTextCol=content.titleTextColor)||void 0===_content$titleTextCol?void 0:_content$titleTextCol.mobileTitleTextColor,null===(_content$copyTextColo=content.copyTextColor)||void 0===_content$copyTextColo?void 0:_content$copyTextColo.mobileCopyTextColor,void 0,void 0,void 0,content.titleCustomStyles);case HeroWithFormType.HeroFormWithoutProduct:return new BannerC(_objectSpread(_objectSpread({},content),{},{mobileHeight:359}),"mobileView","darkblue",null===(_content$titleTextCol2=content.titleTextColor)||void 0===_content$titleTextCol2?void 0:_content$titleTextCol2.mobileTitleTextColor,null===(_content$copyTextColo2=content.copyTextColor)||void 0===_content$copyTextColo2?void 0:_content$copyTextColo2.mobileCopyTextColor,180,!0);case HeroWithFormType.HeroWithFormReferral:return new BannerC(_objectSpread({hasBackgroundMask:!1},content),"mobileView","transparent",void 0,void 0,void 0,void 0,void 0,"!text-[35px] leading-[42px]")}}(),heroDesktop=function getHeroDesktop(){var _content$titleTextCol3,_content$copyTextColo3,_content$titleTextCol4,_content$copyTextColo4;switch(type){case HeroWithFormType.HeroWithForm:return new BannerC(_objectSpread({hasBackgroundMask:!0},content),"desktopView",void 0,null===(_content$titleTextCol3=content.titleTextColor)||void 0===_content$titleTextCol3?void 0:_content$titleTextCol3.desktopTitleTextColor,null===(_content$copyTextColo3=content.copyTextColor)||void 0===_content$copyTextColo3?void 0:_content$copyTextColo3.desktopCopyTextColor);case HeroWithFormType.HeroFormWithoutProduct:return new BannerC(_objectSpread({},content),"desktopView",void 0,null===(_content$titleTextCol4=content.titleTextColor)||void 0===_content$titleTextCol4?void 0:_content$titleTextCol4.desktopTitleTextColor,null===(_content$copyTextColo4=content.copyTextColor)||void 0===_content$copyTextColo4?void 0:_content$copyTextColo4.desktopCopyTextColor);case HeroWithFormType.HeroWithFormReferral:return new BannerC(_objectSpread({hasBackgroundMask:!1},content),"desktopView",void 0,void 0,void 0,void 0,void 0,"lg")}}(),isMobileProductImageAvailable=Boolean(null===(_content$productImage=content.productImages)||void 0===_content$productImage?void 0:_content$productImage.mobileImg.src)&&!(null!==(_content$productImage2=content.productImages)&&void 0!==_content$productImage2&&_content$productImage2.mobileImg.src.startsWith("?w=")),isDesktopProductImageAvailable=Boolean(null===(_content$productImage3=content.productImages)||void 0===_content$productImage3?void 0:_content$productImage3.desktopImg.src)&&!(null!==(_content$productImage4=content.productImages)&&void 0!==_content$productImage4&&_content$productImage4.desktopImg.src.startsWith("?w="));heroDesktop.customContainerStyles=styles.heroDesktopCustomContainer(isDesktopProductImageAvailable),type!==HeroWithFormType.HeroFormWithoutProduct&&(heroDesktop.text.description.width=isDesktopProductImageAvailable?405:492);var getProductImage=(0,react.useCallback)((function(){var emptyImgObj={src:"",alt:""};return type!==HeroWithFormType.HeroFormWithoutProduct?menuContext.state.isMobile?isMobileProductImageAvailable?content.productImages.mobileImg:emptyImgObj:isDesktopProductImageAvailable?content.productImages.desktopImg:emptyImgObj:null}),[menuContext.state.isMobile]);return __jsx("section",null,__jsx(BannerWithForm.Z,{dataMobile:heroMobile,dataDesktop:heroDesktop,form:contactForm,referralData,productImage:getProductImage(),formBanner:content.form,productImageSizes:content.productImageSizes,bannerCustomStyles:content.customStyles,formCustomStyles:content.formCustomStyles,hideFormOnMobile:content.hideFormOnMobile}))};HeroWithForm.displayName="HeroWithForm";const components_HeroWithForm=(0,react.memo)(HeroWithForm);try{HeroWithForm.displayName="HeroWithForm",HeroWithForm.__docgenInfo={description:"",displayName:"HeroWithForm",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"IHeroWithForm"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"IBreadcrumb[]"}},type:{defaultValue:{value:"HeroWithFormType.HeroWithForm"},description:"",name:"type",required:!1,type:{name:"string"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!1,type:{name:"boolean"}},contactForm:{defaultValue:null,description:"",name:"contactForm",required:!1,type:{name:"Form"}},referralData:{defaultValue:null,description:"",name:"referralData",required:!1,type:{name:"IReferralProgramProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/HeroWithForm/index.tsx#HeroWithForm"]={docgenInfo:HeroWithForm.__docgenInfo,name:"HeroWithForm",path:"components/HeroWithForm/index.tsx#HeroWithForm"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const index_stories={title:"Banner/Hero With Form",component:components_HeroWithForm,includeStories:["Default","HeroWithFormWithProducts","HeroFormWithoutProduct","HeroWithFormReferral"]};var Template=function Template(args){return index_stories_jsx(Menu.K,null,index_stories_jsx(Recaptcha.x,null,index_stories_jsx(components_HeroWithForm,args)))};Template.displayName="Template";var content={title:"Works Hard Against Hard Water",copy:"Improve the performance of your appliances, as well as your heating and plumbing systems, by upgrading to the world’s most efficient water softener.*",images:{desktopImg:{src:"https://wp-preprod.culligan.com/wp-content/uploads/2023/05/softener-lp-ad-34-v-2-img-desktop.jpg?fit=719%2C539?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024?w=1024",alt:"softener-lp-ad-34-v-2-img-desktop"},mobileImg:{src:"https://wp-preprod.culligan.com/wp-content/uploads/2023/05/softener-lp-ad-34-v-2-img-mobile.jpg?fit=375%2C163?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375?w=375",alt:"softener-lp-ad-34-v-2-img-mobile"}},form:{title:"Get Started With Soft Water for $9.95/month†",copy:"Fields marked * are required.",hasCompanyField:!1,leadCampaign:"",areaOfInterest:"Water Softening",interestType:"HH"}},Default=Template.bind({}),DefaultProps={content,breadcrumbs:[{label:"Home",link:"/"},{label:"Test",link:""}],contactForm:data.CONTACT_FORM_DATA_HERO};Default.args=DefaultProps;var HeroWithFormWithProducts=Template.bind({}),HeroWithFormWithProductsProps={breadcrumbs:DefaultProps.breadcrumbs,content:index_stories_objectSpread(index_stories_objectSpread({},content),{},{productImages:{desktopImg:{src:"https://wp-preprod.culligan.com/wp-content/uploads/2023/03/HE-Smart-Softener-Front@2x-1.png?fit=300%2C593?w=138?w=138?w=138?w=138?w=138?w=138",alt:""},mobileImg:{src:"https://wp-preprod.culligan.com/wp-content/uploads/2023/03/HE-Smart-Softener-Front@2x-1.png?fit=300%2C593?w=144?w=144?w=144?w=144?w=144?w=144",alt:""}}}),contactForm:data.CONTACT_FORM_DATA_HERO};HeroWithFormWithProducts.args=HeroWithFormWithProductsProps;var HeroFormWithoutProduct=Template.bind({}),HeroFormWithoutProductProps=index_stories_objectSpread(index_stories_objectSpread({},DefaultProps),{},{type:HeroWithFormType.HeroFormWithoutProduct});HeroFormWithoutProduct.args=HeroFormWithoutProductProps;var HeroWithFormReferral=Template.bind({}),HeroWithFormReferralProps=index_stories_objectSpread(index_stories_objectSpread({},HeroWithFormWithProductsProps),{},{type:HeroWithFormType.HeroWithFormReferral});HeroWithFormReferral.args=HeroWithFormReferralProps,Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <MenuProvider>\n    <RecaptchaProvider>\n      <HeroWithForm {...args} />\n    </RecaptchaProvider>\n  </MenuProvider>",...Default.parameters?.docs?.source}}},HeroWithFormWithProducts.parameters={...HeroWithFormWithProducts.parameters,docs:{...HeroWithFormWithProducts.parameters?.docs,source:{originalSource:"args => <MenuProvider>\n    <RecaptchaProvider>\n      <HeroWithForm {...args} />\n    </RecaptchaProvider>\n  </MenuProvider>",...HeroWithFormWithProducts.parameters?.docs?.source}}},HeroFormWithoutProduct.parameters={...HeroFormWithoutProduct.parameters,docs:{...HeroFormWithoutProduct.parameters?.docs,source:{originalSource:"args => <MenuProvider>\n    <RecaptchaProvider>\n      <HeroWithForm {...args} />\n    </RecaptchaProvider>\n  </MenuProvider>",...HeroFormWithoutProduct.parameters?.docs?.source}}},HeroWithFormReferral.parameters={...HeroWithFormReferral.parameters,docs:{...HeroWithFormReferral.parameters?.docs,source:{originalSource:"args => <MenuProvider>\n    <RecaptchaProvider>\n      <HeroWithForm {...args} />\n    </RecaptchaProvider>\n  </MenuProvider>",...HeroWithFormReferral.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DefaultProps","HeroWithFormWithProducts","HeroWithFormWithProductsProps","HeroFormWithoutProduct","HeroFormWithoutProductProps","HeroWithFormReferral","HeroWithFormReferralProps"]}}]);