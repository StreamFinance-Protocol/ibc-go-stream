"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5579],{4502:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(85893),t=i(11151);const s={title:"IBC Applications",sidebar_label:"IBC Applications",sidebar_position:1,slug:"/ibc/apps/apps"},a="IBC Applications",r={id:"ibc/apps/apps",title:"IBC Applications",description:"Learn how to build custom IBC application modules that enable packets to be sent to and received from other IBC-enabled chains.",source:"@site/versioned_docs/version-v5.4.x/01-ibc/03-apps/01-apps.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/apps",permalink:"/v5/ibc/apps/apps",draft:!1,unlisted:!1,tags:[],version:"v5.4.x",sidebarPosition:1,frontMatter:{title:"IBC Applications",sidebar_label:"IBC Applications",sidebar_position:1,slug:"/ibc/apps/apps"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/v5/ibc/integration"},next:{title:"Implement `IBCModule` interface and callbacks",permalink:"/v5/ibc/apps/ibcmodule"}},l={},c=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Working example",id:"working-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ibc-applications",children:"IBC Applications"}),"\n",(0,o.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,o.jsx)(n.p,{children:"Learn how to build custom IBC application modules that enable packets to be sent to and received from other IBC-enabled chains."})}),"\n",(0,o.jsx)(n.p,{children:"This document serves as a guide for developers who want to write their own Inter-blockchain Communication Protocol (IBC) applications for custom use cases."}),"\n",(0,o.jsxs)(n.p,{children:["Due to the modular design of the IBC protocol, IBC application developers do not need to concern themselves with the low-level details of clients, connections, and proof verification. Nevertheless, an overview of these low-level concepts can be found in ",(0,o.jsx)(n.a,{href:"/v5/ibc/overview",children:"the Overview section"}),".\nThe document goes into detail on the abstraction layer most relevant for application developers (channels and ports), and describes how to define your own custom packets, ",(0,o.jsx)(n.code,{children:"IBCModule"})," callbacks and more to make an application module IBC ready."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To have your module interact over IBC you must:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["implement the ",(0,o.jsx)(n.code,{children:"IBCModule"})," interface, i.e.:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"channel (opening) handshake callbacks"}),"\n",(0,o.jsx)(n.li,{children:"channel closing handshake callbacks"}),"\n",(0,o.jsx)(n.li,{children:"packet callbacks"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"bind to a port(s)"}),"\n",(0,o.jsx)(n.li,{children:"add keeper methods"}),"\n",(0,o.jsx)(n.li,{children:"define your own packet data and acknowledgement structs as well as how to encode/decode them"}),"\n",(0,o.jsx)(n.li,{children:"add a route to the IBC router"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following sections provide a more detailed explanation of how to write an IBC application\nmodule correctly corresponding to the listed steps."}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/v5/ibc/overview",children:"IBC Overview"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/v5/ibc/integration",children:"IBC default integration"})}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"working-example",children:"Working example"}),"\n",(0,o.jsxs)(n.p,{children:["For a real working example of an IBC application, you can look through the ",(0,o.jsx)(n.code,{children:"ibc-transfer"})," module\nwhich implements everything discussed in this section."]}),"\n",(0,o.jsx)(n.p,{children:"Here are the useful parts of the module to look at:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/genesis.go",children:"Binding to transfer\nport"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/relay.go",children:"Sending transfer\npackets"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/ibc_module.go",children:"Implementing IBC\ncallbacks"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var o=i(67294);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);