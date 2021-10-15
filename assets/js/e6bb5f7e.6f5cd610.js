"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96008],{56307:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return d},default:function(){return f}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=n(31137),s=n(71871),l=["components"],u={},c="Colored Tokens and Time Locks",h={unversionedId:"guide/schema/timelock",id:"guide/schema/timelock",isDocsHomePage:!1,title:"Colored Tokens and Time Locks",description:"Let's examine some less commonly used member functions of the SoloContext. We will switch",source:"@site/external/wasp/documentation/docs/guide/schema/timelock.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/timelock",permalink:"/wasp/guide/schema/timelock",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example Tests",permalink:"/wasp/guide/schema/examples"},next:{title:"EVM/Solidity based smart contracts",permalink:"/wasp/guide/evm/introduction"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colored-tokens-and-time-locks"},"Colored Tokens and Time Locks"),(0,r.kt)("p",null,"Let's examine some less commonly used member functions of the SoloContext. We will switch\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"fairauction")," example to show their usage. Here is the startAuction()\nfunction of the fairauction test suite:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    auctioneer *wasmsolo.SoloAgent\n    tokenColor wasmlib.ScColor\n)\n\nfunc startAuction(t *testing.T) *wasmsolo.SoloContext {\n    ctx := wasmsolo.NewSoloContract(t, fairauction.ScName, fairauction.OnLoad)\n\n    // set up auctioneer account and mint some tokens to auction off\n    auctioneer = ctx.NewSoloAgent()\n    tokenColor, ctx.Err = auctioneer.Mint(10)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, solo.Saldo-10, auctioneer.Balance())\n    require.EqualValues(t, 10, auctioneer.Balance(tokenColor))\n\n    // start the auction\n    sa := fairauction.ScFuncs.StartAuction(ctx.Sign(auctioneer))\n    sa.Params.Color().SetValue(tokenColor)\n    sa.Params.MinimumBid().SetValue(500)\n    sa.Params.Description().SetValue("Cool tokens for sale!")\n    transfer := ctx.Transfer()\n    transfer.Set(wasmlib.IOTA, 25) // deposit, must be >=minimum*margin\n    transfer.Set(tokenColor, 10) // the tokens to auction\n    sa.Func.Transfer(transfer).Post()\n    require.NoError(t, ctx.Err)\n    return ctx\n}\n')))),(0,r.kt)("p",null,"The function first sets up the SoloContext as usual, and then it performs quite a bit of\nextra work. This is because we want the startAuction() function to start an auction, so\nthat the tests that subsequently use startAuction() can then focus on testing all kinds of\nbidding and auction results."),(0,r.kt)("p",null,"First, we're going to need an agent that functions as the ",(0,r.kt)("inlineCode",{parentName:"p"},"auctioneer"),". This auctioneer\nwill auction off some colored tokens. To provide the auctioneer with colored tokens we use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Mint()")," method to convert 10 of his plain iota tokens into colored tokens. The mint\nprocess will assign the color value, which is equal to the hash of the Tangle transaction\nthat minted them. We save the resulting ScColor value in ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenColor"),". Note that both\n",(0,r.kt)("inlineCode",{parentName:"p"},"auctioneer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenColor")," are global variables that are accessible by any test that\nneeds them."),(0,r.kt)("p",null,"Next we check that no error occurred during the minting process, and then we verify that\nthe auctioneer now has 10 less plain iota and also has a balance of 10 tokens with the\nsaved token color in its address. Notice how we use the same Balance() method to retrieve\nboth balances. When the token color parameter is omitted, the Balance() method defaults to\nreturning the balance of plain iotas in the address."),(0,r.kt)("p",null,"Now we are going to start the auction by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"startAuction")," function of the\nfairauction contract. We get the function descriptor in the usual way, but we also call\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign()")," method of the SoloContext to make sure that the transaction we're about to\npost takes its tokens from the auctioneer address and signs the transaction with the\ncorresponding private key. Very often you don't care who posts a request, and we have set\nit up for you in such a way that by default tokens come from the chain originator address,\nwhich has been seeded with tokens just for this occasion. But whenever it is important\nwhere the tokens come from, or who invokes the request, you need to specify the agent\ninvolved by using the Sign() method."),(0,r.kt)("p",null,"Next we set up the function parameters as usual. Note how we pass the saved tokenColor for\nexample. After the parameters have been set up we see something new happening. We create\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," proxy and initialize it with the 25 iota that we need to deposit plus the 10\ntokens of the saved tokenColor that we are auctioning. Next we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer()")," method\nto pass this proxy before posting the request. This is exactly how we would do it from\nwithin the smart contract code. We have a shorthand function called TransferIotas() that\ncan be used instead when all you need to transfer is plain iotas and which encapsulates\nthe creation of the Transfer proxy and the initialization with the required amount of\niotas."),(0,r.kt)("p",null,"Finally, we make sure there was no error while posting the request and return the\nSoloContext. That concludes the startAuction() function."),(0,r.kt)("p",null,"Here is the first test function that uses our startAuction() function:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestFaStartAuction(t *testing.T) {\n    ctx := startAuction(t)\n\n    // note 1 iota should be stuck in the delayed finalize_auction\n    require.EqualValues(t, 25-1, ctx.Balance(nil))\n    require.EqualValues(t, 10, ctx.Balance(nil, tokenColor))\n\n    // auctioneer sent 25 deposit + 10 tokenColor\n    require.EqualValues(t, solo.Saldo-25-10, auctioneer.Balance())\n    require.EqualValues(t, 0, auctioneer.Balance(tokenColor))\n    require.EqualValues(t, 0, ctx.Balance(auctioneer))\n\n    // remove pending finalize_auction from backlog\n    ctx.AdvanceClockBy(61 * time.Minute)\n    require.True(t, ctx.WaitForPendingRequests(1))\n}\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"startAuction")," function of the smart contract will have posted a time-locked request\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"finalizeAuction")," function by using the Delay() method. This request needed 1 iota\nfor the request, but the request is still 'in transit' until it is unlocked. We can verify\nthe contract balance after the transfer of 25 iota plus 10 colorToken, minus the 1 iota\nstill locked. Note how we again have an account Balance() method where the color parameter\ncan be omitted, in which case it defaults to the account balance of plain iotas."),(0,r.kt)("p",null,"We also verify the address balance of the auctioneer after sending the startAuction\nrequest. And double-check that no tokens ended up in his contract account."),(0,r.kt)("p",null,"The final 2 lines of the code are used to remove the pending ",(0,r.kt)("inlineCode",{parentName:"p"},"finalizeAuction")," request\nfrom the backlog. First we move the logical clock forward to a point when that request is\nsupposed to have triggered. Then we wait for this request to actually be processed. Note\nthat this will happen in a separate goroutine in the background, so we explicitly wait for\nthe request counters to catch up with the one request that is pending."),(0,r.kt)("p",null,"The WaitForPendingRequests() method can also be used whenever a smart contract function is\nknown to Post() a request to itself. Such requests are not immediately executed, but added\nto the backlog. So you need to wait for these pending requests to actually be processed.\nThe advantage here is that you can inspect the in-between state, which means that you can\ntest even a function that posts a request in isolation."))}f.isMDXComponent=!0},71871:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294),a=n(54179);var r=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,h=e.groupId,d=e.className,p=o.Children.toArray(e.children),f=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=u?u:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,k=r(),g=k.tabGroupChoices,w=k.setTabGroupChoices,b=(0,o.useState)(m),v=b[0],y=b[1],x=[];if(null!=h){var C=g[h];null!=C&&C!==v&&f.some((function(e){return e.value===C}))&&y(C)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),o=f[n].value;y(o),null!=h&&(w(h,o),setTimeout((function(){var e,n,o,a,r,i,s,u;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,r=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&r<=u&&a<=s&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=x.indexOf(e.target)+1;n=x[o]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,o.cloneElement)(p.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},54179:function(e,t,n){var o=(0,n(67294).createContext)(void 0);t.Z=o},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86010:function(e,t,n){function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);