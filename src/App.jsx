import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './components/Heading';
import InputText from './components/TextInput';
/**
 * ScrollView는 플랫폼을 감싸는 것으로 스크롤이 가능한 View 컴포넌트 입니다.
 * keyboardShouldPersistTaps속성은 키보드각 열리 있으면 닫아서 UI가 onPress이벤트를 모두 처리하게 합니다.
 */

/**
  * 리액트 컴포넌트 외부에서 변수 선언
  */
let todoIndex = 0;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			todos: [],
			type: 'All'
		};
	}
	inputChange(inputValue) {
		console.log('InputValue: ', inputValue);
		this.setState({ inputValue });
	}
	submitTodo() {
		if (this.state.inputValue.match(/^\s*$/)) {
			return null;
		}
		const todo = {
			title: this.state.inputValue,
			todoIndex,
			complete: false
		};
		todoIndex++;
		const todos = [ ...this.state.todos, todo ];
		this.setState({ todos, inputValue: '' }, () => {
			/**
			 * setState 뒤에 상태 설정이ㅣ 완료되면 콜백 함수를 전달하는 옵션이 있다.
			 * 이 기능을 기억해 둡시다.
			 */
			console.log('State: ', this.state);
		});
	}

	render() {
		const { inputValue } = this.props;
		return (
			<View style={styles}>
				<View>
					<ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
						<Heading />
						<InputText inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},
	content: {
		flex: 1,
		paddingTop: 60
	}
});

export default App;
