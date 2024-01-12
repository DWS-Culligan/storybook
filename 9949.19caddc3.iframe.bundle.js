"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[9949],{"./components/ContactUs/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_ContactUs});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{closeButton:()=>closeButton,formHeader:()=>formHeader,requiredReminder:()=>requiredReminder,wrapper:()=>wrapper});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/cg/index.esm.js"),Button=__webpack_require__("./components/Button/index.tsx"),Form=__webpack_require__("./components/Form/index.tsx"),contactUs={id:"14623",name:"Home Contact Us Form",fields:[{name:"FirstName",label:{text:"First Name",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"text",initialValue:"",error:"First Name is required"},cols:"col-span-12 md:col-span-6",required:!0},{name:"LastName",label:{text:"Last Name",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"text",initialValue:"",error:"Last Name is required"},cols:"col-span-12 md:col-span-6",required:!0},{name:"EmailAddress",label:{text:"Email Address",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"email",initialValue:""},cols:"col-span-12 md:col-span-12",required:!0},{name:"Phone",label:{text:"Phone",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"tel",initialValue:""},cols:"col-span-12 md:col-span-6",required:!0},{name:"PostalCode",label:{text:"Zip/Postal Code",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"zipcode",initialValue:""},cols:"col-span-12 md:col-span-6",required:!0},{name:"Address",label:{text:"Street Address",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"text",initialValue:"",error:"Street Address is required"},cols:"col-span-12 md:col-span-12",required:!0},{name:"InterestSupport",label:{text:"Area of Interest",style:"base"},placeholder:{text:"Select One",style:"base"},variant:{type:"select",initialValue:null,options:[{label:"Existing Customer-Service or Delivery ",value:"HH"},{label:"Water Testing ",value:"HH"},{label:"Water Filtration ",value:"HH"},{label:"Water Softening ",value:"HH"},{label:"Water Delivery/Water Coolers ",value:"BW"},{label:"Bottleless Water Coolers ",value:"HH"},{label:"Well Water Treatment ",value:"HH"},{label:"Other, Please explain below",value:"Other"}],error:"Area of Interest is required"},cols:"col-span-12 md:col-span-12",required:!0},{name:"Notes",label:{text:"Enter a question or message",style:"base"},placeholder:{text:"",style:"base"},variant:{type:"textarea",initialValue:"",collapsable:!0,rows:10},cols:"col-span-12 md:col-span-12",required:!1}]},usePostForm=__webpack_require__("./hooks/usePostForm.ts"),Error=__webpack_require__("./components/Warning/Error/index.tsx"),globals=__webpack_require__("./styles/globals.ts"),wrapper=(0,globals.ZP)("px-4","lg:w-96","lg:max-h-contactus-desktop","overflow-y-auto","rounded"),formHeader=(0,globals.ZP)("flex","justify-between","items-start"),requiredReminder=(0,globals.ZP)("text-sm","text-gray-dark","mb-5","items-center","flex","pt-4"),closeButton=(0,globals.ZP)("cursor-pointer","flex","text-xl","font-black"),__jsx=react.createElement,ContactUs=function ContactUs(_ref){var onClose=_ref.onClose,customStyles=_ref.customStyles,_usePostForm=(0,usePostForm.d)(),isLoading=_usePostForm.isLoading,success=_usePostForm.success,error=_usePostForm.error,execute=_usePostForm.execute,handleSubmit=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(data){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,execute({formId:contactUs.id,data},null,!0);case 2:case"end":return _context.stop()}}),_callee)})));return function handleSubmit(_x){return _ref2.apply(this,arguments)}}(),styles=Object.assign({},styles_namespaceObject,customStyles);return __jsx("div",{className:styles.wrapper,onClick:function onClick(e){return e.stopPropagation()}},__jsx("div",{className:styles.formHeader},__jsx("p",{className:styles.requiredReminder},"Fields marked * are required fields."),onClose&&__jsx("a",{className:styles.closeButton,onClick:onClose},__jsx(index_esm.Fk5,null))),__jsx(Form.l,{data:contactUs,onSubmit:handleSubmit,resetAfterSubmit:!0},error?__jsx(Error.Z,{icon:!1,msg:"default",theme:"red",textSize:"text-12px"}):null,__jsx(Button.Z,{type:"submit",state:isLoading?"loading":success?"success":error?"error":"base",variant:"filled",customStyles:"col-span-12 md:col-span-6 mb-1 mt-4 px-11",label:"SUBMIT"},"SUBMIT")))};ContactUs.displayName="ContactUs";const components_ContactUs=ContactUs;try{ContactUs.displayName="ContactUs",ContactUs.__docgenInfo={description:"",displayName:"ContactUs",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"ContactUsStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ContactUs/index.tsx#ContactUs"]={docgenInfo:ContactUs.__docgenInfo,name:"ContactUs",path:"components/ContactUs/index.tsx#ContactUs"})}catch(__react_docgen_typescript_loader_error){}},"./components/Form/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Form});var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/yup/es/index.js"),FormField=__webpack_require__("./components/FormField/index.tsx"),Recaptcha=__webpack_require__("./contexts/Recaptcha/index.tsx"),setupFields=__webpack_require__("./utils/setupFields.ts"),grid=(0,__webpack_require__("./styles/globals.ts").dh)("grid","grid-cols-12","gap-x-5","md:gap-x-5"),__jsx=react.createElement,Form=function Form(_ref){var data=_ref.data,onSubmit=_ref.onSubmit,children=_ref.children,_ref$errorTheme=_ref.errorTheme,errorTheme=void 0===_ref$errorTheme?"base":_ref$errorTheme,_ref$labelTheme=_ref.labelTheme,labelTheme=void 0===_ref$labelTheme?"base":_ref$labelTheme,isMobile=_ref.isMobile,_ref$autoRenderFields=_ref.autoRenderFields,autoRenderFields=void 0===_ref$autoRenderFields||_ref$autoRenderFields,resetAfterSubmit=_ref.resetAfterSubmit,customFieldStyle=_ref.customFieldStyle,fields=data.fields,_setupFields=(0,setupFields.M)(fields),initialValues=_setupFields.initialValues,schema=_setupFields.schema,recaptcha=data.usesRecaptcha||void 0===data.usesRecaptcha?(0,Recaptcha.Z)():null;return __jsx(react.Fragment,null,__jsx(formik_esm.J9,{validateOnBlur:!0,initialValues,onSubmit:function handleSubmit(data,_ref2){var resetForm=_ref2.resetForm;onSubmit(data),resetAfterSubmit&&resetForm({})},validationSchema:es.Ry().shape(schema)},(function(){return __jsx(formik_esm.l0,{noValidate:!0,className:grid,onFocus:function onFocus(){recaptcha&&!recaptcha.state.isMounted&&recaptcha.dispatch({type:"mount_recaptcha"})}},autoRenderFields&&fields.map((function(field){return __jsx(FormField.Z,{key:field.name,id:"form".concat(data.id,"-").concat(field.name),variation:field.variant,data:field,labelTheme,errorTheme,displayLabelAsPlaceholder:isMobile,border:!isMobile,customStyle:customFieldStyle,falnmCustomStyle:null==data?void 0:data.falnmCustomStyle})})),children)})))};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"Form"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(data: any) => void"}},errorTheme:{defaultValue:{value:"base"},description:"",name:"errorTheme",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"light"'},{value:'"red"'},{value:'"v2"'}]}},labelTheme:{defaultValue:{value:"base"},description:"",name:"labelTheme",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"light"'},{value:'"red"'},{value:'"v2"'}]}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!1,type:{name:"boolean"}},resetAfterSubmit:{defaultValue:null,description:"",name:"resetAfterSubmit",required:!1,type:{name:"boolean"}},autoRenderFields:{defaultValue:{value:"true"},description:"",name:"autoRenderFields",required:!1,type:{name:"boolean"}},customFieldStyle:{defaultValue:null,description:"",name:"customFieldStyle",required:!1,type:{name:"string"}},falnmCustomStyle:{defaultValue:null,description:"",name:"falnmCustomStyle",required:!1,type:{name:"IFALNMCustomStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Form/index.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"components/Form/index.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./components/Warning/Error/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Warning_Error});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/io5/index.esm.js"),ERROR_MESSAGES=new Map([["default","SOMETHING WENT WRONG!"],["dealerNotFound","Dealer not found!"]]),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),DEFAULT_ERROR_STYLES={errorMessage:(0,globals.ZP)("flex","rounded","items-center","leading-base","px-3","col-span-12","mb-[22px]"),warning:(0,globals.ZP)("h-4","w-4","mr-1")},redTheme=(0,globals.ZP)("bg-red","text-white","font-bold"),whiteTheme=(0,globals.ZP)("bg-white","text-red","font-bold"),defaultTheme=(0,globals.ZP)("text-red"),v2Theme=(0,globals.ZP)("text-red","mt-[10px]"),applyTheme=function applyTheme(theme){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},defaultTheme,"default"===theme),redTheme,"red"===theme),whiteTheme,"white"===theme),v2Theme,"v2"===theme))},applySize=function applySize(size){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},"text-[12px]","text-12px"===size),"text-xs","xs"===size),"text-sm","sm"===size),"text-md","md"===size),"text-base","base"===size),"text-lg","lg"===size),"text-xl","xl"===size))},applyWidth=function applyWidth(width){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},"w-fit","fit"===width),"w-full","full"===width),"w-max","max"===width),"w-min","min"===width),"w-screen","screen"===width))},applyHeight=function applyHeight(height){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},"h-fit","fit"===height),"h-full","full"===height),"h-max","max"===height),"h-min","min"===height),"h-screen","screen"===height))},__jsx=react.createElement,WarningError=function WarningError(_ref){var msg=_ref.msg,icon=_ref.icon,theme=_ref.theme,textSize=_ref.textSize,_ref$width=_ref.width,width=void 0===_ref$width?"fit":_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?"fit":_ref$height,customMsg=_ref.customMsg,errorMessage=DEFAULT_ERROR_STYLES.errorMessage,warning=DEFAULT_ERROR_STYLES.warning,message=ERROR_MESSAGES.get(msg)||customMsg;return __jsx("p",{className:"".concat(errorMessage," ").concat(applySize(textSize)," ").concat(applyTheme(theme)," ").concat(applyWidth(width)," ").concat(applyHeight(height))},icon?__jsx(index_esm.OvZ,{className:warning}):null,__jsx("span",null,message))};WarningError.displayName="WarningError";const Warning_Error=WarningError;try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{msg:{defaultValue:null,description:"",name:"msg",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dealerNotFound"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"boolean"}},textSize:{defaultValue:null,description:"",name:"textSize",required:!0,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"text-12px"'},{value:'"xs"'},{value:'"md"'},{value:'"xl"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"red"'},{value:'"white"'},{value:'"v2"'}]}},width:{defaultValue:{value:"fit"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"max"'},{value:'"min"'},{value:'"screen"'},{value:'"fit"'},{value:'"full"'}]}},height:{defaultValue:{value:"fit"},description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"max"'},{value:'"min"'},{value:'"screen"'},{value:'"fit"'},{value:'"full"'}]}},customMsg:{defaultValue:null,description:"",name:"customMsg",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Warning/Error/index.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"components/Warning/Error/index.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./contexts/Recaptcha/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRecaptcha,x:()=>RecaptchaProvider});var _Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,recaptchaKey="6LdF79UbAAAAAOqcy3gDXhOTE1KUmQYxS5Ligm2G",RecaptchaContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);function recaptchaReducer(_state,action){if("mount_recaptcha"===action.type)return{isMounted:!0}}var initialState={isMounted:!1},RecaptchaProvider=function RecaptchaProvider(_ref){var children=_ref.children,_React$useReducer=react__WEBPACK_IMPORTED_MODULE_0__.useReducer(recaptchaReducer,initialState),_React$useReducer2=(0,_Users_ppinhe01_Jobs_culligan_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_React$useReducer,2),value={state:_React$useReducer2[0],dispatch:_React$useReducer2[1]};return __jsx(RecaptchaContext.Provider,{value},children)};function useRecaptcha(){var context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RecaptchaContext);if(void 0===context)throw new Error("useRecaptcha must be used within a RecaptchaProvider");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){!context.state.isMounted&&!document.getElementById("recaptcha")&&function mountRecaptcha(){var head=document.getElementsByTagName("head")[0],script=document.createElement("script");script.type="text/javascript",script.id="recaptcha",script.src="https://www.google.com/recaptcha/api.js?render=".concat(recaptchaKey),head.appendChild(script)}()}),[context.state.isMounted]);return{state:context.state,dispatch:context.dispatch,verify:function verify(){return grecaptcha.execute(recaptchaKey,{action:"submit"}).then((function(token){return token}))}}}RecaptchaProvider.displayName="RecaptchaProvider";try{RecaptchaProvider.displayName="RecaptchaProvider",RecaptchaProvider.__docgenInfo={description:"",displayName:"RecaptchaProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["contexts/Recaptcha/index.tsx#RecaptchaProvider"]={docgenInfo:RecaptchaProvider.__docgenInfo,name:"RecaptchaProvider",path:"contexts/Recaptcha/index.tsx#RecaptchaProvider"})}catch(__react_docgen_typescript_loader_error){}},"./hooks/usePostForm.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>usePostForm});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),next_router=__webpack_require__("./node_modules/next/router.js"),react=__webpack_require__("./node_modules/react/index.js"),axios=__webpack_require__("./node_modules/axios/index.js"),axios_default=__webpack_require__.n(axios),config=__webpack_require__("./api/config.ts"),api=axios_default().create({baseURL:config.M5,timeout:2e4}),postForm=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(options){var response;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return response=api.post("/forms-queue/".concat(options.formId),options.data),_context.abrupt("return",response);case 2:case"end":return _context.stop()}}),_callee)})));return function postForm(_x){return _ref.apply(this,arguments)}}(),postFormSmtp=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(options){var response;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return response=api.post("/send-mail/".concat(options.formType),options.data),_context2.abrupt("return",response);case 2:case"end":return _context2.stop()}}),_callee2)})));return function postFormSmtp(_x2){return _ref2.apply(this,arguments)}}(),Recaptcha=__webpack_require__("./contexts/Recaptcha/index.tsx"),es6=__webpack_require__("./node_modules/universal-cookie/es6/index.js"),config_UTMMap=[{queryParam:"utm_campaign",inputName:"Lead_UTM_Campaign__c",cookieName:"utm_campaign"},{queryParam:"utm_source",inputName:"Lead_UTM_Source__c",cookieName:"utm_source"},{queryParam:"utm_medium",inputName:"Lead_UTM_Medium__c",cookieName:"utm_medium"},{queryParam:"utm_content",inputName:"Lead_UTM_Content__c",cookieName:"utm_content"},{queryParam:"utm_term",inputName:"Lead_UTM_Term__c",cookieName:"utm_term"},{queryParam:"gclsrc",inputName:"Lead_Google_gclsrc__c",cookieName:"google_gclsrc"},{queryParam:"s_cid",inputName:"Lead_Google_s_cid__c",cookieName:"google_s_cid"},{queryParam:"gclid",inputName:"Lead_Google_gclid__c",cookieName:"google_gclid"},{queryParam:"advertising_source",inputName:"Lead_Advertising_Source__c",cookieName:"advertising_source"},{queryParam:"",inputName:"Google_Client_Id__c",cookieName:"_gid"},{queryParam:"",inputName:"Lead_Source_URL__c",cookieName:"Lead_Source_URL__c"},{queryParam:"promotions_applied",inputName:"Promotions_Applied__c",cookieName:"promotions_applied"},{queryParam:"lead_campaign",inputName:"Lead_Campaign__c",cookieName:"lead_campaign"}],cookies=(config_UTMMap.map((function(item){return item.cookieName})),new es6.Z);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var transformData=function transformData(data,token){var _data$State;"string"==typeof data.InterestSupport&&(data.InterestSupport=JSON.parse(data.InterestSupport));var _document,_document2,email=data.EmailAddress,customerType=data.Customer_Type__c?JSON.parse(data.Customer_Type__c):null,valueCustomer=customerType?customerType.value:null,marketSupport=data.Industry?JSON.parse(data.Industry):null,state=null!==(_data$State=data.State)&&void 0!==_data$State&&_data$State.includes("value")?JSON.parse(data.State):null,_ref=data.InterestSupport?data.InterestSupport:{label:null,value:null},label=_ref.label,value=_ref.value;(null!==valueCustomer&&(data.Customer_Type__c=valueCustomer,data.Notes=data.Notes+" - "+valueCustomer),null!==marketSupport&&(data.Industry=marketSupport.label),null!==value&&(data.InterestSupport=value,data.InterestType=value,data.InterestOther="Other"===value?data.Notes:""),null!==label&&(data.Interest=label),null!==email&&(data.Lead_Email_ID=btoa(email)),document)&&(data.custom_page_title=null===(_document=document)||void 0===_document?void 0:_document.title);document&&(data.custom_page_title=null===(_document2=document)||void 0===_document2?void 0:_document2.title);null!==state&&state.value&&(data.State=state.value);var utmFields=function getUTMFields(){var currentCookies=cookies.getAll(),updatedFields={};return config_UTMMap.map((function(item){updatedFields[item.inputName]=currentCookies[item.cookieName]?escape(currentCookies[item.cookieName]):""})),updatedFields}();utmFields.Lead_Source_URL__c=window.location.href;var leadCampaign=utmFields.Lead_Campaign__c;return leadCampaign&&null!==leadCampaign&&(data.Notes=data.Notes?data.Notes+" - Lead Campaign: "+leadCampaign:"Lead Campaign: "+leadCampaign),_objectSpread(_objectSpread(_objectSpread({},data),utmFields),{},{token})},usePostForm=function usePostForm(){var _useState=(0,react.useState)(!1),isLoading=_useState[0],setIsLoading=_useState[1],_useState2=(0,react.useState)(!1),success=_useState2[0],setSuccess=_useState2[1],_useState3=(0,react.useState)(null),setToken=(_useState3[0],_useState3[1]),_useState4=(0,react.useState)(0),setNoOfVerifications=(_useState4[0],_useState4[1]),_useState5=(0,react.useState)(null),error=_useState5[0],setError=_useState5[1],_useState6=(0,react.useState)(null),data=_useState6[0],setData=_useState6[1],router=(0,next_router.useRouter)(),verify=(0,Recaptcha.Z)().verify,handleThankYouPage=function handleThankYouPage(formData,referralData){null!=referralData&&referralData.amount&&null!=referralData&&referralData.referralCode?function executeConversion(_ref2){var parameters={email:_ref2.email,amount:_ref2.amount,firstName:_ref2.firstName,lastName:_ref2.lastName,phone:_ref2.phone};window.referralJS=null!==window.referralJS&&void 0!==window.referralJS?window.referralJS:{},window.referralJS.conversion={debug:"false",onConversion:function onConversion(){router.push("/thank-you")},parameters}}(_objectSpread({email:null==formData?void 0:formData.EmailAddress,firstName:null==formData?void 0:formData.FirstName,lastName:null==formData?void 0:formData.LastName,phone:null==formData?void 0:formData.Phone},referralData)):router.push("/thank-you")},execute=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(options,additionalValues,showThankYouPage,referralData){var formId,_data,_token,transformedData,formResponse;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,setIsLoading(!0),formId=options.formId,_data=options.data,_context.next=5,verify();case 5:return _token=_context.sent,setNoOfVerifications((function(noOfVerifications){return noOfVerifications+1})),setToken(_token),transformedData=transformData(additionalValues?_objectSpread(_objectSpread(_objectSpread({},_data),referralData),additionalValues):_objectSpread(_objectSpread({},_data),referralData),_token),_context.next=11,postForm({formId,data:transformedData});case 11:return formResponse=_context.sent,setData(formResponse),formResponse.status>=200&&formResponse.status<300&&(setIsLoading(!1),setSuccess(!0)),showThankYouPage&&(handleThankYouPage(transformedData,referralData),setError(null)),_context.abrupt("return",formResponse);case 18:_context.prev=18,_context.t0=_context.catch(0),setError(_context.t0),setIsLoading(!1),setSuccess(!1);case 23:case"end":return _context.stop()}}),_callee,null,[[0,18]])})));return function execute(_x,_x2,_x3,_x4){return _ref3.apply(this,arguments)}}(),executeSmtp=function(){var _ref4=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(options,additionalValues,showThankYouPage){var formType,data,token,transformedData,formResponse;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return formType=options.formType,data=options.data,_context2.next=3,verify();case 3:return token=_context2.sent,setNoOfVerifications((function(noOfVerifications){return noOfVerifications+1})),setToken(token),transformedData=transformData(additionalValues?_objectSpread(_objectSpread({},data),additionalValues):data,token),_context2.prev=7,setIsLoading(!0),_context2.next=11,postFormSmtp({formType,data:transformedData});case 11:return formResponse=_context2.sent,setIsLoading(!1),setData(formResponse),formResponse.status>=200&&formResponse.status<300&&setSuccess(!0),showThankYouPage&&(router.push("/thank-you"),setError(null),setSuccess(!1)),_context2.abrupt("return",formResponse);case 19:_context2.prev=19,_context2.t0=_context2.catch(7),setError(_context2.t0),setIsLoading(!1);case 23:case"end":return _context2.stop()}}),_callee2,null,[[7,19]])})));return function executeSmtp(_x5,_x6,_x7){return _ref4.apply(this,arguments)}}();return{isLoading,success,error,data,execute,executeSmtp}}},"./utils/setupFields.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>setupFields});var es=__webpack_require__("./node_modules/yup/es/index.js"),setupFields=function setupFields(fields){var initialValues={},schema={};return fields.map((function(field){initialValues[field.name]=field.variant.initialValue,schema[field.name]=function getValidation(_ref){var type=_ref.type,_ref$customMessage=_ref.customMessage,customMessage=void 0===_ref$customMessage?"":_ref$customMessage,required=_ref.required,maxLength=_ref.maxLength;switch(type){case"text":case"textarea":return required?es.Z_().required(customMessage).max(maxLength||9999):es.Z_().max(maxLength||9999);case"email":return required?es.Z_().trim().required("Email Address is required").email("Please enter a valid Email Address").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/g,"Please enter a valid Email Address"):es.Z_().trim().email("Please enter valid Email Address");case"tel":return required?es.Z_().required("Phone # is required").matches(/^[0-9]+$/,"Numbers only").min(10,"Must be 10 digits").max(10,"Must be 10 digits"):es.Z_().matches(/^[0-9]+$/,"Numbers only").min(10,"Must be 10 digits").max(10,"Must be 10 digits");case"select":return required?es.Ry().required(customMessage).typeError(customMessage):es.Ry().typeError(customMessage);case"zipcode":return required?es.Z_().required("Zip/Postal Code is required").matches(/^([0-9]{5}|[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]|[A-Za-z][0-9][A-Za-z])$/,"Please enter valid Postal Code"):es.Z_().matches(/^([0-9]{5}|[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]|[A-Za-z][0-9][A-Za-z])$/,"Please enter valid Postal Code");case"radio":return required?es.Z_().required(customMessage):es.Z_();case"checkbox":return required?es.Xg().required(customMessage).typeError(customMessage):es.Xg().typeError(customMessage);case"checkbox_group":return required?es.IX().min(1,customMessage).of(es.Z_().required()).required():es.IX().typeError(customMessage)}}({type:field.variant.type,customMessage:field.variant.error,required:field.required,maxLength:field.variant.maxLength})})),initialValues.CulliganID=Date.now()+(Math.floor(500*Math.random())+1),{initialValues,schema}}}}]);