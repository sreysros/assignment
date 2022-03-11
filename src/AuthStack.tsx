import React from 'react';
import { createStackNavigator, StackNavigationOptions, HeaderStyleInterpolators } from '@react-navigation/stack';
import  Icon from 'react-native-vector-icons/Octicons';
import HomeScreen from './index';
import TabBarView from './tabBarView';
import { Alert, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import TabScreen from './TabScreen';

const Stack = createStackNavigator();

export const stackOption: StackNavigationOptions = {
	headerBackTitleVisible: false,
	headerStyle: {
		backgroundColor: 'white',
		shadowOpacity: 0,
		elevation: 0,
	},
	headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
	headerTintColor: 'black',
	headerLeftContainerStyle: { paddingLeft: 4 },
	headerBackImage: () => <Icon name='arrow-left' size={24} />,
	headerTitleStyle: { fontSize: 20, fontWeight: '500' },
	headerTitleAlign: 'left',
};

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={stackOption} initialRouteName={'HomeScreen'}>
			<Stack.Screen
				name={'HomeScreen'}
				options={{ title: '' }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name={'TabBarView'}
				options={{ title: 'Filter', headerTitleAlign: 'center',}}
				component={TabBarView}
			/>
			<Stack.Screen
				name={'TabScreen'}
				options={{ title: 'Filter', headerTitleAlign: 'center',}}
				component={TabScreen}
			/>
			
		</Stack.Navigator>
	);
};

export default AuthStack;
