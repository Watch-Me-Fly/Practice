---
sidebar_label: 'Step 6: Creating an app router and implementing a chat room'
sidebar_position: 6
---

# Step 6: Creating an app router and implementing a chat room

[//]: # (head-end)


In this chapter we will learn how to build a chat room screen.
In order to navigate between different screens, we will setup a router.

Since we're gonna have two screens in our app now - `ChatsListScreen` and `ChatRoomScreen`, we will need a router that will be able to alternate between them.
We will be using the [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) package to manage the routes of the application:

    $ yarn add react-router-dom @types/react-router-dom

And we will implement a router directly in the `<App />` component:

[{]: <helper> (diffStep 6.1 files="App" module="client")

#### [__Client__ Step 6.1: Add router](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/e3a561bf94ad6e55a8b75deb85a1f89a17a31571)

##### Changed src&#x2F;App.tsx
```diff
@@ -1,10 +1,18 @@
 ┊ 1┊ 1┊import React from 'react';
+┊  ┊ 2┊import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
+┊  ┊ 3┊import ChatRoomScreen from './components/ChatRoomScreen';
 ┊ 2┊ 4┊import ChatsListScreen from './components/ChatsListScreen';
 ┊ 3┊ 5┊
 ┊ 4┊ 6┊const App: React.FC = () => (
-┊ 5┊  ┊  <div>
-┊ 6┊  ┊    <ChatsListScreen />
-┊ 7┊  ┊  </div>
+┊  ┊ 7┊  <BrowserRouter>
+┊  ┊ 8┊    <Routes>
+┊  ┊ 9┊      <Route path="/chats" element={<ChatsListScreen />} />
+┊  ┊10┊      <Route path="/chats/:chatId" element={<ChatRoomScreen />} />
+┊  ┊12┊      <Route path="/" element={<Navigate to="/chats" />} />
+┊  ┊11┊    </Routes>
+┊  ┊13┊  </BrowserRouter>
 ┊ 8┊14┊);
 ┊ 9┊15┊
 ┊10┊16┊export default App;
```

[}]: #

The purpose of a router is to make route managing easy and declarative.
It will take care of managing the history within our app and parameterize certain screens according to our need.
Essentially it's a wrap around the `window.history` object which is also compatible with React.
I recommend you to go through the [official MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/History) if you're not yet familiar with the concept.

The `<Route />` component represents a path for a route in our application. Using the colon syntax (`:chatId`) we basically tell the router that the `/chat` route should be followed by a string whose value can later on be addressed via a parameter called `chatId` when navigating to the route. So here's a sum-up of the routes manifest:



*   `/chats` - will navigate to the `ChatsListScreen`.
*   `/chat/:chatId` - e.g. `/chat/1`, will navigate to the `ChatRoomScreen` and will parameterize it to show data which is related to chat ID 1.
*   Any other route will fallback to the `/chats` route which will redirect us to the `ChatsListScreen`.

Now we will implement the `ChatRoomScreen` so the router can function properly.
For now we will make it a plain screen which simply prints out the information of the chat that was clicked so we can have a complete flow,
and then we will take care of the rest.

To do so, we will first implement the `chat` query in our backend.
This would be a parameterized query that will provide us with a specific chat according to the received ID,
and it will be used by the new screen as soon as it is initialized.
First we would update the `Chat` type to contain a `messages` field:

[{]: <helper> (diffStep 4.1 files="typeDefs.graphql" module="server")

#### [__Server__ Step 4.1: Add messages field to Chat type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/e86306ad714705cf99d2e9b3520a16a9010144e1)

##### Changed schema&#x2F;typeDefs.graphql
```diff
@@ -12,6 +12,7 @@
 ┊12┊12┊  name: String!
 ┊13┊13┊  picture: URL
 ┊14┊14┊  lastMessage: Message
+┊  ┊15┊  messages: [Message!]!
 ┊15┊16┊}
 ┊16┊17┊
 ┊17┊18┊type Query {
```

[}]: #

Then we will create the appropriate resolver:

[{]: <helper> (diffStep 4.1 files="resolvers.ts" module="server")

#### [__Server__ Step 4.1: Add messages field to Chat type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/e86306ad714705cf99d2e9b3520a16a9010144e1)

##### Changed schema&#x2F;resolvers.ts
```diff
@@ -6,6 +6,10 @@
 ┊ 6┊ 6┊  URL: URLResolver,
 ┊ 7┊ 7┊
 ┊ 8┊ 8┊  Chat: {
+┊  ┊ 9┊    messages(chat: any) {
+┊  ┊10┊      return messages.filter(m => chat.messages.includes(m.id));
+┊  ┊11┊    },
+┊  ┊12┊
 ┊ 9┊13┊    lastMessage(chat: any) {
 ┊10┊14┊      return messages.find((m) => m.id === chat.lastMessage);
 ┊11┊15┊    },
```

[}]: #

And then we will update our DB mock to be aligned with these changes:

[{]: <helper> (diffStep 4.1 files="db" module="server")

#### [__Server__ Step 4.1: Add messages field to Chat type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/e86306ad714705cf99d2e9b3520a16a9010144e1)

##### Changed db.ts
```diff
@@ -29,23 +29,27 @@
 ┊29┊29┊    name: 'Ethan Gonzalez',
 ┊30┊30┊    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
 ┊31┊31┊    lastMessage: '1',
+┊  ┊32┊    messages: ['1'],
 ┊32┊33┊  },
 ┊33┊34┊  {
 ┊34┊35┊    id: '2',
 ┊35┊36┊    name: 'Bryan Wallace',
 ┊36┊37┊    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
 ┊37┊38┊    lastMessage: '2',
+┊  ┊39┊    messages: ['2'],
 ┊38┊40┊  },
 ┊39┊41┊  {
 ┊40┊42┊    id: '3',
 ┊41┊43┊    name: 'Avery Stewart',
 ┊42┊44┊    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
 ┊43┊45┊    lastMessage: '3',
+┊  ┊46┊    messages: ['3'],
 ┊44┊47┊  },
 ┊45┊48┊  {
 ┊46┊49┊    id: '4',
 ┊47┊50┊    name: 'Katie Peterson',
 ┊48┊51┊    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
 ┊49┊52┊    lastMessage: '4',
+┊  ┊53┊    messages: ['4'],
 ┊50┊54┊  },
 ┊51┊55┊];
```

[}]: #

This means that when we resolve `Chat.lastMessage`, we should get it directly from the `Chat.messages` field:

[{]: <helper> (diffStep 4.2 module="server")

#### [__Server__ Step 4.2: Resolve last message based on messages array](https://github.com/Urigo/WhatsApp-Clone-Server/commit/5ab032ee20b645e2cac162f4de7473b8dc898fce)

##### Changed db.ts
```diff
@@ -28,28 +28,24 @@
 ┊28┊28┊    id: '1',
 ┊29┊29┊    name: 'Ethan Gonzalez',
 ┊30┊30┊    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
-┊31┊  ┊    lastMessage: '1',
 ┊32┊31┊    messages: ['1'],
 ┊33┊32┊  },
 ┊34┊33┊  {
 ┊35┊34┊    id: '2',
 ┊36┊35┊    name: 'Bryan Wallace',
 ┊37┊36┊    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
-┊38┊  ┊    lastMessage: '2',
 ┊39┊37┊    messages: ['2'],
 ┊40┊38┊  },
 ┊41┊39┊  {
 ┊42┊40┊    id: '3',
 ┊43┊41┊    name: 'Avery Stewart',
 ┊44┊42┊    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
-┊45┊  ┊    lastMessage: '3',
 ┊46┊43┊    messages: ['3'],
 ┊47┊44┊  },
 ┊48┊45┊  {
 ┊49┊46┊    id: '4',
 ┊50┊47┊    name: 'Katie Peterson',
 ┊51┊48┊    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
-┊52┊  ┊    lastMessage: '4',
 ┊53┊49┊    messages: ['4'],
 ┊54┊50┊  },
 ┊55┊51┊];
```

##### Changed schema&#x2F;resolvers.ts
```diff
@@ -7,11 +7,13 @@
 ┊ 7┊ 7┊
 ┊ 8┊ 8┊  Chat: {
 ┊ 9┊ 9┊    messages(chat: any) {
-┊10┊  ┊      return messages.filter(m => chat.messages.includes(m.id));
+┊  ┊10┊      return messages.filter((m) => chat.messages.includes(m.id));
 ┊11┊11┊    },
 ┊12┊12┊
 ┊13┊13┊    lastMessage(chat: any) {
-┊14┊  ┊      return messages.find((m) => m.id === chat.lastMessage);
+┊  ┊14┊      const lastMessage = chat.messages[chat.messages.length - 1];
+┊  ┊15┊
+┊  ┊16┊      return messages.find((m) => m.id === lastMessage);
 ┊15┊17┊    },
 ┊16┊18┊  },
```

[}]: #

Now that we have an updated schema which is relevant to the new screen that we would like to add, we will declare a new query called `chat`:

[{]: <helper> (diffStep 4.3 files="schema/typeDefs" module="server")

#### [__Server__ Step 4.3: Add chat field to Query type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/310c97ff1c8af490a4f5972e1c8ded704343f9d7)

##### Changed schema&#x2F;typeDefs.graphql
```diff
@@ -17,4 +17,5 @@
 ┊17┊17┊
 ┊18┊18┊type Query {
 ┊19┊19┊  chats: [Chat!]!
+┊  ┊20┊  chat(chatId: ID!): Chat
 ┊20┊21┊}
```

[}]: #

Note that unlike the `chats` query, this time we have a parameter. The parameters are provided to the resolver function as the second parameter as a JSON. Using the provided parameter - the chat ID, we will find and return the relevant chat from the DB:

[{]: <helper> (diffStep 4.3 files="schema/resolvers" module="server")

#### [__Server__ Step 4.3: Add chat field to Query type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/310c97ff1c8af490a4f5972e1c8ded704343f9d7)

##### Changed schema&#x2F;resolvers.ts
```diff
@@ -21,6 +21,10 @@
 ┊21┊21┊    chats() {
 ┊22┊22┊      return chats;
 ┊23┊23┊    },
+┊  ┊24┊
+┊  ┊25┊    chat(root: any, { chatId }: any) {
+┊  ┊26┊      return chats.find(c => c.id === chatId);
+┊  ┊27┊    },
 ┊24┊28┊  },
 ┊25┊29┊};
 ┊26┊30┊
```

[}]: #

> More about the resolver signature can be read in [Apollo-GraphQL's official docs page](https://www.apollographql.com/docs/apollo-server/essentials/data.html#type-signature).

Now we will add a test suite:

[{]: <helper> (diffStep 4.3 files="tests/queries/getChat.test" module="server")

#### [__Server__ Step 4.3: Add chat field to Query type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/310c97ff1c8af490a4f5972e1c8ded704343f9d7)

##### Added tests&#x2F;queries&#x2F;getChat.test.ts
```diff
@@ -0,0 +1,33 @@
+┊  ┊ 1┊import { createTestClient } from 'apollo-server-testing';
+┊  ┊ 2┊import { ApolloServer, gql } from 'apollo-server-express';
+┊  ┊ 3┊import schema from '../../schema';
+┊  ┊ 4┊
+┊  ┊ 5┊describe('Query.chat', () => {
+┊  ┊ 6┊  it('should fetch specified chat', async () => {
+┊  ┊ 7┊    const server = new ApolloServer({ schema });
+┊  ┊ 8┊
+┊  ┊ 9┊    const { query } = createTestClient(server);
+┊  ┊10┊
+┊  ┊11┊    const res = await query({
+┊  ┊12┊      variables: { chatId: '1' },
+┊  ┊13┊      query: gql`
+┊  ┊14┊        query GetChat($chatId: ID!) {
+┊  ┊15┊          chat(chatId: $chatId) {
+┊  ┊16┊            id
+┊  ┊17┊            name
+┊  ┊18┊            picture
+┊  ┊19┊            lastMessage {
+┊  ┊20┊              id
+┊  ┊21┊              content
+┊  ┊22┊              createdAt
+┊  ┊23┊            }
+┊  ┊24┊          }
+┊  ┊25┊        }
+┊  ┊26┊      `,
+┊  ┊27┊    });
+┊  ┊28┊
+┊  ┊29┊    expect(res.data).toBeDefined();
+┊  ┊30┊    expect(res.errors).toBeUndefined();
+┊  ┊31┊    expect(res.data).toMatchSnapshot();
+┊  ┊32┊  });
+┊  ┊33┊});
```

[}]: #

We can observe the snapshot created by Jest to get a better understanding of how the response should look like:

[{]: <helper> (diffStep 4.3 files="__snapshot__" module="server")

#### [__Server__ Step 4.3: Add chat field to Query type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/310c97ff1c8af490a4f5972e1c8ded704343f9d7)



[}]: #

If you experience any TypeScript related issues with the following error:

```
Object literal may only specify known properties, and 'variables' does not exist in type 'Query'.
```

Add the following declaration file to your project:

[{]: <helper> (diffStep 4.3 files="types" module="server")

#### [__Server__ Step 4.3: Add chat field to Query type](https://github.com/Urigo/WhatsApp-Clone-Server/commit/310c97ff1c8af490a4f5972e1c8ded704343f9d7)

##### Added types&#x2F;apollo-server-testing.d.ts
```diff
@@ -0,0 +1,27 @@
+┊  ┊ 1┊declare module 'apollo-server-testing' {
+┊  ┊ 2┊  import { ApolloServerBase } from 'apollo-server-core';
+┊  ┊ 3┊  import { print, DocumentNode } from 'graphql';
+┊  ┊ 4┊  import { GraphQLResponse } from 'graphql-extensions';
+┊  ┊ 5┊
+┊  ┊ 6┊  type StringOrAst = string | DocumentNode;
+┊  ┊ 7┊
+┊  ┊ 8┊  // A query must not come with a mutation (and vice versa).
+┊  ┊ 9┊  type Query<TVariables> = {
+┊  ┊10┊    query: StringOrAst;
+┊  ┊11┊    mutation?: undefined;
+┊  ┊12┊    variables?: TVariables;
+┊  ┊13┊  };
+┊  ┊14┊
+┊  ┊15┊  type Mutation<TVariables> = {
+┊  ┊16┊    mutation: StringOrAst;
+┊  ┊17┊    query?: undefined;
+┊  ┊18┊    variables?: TVariables;
+┊  ┊19┊  };
+┊  ┊20┊
+┊  ┊21┊  export const createTestClient: <TVariables>(
+┊  ┊22┊    server: ApolloServerBase
+┊  ┊23┊  ) => {
+┊  ┊24┊    query: (query: Query<TVariables>) => Promise<GraphQLResponse>;
+┊  ┊25┊    mutate: (mutation: Mutation<TVariables>) => Promise<GraphQLResponse>;
+┊  ┊26┊  };
+┊  ┊27┊}
```

[}]: #

This is a [known issue](https://github.com/apollographql/apollo-server/issues/2172) in the `apollo-server-testing` package and has a pending [fix PR](https://github.com/apollographql/apollo-server/pull/2307).
Now getting back to the client, let's implement a basic version of the `ChatRoomScreen` where we will fetch the new query and print it to the screen:

[{]: <helper> (diffStep 6.2 module="client")

#### [__Client__ Step 6.2: Add basic ChatRoomScreen](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/d13d89f74a84758a6fbd675ad2e20bf763100cd7)



##### Added src&#x2F;components&#x2F;ChatRoomScreen&#x2F;index.tsx
```diff
@@ -0,0 +1,76 @@
+┊  ┊ 1┊import React from 'react';
+┊  ┊ 2┊import { useMemo, useState } from 'react';
+┊  ┊ 3┊
+┊  ┊ 4┊const getChatQuery = `
+┊  ┊ 5┊  query GetChat($chatId: ID!) {
+┊  ┊ 6┊    chat(chatId: $chatId) {
+┊  ┊ 7┊      id
+┊  ┊ 8┊      name
+┊  ┊ 9┊      picture
+┊  ┊10┊      messages {
+┊  ┊11┊        id
+┊  ┊12┊        content
+┊  ┊13┊        createdAt
+┊  ┊14┊      }
+┊  ┊15┊    }
+┊  ┊16┊  }
+┊  ┊17┊`;
+┊  ┊18┊
+┊  ┊22┊
+┊  ┊23┊interface ChatQueryMessage {
+┊  ┊24┊  id: string;
+┊  ┊25┊  content: string;
+┊  ┊26┊  createdAt: Date;
+┊  ┊27┊}
+┊  ┊28┊
+┊  ┊29┊interface ChatQueryResult {
+┊  ┊30┊  id: string;
+┊  ┊31┊  name: string;
+┊  ┊32┊  picture: string;
+┊  ┊33┊  messages: Array<ChatQueryMessage>;
+┊  ┊34┊}
+┊  ┊35┊
+┊  ┊36┊type OptionalChatQueryResult = ChatQueryResult | null;
+┊  ┊37┊
+┊  ┊38┊const ChatRoomScreen: React.FC = () => {
+┊  ┊39┊  const params = useParams<{ chatId: string }>();
+┊  ┊40┊  const { chatId } = params;
+┊  ┊41┊  useMemo(async () => {
+┊  ┊42┊    const body = await fetch(`${process.env.REACT_APP_SERVER_URL}/graphql`, {
+┊  ┊43┊      method: 'POST',
+┊  ┊44┊      headers: {
+┊  ┊45┊        'Content-Type': 'application/json',
+┊  ┊46┊      },
+┊  ┊47┊      body: JSON.stringify({
+┊  ┊48┊        query: getChatQuery,
+┊  ┊49┊        variables: { chatId },
+┊  ┊50┊      }),
+┊  ┊51┊    });
+┊  ┊52┊    const {
+┊  ┊53┊      data: { chat },
+┊  ┊54┊    } = await body.json();
+┊  ┊55┊    setChat(chat);
+┊  ┊56┊  }, [chatId]);
+┊  ┊57┊
+┊  ┊58┊  if (!chat) return null;
+┊  ┊59┊
+┊  ┊60┊  return (
+┊  ┊61┊    <div>
+┊  ┊62┊      <img src={chat.picture} alt="Profile" />
+┊  ┊63┊      <div>{chat.name}</div>
+┊  ┊64┊      <ul>
+┊  ┊65┊        {chat.messages.map((message) => (
+┊  ┊66┊          <li key={message.id}>
+┊  ┊67┊            <div>{message.content}</div>
+┊  ┊68┊            <div>{message.createdAt}</div>
+┊  ┊69┊          </li>
+┊  ┊70┊        ))}
+┊  ┊71┊      </ul>
+┊  ┊72┊    </div>
+┊  ┊73┊  );
+┊  ┊74┊};
+┊  ┊75┊
+┊  ┊76┊export default ChatRoomScreen;
```

[}]: #

Note how we used the `useParams` hook in `const params = useParams()` to get the selected chat ID.
The `params` value is provided to us by the `<Routes />` component, which is a parent of our `ChatRoomScreen` component. `<Routes />` is called a **provider** component. A provider defines custom hooks that give access to the values it provides, and exposes these hooks to all its children components (deeply: its children's children can use these hooks too).
Thus, you need to be a child of `<Routes />` component in order to call `useParams`. Try to call it outside a `Routes` context, and you'll be facing an error.

More about `useParams` can be read in the [official React Router docs page](https://reactrouter.com/docs/en/v6/hooks/use-params).
More about context providers on the [official React docs](https://en.reactjs.org/docs/context.html)

So we need to make sure the interface of the ChatRoom component defines those requierements right.

Next we will call our server from the component with the right query and store the result on a `useState` hook.

Now, because we are using GraphQL, we know the types of the result that we are going to get, so let's create Typescript interfaces that
describe the data we're going to get from the server.

If you'll run the application and type `/chats/1` in the URL bar, this is what you should see on the screen:

![naked-chat](https://user-images.githubusercontent.com/7648874/54664314-d4096b80-4b1e-11e9-9e06-1323cf7b0abe.png)

The view has no styling at all but it should be fixed in a moment.
To make navigation more convenient we will add an `onClick` listener for each chat item in the `ChatsList`.
Here is another use of context provider. Using the [navigate](https://reactrouter.com/docs/en/v6/hooks/use-navigate#usenavigate) object, provided to us by the `<BroswerRouter />` provider component via the `useNavigate` hook, we will navigate to the correlated `ChatRoomScreen`:


[{]: <helper> (diffStep 6.3 module="client")

#### [__Client__ Step 6.3: Navigate to chat on click](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/7eb7584c64e9658c9ac4c2c6fb6c1ad41cc4361c)


##### Changed src&#x2F;components&#x2F;ChatsListScreen&#x2F;ChatsList.tsx
```diff
@@ -2,7 +2,8 @@
 ┊2┊2┊import moment from 'moment';
 ┊3┊3┊import { List, ListItem } from '@material-ui/core';
 ┊4┊4┊import styled from 'styled-components';
-┊5┊ ┊import { useState, useMemo } from 'react';
+┊ ┊5┊import { useCallback, useState, useMemo } from 'react';
+┊ ┊5┊import { useNavigate } from 'react-router-dom';
 ┊6┊6┊
 ┊7┊7┊const Container = styled.div`
 ┊8┊8┊  height: calc(100% - 56px);
```
```diff
@@ -71,7 +72,11 @@
 ┊71┊71┊  }
 ┊72┊72┊`;
 ┊73┊73┊
+┊  ┊74┊const ChatsList: React.FC = () => {
+┊  ┊75┊  const navigate = useNavigate();
 ┊75┊75┊  const [chats, setChats] = useState<any[]>([]);
 ┊76┊76┊
 ┊77┊77┊  useMemo(async () => {
```
```diff
@@ -88,11 +93,22 @@
 ┊ 88┊ 93┊    setChats(chats);
 ┊ 89┊ 94┊  }, []);
 ┊ 90┊ 95┊
+┊   ┊ 96┊  const navToChat = useCallback(
+┊   ┊ 97┊    (chat) => {
+┊   ┊ 98┊      navigate(`${chat.id}`);
+┊   ┊ 99┊    },
+┊   ┊100┊    [navigate]
+┊   ┊101┊  );
+┊   ┊102┊
 ┊ 91┊103┊  return (
 ┊ 92┊104┊    <Container>
 ┊ 93┊105┊      <StyledList>
 ┊ 94┊106┊        {chats.map((chat) => (
-┊ 95┊   ┊          <StyledListItem key={chat.id} button>
+┊   ┊107┊          <StyledListItem
+┊   ┊108┊            key={chat.id}
+┊   ┊109┊            data-testid="chat"
+┊   ┊110┊            button
+┊   ┊111┊            onClick={navToChat.bind(null, chat)}>
 ┊ 96┊112┊            <ChatPicture
 ┊ 97┊113┊              data-testid="picture"
 ┊ 98┊114┊              src={chat.picture}
```

The `useNavigate` object provides a `navigate` function which changes url. It works relatively to the path specified by the closest `<Route path={'my-closest-parent-path'}/>` parent. By default, `navigate('new-path')` adds the input string preced by a `/` to the current url. in this generic case, it will lead to the path `'/my-closest-parent-path/new-path'`.

More use of `useNavigate` in the [official doc](https://reactrouter.com/docs/en/v6/hooks/use-navigate)

In our specific case, if our selected chat has an id `1`, then  `navigate('${chat.id}')` found in ChatList, which closest Route parent is `<Route path={'chats'}/>`, will lead to url `/chats/1`.


The final screen will be composed out of 3 components:

*   A navigation bar.
*   A messages list.
*   A message input.

We will create a new directory under the path `public/assets` and inside we will download and place a couple of assets which are necessary for our view:

*   [chat-background.jpg](https://raw.githubusercontent.com/Urigo/WhatsApp-Clone-Client-Angular/master/src/assets/chat-background.jpg)
*   [message-mine.png](https://raw.githubusercontent.com/Urigo/WhatsApp-Clone-Client-Angular/master/src/assets/message-mine.png)

In the main `index.ts` file of the screen we will simply import all 3 in the right order.
We will start with the most simple one - the `ChatRoomNavbar`.
The navbar should show the picture of the chat we're currently at and its name,
along with a back button that will bring us back to the `ChatsListScreen`:

[{]: <helper> (diffStep 6.6 files="ChatNavbar" module="client")

#### [__Client__ Step 6.6: Implement ChatRoomScreen components](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/d75927b70aa0e2f66bd30d907578a58bd40d8ba3)

##### Added src&#x2F;components&#x2F;ChatRoomScreen&#x2F;ChatNavbar.tsx
```diff
@@ -0,0 +1,59 @@
+┊  ┊ 1┊import Button from '@material-ui/core/Button';
+┊  ┊ 2┊import Toolbar from '@material-ui/core/Toolbar';
+┊  ┊ 3┊import ArrowBackIcon from '@material-ui/icons/ArrowBack';
+┊  ┊ 4┊import React from 'react';
+┊  ┊ 5┊import { useCallback } from 'react';
+┊  ┊ 6┊import styled from 'styled-components';
+┊  ┊ 7┊import { useNavigate } from 'react-router-dom';
+┊  ┊ 8┊import { ChatQueryResult } from './index';
+┊  ┊ 9┊
+┊  ┊10┊const Container = styled(Toolbar)`
+┊  ┊11┊  padding: 0;
+┊  ┊12┊  display: flex;
+┊  ┊13┊  flex-direction: row;
+┊  ┊14┊  background-color: var(--primary-bg);
+┊  ┊15┊  color: var(--primary-text);
+┊  ┊16┊`;
+┊  ┊17┊
+┊  ┊18┊const BackButton = styled(Button)`
+┊  ┊19┊  svg {
+┊  ┊20┊    color: var(--primary-text);
+┊  ┊21┊  }
+┊  ┊22┊`;
+┊  ┊23┊
+┊  ┊24┊const Picture = styled.img`
+┊  ┊25┊  height: 40px;
+┊  ┊26┊  width: 40px;
+┊  ┊27┊  margin-top: 3px;
+┊  ┊28┊  margin-left: -22px;
+┊  ┊29┊  object-fit: cover;
+┊  ┊30┊  padding: 5px;
+┊  ┊31┊  border-radius: 50%;
+┊  ┊32┊`;
+┊  ┊33┊
+┊  ┊34┊const Name = styled.div`
+┊  ┊35┊  line-height: 56px;
+┊  ┊36┊`;
+┊  ┊37┊
+┊  ┊38┊interface ChatNavbarProps {
+┊  ┊40┊  chat: ChatQueryResult;
+┊  ┊41┊}
+┊  ┊42┊
+┊  ┊43┊const ChatNavbar: React.FC<ChatNavbarProps> = ({ chat }) => {
+┊  ┊44┊  const navigate = useNavigate();
+┊  ┊44┊  const navBack = useCallback(() => {
+┊  ┊45┊    navigate('/chats', { replace: true });
+┊  ┊46┊  }, [navigate]);
+┊  ┊47┊
+┊  ┊48┊  return (
+┊  ┊49┊    <Container>
+┊  ┊50┊      <BackButton onClick={navBack}>
+┊  ┊51┊        <ArrowBackIcon />
+┊  ┊52┊      </BackButton>
+┊  ┊53┊      <Picture src={chat.picture} />
+┊  ┊54┊      <Name>{chat.name}</Name>
+┊  ┊55┊    </Container>
+┊  ┊56┊  );
+┊  ┊57┊};
+┊  ┊58┊
+┊  ┊59┊export default ChatNavbar;
```

Note that we use `navigate` function in another way here. Our goal is to go back to a previous url, thus we need to replace our reference path, not to append a new path to it. The second optional input of [navigate](https://reactrouter.com/docs/en/v6/hooks/use-navigate) function set as `{ replace: true }` gives this option.



Next, would be the `MesagesList` component, where we will see a scrollable list of all the messages of the active chat:

[{]: <helper> (diffStep 6.6 files="MessagesList" module="client")

#### [__Client__ Step 6.6: Implement ChatRoomScreen components](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/d75927b70aa0e2f66bd30d907578a58bd40d8ba3)

##### Added src&#x2F;components&#x2F;ChatRoomScreen&#x2F;MessagesList.tsx
```diff
@@ -0,0 +1,78 @@
+┊  ┊ 1┊import moment from 'moment';
+┊  ┊ 2┊import React from 'react';
+┊  ┊ 3┊import styled from 'styled-components';
+┊  ┊ 4┊import { ChatQueryMessage } from './index';
+┊  ┊ 5┊
+┊  ┊ 6┊const Container = styled.div`
+┊  ┊ 7┊  display: block;
+┊  ┊ 8┊  flex: 2;
+┊  ┊ 9┊  overflow-y: overlay;
+┊  ┊10┊  padding: 0 15px;
+┊  ┊11┊`;
+┊  ┊12┊
+┊  ┊13┊const MessageItem = styled.div`
+┊  ┊14┊  float: right;
+┊  ┊15┊  background-color: #dcf8c6;
+┊  ┊16┊  display: inline-block;
+┊  ┊17┊  position: relative;
+┊  ┊18┊  max-width: 100%;
+┊  ┊19┊  border-radius: 7px;
+┊  ┊20┊  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
+┊  ┊21┊  margin-top: 10px;
+┊  ┊22┊  margin-bottom: 10px;
+┊  ┊23┊  clear: both;
+┊  ┊24┊
+┊  ┊25┊  &::after {
+┊  ┊26┊    content: '';
+┊  ┊27┊    display: table;
+┊  ┊28┊    clear: both;
+┊  ┊29┊  }
+┊  ┊30┊
+┊  ┊31┊  &::before {
+┊  ┊32┊    background-image: url(/assets/message-mine.png);
+┊  ┊33┊    content: '';
+┊  ┊34┊    position: absolute;
+┊  ┊35┊    bottom: 3px;
+┊  ┊36┊    width: 12px;
+┊  ┊37┊    height: 19px;
+┊  ┊38┊    right: -11px;
+┊  ┊39┊    background-position: 50% 50%;
+┊  ┊40┊    background-repeat: no-repeat;
+┊  ┊41┊    background-size: contain;
+┊  ┊42┊  }
+┊  ┊43┊`;
+┊  ┊44┊
+┊  ┊45┊const Contents = styled.div`
+┊  ┊46┊  padding: 5px 7px;
+┊  ┊47┊  word-wrap: break-word;
+┊  ┊48┊
+┊  ┊49┊  &::after {
+┊  ┊50┊    content: ' \\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0';
+┊  ┊51┊    display: inline;
+┊  ┊52┊  }
+┊  ┊53┊`;
+┊  ┊54┊
+┊  ┊55┊const Timestamp = styled.div`
+┊  ┊56┊  position: absolute;
+┊  ┊57┊  bottom: 2px;
+┊  ┊58┊  right: 7px;
+┊  ┊59┊  color: gray;
+┊  ┊60┊  font-size: 12px;
+┊  ┊61┊`;
+┊  ┊62┊
+┊  ┊63┊interface MessagesListProps {
+┊  ┊64┊  messages: Array<ChatQueryMessage>;
+┊  ┊65┊}
+┊  ┊66┊
+┊  ┊67┊const MessagesList: React.FC<MessagesListProps> = ({ messages }) => (
+┊  ┊68┊  <Container>
+┊  ┊69┊    {messages.map((message: any) => (
+┊  ┊70┊      <MessageItem key={message.id}>
+┊  ┊71┊        <Contents>{message.content}</Contents>
+┊  ┊72┊        <Timestamp>{moment(message.createdAt).format('HH:mm')}</Timestamp>
+┊  ┊73┊      </MessageItem>
+┊  ┊74┊    ))}
+┊  ┊75┊  </Container>
+┊  ┊76┊);
+┊  ┊77┊
+┊  ┊78┊export default MessagesList;
```

[}]: #

And finally, would be the `MessageInput` component which will trigger an event whenever we type and submit a new message:

[{]: <helper> (diffStep 6.6 files="MessageInput" module="client")

#### [__Client__ Step 6.6: Implement ChatRoomScreen components](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/d75927b70aa0e2f66bd30d907578a58bd40d8ba3)

##### Added src&#x2F;components&#x2F;ChatRoomScreen&#x2F;MessageInput.tsx
```diff
@@ -0,0 +1,53 @@
+┊  ┊ 1┊import Button from '@material-ui/core/Button';
+┊  ┊ 2┊import SendIcon from '@material-ui/icons/Send';
+┊  ┊ 3┊import React from 'react';
+┊  ┊ 4┊import styled from 'styled-components';
+┊  ┊ 5┊
+┊  ┊ 6┊const Container = styled.div`
+┊  ┊ 7┊  display: flex;
+┊  ┊ 8┊  height: 50px;
+┊  ┊ 9┊  padding: 5px;
+┊  ┊10┊  width: calc(100% - 10px);
+┊  ┊11┊`;
+┊  ┊12┊
+┊  ┊13┊const ActualInput = styled.input`
+┊  ┊14┊  width: calc(100% - 50px);
+┊  ┊15┊  border: none;
+┊  ┊16┊  border-radius: 999px;
+┊  ┊17┊  padding: 10px;
+┊  ┊18┊  padding-left: 20px;
+┊  ┊19┊  padding-right: 20px;
+┊  ┊20┊  font-size: 15px;
+┊  ┊21┊  outline: none;
+┊  ┊22┊  box-shadow: 0 1px silver;
+┊  ┊23┊  font-size: 18px;
+┊  ┊24┊  line-height: 45px;
+┊  ┊25┊`;
+┊  ┊26┊
+┊  ┊27┊const SendButton = styled(Button)`
+┊  ┊28┊  min-width: 50px !important;
+┊  ┊29┊  width: 50px !important;
+┊  ┊30┊  border-radius: 999px !important;
+┊  ┊31┊  background-color: var(--primary-bg) !important;
+┊  ┊32┊  margin: 0 5px !important;
+┊  ┊33┊  margin-right: 0 !important;
+┊  ┊34┊  color: white !important;
+┊  ┊35┊  padding-left: 20px !important;
+┊  ┊36┊
+┊  ┊37┊  svg {
+┊  ┊38┊    margin-left: -3px;
+┊  ┊39┊  }
+┊  ┊40┊`;
+┊  ┊41┊
+┊  ┊42┊const MessageInput: React.FC = () => {
+┊  ┊43┊  return (
+┊  ┊44┊    <Container>
+┊  ┊45┊      <ActualInput type="text" placeholder="Type a message" />
+┊  ┊46┊      <SendButton variant="contained" color="primary">
+┊  ┊47┊        <SendIcon />
+┊  ┊48┊      </SendButton>
+┊  ┊49┊    </Container>
+┊  ┊50┊  );
+┊  ┊51┊};
+┊  ┊52┊
+┊  ┊53┊export default MessageInput;
```

[}]: #

Now that we have all 3 components, we will put them all together in the main `index.ts` file:

[{]: <helper> (diffStep 6.6 files="index" module="client")

#### [__Client__ Step 6.6: Implement ChatRoomScreen components](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/d75927b70aa0e2f66bd30d907578a58bd40d8ba3)

##### Changed src&#x2F;components&#x2F;ChatRoomScreen&#x2F;index.tsx
```diff
@@ -1,5 +1,17 @@
 ┊ 1┊ 1┊import React from 'react';
 ┊ 2┊ 2┊import { useMemo, useState } from 'react';
+┊  ┊ 3┊import styled from 'styled-components';
+┊  ┊ 4┊import ChatNavbar from './ChatNavbar';
+┊  ┊ 5┊import MessageInput from './MessageInput';
+┊  ┊ 6┊import MessagesList from './MessagesList';
+┊  ┊ 7┊
+┊  ┊ 8┊
+┊  ┊ 9┊const Container = styled.div`
+┊  ┊10┊  background: url(/assets/chat-background.jpg);
+┊  ┊11┊  display: flex;
+┊  ┊12┊  flex-flow: column;
+┊  ┊13┊  height: 100vh;
+┊  ┊14┊`;
 ┊ 3┊15┊
 ┊ 4┊16┊const getChatQuery = `
 ┊ 5┊17┊  query GetChat($chatId: ID!) {
```
```diff
@@ -18,15 +30,16 @@
 ┊18┊30┊
 ┊19┊31┊interface ChatRoomScreenParams {
 ┊20┊32┊  chatId: string;
+┊  ┊33┊  history: History;
 ┊21┊34┊}
 ┊22┊35┊
-┊23┊  ┊interface ChatQueryMessage {
+┊  ┊36┊export interface ChatQueryMessage {
 ┊24┊37┊  id: string;
 ┊25┊38┊  content: string;
 ┊26┊39┊  createdAt: Date;
 ┊27┊40┊}
 ┊28┊41┊
-┊29┊  ┊interface ChatQueryResult {
+┊  ┊42┊export interface ChatQueryResult {
 ┊30┊43┊  id: string;
 ┊31┊44┊  name: string;
 ┊32┊45┊  picture: string;
```
```diff
@@ -58,18 +74,11 @@
 ┊58┊74┊  if (!chat) return null;
 ┊59┊75┊
 ┊60┊76┊  return (
-┊61┊  ┊    <div>
-┊62┊  ┊      <img src={chat.picture} alt="Profile" />
-┊63┊  ┊      <div>{chat.name}</div>
-┊64┊  ┊      <ul>
-┊65┊  ┊        {chat.messages.map((message) => (
-┊66┊  ┊          <li key={message.id}>
-┊67┊  ┊            <div>{message.content}</div>
-┊68┊  ┊            <div>{message.createdAt}</div>
-┊69┊  ┊          </li>
-┊70┊  ┊        ))}
-┊71┊  ┊      </ul>
-┊72┊  ┊    </div>
+┊  ┊77┊    <Container>
+┊  ┊78┊      <ChatNavbar chat={chat} />
+┊  ┊79┊      {chat.messages && <MessagesList messages={chat.messages} />}
+┊  ┊80┊      <MessageInput />
+┊  ┊81┊    </Container>
 ┊73┊82┊  );
 ┊74┊83┊};
```



The view is complete! However the `MessageInput` is not bound to our messages list.
We will use the triggered callback to update the chat state, whose changes should appear in the `MessagesList` component in the following render phase:

[{]: <helper> (diffStep 6.7 module="client")

#### [__Client__ Step 6.7: Define onSendMessage callback](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/ea1eb6d15d05d974e76c636c2d24d034f16a6644)

##### Changed src&#x2F;components&#x2F;ChatRoomScreen&#x2F;MessageInput.tsx
```diff
@@ -2,6 +2,7 @@
 ┊2┊2┊import SendIcon from '@material-ui/icons/Send';
 ┊3┊3┊import React from 'react';
 ┊4┊4┊import styled from 'styled-components';
+┊ ┊5┊import { useState } from 'react';
 ┊5┊6┊
 ┊6┊7┊const Container = styled.div`
 ┊7┊8┊  display: flex;
```
```diff
@@ -39,11 +40,43 @@
 ┊39┊40┊  }
 ┊40┊41┊`;
 ┊41┊42┊
-┊42┊  ┊const MessageInput: React.FC = () => {
+┊  ┊43┊interface MessageInputProps {
+┊  ┊44┊  onSendMessage(content: string): any;
+┊  ┊45┊}
+┊  ┊46┊
+┊  ┊47┊const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
+┊  ┊48┊  const [message, setMessage] = useState('');
+┊  ┊49┊
+┊  ┊50┊  const onKeyPress = (e: any) => {
+┊  ┊51┊    if (e.charCode === 13) {
+┊  ┊52┊      submitMessage();
+┊  ┊53┊    }
+┊  ┊54┊  };
+┊  ┊55┊
+┊  ┊56┊  const onChange = ({ target }: any) => {
+┊  ┊57┊    setMessage(target.value);
+┊  ┊58┊  };
+┊  ┊59┊
+┊  ┊60┊  const submitMessage = () => {
+┊  ┊61┊    if (!message) return;
+┊  ┊62┊
+┊  ┊63┊    setMessage('');
+┊  ┊64┊
+┊  ┊65┊    if (typeof onSendMessage === 'function') {
+┊  ┊66┊      onSendMessage(message);
+┊  ┊67┊    }
+┊  ┊68┊  };
+┊  ┊69┊
 ┊43┊70┊  return (
 ┊44┊71┊    <Container>
-┊45┊  ┊      <ActualInput type="text" placeholder="Type a message" />
-┊46┊  ┊      <SendButton variant="contained" color="primary">
+┊  ┊72┊      <ActualInput
+┊  ┊73┊        type="text"
+┊  ┊74┊        placeholder="Type a message"
+┊  ┊75┊        value={message}
+┊  ┊76┊        onKeyPress={onKeyPress}
+┊  ┊77┊        onChange={onChange}
+┊  ┊78┊      />
+┊  ┊79┊      <SendButton variant="contained" color="primary" onClick={submitMessage}>
 ┊47┊80┊        <SendIcon />
 ┊48┊81┊      </SendButton>
 ┊49┊82┊    </Container>
```

##### Changed src&#x2F;components&#x2F;ChatRoomScreen&#x2F;index.tsx
```diff
@@ -1,5 +1,5 @@
 ┊1┊1┊import React from 'react';
-┊2┊ ┊import { useMemo, useState } from 'react';
+┊ ┊2┊import { useCallback, useMemo, useState } from 'react';
 ┊3┊3┊import styled from 'styled-components';
 ┊4┊4┊import ChatNavbar from './ChatNavbar';
 ┊5┊5┊import MessageInput from './MessageInput';
```
```diff
@@ -71,13 +71,31 @@
 ┊ 71┊ 71┊    setChat(chat);
 ┊ 72┊ 72┊  }, [chatId]);
 ┊ 73┊ 73┊
+┊   ┊ 74┊  const onSendMessage = useCallback(
+┊   ┊ 75┊    (content: string) => {
+┊   ┊ 76┊      if (!chat) return null;
+┊   ┊ 77┊
+┊   ┊ 78┊      const message = {
+┊   ┊ 79┊        id: (chat.messages.length + 10).toString(),
+┊   ┊ 80┊        createdAt: new Date(),
+┊   ┊ 81┊        content,
+┊   ┊ 82┊      };
+┊   ┊ 83┊
+┊   ┊ 84┊      setChat({
+┊   ┊ 85┊        ...chat,
+┊   ┊ 86┊        messages: chat.messages.concat(message),
+┊   ┊ 87┊      });
+┊   ┊ 88┊    },
+┊   ┊ 89┊    [chat]
+┊   ┊ 90┊  );
+┊   ┊ 91┊
 ┊ 74┊ 92┊  if (!chat) return null;
 ┊ 75┊ 93┊
 ┊ 76┊ 94┊  return (
 ┊ 77┊ 95┊    <Container>
 ┊ 78┊ 96┊      <ChatNavbar chat={chat} />
 ┊ 79┊ 97┊      {chat.messages && <MessagesList messages={chat.messages} />}
-┊ 80┊   ┊      <MessageInput />
+┊   ┊ 98┊      <MessageInput onSendMessage={onSendMessage} />
 ┊ 81┊ 99┊    </Container>
 ┊ 82┊100┊  );
 ┊ 83┊101┊};
```

[}]: #

This is how the entire flow should look like:

![flow-demo](https://user-images.githubusercontent.com/7648874/54739741-27012280-4bf4-11e9-97cb-c715482e2e70.gif)

An edge case that should be taken care of is when the messages list length in the view exceeds the length of the container,
in which case we will have to scroll down to the bottom of the view.
This way we can keep track of the most recent message.
We will use `ReactDOM` to retrieve the native HTML element of the container and change the position of the scroller whenever a messages was sent:

[{]: <helper> (diffStep 6.8 module="client")

#### [__Client__ Step 6.8: Reset scroller on message sent](https://github.com/Urigo/WhatsApp-Clone-Client-React/commit/53ec8c037f7686068d4f06062838c8cd7c8df88a)

##### Changed src&#x2F;components&#x2F;ChatRoomScreen&#x2F;MessagesList.tsx
```diff
@@ -1,5 +1,7 @@
 ┊1┊1┊import moment from 'moment';
 ┊2┊2┊import React from 'react';
+┊ ┊3┊import { useEffect, useRef } from 'react';
+┊ ┊4┊import ReactDOM from 'react-dom';
 ┊3┊5┊import styled from 'styled-components';
 ┊4┊6┊import { ChatQueryMessage } from './index';
 ┊5┊7┊
```
```diff
@@ -64,15 +66,26 @@
 ┊64┊66┊  messages: Array<ChatQueryMessage>;
 ┊65┊67┊}
 ┊66┊68┊
-┊67┊  ┊const MessagesList: React.FC<MessagesListProps> = ({ messages }) => (
-┊68┊  ┊  <Container>
-┊69┊  ┊    {messages.map((message: any) => (
-┊70┊  ┊      <MessageItem key={message.id}>
-┊71┊  ┊        <Contents>{message.content}</Contents>
-┊72┊  ┊        <Timestamp>{moment(message.createdAt).format('HH:mm')}</Timestamp>
-┊73┊  ┊      </MessageItem>
-┊74┊  ┊    ))}
-┊75┊  ┊  </Container>
-┊76┊  ┊);
+┊  ┊69┊const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
+┊  ┊70┊  const selfRef = useRef(null);
+┊  ┊71┊
+┊  ┊72┊  useEffect(() => {
+┊  ┊73┊    if (!selfRef.current) return;
+┊  ┊74┊
+┊  ┊75┊    const selfDOMNode = ReactDOM.findDOMNode(selfRef.current) as HTMLElement;
+┊  ┊76┊    selfDOMNode.scrollTop = Number.MAX_SAFE_INTEGER;
+┊  ┊77┊  }, [messages.length]);
+┊  ┊78┊
+┊  ┊79┊  return (
+┊  ┊80┊    <Container ref={selfRef}>
+┊  ┊81┊      {messages.map((message: any) => (
+┊  ┊82┊        <MessageItem key={message.id}>
+┊  ┊83┊          <Contents>{message.content}</Contents>
+┊  ┊84┊          <Timestamp>{moment(message.createdAt).format('HH:mm')}</Timestamp>
+┊  ┊85┊        </MessageItem>
+┊  ┊86┊      ))}
+┊  ┊87┊    </Container>
+┊  ┊88┊  );
+┊  ┊89┊};
 ┊77┊90┊
 ┊78┊91┊export default MessagesList;
```

[}]: #


There are many things which are incomplete in the current implementation. The functionality exists in the UI, but no messages are really being sent and stored in the database. In the next chapters we will learn how to:



*   Cache query results with Apollo-Client.
*   Send messages with GraphQL mutations

--------
TODO: Add this to router chapter - https://www.pluralsight.com/guides/react-router-typescript
And this - https://stackoverflow.com/questions/49342390/typescript-how-to-add-type-check-for-history-object-in-react

TODO: https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

TODO: https://www.cypress.io/blog/2019/05/13/code-create-react-app-v3-and-its-cypress-tests-using-typescript/#

TODO: Schema says there’s always an array with messages, is it really true? Is newly created chat resolves an empty array, null will throw an error?

TODO: Same thing with `chats: [Chat!]!`, do we always return an array here?

TODO: _root and type all resolvers

TODO: How to import schema together with jest, should I changed from ts-jest?

TODO: remove all that part including the file in the commit

TODO: Add all the new files and changes on 6.6

TODO: Add all the new files and changes on 6.7

[//]: # (foot-start)

[{]: <helper> (navStep)

| [< Previous Step](https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step5.md) | [Next Step >](https://github.com/Urigo/WhatsApp-Clone-Tutorial/tree/master@next/.tortilla/manuals/views/step7.md) |
|:--------------------------------|--------------------------------:|

[}]: #
