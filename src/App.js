import React from "react";

import Tabs from "./screen/Navigator";
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
            cities: [],
        };
    }
    addCitiy = city => {
        const cities = this.state.cities;
        cities.push(city);
        this.setState({ cities });
    };

    addLocation = (location, city) => {
        const index = this.state.cities.findIndex(item => {
            return item.id === city.id;
        });
        const chosenCity = this.state.cities[index];
        chosenCity.locations.push(location);
        const cities = [
            ...this.state.cities.slice(0, index),
            chosenCity,
            ...this.state.cities.slice(index + 1),
        ];
        this.setState({ cities });
    };
    /**
     * 리액트 네비게이션은 내비게이터가 이용하는 모든 라우트에 screenProps라는 속성을 통해 메서드와 state를 전달할 수 있습니다.
     * 이후 this.props.screenProps를 이용해 이 데이ㅣ터나 메서드를 참조할 수 있습니다.
     */
    render() {
        return (
            <Tabs
                screenProps={{
                    cities: this.state.cities,
                    addCitiy: this.addCitiy,
                    addLocation: this.addLocation,
                }}
            />
        );
    }
}

export default App;
