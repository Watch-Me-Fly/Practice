"use strict";(self.webpackChunkovrsea_whatsapp_tuto=self.webpackChunkovrsea_whatsapp_tuto||[]).push([[4825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Step 7: Caching with Apollo-Client",sidebar_position:7},l="Step 7: Caching with Apollo-Client",i={unversionedId:"tuto-whatsapp/step7",id:"version-1.1.0/tuto-whatsapp/step7",title:"Step 7: Caching with Apollo-Client",description:"[//]: # (head-end)",source:"@site/versioned_docs/version-1.1.0/tuto-whatsapp/step7.md",sourceDirName:"tuto-whatsapp",slug:"/tuto-whatsapp/step7",permalink:"/docs/tuto-whatsapp/step7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.1.0/tuto-whatsapp/step7.md",tags:[],version:"1.1.0",sidebarPosition:7,frontMatter:{sidebar_label:"Step 7: Caching with Apollo-Client",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Step 6: Creating an app router and implementing a chat room",permalink:"/docs/tuto-whatsapp/step6"},next:{title:"Step 8: Sending messages with GraphQL mutations",permalink:"/docs/tuto-whatsapp/step8"}},s={},c=[{value:"<strong>Client</strong> Step 7.1: Add Apollo client",id:"client-step-71-add-apollo-client",level:4},{value:"Added src/client.ts",id:"added-srcclientts",level:5},{value:"<strong>Client</strong> Step 7.2: Provide Apollo client",id:"client-step-72-provide-apollo-client",level:4},{value:"Changed src/index.tsx",id:"changed-srcindextsx",level:5},{value:"<strong>Client</strong> Step 7.3: Replace fetch() calls with Apollo useQuery()",id:"client-step-73-replace-fetch-calls-with-apollo-usequery",level:4},{value:"Changed src/components/ChatRoomScreen/index.tsx",id:"changed-srccomponentschatroomscreenindextsx",level:5},{value:"Changed src/components/ChatsListScreen/ChatsList.tsx",id:"changed-srccomponentschatslistscreenchatslisttsx",level:5}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-7-caching-with-apollo-client"},"Step 7: Caching with Apollo-Client"),(0,o.kt)("p",null,"In the previous step we've implemented a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatRoomScreen")," where we were able to view each chat's messages list by clicking on a chat item from the main screen.\nIt all looks functional, however, there's a significant optimization issue - each time we navigate into a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatRoomScreen"),",\nwe need to re-fetch the data related to the target chat."),(0,o.kt)("p",null,"The solution for that would be ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_(computing)"},"caching")," the fetch result,\nso it can be re-used once we re-enter a screen that we've visited before.\nFor now things are fairly simple so the caching mechanism can be implemented manually,\nbut things are gonna get tougher when we add more queries or things like message sending and profile updating to the mix,\nso it's not gonna be an easy task."),(0,o.kt)("p",null,"Luckily, in the Apollo team they've invented a solution that works right out of the box and integrates perfectly with Apollo-GraphQL server - ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link/#apollo-client"},"Apollo-GraphQL client"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54871150-f505e100-4dea-11e9-9e2d-439fbf3eaebe.png",alt:"caching"})),(0,o.kt)("p",null,"Apollo-Client is a wrap around our GraphQL endpoint which essentially uses HTTP requests (and further on ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"web-sockets"),", but we will get there), something that we've implemented manually so far.\nNot only it can be used to fetch data, but it will also cache the result of the query so it can be seamlessly re-used when we request the same data.\nThis means that we will need to setup an Apollo-Client and replace all our ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," calls with ",(0,o.kt)("inlineCode",{parentName:"p"},"client.query()")," call.\nMore about Apollo-Client's API further in this tutorial, but let's start configuring it.\nFirst we will install few essential NPM packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add apollo-client apollo-cache-inmemory apollo-link apollo-link-http\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/apollo-client"},(0,o.kt)("inlineCode",{parentName:"a"},"apollo-client"))," - Apollo-Client's core package, as we explained earlier."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/apollo-cache-inmemory"},(0,o.kt)("inlineCode",{parentName:"a"},"apollo-cache-inmemory"))," - The data store that will be used to cache the results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/apollo-link-http"},(0,o.kt)("inlineCode",{parentName:"a"},"apollo-link-http"))," - Get GraphQL results over a network using HTTP fetch.")),(0,o.kt)("p",null,"We will create a new file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"client.ts")," and inside we will export the client:"),(0,o.kt)("h4",{id:"client-step-71-add-apollo-client"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/f18e4243484831cfd317007bfb8562c5c16a999c"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 7.1: Add Apollo client")),(0,o.kt)("h5",{id:"added-srcclientts"},"Added src","/","client.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -0,0 +1,16 @@\n+\u250a  \u250a 1\u250aimport { InMemoryCache } from 'apollo-cache-inmemory';\n+\u250a  \u250a 2\u250aimport { ApolloClient } from 'apollo-client';\n+\u250a  \u250a 3\u250aimport { HttpLink } from 'apollo-link-http';\n+\u250a  \u250a 4\u250a\n+\u250a  \u250a 5\u250aconst httpUri = process.env.REACT_APP_SERVER_URL + '/graphql';\n+\u250a  \u250a 6\u250a\n+\u250a  \u250a 7\u250aconst httpLink = new HttpLink({\n+\u250a  \u250a 8\u250a  uri: httpUri,\n+\u250a  \u250a 9\u250a});\n+\u250a  \u250a10\u250a\n+\u250a  \u250a11\u250aconst inMemoryCache = new InMemoryCache();\n+\u250a  \u250a12\u250a\n+\u250a  \u250a13\u250aexport default new ApolloClient({\n+\u250a  \u250a14\u250a  link: httpLink,\n+\u250a  \u250a15\u250a  cache: inMemoryCache,\n+\u250a  \u250a16\u250a});\n")),(0,o.kt)("p",null,"Although the client can be used directly and integrated into any UI framework, it would be the most comfortable to use a wrap around it which is suitable for React.\nFor that we will use Apollo's React Hooks package called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/react-apollo"},(0,o.kt)("inlineCode",{parentName:"a"},"@apollo/react-hooks"))," which includes a set of\n",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hooks")," that can connect between our Apollo-Client and target React.Component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add @apollo/react-hooks@3.1.5 graphql-tag graphql@15.0.0\n")),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"@apollo/react-hooks")," we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery()")," hook to fetch data from our GraphQL API.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tag")," package is used to parse the GraphQL string to an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"AST"),",\nsomething which is required when using Apollo Client. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import gql from 'graphql-tag';\nimport { useQuery } from '@apollo/react-hooks';\n\nconst GET_DOGS = gql`\n  {\n    dogs {\n      id\n      breed\n    }\n  }\n`;\n\nconst Dogs = () => {\n  const { data, error, loading } = useQuery(GET_DOGS);\n  if (loading) {\n    return <div>Loading...</div>;\n  };\n  if (error) {\n    return <div>Error! {error.message}</div>;\n  };\n\n  return (\n    <ul>\n      {data.dogs.map(dog => (\n        <li key={dog.id}>{dog.breed}</li>\n      ))}\n    </ul>\n  );\n};\n")),(0,o.kt)("p",null,"The package requires a small setup so that imported hooks can use our Apollo-Client:"),(0,o.kt)("h4",{id:"client-step-72-provide-apollo-client"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/aa22ee7ebd64728566cd1e49dad44261fec9cb30"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 7.2: Provide Apollo client")),(0,o.kt)("h5",{id:"changed-srcindextsx"},"Changed src","/","index.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,8 +1,10 @@\n \u250a 1\u250a 1\u250aimport { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';\n \u250a 2\u250a 2\u250aimport React from 'react';\n \u250a 3\u250a 3\u250aimport ReactDOM from 'react-dom';\n+\u250a  \u250a 4\u250aimport { ApolloProvider } from '@apollo/react-hooks';\n \u250a 4\u250a 5\u250aimport './index.css';\n \u250a 5\u250a 6\u250aimport App from './App';\n+\u250a  \u250a 7\u250aimport client from './client';\n \u250a 6\u250a 8\u250aimport * as serviceWorker from './serviceWorker';\n \u250a 7\u250a 9\u250a\n \u250a 8\u250a10\u250aconst theme = createMuiTheme({\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -15,7 +17,9 @@\n \u250a15\u250a17\u250aReactDOM.render(\n \u250a16\u250a18\u250a  <React.StrictMode>\n \u250a17\u250a19\u250a    <MuiThemeProvider theme={theme}>\n-\u250a18\u250a  \u250a      <App />\n+\u250a  \u250a20\u250a      <ApolloProvider client={client}>\n+\u250a  \u250a21\u250a        <App />\n+\u250a  \u250a22\u250a      </ApolloProvider>\n \u250a19\u250a23\u250a    </MuiThemeProvider>\n \u250a20\u250a24\u250a  </React.StrictMode>,\n \u250a21\u250a25\u250a  document.getElementById('root')\n")),(0,o.kt)("p",null,"The code above uses the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"Context/Provider")," API, thus the client is now known globally.\nNow that we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery()")," hook, there's no need to use the native Fetch API anymore.\nLet's replace all our Fetch API call instances with a React hook:"),(0,o.kt)("h4",{id:"client-step-73-replace-fetch-calls-with-apollo-usequery"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/c91111920eecedecfbd1b5d9fdf45c8ad880c644"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 7.3: Replace fetch() calls with Apollo useQuery()")),(0,o.kt)("h5",{id:"changed-srccomponentschatroomscreenindextsx"},"Changed src","/","components","/","ChatRoomScreen","/","index.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,5 +1,7 @@\n+\u250a \u250a1\u250aimport gql from 'graphql-tag';\n \u250a1\u250a2\u250aimport React from 'react';\n-\u250a2\u250a \u250aimport { useCallback, useMemo, useState } from 'react';\n+\u250a \u250a3\u250aimport { useCallback } from 'react';\n+\u250a \u250a4\u250aimport { useApolloClient, useQuery } from '@apollo/react-hooks';\n \u250a3\u250a5\u250aimport styled from 'styled-components';\n \u250a4\u250a6\u250aimport ChatNavbar from './ChatNavbar';\n \u250a5\u250a7\u250aimport MessageInput from './MessageInput';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -13,7 +15,7 @@\n \u250a13\u250a15\u250a  height: 100vh;\n \u250a14\u250a16\u250a`;\n \u250a15\u250a17\u250a\n-\u250a16\u250a  \u250aconst getChatQuery = `\n+\u250a  \u250a18\u250aconst getChatQuery = gql`\n \u250a17\u250a19\u250a  query GetChat($chatId: ID!) {\n \u250a18\u250a20\u250a    chat(chatId: $chatId) {\n \u250a19\u250a21\u250a      id\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -52,24 +54,11 @@\n \u250a53\u250a55\u250a  chatId,\n \u250a54\u250a56\u250a}) => {\n-\u250a55\u250a  \u250a  const [chat, setChat] = useState<OptionalChatQueryResult>(null);\n-\u250a56\u250a  \u250a\n-\u250a57\u250a  \u250a  useMemo(async () => {\n-\u250a58\u250a  \u250a    const body = await fetch(`${process.env.REACT_APP_SERVER_URL}/graphql`, {\n-\u250a59\u250a  \u250a      method: 'POST',\n-\u250a60\u250a  \u250a      headers: {\n-\u250a61\u250a  \u250a        'Content-Type': 'application/json',\n-\u250a62\u250a  \u250a      },\n-\u250a63\u250a  \u250a      body: JSON.stringify({\n-\u250a64\u250a  \u250a        query: getChatQuery,\n-\u250a65\u250a  \u250a        variables: { chatId },\n-\u250a66\u250a  \u250a      }),\n-\u250a67\u250a  \u250a    });\n-\u250a68\u250a  \u250a    const {\n-\u250a69\u250a  \u250a      data: { chat },\n-\u250a70\u250a  \u250a    } = await body.json();\n-\u250a71\u250a  \u250a    setChat(chat);\n-\u250a72\u250a  \u250a  }, [chatId]);\n+\u250a  \u250a57\u250a  const client = useApolloClient();\n+\u250a  \u250a58\u250a  const { data } = useQuery<any>(getChatQuery, {\n+\u250a  \u250a59\u250a    variables: { chatId },\n+\u250a  \u250a60\u250a  });\n+\u250a  \u250a61\u250a  const chat = data?.chat;\n \u250a73\u250a62\u250a\n \u250a74\u250a63\u250a  const onSendMessage = useCallback(\n \u250a75\u250a64\u250a    (content: string) => {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -79,14 +68,21 @@\n \u250a79\u250a68\u250a        id: (chat.messages.length + 10).toString(),\n \u250a80\u250a69\u250a        createdAt: new Date(),\n \u250a81\u250a70\u250a        content,\n+\u250a  \u250a71\u250a        __typename: 'Chat',\n \u250a82\u250a72\u250a      };\n \u250a83\u250a73\u250a\n-\u250a84\u250a  \u250a      setChat({\n-\u250a85\u250a  \u250a        ...chat,\n-\u250a86\u250a  \u250a        messages: chat.messages.concat(message),\n+\u250a  \u250a74\u250a      client.writeQuery({\n+\u250a  \u250a75\u250a        query: getChatQuery,\n+\u250a  \u250a76\u250a        variables: { chatId },\n+\u250a  \u250a77\u250a        data: {\n+\u250a  \u250a78\u250a          chat: {\n+\u250a  \u250a79\u250a            ...chat,\n+\u250a  \u250a80\u250a            messages: chat.messages.concat(message),\n+\u250a  \u250a81\u250a          },\n+\u250a  \u250a82\u250a        },\n \u250a87\u250a83\u250a      });\n \u250a88\u250a84\u250a    },\n-\u250a89\u250a  \u250a    [chat]\n+\u250a  \u250a85\u250a    [chat, chatId, client]\n \u250a90\u250a86\u250a  );\n \u250a91\u250a87\u250a\n \u250a92\u250a88\u250a  if (!chat) return null;\n")),(0,o.kt)("h5",{id:"changed-srccomponentschatslistscreenchatslisttsx"},"Changed src","/","components","/","ChatsListScreen","/","ChatsList.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -2,8 +2,10 @@\n \u250a 2\u250a 2\u250aimport moment from 'moment';\n \u250a 3\u250a 3\u250aimport { List, ListItem } from '@material-ui/core';\n \u250a 4\u250a 4\u250aimport styled from 'styled-components';\n-\u250a 5\u250a  \u250aimport { useCallback, useState, useMemo } from 'react';\n+\u250a  \u250a 5\u250aimport { useCallback } from 'react';\n \u250a 6\u250a 6\u250aimport { useNavigate } from 'react-router-dom';\n+\u250a  \u250a 7\u250aimport gql from 'graphql-tag';\n+\u250a  \u250a 8\u250aimport { useQuery } from '@apollo/react-hooks';\n \u250a 7\u250a 9\u250a\n \u250a 8\u250a10\u250aconst Container = styled.div`\n \u250a 9\u250a11\u250a  height: calc(100% - 56px);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -57,7 +59,7 @@\n \u250a57\u250a59\u250a  font-size: 13px;\n \u250a58\u250a60\u250a`;\n \u250a59\u250a61\u250a\n-\u250a60\u250a  \u250aconst getChatsQuery = `\n+\u250a  \u250a62\u250aconst getChatsQuery = gql`\n \u250a61\u250a63\u250a  query GetChats {\n \u250a62\u250a64\u250a    chats {\n \u250a63\u250a65\u250a      id\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -77,21 +79,7 @@\n \u250a77\u250a79\u250a}\n \u250a78\u250a80\u250a\n \u250a79\u250a81\u250aconst ChatsList: React.FC = () => {\n-\u250a80\u250a  \u250a  const [chats, setChats] = useState<any[]>([]);\n-\u250a81\u250a  \u250a\n-\u250a82\u250a  \u250a  useMemo(async () => {\n-\u250a83\u250a  \u250a    const body = await fetch(`${process.env.REACT_APP_SERVER_URL}/graphql`, {\n-\u250a84\u250a  \u250a      method: 'POST',\n-\u250a85\u250a  \u250a      headers: {\n-\u250a86\u250a  \u250a        'Content-Type': 'application/json',\n-\u250a87\u250a  \u250a      },\n-\u250a88\u250a  \u250a      body: JSON.stringify({ query: getChatsQuery }),\n-\u250a89\u250a  \u250a    });\n-\u250a90\u250a  \u250a    const {\n-\u250a91\u250a  \u250a      data: { chats },\n-\u250a92\u250a  \u250a    } = await body.json();\n-\u250a93\u250a  \u250a    setChats(chats);\n-\u250a94\u250a  \u250a  }, []);\n+\u250a  \u250a82\u250a  const { data } = useQuery<any>(getChatsQuery);\n \u250a95\u250a83\u250a\n \u250a96\u250a84\u250a  const navToChat = useCallback(\n \u250a97\u250a85\u250a    (chat) => {\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'@@ -100,10 +88,15 @@\n \u250a100\u250a 88\u250a    [navigate]\n \u250a101\u250a 89\u250a  );\n \u250a102\u250a 90\u250a\n+\u250a   \u250a 91\u250a  if (data === undefined || data.chats === undefined) {\n+\u250a   \u250a 92\u250a    return null;\n+\u250a   \u250a 93\u250a  }\n+\u250a   \u250a 94\u250a  let chats = data.chats;\n+\u250a   \u250a 95\u250a\n \u250a103\u250a 96\u250a  return (\n \u250a104\u250a 97\u250a    <Container>\n \u250a105\u250a 98\u250a      <StyledList>\n-\u250a106\u250a   \u250a        {chats.map((chat) => (\n+\u250a   \u250a 99\u250a        {chats.map((chat: any) => (\n \u250a107\u250a100\u250a          <StyledListItem\n \u250a108\u250a101\u250a            key={chat.id}\n \u250a109\u250a102\u250a            data-testid="chat"\n')),(0,o.kt)("p",null,"You can see that we've fetched the query using Apollo client, and we removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"setChat")," call because Apollo will know automatically to place the results in the cache."),(0,o.kt)("p",null,"And you can see we can also work directly with the cache."),(0,o.kt)("p",null,"On the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnSendMessage")," function we take the new message and push it to Apollo Client's cache."),(0,o.kt)("p",null,"Now if we'll scroll to another screen and come back, the messages will still be displayed there."),(0,o.kt)("p",null,"You can see that we've added the ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," when we push a new chat to the cache.\nThat's how Apollo Client knows where to place the results."),(0,o.kt)("p",null,"The replacement is finished. Note that we removed the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," - because Apollo has an internal cache mechanism, there's no need to memoize the result anymore.\nWe also used the ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/features/caching.html#writequery-and-writefragment"},(0,o.kt)("inlineCode",{parentName:"a"},"writeQuery()"))," method to edit the stored result in the cache, so in the next render phase we would have an updated chat with the newly added message."),(0,o.kt)("p",null,"We shouldn't see any change at all in the view and the response time, since we're running it locally, but if we will take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," tab in the browser's dev-tools we should notice the differences:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"before")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54871305-e5879780-4dec-11e9-87bb-3279e9e18342.png",alt:"fetch"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"after")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54871319-1bc51700-4ded-11e9-9001-d5518bedf9ad.png",alt:"apollo"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Above: ChatsListScreen -> ChatRoomScreen -> ChatsListScreen -> ChatRoomScreen")),(0,o.kt)("p",null,"This test is obviously very rough, but the deviation is so big that you don't need any accuracy to emphasize the difference.\nThe blue stripes represents the requests made and the time they took. Before we had about 6 request phases, while after we had only 3 of them."),(0,o.kt)("p",null,"That's it for this chapter. There's one thing missing to make our ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatRoomScreen")," functional and that would be actually sending a message to the backend and updating the DB. In the next chapter we will learn how to do exactly that with our new Apollo-Client."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"TODO: Change the whole intro."),(0,o.kt)("p",null,"TODO: I think we might want to explain the cache in more details\nhow it\u2019s normalized\nhow some parts update automatically and some do not\nwhat\u2019s the smallest unit stored in the cache\nand other stuff\nthis might help later on with optimistic responses and mutations in general"),(0,o.kt)("p",null,"TODO: Remove all label code"),(0,o.kt)("p",null,"TODO: Create a drawing of the cache.\nTODO: Change typename from Chat to Message"),(0,o.kt)("p",null,"TODO: Explain a bit about Apollo links."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"th",href:"https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step6.md"},"< Previous Step")),(0,o.kt)("th",{parentName:"tr",align:"right"},(0,o.kt)("a",{parentName:"th",href:"https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step8.md"},"Next Step >"))))))}h.isMDXComponent=!0}}]);