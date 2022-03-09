import React from 'react';
import { createStackNavigator, StackNavigationOptions, HeaderStyleInterpolators } from '@react-navigation/stack';
import  Icon from 'react-native-vector-icons/Octicons';
import HomeScreen from './index';
import TabBarView from './tabBarView';

const Stack = createStackNavigator();

export const stackOption: StackNavigationOptions = {
	headerBackTitleVisible: false,
	headerStyle: {
		backgroundColor: 'blue',
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
		<Stack.Navigator screenOptions={stackOption}>
			<Stack.Screen
				name={'HomeScreen'}
				options={{ title: '' }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name={'TabBarView'}
				options={{ title: ''}}
				component={TabBarView}
			/>
			
		</Stack.Navigator>
	);
};

export default AuthStack;
