import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
/**
 * touchbleHighlight는 버튼을 만드는 방ㅇ법 중 하나로
 * 이를 사용하면 뷰들을 감싸는게 가능하곡 뷰가 터치 이벤트에 저절하게 대응해줍니다.ㄴ
 * 버튼을 누르면 default backgroundColor는 underlayColor로 바뀝니다.
 * underlayColor의 기본값은 검은색입니다.
 */

const Button = (props) => {
	const { submitTodo } = props;
	return (
		<View style={styles.buttonContainer}>
			<TouchableHighlight underlayColor="#efefef" style={styles.button} onPress={submitTodo}>
				<Text style={styles.submit}>Submit</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'flex-end'
	},
	button: {
		height: 50,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#ffffff',
		width: 200,
		marginRight: 20,
		marginTop: 15,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	submit: {
		color: '#666666',
		fontWeight: '600'
	}
});

export default Button;
