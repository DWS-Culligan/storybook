"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[8816],{"./components/FormSteps/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_FormSteps});var react=__webpack_require__("./node_modules/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),schedulerContent=__webpack_require__("./data/schedulerContent.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),nav=((0,globals.ZP)("border-b-2","border-gray-lighter-hover"),(0,globals.ZP)("border-b","border-gray-lighter"),(0,globals.ZP)("flex","flex-row","border-b-2","border-gray-lighter-hover","pb-2","md:pb-4","pt-3","md:pt-0")),steps=(0,globals.ZP)("w-full","grid-flow-col","grid","md:auto-cols-auto"),defaultStep=(0,globals.ZP)("flex","items-center","md:justify-start"),completedStepText=(0,globals.ZP)("font-bold","text-gray-dark"),activeStepText=(0,globals.ZP)("font-bold","text-gray-dark","pr-4"),disabledStepText=(0,globals.ZP)("font-normal","text-gray-search"),defaultStepText=((0,globals.ZP)("hidden","md:block"),(0,globals.ZP)("text-13px","md:text-lg","ml-1","md:ml-0")),spaceMobileDesktop=(0,globals.ZP)("col-span-1","md:col-span-1"),defaultCursor=(0,globals.ZP)("cursor-default"),activeCursor=(0,globals.ZP)("cursor-pointer"),line=((0,globals.ZP)("flex","h-px","block","md:hidden","w-full","z-0"),function line(active){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)({},"bg-blue-light",active),"bg-gray-light",!active))}),step=function step(active,completed,unlocked){return(0,globals.ZP)(defaultStep,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},spaceMobileDesktop,active&&!completed),defaultCursor,!active&&!completed&&!unlocked),activeCursor,unlocked))},stepText=function stepText(active,completed,unlocked){return(0,globals.ZP)(defaultStepText,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},completedStepText,completed),activeStepText,active),disabledStepText,!active&&!completed),defaultCursor,!active&&!completed&&!unlocked),activeCursor,unlocked))},baseStepNumber=(0,globals.ZP)("w-5","h-5","md:w-7","md:h-7","rounded-full","flex","items-center","justify-center","md:mr-2","text-sm","md:text-lg","pb-0.5"),completedStepNumber=(0,globals.ZP)("border-2","border-blue-light","text-blue-light","font-bold"),activeStepNumber=(0,globals.ZP)("border-2","border-blue-light","text-white","bg-blue-light","font-bold"),disabledStepNumber=(0,globals.ZP)("border-2","border-gray-search","text-white","bg-gray-search","font-bold"),stepNumber=function stepNumber(active,completed,unlocked){return(0,globals.ZP)(baseStepNumber,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},completedStepNumber,completed),activeStepNumber,active),disabledStepNumber,!active&&!completed),defaultCursor,!active&&!completed&&!unlocked),activeCursor,unlocked))},stepButtonStyle=(0,globals.ZP)("flex","items-center","justify-between","z-10"),stepButton=function stepButton(active,completed,unlocked){return(0,globals.ZP)(stepButtonStyle,(0,defineProperty.Z)((0,defineProperty.Z)({},defaultCursor,!active&&!completed&&!unlocked),activeCursor,unlocked))},iconSize=(0,globals.ZP)("text-xs","md:text-sm","mt-0.5"),textMobile=(0,globals.ZP)("block","md:hidden"),textDesktop=(0,globals.ZP)("md:block","hidden"),__jsx=react.createElement,FormSteps=function FormSteps(props){var _useState=(0,react.useState)(""),currentHash=_useState[0],setCurrentHash=_useState[1],router=(0,next_router.useRouter)(),handleStepClick=function handleStepClick(step){1===step&&props.goToPage(1),2===step&&props.unlockedPages>1&&!props.hasErrors&&props.goToPage(2),3===step&&props.unlockedPages>2&&!props.hasErrors&&props.goToPage(3)};return(0,react.useEffect)((function(){var handleHashChange=function handleHashChange(){setCurrentHash(window.location.hash.split("?").slice(0)[0])};router.events.on("hashChangeComplete",handleHashChange)}),[]),(0,react.useEffect)((function(){var filledInformation=JSON.parse(localStorage.getItem("filledInformation")),isMapped=schedulerContent.mp.indexOf(currentHash.substring(1))>=0,mappedPage=isMapped&&schedulerContent.mp.indexOf(currentHash.substring(1))+1;filledInformation&&isMapped?props.goToPage(mappedPage):props.goToPage(1)}),[currentHash]),__jsx("nav",{className:nav},__jsx("ul",{className:steps},__jsx("li",{className:step(1===props.activePage,props.activePage>1,!0),onClick:function onClick(){return handleStepClick(1)}},__jsx("button",{className:stepButton(1===props.activePage,props.activePage>1,!0)},__jsx("span",{className:stepNumber(1===props.activePage,props.activePage>1)},props.activePage>1?__jsx(index_esm.l_A,{className:iconSize}):"1")," ",__jsx("span",{className:stepText(1===props.activePage,props.activePage>1)},__jsx("div",{className:textMobile},"Info"),__jsx("div",{className:textDesktop},"Information")))),__jsx("li",{className:step(2===props.activePage,props.activePage>2,props.unlockedPages>1),onClick:function onClick(){return handleStepClick(2)}},props.activePage<2&&__jsx("span",{className:line(2===props.activePage)}),__jsx("button",{className:stepButton(2===props.activePage,props.activePage>2,props.unlockedPages>1)},__jsx("span",{className:stepNumber(2===props.activePage,props.activePage>2,props.unlockedPages>1)},props.activePage>2?__jsx(index_esm.l_A,{className:iconSize}):"2")," ",__jsx("span",{className:stepText(2===props.activePage,props.activePage>2,props.unlockedPages>1)},__jsx("div",{className:textMobile},"Appt. Details"),__jsx("div",{className:textDesktop},"Appointment Details")))),__jsx("li",{className:step(3===props.activePage,props.activePage>3),onClick:props.unlockedPages>=3?function(){return props.goToPage(3)}:null},props.activePage<3&&__jsx("span",{className:line(3===props.activePage)}),__jsx("button",{className:stepButton(3===props.activePage,props.activePage>3)},__jsx("span",{className:stepNumber(3===props.activePage)},"3")," ",__jsx("span",{className:stepText(3===props.activePage)},__jsx("div",{className:textMobile},"Confirm"),__jsx("div",{className:textDesktop},"Confirmation"))))))};FormSteps.displayName="FormSteps";const components_FormSteps=FormSteps;try{FormSteps.displayName="FormSteps",FormSteps.__docgenInfo={description:"",displayName:"FormSteps",props:{activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},unlockedPages:{defaultValue:null,description:"",name:"unlockedPages",required:!0,type:{name:"number"}},goToPage:{defaultValue:null,description:"",name:"goToPage",required:!0,type:{name:"(page: number) => void"}},hasErrors:{defaultValue:null,description:"",name:"hasErrors",required:!0,type:{name:"boolean"}},embed:{defaultValue:null,description:"",name:"embed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/FormSteps/index.tsx#FormSteps"]={docgenInfo:FormSteps.__docgenInfo,name:"FormSteps",path:"components/FormSteps/index.tsx#FormSteps"})}catch(__react_docgen_typescript_loader_error){}},"./data/schedulerContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I5:()=>appointmentForm,Vi:()=>personalInfoForm,XH:()=>schedulerContent,mp:()=>innerRouteMapping});var _views_Scheduler_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./views/Scheduler/data.ts"),innerRouteMapping=["step1","step2","step3"],schedulerContent={pages:[{title:"Schedule Your Free Water Test",tabTitle:"Your Info"},{title:"Schedule your appointment",tabTitle:"Schedule"},{title:"Confirm Appointment Details",tabTitle:"Confirmation"}]},personalInfoForm={name:"Schedule Your Free Water Test",id:"14626",fields:[{cols:"col-span-6 md:col-span-6",label:{text:"First Name",style:"base"},placeholder:{text:"",style:"base"},name:"FirstName",required:!0,variant:{type:"text",initialValue:"",error:"First Name is required"}},{cols:"col-span-6 md:col-span-6",label:{text:"Last Name",style:"base"},placeholder:{text:"",style:"base"},name:"LastName",required:!0,variant:{type:"text",initialValue:"",error:"Last Name is required"}},{cols:"col-span-12 md:col-span-6",label:{text:"Address",style:"base"},placeholder:{text:"",style:"base"},name:"Address-1",required:!0,variant:{type:"text",initialValue:"",error:"Address is required",autocomplete:!0}},{cols:"col-span-12 md:col-span-6",label:{text:"City",style:"base"},placeholder:{text:"",style:"base"},name:"City",required:!0,variant:{type:"text",initialValue:"",error:"City is required"}},{cols:"col-span-6 md:col-span-3",label:{text:"State/Province",style:"base"},placeholder:{text:"",style:"base"},name:"State",required:!0,variant:{type:"text",initialValue:"",error:"State is required"}},{cols:"col-span-6 md:col-span-3",label:{text:"Zip/Postal Code",style:"base"},placeholder:{text:"",style:"base"},name:"PostalCode",required:!0,variant:{type:"zipcode",initialValue:""}},{cols:"col-span-12 md:col-span-6",label:{text:"Email Address",style:"base"},placeholder:{text:"",style:"base"},name:"EmailAddress",required:!0,variant:{type:"email",initialValue:""}},{cols:"col-span-12 md:col-span-6",placeholder:{text:"",style:"base"},label:{text:"Phone #",style:"base",tip:{text:"We'll use your phone number to confirm your appointment and contact you about any changes.",theme:"blue",position:"bottom"}},name:"Phone",required:!0,variant:{type:"tel",initialValue:""}},{cols:"col-span-12 md:col-span-6",placeholder:{text:"",style:"base"},label:{text:"Phone Type",style:"base"},name:"Phone_Type__c",required:!0,variant:{widthFull:"grid-cols-2 md:grid-cols-3",type:"radio",initialValue:"Mobile",style:"base",options:[{label:"Mobile Phone",value:"Mobile"},{label:"Home Phone",value:"Home"}],error:"Please inform your phone type"}},{cols:"col-span-12 md:col-span-12",placeholder:{text:"",style:"base"},label:{text:"Opt-In to Receive SMS Alerts from Culligan",style:"base"},name:"Mobile_SMS_Opt_In__c",required:!1,variant:{type:"checkbox",initialValue:!1,error:"",style:"orange",collapseMobile:!1},diclaimer:"By opting in, you are agreeing to receive SMS messages from Culligan. Alerts at the phone number listed above. 4 msgs/month. If you have questions, text HELP to 73777 or contact Customer Service at 1-855-558-1684 or customerservice@culligan.com. You can opt-out of the subscription anytime by texting STOP to 73777. Msg&data rates may apply. You can view the Terms and Conditions here and Privacy Policy here.",dependsOn:{name:"Phone_Type__c",value:"Mobile"}}]},appointmentForm={name:"Scheduler Pick Day",id:4,fields:[{cols:"col-span-12 md:col-span-12",label:{text:"Select the Date That Works Best for You",style:"base"},name:"ScheduleDate",placeholder:{text:"",style:"base"},errorIcon:!0,required:!0,variant:{type:"radio",options:void 0,initialValue:"",style:"card",error:"Date selection is required.",widthFull:"gap-3 grid-cols-3 md:grid-cols-4"}},{cols:"col-span-12 md:col-span-12",label:{text:"Select Your Preferred Time",style:"base"},name:"ScheduleTime",placeholder:{text:"",style:"base"},required:!0,errorIcon:!0,variant:{type:"radio",options:_views_Scheduler_data__WEBPACK_IMPORTED_MODULE_0__.u,initialValue:"",style:"card",error:"Time selection is required.",widthFull:"gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6"}},{cols:"col-span-12 md:col-span-12",label:{text:"Select a Consultation Type",style:"base"},name:"Interest",placeholder:{text:"",style:"base"},required:!0,errorIcon:!0,variant:{type:"radio",options:[{label:"In-Home Water Test & Consultation",value:"In-Home Water Test and Consultation",textOnHover:"A Culligan Water Expert will conduct a free water test in your home.",iconImg:"2021/10/rebuild_scheduler_select-consultation-inhome.svg",iconImgSelected:"2021/10/rebuild_scheduler_select-consultation-inhome-selected.svg",data:{testid:"scheduler-wizard-radio-interest"}},{label:"Video Consultation",value:"Video Consultation",textOnHover:"Meet a Culligan Water Expert to learn how to achieve better water.",iconImg:"2021/10/rebuild_scheduler_select-consultation-video.svg",iconImgSelected:"2021/10/rebuild_scheduler_select-consultation-video-selected.svg",data:{testid:"scheduler-wizard-radio-interest"}},{label:"Phone Consultation",value:"Phone Consultation",textOnHover:"Discuss your water symptoms and discover possible solutions.",iconImg:"2021/10/rebuild_scheduler_select-consultation-phone.svg",iconImgSelected:"2021/10/rebuild_scheduler_select-consultation-phone-selected.svg",data:{testid:"scheduler-wizard-radio-interest"}}],initialValue:"",style:"cardIcon",height:120,heightMobile:69,widthFull:"gap-3 grid-cols-1 md:grid-cols-3",error:"Consultation type is required."}}]}},"./views/Scheduler/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>availableTimes});var availableTimes=[{value:"09:00 AM",label:"9am - 10am",data:{testid:"scheduler-wizard-radio-scheduletime"},availableDays:["Mon","Tue","Wed","Thu","Fri","Sat"]},{value:"11:00 AM",label:"11am - 12pm ",data:{testid:"scheduler-wizard-radio-scheduletime"},availableDays:["Mon","Tue","Wed","Thu","Fri","Sat"]},{value:"01:00 PM",label:"1pm - 2pm",data:{testid:"scheduler-wizard-radio-scheduletime"},availableDays:["Mon","Tue","Wed","Thu","Fri","Sat"]},{value:"03:00 PM",label:"3pm - 4pm ",data:{testid:"scheduler-wizard-radio-scheduletime"},availableDays:["Mon","Tue","Wed","Thu","Fri","Sat"]},{value:"05:00 PM",label:"5pm - 6pm ",data:{testid:"scheduler-wizard-radio-scheduletime"},availableDays:["Mon","Tue","Wed","Thu","Fri"]},{value:"07:00 PM",label:"7pm - 8pm ",data:{testid:"scheduler-wizard-radio-scheduletime"},availableDays:["Mon","Tue","Wed","Thu","Fri"]}]}}]);