"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97860],{51492:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=t(87462),r=t(63366),c=(t(67294),t(3905)),l=t(76018),s=t(71871),u=["components"],i={keywords:["descriptor","view","access","contract functions","schema tool"],description:"The schema tool provides us with an easy way to access to smart contract functions through function descriptors, which allow you to initiate the function by calling it synchronously, or posting a request to run it asynchronously.",image:"/img/logo/WASP_logo_dark.png"},o="Function Descriptors",m={unversionedId:"guide/schema/funcdesc",id:"guide/schema/funcdesc",title:"Function Descriptors",description:"The schema tool provides us with an easy way to access to smart contract functions through function descriptors, which allow you to initiate the function by calling it synchronously, or posting a request to run it asynchronously.",source:"@site/external/wasp/documentation/docs/guide/schema/funcdesc.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcdesc",permalink:"/smart-contracts/guide/schema/funcdesc",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/funcdesc.mdx",tags:[],version:"current",frontMatter:{keywords:["descriptor","view","access","contract functions","schema tool"],description:"The schema tool provides us with an easy way to access to smart contract functions through function descriptors, which allow you to initiate the function by calling it synchronously, or posting a request to run it asynchronously.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Token Transfers",permalink:"/smart-contracts/guide/schema/transfers"},next:{title:"Calling Functions",permalink:"/smart-contracts/guide/schema/call"}},p=[],f={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,u);return(0,c.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"function-descriptors"},"Function Descriptors"),(0,c.kt)("p",null,"The schema tool provides us with an easy way to access to smart contract functions through\n",(0,c.kt)("em",{parentName:"p"},"function descriptors"),". These are structures that provide access to the optional params\nand result maps through strict compile-time checked interfaces. They will also allow you\nto initiate the function by calling it ",(0,c.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"synchronously"),", or posting a request to\nrun it ",(0,c.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/post"},"asynchronously"),"."),(0,c.kt)("p",null,"The schema tool will generate a specific function descriptor for each func and view. It\nwill also generate an interface called ScFuncs, that can be used to create and initialize\neach function descriptor. Here is the code generated for the ",(0,c.kt)("inlineCode",{parentName:"p"},"dividend")," example\nin ",(0,c.kt)("inlineCode",{parentName:"p"},"contract.xx"),":"),(0,c.kt)(l.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,c.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package dividend\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib"\n\ntype DivideCall struct {\n    Func *wasmlib.ScFunc\n}\n\ntype InitCall struct {\n    Func   *wasmlib.ScInitFunc\n    Params MutableInitParams\n}\n\ntype MemberCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableMemberParams\n}\n\ntype SetOwnerCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableSetOwnerParams\n}\n\ntype GetFactorCall struct {\n    Func    *wasmlib.ScView\n    Params  MutableGetFactorParams\n    Results ImmutableGetFactorResults\n}\n\ntype GetOwnerCall struct {\n    Func    *wasmlib.ScView\n    Results ImmutableGetOwnerResults\n}\n\ntype Funcs struct{}\n\nvar ScFuncs Funcs\n\nfunc (sc Funcs) Divide(ctx wasmlib.ScFuncCallContext) *DivideCall {\n    return &DivideCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncDivide)}\n}\n\nfunc (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {\n    f := &InitCall{Func: wasmlib.NewScInitFunc(ctx, HScName, HFuncInit, keyMap[:], idxMap[:])}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) Member(ctx wasmlib.ScFuncCallContext) *MemberCall {\n    f := &MemberCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMember)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) SetOwner(ctx wasmlib.ScFuncCallContext) *SetOwnerCall {\n    f := &SetOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetOwner)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) GetFactor(ctx wasmlib.ScViewCallContext) *GetFactorCall {\n    f := &GetFactorCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetFactor)}\n    f.Func.SetPtrs(&f.Params.id, &f.Results.id)\n    return f\n}\n\nfunc (sc Funcs) GetOwner(ctx wasmlib.ScViewCallContext) *GetOwnerCall {\n    f := &GetOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetOwner)}\n    f.Func.SetPtrs(nil, &f.Results.id)\n    return f\n}\n'))),(0,c.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ptr;\n\nuse wasmlib::*;\n\nuse crate::consts::*;\nuse crate::params::*;\nuse crate::results::*;\n\npub struct DivideCall {\n    pub func: ScFunc,\n}\n\npub struct InitCall {\n    pub func:   ScFunc,\n    pub params: MutableInitParams,\n}\n\npub struct MemberCall {\n    pub func:   ScFunc,\n    pub params: MutableMemberParams,\n}\n\npub struct SetOwnerCall {\n    pub func:   ScFunc,\n    pub params: MutableSetOwnerParams,\n}\n\npub struct GetFactorCall {\n    pub func:    ScView,\n    pub params:  MutableGetFactorParams,\n    pub results: ImmutableGetFactorResults,\n}\n\npub struct ScFuncs {\n}\n\nimpl ScFuncs {\n    pub fn divide(_ctx: & dyn ScFuncCallContext) -> DivideCall {\n        DivideCall {\n            func: ScFunc::new(HSC_NAME, HFUNC_DIVIDE),\n        }\n    }\n    pub fn init(_ctx: & dyn ScFuncCallContext) -> InitCall {\n        let mut f = InitCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_INIT),\n            params: MutableInitParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn member(_ctx: & dyn ScFuncCallContext) -> MemberCall {\n        let mut f = MemberCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_MEMBER),\n            params: MutableMemberParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn set_owner(_ctx: & dyn ScFuncCallContext) -> SetOwnerCall {\n        let mut f = SetOwnerCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_SET_OWNER),\n            params: MutableSetOwnerParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn get_factor(_ctx: & dyn ScViewCallContext) -> GetFactorCall {\n        let mut f = GetFactorCall {\n            func:    ScView::new(HSC_NAME, HVIEW_GET_FACTOR),\n            params:  MutableGetFactorParams { id: 0 },\n            results: ImmutableGetFactorResults { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);\n        f\n    }\n}\n"))),(0,c.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib"\nimport * as sc from "./index";\n\nexport class DivideCall {\n    func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncDivide);\n}\n\nexport class InitCall {\n    func: wasmlib.ScInitFunc = new wasmlib.ScInitFunc(sc.HScName, sc.HFuncInit);\n    params: sc.MutableInitParams = new sc.MutableInitParams();\n}\n\nexport class MemberCall {\n    func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncMember);\n    params: sc.MutableMemberParams = new sc.MutableMemberParams();\n}\n\nexport class SetOwnerCall {\n    func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncSetOwner);\n    params: sc.MutableSetOwnerParams = new sc.MutableSetOwnerParams();\n}\n\nexport class GetFactorCall {\n    func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewGetFactor);\n    params: sc.MutableGetFactorParams = new sc.MutableGetFactorParams();\n    results: sc.ImmutableGetFactorResults = new sc.ImmutableGetFactorResults();\n}\n\nexport class GetOwnerCall {\n    func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewGetOwner);\n    results: sc.ImmutableGetOwnerResults = new sc.ImmutableGetOwnerResults();\n}\n\nexport class ScFuncs {\n    static divide(ctx: wasmlib.ScFuncCallContext): DivideCall {\n        let f = new DivideCall();\n        return f;\n    }\n\n    static init(ctx: wasmlib.ScFuncCallContext): InitCall {\n        let f = new InitCall();\n        f.func.setPtrs(f.params, null);\n        return f;\n    }\n\n    static member(ctx: wasmlib.ScFuncCallContext): MemberCall {\n        let f = new MemberCall();\n        f.func.setPtrs(f.params, null);\n        return f;\n    }\n\n    static setOwner(ctx: wasmlib.ScFuncCallContext): SetOwnerCall {\n        let f = new SetOwnerCall();\n        f.func.setPtrs(f.params, null);\n        return f;\n    }\n\n    static getFactor(ctx: wasmlib.ScViewCallContext): GetFactorCall {\n        let f = new GetFactorCall();\n        f.func.setPtrs(f.params, f.results);\n        return f;\n    }\n\n    static getOwner(ctx: wasmlib.ScViewCallContext): GetOwnerCall {\n        let f = new GetOwnerCall();\n        f.func.setPtrs(null, f.results);\n        return f;\n    }\n}\n')))),(0,c.kt)("p",null,"As you can see a struct has been generated for each of the funcs and views. The structs\nonly provide access to ",(0,c.kt)("inlineCode",{parentName:"p"},"params")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"results")," when these are specified for the function.\nEach struct has a ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member that can be used to initiate the function call in certain\nways. The ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member will be of type ScFunc or ScView, depending on whether the\nfunction is a func or a view."),(0,c.kt)("p",null,"The ScFuncs struct provides a member function for each func or view that will create their\nrespective function descriptor, initialize it properly, and returns it."),(0,c.kt)("p",null,"In the next section we will look at how to use function descriptors to\n",(0,c.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"call a smart contract function synchronously"),"."))}d.isMDXComponent=!0},71871:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(87462),r=t(67294),c=t(5730),l=t(12829),s=t(86010),u="tabItem_LplD";function i(e){var n,t,c,i=e.lazy,o=e.block,m=e.defaultValue,p=e.values,f=e.groupId,d=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.lx)(w,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(c=b[0])?void 0:c.props.value;if(null!==v&&!w.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,l.UB)(),F=C.tabGroupChoices,S=C.setTabGroupChoices,y=(0,r.useState)(v),g=y[0],x=y[1],O=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var k=F[f];null!=k&&k!==g&&w.some((function(e){return e.value===k}))&&x(k)}var P=function(e){var n=e.currentTarget,t=O.indexOf(n),a=w[t].value;a!==g&&(N(n),x(a),null!=f&&S(f,a))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},d)},w.map((function(e){var n=e.value,t=e.label,c=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:function(e){return O.push(e)},onKeyDown:M,onFocus:P,onClick:P},c,{className:(0,s.Z)("tabs__item",u,null==c?void 0:c.className,{"tabs__item--active":g===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}function o(e){var n=(0,c.Z)();return r.createElement(i,(0,a.Z)({key:String(n)},e))}},3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=i(t),f=r,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||c;return t?a.createElement(d,l(l({ref:n},o),{},{components:t})):a.createElement(d,l({ref:n},o))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<c;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);