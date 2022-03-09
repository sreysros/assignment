/* @flow */

import * as React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import {
  TabBarVertical,
  TabViewVertical,
  SceneMap,
  type Route,
  type NavigationState,
} from 'react-native-vertical-tab-view';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const TabBarView = () =>  {
  let title = 'Scrollable left vertical bar';
  let backgroundColor = '#3f51b5';
  let appbarElevation = 0;

  const [state, setState] = React.useState({index:1, routes: [
    { key: 'article', title: 'Article' },
    { key: 'contacts', title: 'Contacts' },
    { key: 'albums', title: 'Albums' },
    { key: 'chat', title: 'Chat' },
  ]})

  const handleIndexChange = index => {
       setState(index);
  }
 
  const renderTabBar = props => (
    <TabBarVertical
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  const albums = () => (
      <View>
          <Text>Albums</Text>
      </View>
  )
  const contact = () => (
    <View>
        <Text>contact</Text>
    </View>
)
const article = () => (
    <View>
        <Text>Article</Text>
    </View>
)

  const renderScene = SceneMap({
    albums: albums,
    contacts: contact,
    article: article,
  });

    return (
      <TabViewVertical
        style={styles.container}
        navigationState={state}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }

  export default TabBarView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 180,
    height: 80,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  },
});