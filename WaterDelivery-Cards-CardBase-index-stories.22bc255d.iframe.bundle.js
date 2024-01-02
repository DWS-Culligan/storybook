"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[927],{"./components/WaterDelivery/Cards/CardBase/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/WaterDelivery/Cards/CardBase/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Cards/Card Base",component:___WEBPACK_IMPORTED_MODULE_1__.Z};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",isExpanded:!0,isSelected:!0,topPick:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CardBase {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/WaterDelivery/Cards/CardBase/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Cards_CardBase});var react=__webpack_require__("./node_modules/react/index.js"),Card=__webpack_require__("./node_modules/@material-ui/core/esm/Card/Card.js"),Typography=__webpack_require__("./node_modules/@material-ui/core/esm/Typography/Typography.js"),CardContent=__webpack_require__("./node_modules/@material-ui/core/esm/CardContent/CardContent.js"),Collapse=__webpack_require__("./node_modules/@material-ui/core/esm/Collapse/Collapse.js"),globals=__webpack_require__("./styles/globals.ts"),padding=(0,globals.ZP)("py-0","px-4"),spacer=(0,globals.ZP)("h-4"),pointer=(0,globals.ZP)("cursor-pointer"),root=(0,globals.ZP)("border-solid","border","border-gray-lighter-hover","shadow-none","m-4"),fontSans=(0,globals.ZP)("!font-sans","!leading-sm","!text-sm"),styles_topPick=(0,globals.ZP)("h-[31px]","flex","bg-[#E2EBFC]","items-center","justify-center","!text-xs","!font-medium","!leading-4","!text-blue-secondary","rounded-t"),__jsx=react.createElement,CardBase=function CardBase(_ref){var isExpanded=_ref.isExpanded,isSelected=_ref.isSelected,onClick=_ref.onClick,description=_ref.description,children=_ref.children,_ref$topPick=_ref.topPick,topPick=void 0!==_ref$topPick&&_ref$topPick;return __jsx(Card.Z,{className:"".concat(root," ").concat(!!onClick&&pointer," ").concat(isSelected&&"vk-cardbase-selected"),onClick},topPick&&__jsx("div",{className:styles_topPick},__jsx(Typography.Z,{variant:"caption"},"Top Pick")),__jsx(CardContent.Z,null,children),__jsx(Collapse.Z,{in:isExpanded,className:padding},__jsx(Typography.Z,{variant:"caption",className:fontSans},description),__jsx("div",{className:spacer})))};CardBase.displayName="CardBase";const Cards_CardBase=CardBase;try{CardBase.displayName="CardBase",CardBase.__docgenInfo={description:"",displayName:"CardBase",props:{customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},topPick:{defaultValue:{value:"false"},description:"",name:"topPick",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/WaterDelivery/Cards/CardBase/index.tsx#CardBase"]={docgenInfo:CardBase.__docgenInfo,name:"CardBase",path:"components/WaterDelivery/Cards/CardBase/index.tsx#CardBase"})}catch(__react_docgen_typescript_loader_error){}}}]);