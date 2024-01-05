"use strict";(self.webpackChunkvip_go_nextjs_boilerplate=self.webpackChunkvip_go_nextjs_boilerplate||[]).push([[3131],{"./components/Category/FAQ/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WaterDispensingFAQ:()=>WaterDispensingFAQ,WaterSoftenerFAQ:()=>WaterSoftenerFAQ,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),Menu=__webpack_require__("./contexts/Menu/index.tsx"),Overlay=__webpack_require__("./contexts/Overlay/index.tsx"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),html_to_react=__webpack_require__("./node_modules/html-to-react/index.js"),Container=__webpack_require__("./components/Container/index.tsx"),TitleStyle=__webpack_require__("./components/TextStyle/TitleStyle/index.tsx"),FAQItem=__webpack_require__("./components/Category/FAQ/FAQItem/index.tsx"),FAQ_styles=__webpack_require__("./components/Category/FAQ/styles.ts"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var FAQ=function FAQ(_ref){var questions=_ref.questions,title=_ref.title,customStyles=_ref.customStyles,backgroundColor=_ref.backgroundColor,gutter=_ref.gutter,questionTag=_ref.questionTag,styles=_objectSpread(_objectSpread({},FAQ_styles.N),customStyles);return __jsx("section",{id:"faq"},__jsx("div",{className:styles.faqWrapper(backgroundColor)},__jsx(Container.Z,{gutter:gutter||"xxl",containerStyles:styles.faqContainer},__jsx(TitleStyle.V,{color:"blue",tag:"h2",customStyles:styles.title},(0,html_to_react.Parser)().parse(title)),questions.map((function(_ref2,index){var question=_ref2.question,answer=_ref2.answer,image=_ref2.image,cta=_ref2.cta,modal=_ref2.modal;return __jsx(FAQItem.u,{question,questionTag,answer,image,cta,index,key:index,customStyles,modal})})))))};FAQ.displayName="FAQ";const Category_FAQ=FAQ;try{FAQ.displayName="FAQ",FAQ.__docgenInfo={description:"",displayName:"FAQ",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},questions:{defaultValue:null,description:"",name:"questions",required:!0,type:{name:"IFaqItems[]"}},questionTag:{defaultValue:null,description:"",name:"questionTag",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h4Alt"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'},{value:'"h10"'},{value:'"p"'}]}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"IFaqStyles"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"gray"'}]}},gutter:{defaultValue:null,description:"",name:"gutter",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"lgV2"'},{value:'"smAlt"'},{value:'"xlg"'},{value:'"xlgAlt"'},{value:'"xxl"'},{value:'"none"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Category/FAQ/index.tsx#FAQ"]={docgenInfo:FAQ.__docgenInfo,name:"FAQ",path:"components/Category/FAQ/index.tsx#FAQ"})}catch(__react_docgen_typescript_loader_error){}var index_stories_jsx=react.createElement;const index_stories={title:"FAQ/FAQ",component:Category_FAQ,parameters:{docs:{description:{component:'\nThe "FAQ" component is used in the following views:\n\n- Sub Category: views/SubCategory/sections/Faq\n- Landing Page: views/LandingPage/sections/Faq\n\nAnd its original path is:\n- components/Category/FAQ\n'}}}};var Template=function Template(args){return index_stories_jsx(Overlay.N,null,index_stories_jsx(Menu.K,null,index_stories_jsx(Category_FAQ,args)))};Template.displayName="Template";var WaterDispensingFAQ=Template.bind({});WaterDispensingFAQ.args={title:"Water Dispensing FAQs",questions:[{id:"water-dispensing-q-1",question:'How do you clean a<br className="relative block sm:hidden" /> water dispenser?​',answer:"Instructions are specific to each type of unit, so please refer to your owner’s guide for detailed cleaning instructions. Remember to always unplug your cooler before cleaning, and when you’re done, drain and flush your system before use. Regular cleaning ensures you receive better water and lengthens the lifespan of your unit."},{id:"water-dispensing-q-2",question:'How much is a water<br className="relative block sm:hidden" /> dispenser?',answer:"Costs vary depending on your location and the type of system you choose. For example, if you opt for a bottled water cooler, the price will depend on the system’s features, the type of water you choose and the number of bottles you need per month. If you’re unsure of what you may need, your local dealer can provide expert recommendations."},{id:"water-dispensing-q-3",question:'How does a water<br className="relative block sm:hidden" /> dispenser work?​',answer:'Your Culligan Water expert will plug your dispenser into the nearest outlet and load your water bottle at the top or bottom of the machine, depending on which unit you choose. Once this simple setup is complete, you can start enjoying cleaner, better-tasting water right away. With <a class="font-bold underline underline-offset-2 decoration-1 decoration-orange hover:text-orange-dark2" href="https://www.culligan.com/water-dispensing/water-delivery-service">bottled water delivery</a>, your Culligan Water expert can even drop off more bottles before you run out, at a time that’s most convenient for you.'},{id:"water-dispensing-q-4",question:'What is a<br className="relative block sm:hidden" /> water cooler?',answer:'Water coolers and water dispensers allow you to enjoy cleaner, better-tasting water, hassle-free. With a <a class="font-bold underline underline-offset-2 decoration-1 decoration-orange hover:text-orange-dark2" href="https://www.culligan.com/office/water-coolers-and-dispensers/bottle-free-dispensers-and-coolers/ascent-80-bottleless-water-cooler">bottleless system</a> that connects to your home’s water line, enjoy an unlimited supply whenever you need it most. Or, opt for a bottled water cooler and schedule deliveries so you never run out.'},{id:"water-dispensing-q-5",question:'How do I change a<br className="relative block sm:hidden" /> water cooler jug?',answer:'\n    If you’re home at the time of the <a class="font-bold underline underline-offset-2 decoration-1 decoration-orange hover:text-orange-dark2" href="https://www.culligan.com/water-dispensing/water-delivery-service">delivery</a>, your local Culligan Water expert may be able to load your new jug. However, if you need to change the jug yourself, keep these tips in mind:\n    <br/>\n    <br/>\n    <li>Make sure your old bottle is empty or mostly empty to avoid splashing.</li>\n    <li>Place one hand on the neck of the bottle and the other at the base and lift from your legs, not your back.</li>\n    <li>Once the jug is placed in the cooler, test your water flow to ensure the bottle is in the correct position.</li>\n    '},{id:"water-dispensing-q-6",question:'Where can I buy a<br className="relative block sm:hidden" /> water dispenser?',answer:'Your <a class="font-bold underline underline-offset-2 decoration-1 decoration-orange hover:text-orange-dark2" href="https://www.culligan.com/locations">local Culligan Water expert</a> can provide the right type of water dispenser based on your needs. Contact them to discuss which product would be best for your home.'},{id:"water-dispensing-q-7",question:'What is a bottleless<br className="relative block sm:hidden" /> water cooler?',answer:'<a class="font-bold underline underline-offset-2 decoration-1 decoration-orange hover:text-orange-dark2" href="https://www.culligan.com/office/water-coolers-and-dispensers/bottle-free-dispensers-and-coolers/hot-and-cold-dispensers">Bottleless water coolers</a> connect to your home’s water line to provide an unlimited supply of great-tasting water, with multiple stages of filtration and options with cold, hot or room temperature water (ice makers also are available in some units). These systems do not require water jugs to be delivered.'}]};var WaterSoftenerFAQ=Template.bind({});WaterSoftenerFAQ.args={title:"Water Softener FAQS",questions:[{question:"Do I need a water softener?",answer:"<p>If you’re dealing with the unfavorable effects of hard water — like dry skin and hair, limescale buildup around faucets and showerheads, soap scum on shower walls or too much wear and tear on your water-using appliances — you may need a water softener. That said, remember that not all systems were created equal. With Culligan Water, you can rest assured that you’ll get a full-service partner, quality products with durability and an established brand you can trust.</p>\n"},{question:"What are water softeners and how do they work?",answer:"<p>Water softeners are used to remove the hardness from your water. Hard water can cause buildup that leads to spotty dishes, dry hair and skin, wear and tear on water-using appliances, and more.</p>\n<p>Water softeners work through basic chemistry. The main tank of water softening systems is filled with negatively charged resin beads. Meanwhile, hard water is caused by high amounts of calcium and magnesium, which are both positively charged molecules. As hard water pumps through a water softener, the calcium and magnesium are attracted to the resin beads and removed from your water.</p>\n"},{question:"How do I choose the best water softener?",answer:'<p>To help determine which water softener is best for your home, your local Culligan Water expert will assess factors like the hardness of your water, household water usage and flow rate. Schedule a <a class="css-1rn59kg" title="https://www.culligan.com/home-water-quality-testing" href="https://www.culligan.com/home-water-quality-testing" data-renderer-mark="true"><u data-renderer-mark="true">free, in-home consultation</u></a> today to get custom recommendations based on your home’s needs.</p>\n'},{question:"What are the benefits of a water softener?",answer:'<p data-renderer-start-pos="4436">A  water softener can be beneficial if you’re dealing with the unfavorable effects of hard water — like dry skin and hair, limescale buildup around faucets and showerheads, soap scum in your shower or too much wear and tear on your water-using appliances. With softer water, you can enjoy smoother hair and skin, spot-free dishes, brighter laundry, and longer-lasting appliances.</p>\n'},{question:"Why should I get a Culligan water softener?",answer:"<p>With Culligan Water, you can rest assured that you’ll get a dedicated partner, quality products and an established brand you can trust. Culligan HE water softeners are the world’s most efficient which means you can save money on water, energy and salt. Plus, Culligan Water offers full-service installation, maintenance programs, and over 85 years of expertise to make getting soft water easy.</p>\n"},{question:"What services does Culligan include? ",answer:"<p>Your local Culligan water expert can offer a full-service installation to make getting started with your new system even easier. They will expertly connect your water softening system to the water supply, the drain and the brine tank, and you’ll be all set. The average installation takes about 2-4 hours. Then, your local expert can also arrange for convenient salt delivery so you can get salt refills delivered right to your door whenever you need it.</p>\n",cta:{link:"https://www.youtube.com/watch?v=LalNudMH_o8",label:"Watch: What to Expect at Your Water Softener Installation",target:"_self"},image:{src:"https://wp-preprod.culligan.com/wp-content/uploads/2023/03/VDO-FAQ-thumb@2x.jpg?fit=633%2C354",alt:""}}]},WaterDispensingFAQ.parameters={...WaterDispensingFAQ.parameters,docs:{...WaterDispensingFAQ.parameters?.docs,source:{originalSource:"args => <OverlayProvider>\n    <MenuProvider>\n      <FAQ {...args} />\n    </MenuProvider>\n  </OverlayProvider>",...WaterDispensingFAQ.parameters?.docs?.source}}},WaterSoftenerFAQ.parameters={...WaterSoftenerFAQ.parameters,docs:{...WaterSoftenerFAQ.parameters?.docs,source:{originalSource:"args => <OverlayProvider>\n    <MenuProvider>\n      <FAQ {...args} />\n    </MenuProvider>\n  </OverlayProvider>",...WaterSoftenerFAQ.parameters?.docs?.source}}};const __namedExportsOrder=["WaterDispensingFAQ","WaterSoftenerFAQ"]},"./components/Container/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Container});var react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),globals=__webpack_require__("./styles/globals.ts"),base=(0,globals.ZP)("container","mx-auto"),sm=(0,globals.ZP)("px-0","lg:px-20"),smAlt=(0,globals.ZP)("px-5","lg:px-20"),lg=(0,globals.ZP)("px-6","lg:px-36"),lgV2=(0,globals.ZP)("px-[15px]"),xlg=(0,globals.ZP)("px-5","sm:px-6","md:px-6","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xlgAlt=(0,globals.ZP)("px-0","lg:px-20","xl:px-18","1xl:px-44","3xl:px-64"),xxl=(0,globals.ZP)("px-8","lg:px-36"),containerGutter=function containerGutter(gutter){return(0,globals.ZP)(base,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},sm,"sm"===gutter),smAlt,"smAlt"===gutter),lg,"lg"===gutter),lgV2,"lgV2"===gutter),xlg,"xlg"===gutter),xlgAlt,"xlgAlt"===gutter),xxl,"xxl"===gutter),"","none"===gutter))},containerWrapper=function containerWrapper(wrapper){return(0,globals.ZP)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({"lg:mx-auto":"center"===(null==wrapper?void 0:wrapper.align)},"max-w-size-1216","1216"===(null==wrapper?void 0:wrapper.maxWidth)),"max-w-size-1246","1246"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1280px]","1280"===(null==wrapper?void 0:wrapper.maxWidth)),"lg:max-w-[1600px]","1600"===(null==wrapper?void 0:wrapper.maxWidth)))},__jsx=react.createElement,Container=function Container(_ref){var gutter=_ref.gutter,children=_ref.children,containerStyles=_ref.containerStyles,id=_ref.id,style=_ref.style,wrappers=_ref.wrappers,_ref$tag=_ref.tag,tag=void 0===_ref$tag?"div":_ref$tag,props={id,style,className:containerGutter(gutter||"sm")+" "+containerWrapper(wrappers)+" "+(containerStyles||"")};return __jsx("section"===tag?"section":"div",props,children)};const components_Container=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{gutter:{defaultValue:null,description:"",name:"gutter",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"lgV2"'},{value:'"smAlt"'},{value:'"xlg"'},{value:'"xlgAlt"'},{value:'"xxl"'},{value:'"none"'}]}},containerStyles:{defaultValue:null,description:"",name:"containerStyles",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrappers:{defaultValue:null,description:"",name:"wrappers",required:!1,type:{name:"ContainerWrappers"}},tag:{defaultValue:{value:"div"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Container/index.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"components/Container/index.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}}}]);