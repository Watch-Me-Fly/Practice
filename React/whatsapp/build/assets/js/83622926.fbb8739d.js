"use strict";(self.webpackChunkovrsea_whatsapp_tuto=self.webpackChunkovrsea_whatsapp_tuto||[]).push([[4669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||s;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_label:"Step 2: Styling with Material UI and styled-components",sidebar_position:2},i="Step 2: Styling with Material UI and styled-components",r={unversionedId:"tuto-whatsapp/step2",id:"version-1.0.0/tuto-whatsapp/step2",title:"Step 2: Styling with Material UI and styled-components",description:"[//]: # (head-end)",source:"@site/versioned_docs/version-1.0.0/tuto-whatsapp/step2.md",sourceDirName:"tuto-whatsapp",slug:"/tuto-whatsapp/step2",permalink:"/docs/1.0.0/tuto-whatsapp/step2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/tuto-whatsapp/step2.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_label:"Step 2: Styling with Material UI and styled-components",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Step 1: Creating a basic React APP with a basic view",permalink:"/docs/1.0.0/tuto-whatsapp/step1"},next:{title:"Step 3: Setup a basic Node.JS server with a basic REST endpoint",permalink:"/docs/1.0.0/tuto-whatsapp/step3"}},l={},p=[{value:"<strong>Client</strong> Step 2.2: Setup Material-UI theme",id:"client-step-22-setup-material-ui-theme",level:4},{value:"Changed src/index.tsx",id:"changed-srcindextsx",level:5},{value:"<strong>Client</strong> Step 2.3: Setup CSS theme vars",id:"client-step-23-setup-css-theme-vars",level:4},{value:"Changed src/index.css",id:"changed-srcindexcss",level:5},{value:"<strong>Client</strong> Step 2.4: Use Material components",id:"client-step-24-use-material-components",level:4},{value:"Changed src/components/ChatsListScreen/ChatsNavbar.tsx",id:"changed-srccomponentschatslistscreenchatsnavbartsx",level:5},{value:"<strong>Client</strong> Step 2.4: Use Material components",id:"client-step-24-use-material-components-1",level:4},{value:"Changed src/components/ChatsListScreen/ChatsList.tsx",id:"changed-srccomponentschatslistscreenchatslisttsx",level:5},{value:"<strong>Client</strong> Step 2.5: Add style with styled-components",id:"client-step-25-add-style-with-styled-components",level:4},{value:"Changed src/components/ChatsListScreen/index.tsx",id:"changed-srccomponentschatslistscreenindextsx",level:5},{value:"<strong>Client</strong> Step 2.5: Add style with styled-components",id:"client-step-25-add-style-with-styled-components-1",level:4},{value:"Changed src/components/ChatsListScreen/ChatsNavbar.tsx",id:"changed-srccomponentschatslistscreenchatsnavbartsx-1",level:5},{value:"<strong>Client</strong> Step 2.5: Add style with styled-components",id:"client-step-25-add-style-with-styled-components-2",level:4},{value:"Changed src/components/ChatsListScreen/ChatsList.tsx",id:"changed-srccomponentschatslistscreenchatslisttsx-1",level:5}],c=(d="Toolbar",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-2-styling-with-material-ui-and-styled-components"},"Step 2: Styling with Material UI and styled-components"),(0,o.kt)("p",null,"Now it's time to style our app."),(0,o.kt)("p",null,"We can edit styles manually but we can also use ready made components that have already been styled and shared in the community."),(0,o.kt)("p",null,"In this chapter we will do both."),(0,o.kt)("p",null,"First, we would also use ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material-UI")," - a library with a set of React components that implements Google's Material Design.\nWhat's good about it is that the design is already implemented right out of the box.\nNot only that, but it also includes a set of icons which are free to use."),(0,o.kt)("p",null,"There are many things that Material-UI can offer, and it's not easy to follow it up, especially with the constantly evolving and improving API.\nThe best way to go with it is to identify a component you need, and then look for it in the ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"official website"),".\nAnd when it comes to searching for icons, they can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://material.io/resources/icons/"},"material.io")," website through the search bar."),(0,o.kt)("p",null,"As we move further in this tutorial you should have a better grasp of Material and how to use it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54141504-c853e000-4460-11e9-94b5-aae98ec9a1e3.png",alt:"material-ui-icons"})),(0,o.kt)("p",null,"We will start off by installing some of the needed material libraries and its Typescript types library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add @material-ui/core @material-ui/icons\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@material-ui/core")," includes core component of Material-UI such as Input, Popover, Modal, etc, and ",(0,o.kt)("inlineCode",{parentName:"p"},"@material-ui/icons")," includes a set of icons.\nMaterial is very generic and has a built in theming system which can be controlled by simply setting few variables,\nwhich is exactly what we're gonna need in our app."),(0,o.kt)("p",null,"In our app we're mainly gonna use 2 colors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary #306759"),(0,o.kt)("li",{parentName:"ul"},"Secondary #79e352")),(0,o.kt)("p",null,"The easiest way to reference colors without repeating yourself is through Themes.\nTheme definition can easily be done in Material using the MuiThemeProvider component:"),(0,o.kt)("h4",{id:"client-step-22-setup-material-ui-theme"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/f23a96d8d823bf9648ab971452ae893f90a55209"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.2: Setup Material-UI theme")),(0,o.kt)("h5",{id:"changed-srcindextsx"},"Changed src","/","index.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,12 +1,22 @@\n+\u250a  \u250a 1\u250aimport { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';\n \u250a 1\u250a 2\u250aimport React from 'react';\n \u250a 2\u250a 3\u250aimport ReactDOM from 'react-dom';\n \u250a 3\u250a 4\u250aimport './index.css';\n \u250a 4\u250a 5\u250aimport App from './App';\n \u250a 5\u250a 6\u250aimport * as serviceWorker from './serviceWorker';\n \u250a 6\u250a 7\u250a\n+\u250a  \u250a 8\u250aconst theme = createMuiTheme({\n+\u250a  \u250a 9\u250a  palette: {\n+\u250a  \u250a10\u250a    primary: { main: '#2c6157' },\n+\u250a  \u250a11\u250a    secondary: { main: '#6fd056' },\n+\u250a  \u250a12\u250a  },\n+\u250a  \u250a13\u250a});\n+\u250a  \u250a14\u250a\n \u250a 7\u250a15\u250aReactDOM.render(\n \u250a 8\u250a16\u250a  <React.StrictMode>\n-\u250a 9\u250a  \u250a    <App />\n+\u250a  \u250a17\u250a    <MuiThemeProvider theme={theme}>\n+\u250a  \u250a18\u250a      <App />\n+\u250a  \u250a19\u250a    </MuiThemeProvider>\n \u250a10\u250a20\u250a  </React.StrictMode>,\n \u250a11\u250a21\u250a  document.getElementById('root')\n \u250a12\u250a22\u250a);\n")),(0,o.kt)("p",null,"We create a ",(0,o.kt)("inlineCode",{parentName:"p"},"palette")," of the themes together with any other definitions for the theme, and then we wrap our app with a React component\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"material-ui")," library to provide those definitions to all of our App's components when they need them."),(0,o.kt)("p",null,'Once we have it set, the colors should be available to use in our application by simply providing the "color" prop to the component instance whose color we would like to change:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'<Button color="primary">Primary</Button>\n<Button color="secondary">Secondary</Button>\n')),(0,o.kt)("p",null,"In our app, we're also gonna use CSS directly to change its colors, therefore it would be handy to have these theme variables available to us through CSS.\nTo do so, we will have a second definition of these variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.css"),", at the ",(0,o.kt)("inlineCode",{parentName:"p"},":root")," level of our application."),(0,o.kt)("p",null,"That feels like a small duplication but this will help us use them in styled components directly.\nAlso that means you can view the variables in chrome-dev-tools."),(0,o.kt)("h4",{id:"client-step-23-setup-css-theme-vars"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/b78def5485e512b4f512fd595c92e7c735c3ea22"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.3: Setup CSS theme vars")),(0,o.kt)("h5",{id:"changed-srcindexcss"},"Changed src","/","index.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,3 +1,10 @@\n+\u250a  \u250a 1\u250a:root {\n+\u250a  \u250a 2\u250a  --primary-bg: #2c6157;\n+\u250a  \u250a 3\u250a  --secondary-bg: #6fd056;\n+\u250a  \u250a 4\u250a  --primary-text: white;\n+\u250a  \u250a 5\u250a  --secondary-text: white;\n+\u250a  \u250a 6\u250a}\n+\u250a  \u250a 7\u250a\n \u250a 1\u250a 8\u250abody {\n \u250a 2\u250a 9\u250a  margin: 0;\n \u250a 3\u250a10\u250a  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},":root")," is a pseudo element that simply represents the root node, which will make the colors available in all elements.\nNormally, it works like JavaScript's scoping system and it will make variables available only to the current node and to its children, NOT its parents.\nCSS vars can be used like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"  color: var(--primary-text);\n  background-color: var(--primary-bg);\n")),(0,o.kt)("p",null,"More information about CSS variables can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables"},"official MDN docs"),"."),(0,o.kt)("p",null,"So getting back to the ChatsListScreen, we will wrap the ChatsNavbar with Material's ",(0,o.kt)(c,{mdxType:"Toolbar"})," component:"),(0,o.kt)("h4",{id:"client-step-24-use-material-components"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/239a7e1e7df638b3d77fb7f2220a5b377e2cd814"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.4: Use Material components")),(0,o.kt)("h5",{id:"changed-srccomponentschatslistscreenchatsnavbartsx"},"Changed src","/","components","/","ChatsListScreen","/","ChatsNavbar.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,5 +1,6 @@\n \u250a1\u250a1\u250aimport React from 'react';\n+\u250a \u250a2\u250aimport { Toolbar } from '@material-ui/core';\n \u250a2\u250a3\u250a\n-\u250a3\u250a \u250aconst ChatsNavbar: React.FC = () => <div>Whatsapp Clone</div>;\n+\u250a \u250a4\u250aconst ChatsNavbar: React.FC = () => <Toolbar>Whatsapp Clone</Toolbar>;\n \u250a4\u250a5\u250a\n \u250a5\u250a6\u250aexport default ChatsNavbar;\n")),(0,o.kt)("p",null,"And we will replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ul />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<li />")," elements with Material's ",(0,o.kt)("inlineCode",{parentName:"p"},"<List />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<ListItem />")," in ChatsList:"),(0,o.kt)("h4",{id:"client-step-24-use-material-components-1"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/239a7e1e7df638b3d77fb7f2220a5b377e2cd814"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.4: Use Material components")),(0,o.kt)("h5",{id:"changed-srccomponentschatslistscreenchatslisttsx"},"Changed src","/","components","/","ChatsListScreen","/","ChatsList.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,12 +1,13 @@\n \u250a 1\u250a 1\u250aimport React from 'react';\n \u250a 2\u250a 2\u250aimport { chats } from '../../db';\n \u250a 3\u250a 3\u250aimport moment from 'moment';\n+\u250a  \u250a 4\u250aimport { List, ListItem } from '@material-ui/core';\n \u250a 4\u250a 5\u250a\n \u250a 5\u250a 6\u250aconst ChatsList: React.FC = () => (\n \u250a 6\u250a 7\u250a  <div>\n-\u250a 7\u250a  \u250a    <ul>\n+\u250a  \u250a 8\u250a    <List>\n \u250a 8\u250a 9\u250a      {chats.map((chat) => (\n-\u250a 9\u250a  \u250a        <li key={chat.id}>\n+\u250a  \u250a10\u250a        <ListItem key={chat.id} button>\n \u250a10\u250a11\u250a          <img src={chat.picture} alt=\"Profile\" />\n \u250a11\u250a12\u250a          <div>{chat.name}</div>\n \u250a12\u250a13\u250a          {chat.lastMessage && (\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -15,9 +16,9 @@\n \u250a15\u250a16\u250a              <div>{moment(chat.lastMessage.createdAt).format('HH:mm')}</div>\n \u250a16\u250a17\u250a            </>\n \u250a17\u250a18\u250a          )}\n-\u250a18\u250a  \u250a        </li>\n+\u250a  \u250a19\u250a        </ListItem>\n \u250a19\u250a20\u250a      ))}\n-\u250a20\u250a  \u250a    </ul>\n+\u250a  \u250a21\u250a    </List>\n \u250a21\u250a22\u250a  </div>\n \u250a22\u250a23\u250a);\n \u250a23\u250a24\u250a\n")),(0,o.kt)("p",null,"Thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," attribute, the Material component can give our list a more vibrant feeling and that will display a nice ripple effect once an item is clicked,\nsomething that could have taken a long time to implement manually."),(0,o.kt)("p",null,"Now that we are using existing styled components, it's time to customize them to look exactly like we want them to look.\nWhen we write styles, we usually use CSS."),(0,o.kt)("p",null,"One of the important concepts that React brought us was the fact we could use just Javascript to describe our components\nand another was the fact that we could encapsulate our UI into a set of separated components."),(0,o.kt)("p",null,"But when it comes to CSS, we are still using it like before, having no encapsulation between different definitions and files."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.styled-components.com/"},"Styled-components")," is a relatively new library that will transpile a given string into a CSS string and will encapsulate it under a ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Component"),".\nBringing the same concepts from React into the way we write styles, so we can define our styles programmatically.\nWith JavaScript in-hand you naturally have more control over our styles and its encapsulation, which makes it a very powerful tool."),(0,o.kt)("p",null,"Here's one way to style a button using styled-components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import styled, { css } from 'styled-components';\n\nconst Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0.5em 1em;\n  padding: 0.25em 1em;\n\n  ${props => props.primary && css`\n    background: palevioletred;\n    color: white;\n  `}\n`;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"styled")," is coming from the ",(0,o.kt)("inlineCode",{parentName:"li"},"styled-components")," library. When we call ",(0,o.kt)("inlineCode",{parentName:"li"},"styled.button")," that means we are extending a button component from styled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button")," will become a full React component with the extended styled we specified"),(0,o.kt)("li",{parentName:"ul"},"Like a React component, we can send props into our component. And like a React function, we can write Javascript code that interact and respond to those props.\nIn our case, just like a check we've done before in TSX to render something only if it exists, here only if we have a ",(0,o.kt)("inlineCode",{parentName:"li"},"primary")," property, we will add extra styles to our component.\nThe created Button is actually a React.Component, so an instance of it can be created with ease like any other component:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"css")," is telling Styled components that the string literal that comes after describes CSS styles.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  <Button primary />\n")),(0,o.kt)("p",null,"But as this is just like a component, we should type it just like we type component, defining what properties it should get in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import styled, { css } from 'styled-components';\n\ninterface ButtonProps {\n  readonly primary: any;\n};\n\nconst Button = styled.button<ButtonProps>`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0.5em 1em;\n  padding: 0.25em 1em;\n\n  ${props => props.primary && css`\n    background: palevioletred;\n    color: white;\n  `}\n`;\n")),(0,o.kt)("p",null,"More information about styled-components can be found in the official ",(0,o.kt)("a",{parentName:"p",href:"https://www.styled-components.com/docs"},"docs page"),"."),(0,o.kt)("p",null,"Now, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," to create new React.Components which are bound into a style-sheet.\nThis way when we create new instances of them, the components will be styled right out of the box. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Button = styled.button `\n  border-radius: 999px;\n`\n\nconst RedButton = styled(Button) `\n  color: red;\n`\n\nconst GreenButton = styled(Button) `\n  color: green;\n`\n\nconst BlueButton = styled(Button) `\n  color: blue;\n`\n\nconst Dashboard = (\n  <div>\n    <RedButton />\n    <GreenButton />\n    <BlueButton />\n  </div>\n)\n")),(0,o.kt)("p",null,"The clear advantage of such working strategy is that all the styles are encapsulated, unlike traditional CSS where style rules can easily collide and be merged unintentionally.\nRemember that ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"styled-components")," operates per component, not globally"),"."),(0,o.kt)("p",null,"We will start off by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," and its Typescript types library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add styled-components @types/styled-components\n")),(0,o.kt)("p",null,"Now, let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," our ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatsListScreen"),":"),(0,o.kt)("h4",{id:"client-step-25-add-style-with-styled-components"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/fe9b213c61bc237a952ab38e25bbe44531f087b5"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.5: Add style with styled-components")),(0,o.kt)("h5",{id:"changed-srccomponentschatslistscreenindextsx"},"Changed src","/","components","/","ChatsListScreen","/","index.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,12 +1,17 @@\n \u250a 1\u250a 1\u250aimport React from 'react';\n \u250a 2\u250a 2\u250aimport ChatsNavbar from './ChatsNavbar';\n \u250a 3\u250a 3\u250aimport ChatsList from './ChatsList';\n+\u250a  \u250a 4\u250aimport styled from 'styled-components';\n+\u250a  \u250a 5\u250a\n+\u250a  \u250a 6\u250aconst Container = styled.div`\n+\u250a  \u250a 7\u250a  height: 100vh;\n+\u250a  \u250a 8\u250a`;\n \u250a 4\u250a 9\u250a\n \u250a 5\u250a10\u250aconst ChatsListScreen: React.FC = () => (\n-\u250a 6\u250a  \u250a  <div>\n+\u250a  \u250a11\u250a  <Container>\n \u250a 7\u250a12\u250a    <ChatsNavbar />\n \u250a 8\u250a13\u250a    <ChatsList />\n-\u250a 9\u250a  \u250a  </div>\n+\u250a  \u250a14\u250a  </Container>\n \u250a10\u250a15\u250a);\n \u250a11\u250a16\u250a\n \u250a12\u250a17\u250aexport default ChatsListScreen;\n")),(0,o.kt)("p",null,"Here you can see that we've created a new component called ",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),".\nThat component is extending ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," and adds some styles into it.\nThen we've replaced the ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," element with the new, enhanced ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),"."),(0,o.kt)("p",null,"With this we know for sure that the styles we applied for ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," won't affect any other component in our app."),(0,o.kt)("h4",{id:"client-step-25-add-style-with-styled-components-1"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/fe9b213c61bc237a952ab38e25bbe44531f087b5"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.5: Add style with styled-components")),(0,o.kt)("h5",{id:"changed-srccomponentschatslistscreenchatsnavbartsx-1"},"Changed src","/","components","/","ChatsListScreen","/","ChatsNavbar.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -1,6 +1,14 @@\n \u250a 1\u250a 1\u250aimport React from 'react';\n \u250a 2\u250a 2\u250aimport { Toolbar } from '@material-ui/core';\n+\u250a  \u250a 3\u250aimport styled from 'styled-components';\n \u250a 3\u250a 4\u250a\n-\u250a 4\u250a  \u250aconst ChatsNavbar: React.FC = () => <Toolbar>Whatsapp Clone</Toolbar>;\n+\u250a  \u250a 5\u250aconst Container = styled(Toolbar)`\n+\u250a  \u250a 6\u250a  background-color: var(--primary-bg);\n+\u250a  \u250a 7\u250a  color: var(--primary-text);\n+\u250a  \u250a 8\u250a  font-size: 20px;\n+\u250a  \u250a 9\u250a  line-height: 40px;\n+\u250a  \u250a10\u250a`;\n+\u250a  \u250a11\u250a\n+\u250a  \u250a12\u250aconst ChatsNavbar: React.FC = () => <Container>Whatsapp Clone</Container>;\n \u250a 5\u250a13\u250a\n \u250a 6\u250a14\u250aexport default ChatsNavbar;\n")),(0,o.kt)("p",null,"Here you can see we've done the same, but instead of extending a built-in component from styled-component,\nwe enhanced the ",(0,o.kt)("inlineCode",{parentName:"p"},"Toolbar")," component from `material-ui."),(0,o.kt)("p",null,"Notice that we also called the wrapper ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," but again it has no affect on any component outside of our specific component."),(0,o.kt)("p",null,"Let's finish this off by doing the same in our last component:"),(0,o.kt)("h4",{id:"client-step-25-add-style-with-styled-components-2"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/fe9b213c61bc237a952ab38e25bbe44531f087b5"},(0,o.kt)("strong",{parentName:"a"},"Client")," Step 2.5: Add style with styled-components")),(0,o.kt)("h5",{id:"changed-srccomponentschatslistscreenchatslisttsx-1"},"Changed src","/","components","/","ChatsListScreen","/","ChatsList.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"@@ -2,24 +2,81 @@\n \u250a 2\u250a 2\u250aimport { chats } from '../../db';\n \u250a 3\u250a 3\u250aimport moment from 'moment';\n \u250a 4\u250a 4\u250aimport { List, ListItem } from '@material-ui/core';\n+\u250a  \u250a 5\u250aimport styled from 'styled-components';\n \u250a 5\u250a 6\u250a\n-\u250a 6\u250a  \u250aconst ChatsList: React.FC = () => (\n-\u250a 7\u250a  \u250a  <div>\n-\u250a 8\u250a  \u250a    <List>\n+\u250a  \u250a 7\u250aconst Container = styled.div`\n+\u250a  \u250a 8\u250a  height: calc(100% - 56px);\n+\u250a  \u250a 9\u250a  overflow-y: overlay;\n+\u250a  \u250a10\u250a`;\n+\u250a  \u250a11\u250a\n+\u250a  \u250a12\u250aconst StyledList = styled(List)`\n+\u250a  \u250a13\u250a  padding: 0 !important;\n+\u250a  \u250a14\u250a`;\n+\u250a  \u250a15\u250a\n+\u250a  \u250a16\u250aconst StyledListItem = styled(ListItem)`\n+\u250a  \u250a17\u250a  height: 76px;\n+\u250a  \u250a18\u250a  padding: 0 15px;\n+\u250a  \u250a19\u250a  display: flex;\n+\u250a  \u250a20\u250a`;\n+\u250a  \u250a21\u250a\n+\u250a  \u250a22\u250aconst ChatPicture = styled.img`\n+\u250a  \u250a23\u250a  height: 50px;\n+\u250a  \u250a24\u250a  width: 50px;\n+\u250a  \u250a25\u250a  object-fit: cover;\n+\u250a  \u250a26\u250a  border-radius: 50%;\n+\u250a  \u250a27\u250a`;\n+\u250a  \u250a28\u250a\n+\u250a  \u250a29\u250aconst ChatInfo = styled.div`\n+\u250a  \u250a30\u250a  width: calc(100% - 60px);\n+\u250a  \u250a31\u250a  height: 46px;\n+\u250a  \u250a32\u250a  padding: 15px 0;\n+\u250a  \u250a33\u250a  margin-left: 10px;\n+\u250a  \u250a34\u250a  border-bottom: 0.5px solid silver;\n+\u250a  \u250a35\u250a  position: relative;\n+\u250a  \u250a36\u250a`;\n+\u250a  \u250a37\u250a\n+\u250a  \u250a38\u250aconst ChatName = styled.div`\n+\u250a  \u250a39\u250a  margin-top: 5px;\n+\u250a  \u250a40\u250a`;\n+\u250a  \u250a41\u250a\n+\u250a  \u250a42\u250aconst MessageContent = styled.div`\n+\u250a  \u250a43\u250a  color: gray;\n+\u250a  \u250a44\u250a  font-size: 15px;\n+\u250a  \u250a45\u250a  margin-top: 5px;\n+\u250a  \u250a46\u250a  text-overflow: ellipsis;\n+\u250a  \u250a47\u250a  overflow: hidden;\n+\u250a  \u250a48\u250a  white-space: nowrap;\n+\u250a  \u250a49\u250a`;\n+\u250a  \u250a50\u250a\n+\u250a  \u250a51\u250aconst MessageDate = styled.div`\n+\u250a  \u250a52\u250a  position: absolute;\n+\u250a  \u250a53\u250a  color: gray;\n+\u250a  \u250a54\u250a  top: 20px;\n+\u250a  \u250a55\u250a  right: 0;\n+\u250a  \u250a56\u250a  font-size: 13px;\n+\u250a  \u250a57\u250a`;\n+\u250a  \u250a58\u250a\n+\u250a  \u250a59\u250aconst ChatsList = () => (\n+\u250a  \u250a60\u250a  <Container>\n+\u250a  \u250a61\u250a    <StyledList>\n \u250a 9\u250a62\u250a      {chats.map((chat) => (\n-\u250a10\u250a  \u250a        <ListItem key={chat.id} button>\n-\u250a11\u250a  \u250a          <img src={chat.picture} alt=\"Profile\" />\n-\u250a12\u250a  \u250a          <div>{chat.name}</div>\n-\u250a13\u250a  \u250a          {chat.lastMessage && (\n-\u250a14\u250a  \u250a            <>\n-\u250a15\u250a  \u250a              <div>{chat.lastMessage.content}</div>\n-\u250a16\u250a  \u250a              <div>{moment(chat.lastMessage.createdAt).format('HH:mm')}</div>\n-\u250a17\u250a  \u250a            </>\n-\u250a18\u250a  \u250a          )}\n-\u250a19\u250a  \u250a        </ListItem>\n+\u250a  \u250a63\u250a        <StyledListItem key={chat.id} button>\n+\u250a  \u250a64\u250a          <ChatPicture src={chat.picture} alt=\"Profile\" />\n+\u250a  \u250a65\u250a          <ChatInfo>\n+\u250a  \u250a66\u250a            <ChatName>{chat.name}</ChatName>\n+\u250a  \u250a67\u250a            {chat.lastMessage && (\n+\u250a  \u250a68\u250a              <>\n+\u250a  \u250a69\u250a                <MessageContent>{chat.lastMessage.content}</MessageContent>\n+\u250a  \u250a70\u250a                <MessageDate>\n+\u250a  \u250a71\u250a                  {moment(chat.lastMessage.createdAt).format('HH:mm')}\n+\u250a  \u250a72\u250a                </MessageDate>\n+\u250a  \u250a73\u250a              </>\n+\u250a  \u250a74\u250a            )}\n+\u250a  \u250a75\u250a          </ChatInfo>\n+\u250a  \u250a76\u250a        </StyledListItem>\n \u250a20\u250a77\u250a      ))}\n-\u250a21\u250a  \u250a    </List>\n-\u250a22\u250a  \u250a  </div>\n+\u250a  \u250a78\u250a    </StyledList>\n+\u250a  \u250a79\u250a  </Container>\n \u250a23\u250a80\u250a);\n \u250a24\u250a81\u250a\n \u250a25\u250a82\u250aexport default ChatsList;\n")),(0,o.kt)("p",null,"Notice that we've changed the structure of the HTML of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatsList")," component.\nWe've added the ChatInfo to allow better alignment of the elements."),(0,o.kt)("p",null,"We're done styling ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatsListScreen"),". We will keep using the same principles to style the rest of the components in our application. The final result should look like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7648874/54141766-40baa100-4461-11e9-8dd0-59edcfdb3b84.png",alt:"screenshot"})),(0,o.kt)("p",null,"TODO: What do people think about ",(0,o.kt)("a",{parentName:"p",href:"https://www.styled-components.com/docs/tooling#babel-plugin"},"https://www.styled-components.com/docs/tooling#babel-plugin"),", should we use it here?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"th",href:"https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step1.md"},"< Previous Step")),(0,o.kt)("th",{parentName:"tr",align:"right"},(0,o.kt)("a",{parentName:"th",href:"https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step3.md"},"Next Step >"))))))}h.isMDXComponent=!0}}]);