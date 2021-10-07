import {
  Button,
  Card,
  CardGrid,
  Cell,
  ContentCard,
  Epic,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  SplitCol,
  SplitLayout,
  Tabbar,
  TabbarItem,
  usePlatform,
  View,
  ViewWidth,
  VKCOM,
  withAdaptivity,
} from '@vkontakte/vkui';
import React from 'react';
import { useContx } from '../context/index';
import useQrCode from 'react-qrcode-hook';

const Example = withAdaptivity(
  ({ viewWidth }) => {
    const platform = usePlatform();
    const [activeStory, setActiveStory] = React.useState('profile');
    const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const hasHeader = platform !== VKCOM;

    const qrCode = useQrCode(
      'https://www.gosuslugi.ru/covid-cert/verify/9590000034349978?lang=ru&ck=a973c37710a4a004d7618c887aa1f541',
    );
    const { PostsArray, selectPost, getUser } = useContx();

    return (
      <SplitLayout
        header={hasHeader && <PanelHeader separator={false} />}
        style={{ justifyContent: 'center' }}
      >
        {isDesktop && (
          <SplitCol fixed width="280px" maxWidth="280px">
            <Panel>
              {hasHeader && <PanelHeader />}
              <Group>
                <Cell
                  disabled={activeStory === 'feed'}
                  style={
                    activeStory === 'feed'
                      ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8,
                        }
                      : {}
                  }
                  data-story="feed"
                  onClick={onStoryChange}
                >
                  Посты
                </Cell>

                <Cell
                  disabled={activeStory === 'profile'}
                  style={
                    activeStory === 'profile'
                      ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8,
                        }
                      : {}
                  }
                  data-story="profile"
                  onClick={onStoryChange}
                >
                  Профиль
                </Cell>
              </Group>
            </Panel>
          </SplitCol>
        )}

        <SplitCol
          animate={!isDesktop}
          spaced={isDesktop}
          width={isDesktop ? '560px' : '100%'}
          maxWidth={isDesktop ? '560px' : '100%'}
        >
          <Epic
            activeStory={activeStory}
            tabbar={
              !isDesktop && (
                <Tabbar>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'feed'}
                    data-story="feed"
                    text="Посты"
                  ></TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'profile'}
                    data-story="profile"
                    text="Профиль"
                  ></TabbarItem>
                </Tabbar>
              )
            }
          >
            <View id="feed" activePanel="feed">
              <Panel id="feed">
                <PanelHeader>Посты</PanelHeader>
                <Group>
                  <img alt="qr code" src={qrCode} />
                </Group>
              </Panel>
            </View>
            <View id="profile" activePanel="profile">
              <Panel id="profile">
                <PanelHeader>Профиль</PanelHeader>
                <Group>
                  <Placeholder></Placeholder>
                </Group>
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    );
  },
  {
    viewWidth: true,
  },
);

export { Example };
