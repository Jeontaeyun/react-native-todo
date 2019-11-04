import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
/**
 * TextInput은 HTML의 input태그와 비슷한 태그입니다.
 * placeholder은 사용자가 텍스트를 입력하기 전에 보여주는 텍스트를 지정
 * placeholderTextColor는 플레이스 홀더의 텍스트 스타일을 지정
 * selectionColor는 TextInput의 커서 스타일을 지정
 */
const InputText = (props) => {
	const { inputValue, inputChange } = props;
	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={inputValue}
				style={styles.input}
				placeholder="What needs to be done?"
				placeholderTextColor="#CACACA"
				selectionColor="#666666"
				onChangeText={inputChange}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		marginLeft: 20,
		marginRight: 20,
		shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowColor: '#000000',
		shadowOffset: { width: 2, height: 2 }
	},
	input: {
		height: 60,
		backgroundColor: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10
	}
});

export default InputText;
