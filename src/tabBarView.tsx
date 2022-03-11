import * as React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Container from './components/Container/Container';
import PriceScreen from './PriceScreen';

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]} />
);
  const ThirdRoute = () => (
      <View style={[styles.container, { backgroundColor: '#fff' }]} />
    );

export default class TabBarView extends React.Component {
  constructor(props) {
    super(props); 
  this.state = {
    index: 0,
    routes: [
        { key: 'price', title: 'Price' },
              { key: 'state', title: 'States' },
              { key: 'cities', title: 'Cities' },
    ],
  };
}

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ opacity, fontWeight:'600', color:'black' }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
         price: PriceScreen,
        state: SecondRoute,
        cities: ThirdRoute,
  });

  render() {
    return (
      <>
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        style={{flexDirection: 'row', marginTop: 0}}
      />
      <View style={{position:'absolute', width: '100%', flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor: 'white', height: 50, bottom: 0, borderColor: '#ddd', borderWidth: 0.5 }}>
        <TouchableOpacity style={{alignContent:'center', alignItems:'center', borderRightColor: '#ddd', borderRightWidth: 0.5,flex:1, height: '100%'}}>
          <Text style={{paddingVertical: 14, color:'#000', fontWeight:'bold', fontSize: 16}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, alignItems:'center',}}>
          <Text style={{paddingVertical: 14, color:'#000',fontWeight:'bold', fontSize: 16}}>Apply</Text>
        </TouchableOpacity>
      </View>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
      alignSelf: 'flex-start',
      height: 150
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    textAlignVertical:'center',
    padding: 16,
    borderBottomColor: 'gray',
    borderBottomWidth:0.2,
  },
});

