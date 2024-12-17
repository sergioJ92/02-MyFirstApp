import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';



export const CounterScreen = () => {
	const [count, setCount] = useState(10);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{ count }</Text>
			{/*
				<PrimaryButton
					label='Incrementar'
					onPress={ () => {setCount(count + 1)} }
					onLongPress={ () => {setCount(0)} }
					>
				</PrimaryButton>
			*/}
			<Button
				onPress={ () => {setCount(count + 1)} }
				onLongPress={ () => {setCount(0)} }
				mode='contained'
			>
				Incrementar
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
		fontSize: 80,
		fontWeight: 300,
		color: 'black',
	},
});
