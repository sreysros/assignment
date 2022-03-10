// import * as React from 'react';
// import { Animated, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';



// const TabBarView = (props) => {
//     const [state, setState] = React.useState({
//         index: 0,
//     routes: [
//       { key: 'price', title: 'Price' },
//       { key: 'state', title: 'States' },
//       { key: 'cities', title: 'Cities' },
//     ],
//     })

//   const FirstRoute = () => (
//     <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
        
//     </View>
//   );
//   const SecondRoute = () => (
//     <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
//   );
//   const ThirdRoute = () => (
//       <View style={[styles.container, { backgroundColor: 'purple' }]} />
//     );

//     const handleIndexChange = (index) => {
//         setState(prevState => ({...prevState, index}));
//     }

//     const renderTabBar = (props) => {
//         console.log(props, '=====');
//         const inputRange = props.navigationState?.routes?.map((x, i) => i);

//     return (
//       <View style={styles.tabBar}>
//         {props.navigationState?.routes?.map((route, i) => {
//           const opacity = props.position.interpolate({
//             inputRange,
//             outputRange: inputRange.map((inputIndex) =>
//               inputIndex === i ? 1 : 0.5
//             ),
            
//           });

//           return (
//             <TouchableOpacity
            
//               style={styles.tabItem}
//               onPress={() => setState({index:i})}>
//               <Animated.Text style={{ opacity, color: 'black', fontWeight: '500', fontSize: 16 }}>{route.title}</Animated.Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//     }

//     const renderScene = SceneMap({
//         price: FirstRoute,
//         state: SecondRoute,
//         cities: ThirdRoute,
//       });

//     return (
//       <TabView
//         navigationState={state}
//         renderScene={renderScene}
//         renderTabBar={renderTabBar}
//         onIndexChange={handleIndexChange}
//         style={{flexDirection: 'row', marginTop: 0}}
//       />
//     );
//   }
// export default TabBarView;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabBar: {
//       alignSelf: 'flex-start',
//       height: 150
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     textAlignVertical:'center',
//     padding: 16,
//     borderBottomColor: 'gray',
//     borderBottomWidth:0.2,
//   },
// });

import * as React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { CheckBox, Icon } from 'react-native-elements';
import PriceScreen from './PriceScreen';

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]} />
);
  const ThirdRoute = () => (
      <View style={[styles.container, { backgroundColor: '#fff' }]} />
    );

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
        { key: 'price', title: 'Price' },
              { key: 'state', title: 'States' },
              { key: 'cities', title: 'Cities' },
    ],
  };

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
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
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
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        style={{flexDirection: 'row', marginTop: 0}}
      />
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

