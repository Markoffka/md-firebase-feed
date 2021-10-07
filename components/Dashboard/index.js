import { useEffect, useRef, useState } from 'react';
import { useList } from 'react-use';
import { ContextProvider, useContx } from './context';

import { Example } from './components/exampleui';

import {
  AdaptivityProvider,
  ConfigProvider,
  SplitCol,
  Card,
  AppRoot,
  View,
  Panel,
  Placeholder,
  Button,
  Header,
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';
function Dashboard(props) {
  const [posts, { filter, push, set }] = useList();
  const [selectedPost, setSelecterPost] = useState(null);
  const selectPost = (id) => {
    setSelecterPost(id);
  };

  const getUser = async (id) => {
    return await fetch('https://jsonplaceholder.typicode.com/users/' + id).then((user) => {
      console.log(user);
      return { name: 'some user' };
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => set(json))
      .catch((e) => {
        throw new Error(e);
      });
  });

  return (
    <ContextProvider value={{ PostsArray: posts, selectPost, getUser }}>
      <ConfigProvider platform="ios" theme="space_grey" appearance="dark">
        <AdaptivityProvider>
          <AppRoot>{props.children}</AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </ContextProvider>
  );
}

function Loading() {
  return (
    <>
      <View>
        <Header>Help</Header>
        <Panel>
          <Placeholder>Hello world</Placeholder>
        </Panel>
      </View>
    </>
  );
}

function Error(props) {
  return <>error</>;
}

function List(props) {
  return <Example />;
}

Dashboard.List = List;

export { Dashboard };
