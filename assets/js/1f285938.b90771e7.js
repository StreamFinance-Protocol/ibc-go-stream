"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3189],{93592:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=i(85893),r=i(11151);const a={},o=void 0,s={id:"ibc/upgrades/intro",title:"intro",description:"Upgrading IBC Chains Overview",source:"@site/versioned_docs/version-v5.4.x/01-ibc/05-upgrades/00-intro.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/intro",permalink:"/v5/ibc/upgrades/intro",draft:!1,unlisted:!1,tags:[],version:"v5.4.x",sidebarPosition:0,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Integrating IBC middleware into a chain",permalink:"/v5/ibc/middleware/integration"},next:{title:"How to Upgrade IBC Chains and their Clients",permalink:"/v5/ibc/upgrades/quick-guide"}},c={},d=[{value:"Upgrading IBC Chains Overview",id:"upgrading-ibc-chains-overview",level:3}];function u(e){const n={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"upgrading-ibc-chains-overview",children:"Upgrading IBC Chains Overview"}),"\n",(0,t.jsx)(n.p,{children:"This directory contains information on how to upgrade an IBC chain without breaking counterparty clients and connections."}),"\n",(0,t.jsx)(n.p,{children:"IBC-connnected chains must be able to upgrade without breaking connections to other chains. Otherwise there would be a massive disincentive towards upgrading and disrupting high-value IBC connections, thus preventing chains in the IBC ecosystem from evolving and improving. Many chain upgrades may be irrelevant to IBC, however some upgrades could potentially break counterparty clients if not handled correctly. Thus, any IBC chain that wishes to perform a IBC-client-breaking upgrade must perform an IBC upgrade in order to allow counterparty clients to securely upgrade to the new light client."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/v5/ibc/upgrades/quick-guide",children:"quick-guide"})," describes how IBC-connected chains can perform client-breaking upgrades and how relayers can securely upgrade counterparty clients using the SDK."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/v5/ibc/upgrades/developer-guide",children:"developer-guide"})," is a guide for developers intending to develop IBC client implementations with upgrade functionality."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var t=i(67294);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);