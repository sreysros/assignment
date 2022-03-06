import React, { ReactNode } from 'react';
import { View, SafeAreaView, ViewStyle, StyleSheet, StatusBar } from 'react-native';
// import { Colors } from '../../themes';

type Props = {
	isSafeAreaView?: boolean;
	children: ReactNode;
	style?: ViewStyle;
};

const Container = (props: Props) => {
	const { isSafeAreaView, children, style } = props;
	const Container = isSafeAreaView ? SafeAreaView : View;

	return (
		<Container style={[styles.container, style]}>
			<StatusBar barStyle='dark-content' backgroundColor={'blue'} />
			{children}
		</Container>
	);
};

Container.defaultProps = {
	isSafeAreaView: false,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
});

export default Container;
