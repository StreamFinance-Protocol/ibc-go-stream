"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2672],{48330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var i=n(85893),l=n(11151);const c={title:"ClientState",sidebar_label:"ClientState",sidebar_position:3,slug:"/ibc/light-clients/localhost/client-state"},o="ClientState",s={id:"light-clients/localhost/client-state",title:"ClientState",description:"The 09-localhost ClientState maintains a single field used to track the latest sequence of the state machine i.e. the height of the blockchain.",source:"@site/docs/03-light-clients/02-localhost/03-client-state.md",sourceDirName:"03-light-clients/02-localhost",slug:"/ibc/light-clients/localhost/client-state",permalink:"/main/ibc/light-clients/localhost/client-state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"ClientState",sidebar_label:"ClientState",sidebar_position:3,slug:"/ibc/light-clients/localhost/client-state"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/main/ibc/light-clients/localhost/integration"},next:{title:"Connection",permalink:"/main/ibc/light-clients/localhost/connection"}},a={},h=[{value:"Client updates",id:"client-updates",level:2}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"clientstate",children:(0,i.jsx)(t.code,{children:"ClientState"})}),"\n",(0,i.jsxs)(t.p,{children:["The 09-localhost ",(0,i.jsx)(t.code,{children:"ClientState"})," maintains a single field used to track the latest sequence of the state machine i.e. the height of the blockchain."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type ClientState struct {\n  // the latest height of the blockchain\n  LatestHeight clienttypes.Height\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The 09-localhost ",(0,i.jsx)(t.code,{children:"ClientState"})," is instantiated in the ",(0,i.jsx)(t.code,{children:"InitGenesis"})," handler of the 02-client submodule in core IBC.\nIt calls ",(0,i.jsx)(t.code,{children:"CreateLocalhostClient"}),", declaring a new ",(0,i.jsx)(t.code,{children:"ClientState"})," and initializing it with its own client prefixed store."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func (k Keeper) CreateLocalhostClient(ctx sdk.Context) error {\n  var clientState localhost.ClientState\n  return clientState.Initialize(ctx, k.cdc, k.ClientStore(ctx, exported.LocalhostClientID), nil)\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to disable the localhost client by removing the ",(0,i.jsx)(t.code,{children:"09-localhost"})," entry from the ",(0,i.jsx)(t.code,{children:"allowed_clients"})," list through governance."]}),"\n",(0,i.jsx)(t.h2,{id:"client-updates",children:"Client updates"}),"\n",(0,i.jsxs)(t.p,{children:["The latest height is updated periodically through the ABCI ",(0,i.jsx)(t.a,{href:"https://docs.cosmos.network/v0.47/building-modules/beginblock-endblock",children:(0,i.jsx)(t.code,{children:"BeginBlock"})})," interface of the 02-client submodule in core IBC."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v8.1.1/modules/core/02-client/abci.go#L12",children:["See ",(0,i.jsx)(t.code,{children:"BeginBlocker"})," in abci.go."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func BeginBlocker(ctx sdk.Context, k keeper.Keeper) {\n  // ...\n\n  if clientState, found := k.GetClientState(ctx, exported.Localhost); found {\n    if k.GetClientStatus(ctx, clientState, exported.Localhost) == exported.Active {\n      k.UpdateLocalhostClient(ctx, clientState)\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The above calls into the 09-localhost ",(0,i.jsx)(t.code,{children:"UpdateState"})," method of the ",(0,i.jsx)(t.code,{children:"ClientState"})," .\nIt retrieves the current block height from the application context and sets the ",(0,i.jsx)(t.code,{children:"LatestHeight"})," of the 09-localhost client."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func (cs ClientState) UpdateState(ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore, clientMsg exported.ClientMessage) []exported.Height {\n  height := clienttypes.GetSelfHeight(ctx)\n  cs.LatestHeight = height\n\n  clientStore.Set(host.ClientStateKey(), clienttypes.MustMarshalClientState(cdc, &cs))\n\n  return []exported.Height{height}\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that the 09-localhost ",(0,i.jsx)(t.code,{children:"ClientState"})," is not updated through the 02-client interface leveraged by conventional IBC light clients."]})]})}function d(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(67294);const l={},c=i.createContext(l);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);