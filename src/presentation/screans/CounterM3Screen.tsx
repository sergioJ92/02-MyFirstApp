import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.style';


export const CounterM3Screen = () => {
	const [count, setCount] = useState(10);

	return (
		<View style={globalStyles.centerContainer}>
			<Text style={globalStyles.title}>{ count }</Text>
			<FAB
				label='+1'
				style={globalStyles.fab}
				onPress={ () => { setCount(count + 1); } }
				onLongPress={ () => { setCount(0); } }/>
		</View>
	);
};
