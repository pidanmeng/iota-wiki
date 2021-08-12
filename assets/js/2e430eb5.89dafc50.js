"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4158],{60537:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={},p="Contributing",s={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Contributing",description:"If you want to contribute to this repository, consider posting a bug report, feature request or a pull request.",source:"@site/external/wasp/documentation/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/wasp/contribute",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wasp Publisher",permalink:"/wasp/misc/publisher"}},u=[{value:"Creating a Pull Request",id:"creating-a-pull-request",children:[]},{value:"Lint Setup",id:"lint-setup",children:[]}],c={toc:u};function g(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"If you want to contribute to this repository, consider posting a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/issues/new-issue"},"bug report"),", feature request or a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/pulls/"},"pull request"),"."),(0,i.kt)("p",null,"You can also join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"Discord server")," and ping us\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"#smartcontracts-dev"),"."),(0,i.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,i.kt)("p",null,"Please base your work on the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,i.kt)("p",null,"Before creating the Pull Request ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"all the tests pass:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go test -tags rocksdb ./...\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"there are no linting violations (instructions on how to setup linting below):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"golangci-lint run\n")))),(0,i.kt)("h2",{id:"lint-setup"},"Lint Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install golintci:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"https://golangci-lint.run/usage/install/#local-installation"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dev setup:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/integrations/#editor-integration"},"https://golangci-lint.run/usage/integrations/#editor-integration")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VSCode"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// required:\n"go.lintTool": "golangci-lint",\n// recommended:\n"go.lintOnSave": "package"\n"go.lintFlags": ["--fix"],\n"editor.formatOnSave": true,\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GoLand"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"install golintci plugin: ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/12496-go-linter"},"https://plugins.jetbrains.com/plugin/12496-go-linter")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"install plugin",src:n(46690).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"configure path for golangci"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"configue plugin",src:n(80912).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"add a golangci file watcher with custom command (I recommend using --fix)"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"watcher plugin",src:n(6560).Z})))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Other editors"),": please look into the ",(0,i.kt)("inlineCode",{parentName:"p"},"golangci")," official documentation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignoring false positives:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/false-positives/"},"https://golangci-lint.run/usage/false-positives/")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//nolint\n")),(0,i.kt)("p",{parentName:"li"},"for specific rules:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//nolint:golint,unused\n")))))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,f=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46690:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-1-6e97b6e4c7df17ea575c301aa7c51113.png"},80912:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-2-d3eb0f9e4810e1dd3abd093a1ef4f3fc.png"},6560:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-3-743934a7d30130bd2a92f1ad024544be.png"}}]);