import React from 'react';
import {
	StyleSheet,
	View,
	Animated,
	Button
} from "react-native";
/**
 * ScrollView는 플랫폼을 감싸는 것으로 스크롤이 가능한 View 컴포넌트 입니다.
 * keyboardShouldPersistTaps속성은 키보드각 열리 있으면 닫아서 UI가 onPress이벤트를 모두 처리하게 합니다.
 */

/**
  * 리액트 컴포넌트 외부에서 변수 선언
  */
let todoIndex = 0;

class App extends React.Component {
	//marginTop이라는 클래스 속성을 만들고 애니메이션 효과를 만들고, 시작 값을 전달(20)
	marginTop = new Animated.Value(20);
	
	animate = () => {
			Animated.timing(
				 this.marginTop,
				{
					toValue: 200,
					duration: 500
				}
			).start();
	}
	render(){
		return(<View style={styles.container}>
				<Button
						title = "Animate Box"
						onPress={this.animate}
				/>
				<Animated.View style={[styles.box, {marginTop : this.marginTop }]} />
			</View>
		)
	}
}

const styles= StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: 50
	},
	box: {
		width: 150,
		height: 150,
		backgroundColor: "red"
	}
});


export default App;
