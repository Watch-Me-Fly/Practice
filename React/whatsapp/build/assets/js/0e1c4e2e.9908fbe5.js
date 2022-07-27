"use strict";(self.webpackChunkovrsea_whatsapp_tuto=self.webpackChunkovrsea_whatsapp_tuto||[]).push([[8179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_label:"Step 5: Testing",sidebar_position:5},o="Step 5: Testing",i={unversionedId:"tuto-whatsapp/step5",id:"version-1.0.0/tuto-whatsapp/step5",title:"Step 5: Testing",description:"[//]: # (head-end)",source:"@site/versioned_docs/version-1.0.0/tuto-whatsapp/step5.md",sourceDirName:"tuto-whatsapp",slug:"/tuto-whatsapp/step5",permalink:"/docs/1.0.0/tuto-whatsapp/step5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/tuto-whatsapp/step5.md",tags:[],version:"1.0.0",sidebarPosition:5,frontMatter:{sidebar_label:"Step 5: Testing",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Step 4: Transition to GraphQL",permalink:"/docs/1.0.0/tuto-whatsapp/step4"},next:{title:"Step 6: Creating an app router and implementing a chat room",permalink:"/docs/1.0.0/tuto-whatsapp/step6"}},l={},p=[{value:"<strong>Client</strong> Step 5.1: Add data-testid attributes",id:"client-step-51-add-data-testid-attributes",level:4},{value:"Changed src/components/ChatsListScreen/ChatsList.tsx",id:"changed-srccomponentschatslistscreenchatslisttsx",level:5},{value:"<strong>Client</strong> Step 5.2: Setup tests",id:"client-step-52-setup-tests",level:4},{value:"Changed src/setupTests.ts",id:"changed-srcsetupteststs",level:5},{value:"<strong>Client</strong> Step 5.3: Test ChatsList",id:"client-step-53-test-chatslist",level:4},{value:"Added src/components/ChatsListScreen/ChatsList.test.tsx",id:"added-srccomponentschatslistscreenchatslisttesttsx",level:5},{value:"<strong>Server</strong> Step 3.1: Install and configure Jest",id:"server-step-31-install-and-configure-jest",level:4},{value:"Changed package.json",id:"changed-packagejson",level:5},{value:"<strong>Server</strong> Step 3.2: Test Query.chats",id:"server-step-32-test-querychats",level:4},{value:"Added tests/queries/getChats.test.ts",id:"added-testsqueriesgetchatstestts",level:5},{value:"<strong>Server</strong> Step 3.2: Test Query.chats",id:"server-step-32-test-querychats-1",level:4},{value:"Added tests/queries/__snapshots__/getChats.test.ts.snap",id:"added-testsqueries__snapshots__getchatstesttssnap",level:5}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"step-5-testing"},"Step 5: Testing"),(0,s.kt)("p",null,"Testing is a crucial part when writing an application, especially if we're planning to publish it or make it a commercial thing.\nBefore we hand someone a product, of any kind, we wanna make sure that it passes certain quality checks.\nWe're signed on that product and so it's very important to ensure that it functions properly according to our expectations,\notherwise wouldn't wanna use it and will look for alternatives."),(0,s.kt)("p",null,"In the context of software, we constantly make changes.\nIt's also impossible to make all features completely independent from one another,\nso something in the app is likely to break as we upgrade it or maintain it.\nThat's why we need to write a set of tests that can be run on demand,\nso when we implement a new feature we can simply run the tests and see what feature broke due to most recent changes."),(0,s.kt)("p",null,"There are currently 3 main testing frameworks in the NPM ecosystem: ",(0,s.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine"),", ",(0,s.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),", and ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),". Each testing framework has its pros, and cons, and at the end of the day it's a matter of preference. In our application we're gonna use ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," - a testing framework which was developed by Facebook. What's good about Jest is that it can be used to test both client and server logic, because it runs as a Node.JS application, but it also emulates the browser environment whenever we run it, thanks to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom"},"JSDOM"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54493900-e2ce0380-490f-11e9-8075-be4a236c7c38.png",alt:"jest"})),(0,s.kt)("p",null,"In this chapter we will learn how to test the React.Components in the client, and Apollo-GraphQL resolvers in the server. There are 3 kinds of tests:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Unit tests - which are used to test a single component, independently from other components in our system."),(0,s.kt)("li",{parentName:"ul"},"Integration tests - which are used to test a component in relation to other components in our systems (how well do they co-work with each other)."),(0,s.kt)("li",{parentName:"ul"},"e2e tests (end to end) - which are used to test a complete process, from the moment I clicked on a button in the user interface until the data gets back from the server and shown on the screen.")),(0,s.kt)("p",null,"The efficiency of the tests go from bottom to top (unit -> e2e), but the maintenance and complexity go from bottom to top (e2e -> unit). Accordingly we will need to find a good balance where we don\u2019t spend too much time on writing tests yet have a good indicator for how well our system functions. So we should write a lot of unit tests, a good amount of integration tests and a handful of e2e tests."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54494121-fed2a480-4911-11e9-9370-694ec989729b.png",alt:"tests-types-table"})),(0,s.kt)("p",null,"We will start with the client as it\u2019s much easier, because Jest is set and ready to use right out of the box thanks to ",(0,s.kt)("inlineCode",{parentName:"p"},"create-react-app"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Client - Testing React.Components")),(0,s.kt)("p",null,"Thanks to ",(0,s.kt)("inlineCode",{parentName:"p"},"create-react-app"),", we have Jest set and ready to use right out of the box, so we can start writing tests right away. I you'll look at the ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," you'll see a file called ",(0,s.kt)("inlineCode",{parentName:"p"},"App.test.tsx"),", which simply ensures that the component can be rendered without crashing."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nit('renders without crashing', () => {\n  const div = document.createElement('div');\n  ReactDOM.render(<App />, div);\n  ReactDOM.unmountComponentAtNode(div);\n});\n")),(0,s.kt)("p",null,"This is not a typical test that you're likely to find in a React project, but it demonstrates very well how Jest can be used to test DOM related issues. If you'll run ",(0,s.kt)("inlineCode",{parentName:"p"},"$ npm run test")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"$ yarn test"),") in the command line and then press ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),", you should see the following output:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54341429-eabe4700-4674-11e9-8e76-3aaaf7fec79a.png",alt:"report"})),(0,s.kt)("p",null,"Jest will automatically run for every file that ends with a ",(0,s.kt)("inlineCode",{parentName:"p"},".test.xxx")," extension. This is very convenient because the tests can live right next to the component, and you don't need to lookup for it across the project. This behavior can be modified by configuring Jest in the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file under the ",(0,s.kt)("inlineCode",{parentName:"p"},'"jest"')," field. More information about configuring Jest can be found in the official",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration"}," configuration documentation"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you get a warning message regards wrapping the component with ",(0,s.kt)("inlineCode",{parentName:"p"},"act()")," - this is a known issue with hooks and should have a proper solution soon. More about this issue and progress regards its fix can be found in this ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/14769#issuecomment-470097212"},"GitHub thread"),".")),(0,s.kt)("p",null,"Now we're gonna write a basic test for the ",(0,s.kt)("inlineCode",{parentName:"p"},"<ChatsList />")," component. In the test, we'll mock a fake response from the server, and examine the contents of rendered HTML. Since the HTML of the component is a dynamic thing and is constantly subject to changes, it would be a good idea to annotate it with ",(0,s.kt)("inlineCode",{parentName:"p"},"data-testid")," attributes so it can be tested regardless of its structure:"),(0,s.kt)("h4",{id:"client-step-51-add-data-testid-attributes"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/5cf57da4bb9a585303352215732aa5de0f250e7d"},(0,s.kt)("strong",{parentName:"a"},"Client")," Step 5.1: Add data-testid attributes")),(0,s.kt)("h5",{id:"changed-srccomponentschatslistscreenchatslisttsx"},"Changed src","/","components","/","ChatsListScreen","/","ChatsList.tsx"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'@@ -92,14 +92,20 @@\n \u250a 92\u250a 92\u250a    <Container>\n \u250a 93\u250a 93\u250a      <StyledList>\n \u250a 94\u250a 94\u250a        {chats.map((chat) => (\n-\u250a 95\u250a   \u250a          <StyledListItem key={chat!.id} button>\n-\u250a 96\u250a   \u250a            <ChatPicture src={chat.picture} alt="Profile" />\n+\u250a   \u250a 95\u250a          <StyledListItem key={chat.id} button>\n+\u250a   \u250a 96\u250a            <ChatPicture\n+\u250a   \u250a 97\u250a              data-testid="picture"\n+\u250a   \u250a 98\u250a              src={chat.picture}\n+\u250a   \u250a 99\u250a              alt="Profile"\n+\u250a   \u250a100\u250a            />\n \u250a 97\u250a101\u250a            <ChatInfo>\n-\u250a 98\u250a   \u250a              <ChatName>{chat.name}</ChatName>\n+\u250a   \u250a102\u250a              <ChatName data-testid="name">{chat.name}</ChatName>\n \u250a 99\u250a103\u250a              {chat.lastMessage && (\n \u250a100\u250a104\u250a                <>\n-\u250a101\u250a   \u250a                  <MessageContent>{chat.lastMessage.content}</MessageContent>\n-\u250a102\u250a   \u250a                  <MessageDate>\n+\u250a   \u250a105\u250a                  <MessageContent data-testid="content">\n+\u250a   \u250a106\u250a                    {chat.lastMessage.content}\n+\u250a   \u250a107\u250a                  </MessageContent>\n+\u250a   \u250a108\u250a                  <MessageDate data-testid="date">\n \u250a103\u250a109\u250a                    {moment(chat.lastMessage.createdAt).format(\'HH:mm\')}\n \u250a104\u250a110\u250a                  </MessageDate>\n \u250a105\u250a111\u250a                </>\n')),(0,s.kt)("p",null,"Now we can select various HTML elements with a query selector when we test the component. We will install a couple of packages that will assist us in implementing the test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ yarn add jest-fetch-mock @testing-library/jest-dom @testing-library/react\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest-fetch-mock"},(0,s.kt)("inlineCode",{parentName:"a"},"jest-fetch-mock"))," package can mock responses emitted by the Fetch API."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@testing-library/jest-dom"},(0,s.kt)("inlineCode",{parentName:"a"},"@testing-library/jest-dom"))," package will add custom matchers that will help us examine HTML contents of DOM elements."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@testing-library/react"},(0,s.kt)("inlineCode",{parentName:"a"},"@testing-library/react"))," package contains utility methods that will help us test React.Components with Jest.")),(0,s.kt)("p",null,"Next, we will create a file under the ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," folder called ",(0,s.kt)("inlineCode",{parentName:"p"},"setupTests.ts"),".\nThis file is configured automatically by ",(0,s.kt)("inlineCode",{parentName:"p"},"create-react-app")," and loaded by Jest,\nand we can use it to set up our testing environment according to our needs (like said earlier, Jest can be configured, so this file path can be changed).\nWe will use that file to define a fake Fetch API using the ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-fetch-mock")," library:"),(0,s.kt)("h4",{id:"client-step-52-setup-tests"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/c77201aca5851a0907bd7da962363853b558f398"},(0,s.kt)("strong",{parentName:"a"},"Client")," Step 5.2: Setup tests")),(0,s.kt)("h5",{id:"changed-srcsetupteststs"},"Changed src","/","setupTests.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -3,3 +3,9 @@\n \u250a 3\u250a 3\u250a// expect(element).toHaveTextContent(/react/i)\n \u250a 4\u250a 4\u250a// learn more: https://github.com/testing-library/jest-dom\n \u250a 5\u250a 5\u250aimport '@testing-library/jest-dom/extend-expect';\n+\u250a  \u250a 6\u250aimport { GlobalWithFetchMock } from 'jest-fetch-mock';\n+\u250a  \u250a 7\u250aimport { act } from '@testing-library/react';\n+\u250a  \u250a 8\u250a\n+\u250a  \u250a 9\u250aconst customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;\n+\u250a  \u250a10\u250acustomGlobal.fetch = require('jest-fetch-mock');\n+\u250a  \u250a11\u250acustomGlobal.fetchMock = customGlobal.fetch;\n")),(0,s.kt)("p",null,"We will create another file called ",(0,s.kt)("inlineCode",{parentName:"p"},"ChatsList.test.tsx"),", right next to the ",(0,s.kt)("inlineCode",{parentName:"p"},"<ChatsList />")," component under the ",(0,s.kt)("inlineCode",{parentName:"p"},"ChatsListScreen")," directory, and inside we will implement our test. The test should follow these steps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Mock the response to contain a fake chat, so we won't need to make an actual call to our GraphQL API."),(0,s.kt)("li",{parentName:"ul"},"We will create a new instance of ",(0,s.kt)("inlineCode",{parentName:"li"},"<ChatsList />")," and render it in a container element."),(0,s.kt)("li",{parentName:"ul"},"We will wait for changes in the DOM caused by ",(0,s.kt)("inlineCode",{parentName:"li"},"setState()"),"."),(0,s.kt)("li",{parentName:"ul"},"We will test the contents of the container.")),(0,s.kt)("p",null,"And this is how the implementation should look like:"),(0,s.kt)("h4",{id:"client-step-53-test-chatslist"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/bda6ecb948f0c1436eb9222fe40161fe6b3031a9"},(0,s.kt)("strong",{parentName:"a"},"Client")," Step 5.3: Test ChatsList")),(0,s.kt)("h5",{id:"added-srccomponentschatslistscreenchatslisttesttsx"},"Added src","/","components","/","ChatsListScreen","/","ChatsList.test.tsx"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -0,0 +1,43 @@\n+\u250a  \u250a 1\u250aimport React from 'react';\n+\u250a  \u250a 2\u250aimport ReactDOM from 'react-dom';\n+\u250a  \u250a 3\u250aimport { cleanup, render, waitFor } from '@testing-library/react';\n+\u250a  \u250a 4\u250aimport ChatsList from './ChatsList';\n+\u250a  \u250a 5\u250a\n+\u250a  \u250a 6\u250adescribe('ChatsList', () => {\n+\u250a  \u250a 7\u250a  afterEach(cleanup);\n+\u250a  \u250a 8\u250a\n+\u250a  \u250a 9\u250a  it('renders fetched chats data', async () => {\n+\u250a  \u250a10\u250a    fetchMock.mockResponseOnce(\n+\u250a  \u250a11\u250a      JSON.stringify({\n+\u250a  \u250a12\u250a        data: {\n+\u250a  \u250a13\u250a          chats: [\n+\u250a  \u250a14\u250a            {\n+\u250a  \u250a15\u250a              id: 1,\n+\u250a  \u250a16\u250a              name: 'Foo Bar',\n+\u250a  \u250a17\u250a              picture: 'https://localhost:4000/picture.jpg',\n+\u250a  \u250a18\u250a              lastMessage: {\n+\u250a  \u250a19\u250a                id: 1,\n+\u250a  \u250a20\u250a                content: 'Hello',\n+\u250a  \u250a21\u250a                createdAt: new Date('1 Jan 2019 GMT'),\n+\u250a  \u250a22\u250a              },\n+\u250a  \u250a23\u250a            },\n+\u250a  \u250a24\u250a          ],\n+\u250a  \u250a25\u250a        },\n+\u250a  \u250a26\u250a      })\n+\u250a  \u250a27\u250a    );\n+\u250a  \u250a28\u250a\n+\u250a  \u250a29\u250a    {\n+\u250a  \u250a30\u250a      const { container, getByTestId } = render(<ChatsList />);\n+\u250a  \u250a31\u250a\n+\u250a  \u250a32\u250a      await waitFor(() => container);\n+\u250a  \u250a33\u250a\n+\u250a  \u250a34\u250a      expect(getByTestId('name')).toHaveTextContent('Foo Bar');\n+\u250a  \u250a35\u250a      expect(getByTestId('picture')).toHaveAttribute(\n+\u250a  \u250a36\u250a        'src',\n+\u250a  \u250a37\u250a        'https://localhost:4000/picture.jpg'\n+\u250a  \u250a38\u250a      );\n+\u250a  \u250a39\u250a      expect(getByTestId('content')).toHaveTextContent('Hello');\n+\u250a  \u250a40\u250a      expect(getByTestId('date')).toHaveTextContent('00:00');\n+\u250a  \u250a41\u250a    }\n+\u250a  \u250a42\u250a  });\n+\u250a  \u250a43\u250a});\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Jest API is vast but pretty intuitive for the most part. It mostly consists of test descriptors and matchers. ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/expect"},"Here's a full list of all matchers which are built into Jest's API"),". Always make sure to work against it when writing tests, for optimal results.")),(0,s.kt)("p",null,"We will now move on to testing the server where we will learn how to setup Jest manually and test it against a GraphQL API."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Server - Testing GraphQL resolvers")),(0,s.kt)("p",null,"To set-up Jest, we will run the following in the command line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ yarn add --dev jest @types/jest ts-jest\n")),(0,s.kt)("p",null,"This will basically install Jest and make it useable with TypeScript.\nIn addition, we will need to specify the file pattern that we would like to transform with ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-jest"},(0,s.kt)("inlineCode",{parentName:"a"},"ts-jest")),", by adding the following section to ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n  "jest": {\n    "transform": {\n      "^.+\\\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"\n    }\n  }\n}\n')),(0,s.kt)("p",null,"We will also add a ",(0,s.kt)("inlineCode",{parentName:"p"},'"test"')," script in the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file,\nso we can run the tests with ",(0,s.kt)("inlineCode",{parentName:"p"},"$ yarn test"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')),(0,s.kt)("p",null,"This is how our ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," should look like at this point:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Notice we have lines there that mention ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-junit"),".\nThose are needed for our own tutorial CI, you don't have to use it.")),(0,s.kt)("h4",{id:"server-step-31-install-and-configure-jest"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Server/commit/7719c2c8b9861a4567bd112dc5bae7508acb1b18"},(0,s.kt)("strong",{parentName:"a"},"Server")," Step 3.1: Install and configure Jest")),(0,s.kt)("h5",{id:"changed-packagejson"},"Changed package.json"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'@@ -8,14 +8,22 @@\n \u250a 8\u250a 8\u250a  "private": true,\n \u250a 9\u250a 9\u250a  "scripts": {\n \u250a10\u250a10\u250a    "start": "ts-node index.ts",\n+\u250a  \u250a11\u250a    "test": "jest",\n \u250a11\u250a12\u250a    "format": "prettier \\"**/*.ts\\" --write"\n \u250a12\u250a13\u250a  },\n+\u250a  \u250a14\u250a  "jest-junit": {\n+\u250a  \u250a15\u250a    "outputDirectory": "./test-results"\n+\u250a  \u250a16\u250a  },\n \u250a13\u250a17\u250a  "devDependencies": {\n \u250a14\u250a18\u250a    "@types/cors": "2.8.6",\n \u250a15\u250a19\u250a    "@types/express": "4.17.6",\n \u250a16\u250a20\u250a    "@types/graphql": "14.5.0",\n+\u250a  \u250a21\u250a    "@types/jest": "25.2.3",\n \u250a17\u250a22\u250a    "@types/node": "14.0.4",\n+\u250a  \u250a23\u250a    "jest": "26.0.1",\n+\u250a  \u250a24\u250a    "jest-junit": "10.0.0",\n \u250a18\u250a25\u250a    "prettier": "2.0.5",\n+\u250a  \u250a26\u250a    "ts-jest": "26.0.0",\n \u250a19\u250a27\u250a    "ts-node": "8.10.1",\n \u250a20\u250a28\u250a    "typescript": "3.9.3"\n \u250a21\u250a29\u250a  },\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'@@ -27,5 +35,20 @@\n \u250a27\u250a35\u250a    "graphql-import": "1.0.2",\n \u250a28\u250a36\u250a    "graphql-scalars": "1.1.2",\n \u250a29\u250a37\u250a    "graphql-tools": "5.0.0"\n+\u250a  \u250a38\u250a  },\n+\u250a  \u250a39\u250a  "jest": {\n+\u250a  \u250a40\u250a    "transform": {\n+\u250a  \u250a41\u250a      "^.+\\\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"\n+\u250a  \u250a42\u250a    },\n+\u250a  \u250a43\u250a    "globals": {\n+\u250a  \u250a44\u250a      "ts-jest": {\n+\u250a  \u250a45\u250a        "diagnostics": false\n+\u250a  \u250a46\u250a      }\n+\u250a  \u250a47\u250a    },\n+\u250a  \u250a48\u250a    "globalSetup": "<rootDir>/tests/global-setup.ts",\n+\u250a  \u250a49\u250a    "reporters": [\n+\u250a  \u250a50\u250a      "default",\n+\u250a  \u250a51\u250a      "jest-junit"\n+\u250a  \u250a52\u250a    ]\n \u250a30\u250a53\u250a  }\n \u250a31\u250a54\u250a}\ud83d\udeab\u21b5\n')),(0,s.kt)("p",null,"Now we're gonna test the ",(0,s.kt)("inlineCode",{parentName:"p"},"chats")," query in our GraphQL schema. To do so, we will setup an Apollo Client and send a query request to our back-end, and then we will match the received response with a pre-defined snapshot. Luckily, we don't have to set an actual client, since the tests and the implementation of the back-end live right next to each other, thus, we will install a package which will help us achieving so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ yarn add --dev apollo-server-testing\n")),(0,s.kt)("p",null,"We will define the test suite under the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/queries")," folder in a file called ",(0,s.kt)("inlineCode",{parentName:"p"},"getChats.test.ts"),":"),(0,s.kt)("h4",{id:"server-step-32-test-querychats"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Server/commit/7726262f14d62a2da7d1d3d2542572f38166e956"},(0,s.kt)("strong",{parentName:"a"},"Server")," Step 3.2: Test Query.chats")),(0,s.kt)("h5",{id:"added-testsqueriesgetchatstestts"},"Added tests","/","queries","/","getChats.test.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -0,0 +1,32 @@\n+\u250a  \u250a 1\u250aimport { createTestClient } from 'apollo-server-testing';\n+\u250a  \u250a 2\u250aimport { ApolloServer, gql } from 'apollo-server-express';\n+\u250a  \u250a 3\u250aimport schema from '../../schema';\n+\u250a  \u250a 4\u250a\n+\u250a  \u250a 5\u250adescribe('Query.chats', () => {\n+\u250a  \u250a 6\u250a  it('should fetch all chats', async () => {\n+\u250a  \u250a 7\u250a    const server = new ApolloServer({ schema });\n+\u250a  \u250a 8\u250a\n+\u250a  \u250a 9\u250a    const { query } = createTestClient(server);\n+\u250a  \u250a10\u250a\n+\u250a  \u250a11\u250a    const res = await query({\n+\u250a  \u250a12\u250a      query: gql`\n+\u250a  \u250a13\u250a        query GetChats {\n+\u250a  \u250a14\u250a          chats {\n+\u250a  \u250a15\u250a            id\n+\u250a  \u250a16\u250a            name\n+\u250a  \u250a17\u250a            picture\n+\u250a  \u250a18\u250a            lastMessage {\n+\u250a  \u250a19\u250a              id\n+\u250a  \u250a20\u250a              content\n+\u250a  \u250a21\u250a              createdAt\n+\u250a  \u250a22\u250a            }\n+\u250a  \u250a23\u250a          }\n+\u250a  \u250a24\u250a        }\n+\u250a  \u250a25\u250a      `,\n+\u250a  \u250a26\u250a    });\n+\u250a  \u250a27\u250a\n+\u250a  \u250a28\u250a    expect(res.data).toBeDefined();\n+\u250a  \u250a29\u250a    expect(res.errors).toBeUndefined();\n+\u250a  \u250a30\u250a    expect(res.data).toMatchSnapshot();\n+\u250a  \u250a31\u250a  });\n+\u250a  \u250a32\u250a});\n")),(0,s.kt)("p",null,"In the test function, we create a new instance of the Apollo-GraphQL server using our schema, and we query some data against it thanks to the fake client created by ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apollo-server-testing"},(0,s.kt)("inlineCode",{parentName:"a"},"apollo-server-testing")),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},".toMatchSnapshot()")," matcher will call the ",(0,s.kt)("inlineCode",{parentName:"p"},"toString()")," method on the examined object and will test it against a predefined snapshot.\nThe snapshot will automatically be created once we run the test for the first time and will be stored under the ",(0,s.kt)("inlineCode",{parentName:"p"},"__snapshot__")," directory.\nThis means that the first test run will always pass. This is useful because you can later on observe and adjust manually the snapshot manually without having to write it from scratch."),(0,s.kt)("p",null,"So let's do our first test run for the server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ yarn test\n")),(0,s.kt)("p",null,"The expected result should be a projection of the data stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"db.ts")," file."),(0,s.kt)("h4",{id:"server-step-32-test-querychats-1"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Server/commit/7726262f14d62a2da7d1d3d2542572f38166e956"},(0,s.kt)("strong",{parentName:"a"},"Server")," Step 3.2: Test Query.chats")),(0,s.kt)("h5",{id:"added-testsqueries__snapshots__getchatstesttssnap"},"Added tests","/","queries","/","_","_snapshots__","/","getChats.test.ts.snap"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'@@ -0,0 +1,48 @@\n+\u250a  \u250a 1\u250a// Jest Snapshot v1, https://goo.gl/fbAQLP\n+\u250a  \u250a 2\u250a\n+\u250a  \u250a 3\u250aexports[`Query.chats should fetch all chats 1`] = `\n+\u250a  \u250a 4\u250aObject {\n+\u250a  \u250a 5\u250a  "chats": Array [\n+\u250a  \u250a 6\u250a    Object {\n+\u250a  \u250a 7\u250a      "id": "1",\n+\u250a  \u250a 8\u250a      "lastMessage": Object {\n+\u250a  \u250a 9\u250a        "content": "You on your way?",\n+\u250a  \u250a10\u250a        "createdAt": "2018-12-31T07:20:00.000Z",\n+\u250a  \u250a11\u250a        "id": "1",\n+\u250a  \u250a12\u250a      },\n+\u250a  \u250a13\u250a      "name": "Ethan Gonzalez",\n+\u250a  \u250a14\u250a      "picture": "https://randomuser.me/api/portraits/thumb/men/1.jpg",\n+\u250a  \u250a15\u250a    },\n+\u250a  \u250a16\u250a    Object {\n+\u250a  \u250a17\u250a      "id": "2",\n+\u250a  \u250a18\u250a      "lastMessage": Object {\n+\u250a  \u250a19\u250a        "content": "Hey, it\'s me",\n+\u250a  \u250a20\u250a        "createdAt": "2018-12-30T14:40:00.000Z",\n+\u250a  \u250a21\u250a        "id": "2",\n+\u250a  \u250a22\u250a      },\n+\u250a  \u250a23\u250a      "name": "Bryan Wallace",\n+\u250a  \u250a24\u250a      "picture": "https://randomuser.me/api/portraits/thumb/men/2.jpg",\n+\u250a  \u250a25\u250a    },\n+\u250a  \u250a26\u250a    Object {\n+\u250a  \u250a27\u250a      "id": "3",\n+\u250a  \u250a28\u250a      "lastMessage": Object {\n+\u250a  \u250a29\u250a        "content": "I should buy a boat",\n+\u250a  \u250a30\u250a        "createdAt": "2018-12-15T08:00:00.000Z",\n+\u250a  \u250a31\u250a        "id": "3",\n+\u250a  \u250a32\u250a      },\n+\u250a  \u250a33\u250a      "name": "Avery Stewart",\n+\u250a  \u250a34\u250a      "picture": "https://randomuser.me/api/portraits/thumb/women/1.jpg",\n+\u250a  \u250a35\u250a    },\n+\u250a  \u250a36\u250a    Object {\n+\u250a  \u250a37\u250a      "id": "4",\n+\u250a  \u250a38\u250a      "lastMessage": Object {\n+\u250a  \u250a39\u250a        "content": "This is wicked good ice cream.",\n+\u250a  \u250a40\u250a        "createdAt": "2018-05-12T16:00:00.000Z",\n+\u250a  \u250a41\u250a        "id": "4",\n+\u250a  \u250a42\u250a      },\n+\u250a  \u250a43\u250a      "name": "Katie Peterson",\n+\u250a  \u250a44\u250a      "picture": "https://randomuser.me/api/portraits/thumb/women/2.jpg",\n+\u250a  \u250a45\u250a    },\n+\u250a  \u250a46\u250a  ],\n+\u250a  \u250a47\u250a}\n+\u250a  \u250a48\u250a`;\n')),(0,s.kt)("p",null,"Always be sure to observe the snapshot before moving on! The received result isn't necessarily what you'd expect. Also it's not a good practice to store production data in the snapshot because it's subject to changes. Normally we would set up another instance of the DB for testing purposes, but since our DB is a mock and doesn't represent real data, there's no need to at this stage."),(0,s.kt)("p",null,"Now that we have the required knowledge regards testing and Jest's API, we will implement tests throughout the tutorial as a trivial thing. We will not go through each and every new matcher that we introduce, as it is self explanatory and there's too much of them. Be sure to work against ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/expect"},"this full list of matchers")," when working with Jest."),(0,s.kt)("p",null,"In the next chapter we will continue expanding our application by adding a ",(0,s.kt)("inlineCode",{parentName:"p"},"<ChatRoomScreen />"),"."),(0,s.kt)("hr",null),(0,s.kt)("p",null,"TODO: Check what changed on testing in create-react-app 3.0 ",(0,s.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/running-tests"},"https://facebook.github.io/create-react-app/docs/running-tests")),(0,s.kt)("p",null,"TODO: I think ts-jest could be configured in a simpler way, but need to check\n{ preset: 'ts-jest' }"),(0,s.kt)("p",null,"TODO: I don\u2019t like using jest\u2019s toMatchSnapshot() to compare operation\u2019s result that comes from the real GraphQL Schema (with resolvers).\nIt might change quite a lot and break tests. That data might be huge and hard to be validated by looking at it. Maybe checking a structure is a better approach?"),(0,s.kt)("p",null,"TODO: Why ts-jest?"),(0,s.kt)("p",null,"TODO: Change into tortilla diff:"),(0,s.kt)("p",null,"TODO: Change into Tortilla diif:"),(0,s.kt)("p",null,"TODO: Test with UTC timezone so it would work on all computers"),(0,s.kt)("p",null,"TODO: const server = new ApolloServer({ typeDefs }); // easier, no need to compile the schema before"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"th",href:"https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step4.md"},"< Previous Step")),(0,s.kt)("th",{parentName:"tr",align:"right"},(0,s.kt)("a",{parentName:"th",href:"https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step6.md"},"Next Step >"))))))}h.isMDXComponent=!0}}]);