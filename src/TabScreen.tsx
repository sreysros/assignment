import React, { useState, useRef, useLayoutEffect } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import NativeAnimated, { Extrapolate, interpolateNode } from 'react-native-reanimated';
import { Route } from 'react-native-tab-view/lib/typescript/src/types';
import { Animated, StyleSheet, Text, Touchable, View } from 'react-native';
import PriceScreen from './PriceScreen';
import Container from './components/Container/Container';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { Value } = NativeAnimated;

const TabScreen = (props) => {
    const [routes, setTabRoutes] = useState({
		index: 0,
		routes: [
			{ key: 'price', title: 'Price' },
              { key: 'state', title: 'States' },
              { key: 'cities', title: 'Cities' },
		],
	});

    useLayoutEffect(() => {
		props.navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity style={{paddingHorizontal: 10}}>
					<Text style={{color: 'red', fontWeight: 'bold'}}>Clear All</Text>
				</TouchableOpacity>
			),
		});
	}, [routes]);

    
    const renderTabBar = props => (
		<View
			style={{alignSelf: 'flex-start',}}
            >
			<TabBar
				{...props}
				pressColor={'black'}
				// pressOpacity={0.3}
				// bounces={false}
				renderLabel={({ route, focused }) => {
                    console.log(route, '=== route ====')
                    return (
                    <Text
						style={[
							styles.labelTabBar,
							{ color: focused ? 'red' : 'black', },
						]}>
						{route.title}
						</Text>
                    )
                }
                   
						
				}
				indicatorStyle={styles.indicatorTabBar}
				// tabStyle={styles.tab}
				style={{
                    flex: 1,
    alignItems: 'center',
    textAlignVertical:'center',
    padding: 16,
    borderBottomColor: 'red',
    borderBottomWidth:0.2}}
			/>
		</View>
	);

    const SecondRoute = () => (
        <View style={[styles.container, { backgroundColor: '#fff' }]} />
      );
        const ThirdRoute = () => (
            <View style={[styles.container, { backgroundColor: '#fff' }]} />
          );
    const handleChangeIndex = (index: number) => {
		setTabRoutes(prevState => {
			return { ...prevState, index };
		});
	};

    const renderScene = ({ route }: { route: Route }) => {
		switch (route.key) {
			case 'price':
				return (
					<PriceScreen />
				);
			case 'state':
				return (
					<SecondRoute />
				);
			case 'cities':
				return (
					<ThirdRoute />
				);
		}
	};

    return (
        <>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={routes}
                renderScene={renderScene}
                onIndexChange={handleChangeIndex}
                swipeEnabled={false}
                lazy
                style={{flexDirection: 'row', marginTop: 0}}
            />
           <View style={[styles.container, {
      flexDirection: "row",
      justifyContent:'center',
      height: 50,
      position:'absolute',
      bottom: 0,
      left:0,
      right:0
    }]}>
        <View style={{ flex: 1, backgroundColor: "white", alignItems:'center', borderWidth: 0.5, borderColor: '#ddd'   }}>
          <Text style={{paddingVertical: 14, fontSize: 16, color: '#000', fontWeight: '600'}}>Cancel</Text>
        </View>
      <View style={{ flex: 1, backgroundColor: "white", alignItems:'center', borderWidth: 0.5, borderLeftWidth:0, borderColor: '#ddd'}}>
      <Text style={{paddingVertical: 14, fontSize: 16, color: '#000', fontWeight: '600'}}>Apply</Text>
        </View>
    </View>
        </>
    )
}

export default TabScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    labelTabBar: {
		fontSize: 16,
		fontWeight: 'bold',
        color:'black'
		// paddingHorizontal: 8,
        // position:'absolute',
        // top: 10,
        // left: 0,
        // right: 0,
        // color: 'white'
	},
    indicatorTabBar: {
		backgroundColor: 'red',
		width: 10,
		height: 4,
		borderRadius: 4,
		marginHorizontal: 23,
		textTransform: 'capitalize',
	},
    tab: {
		width: 'auto',
		flexDirection: 'row',
		marginLeft: -15,
	},
    tabBar: {
		backgroundColor: 'pink',
		justifyContent: 'center',
		paddingHorizontal: 23,
		elevation: 0,
		shadowOpacity: 0,
		borderBottomWidth: 0,
	},
});