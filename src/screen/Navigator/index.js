import Cities from "../Cities";
import City from "../City";
import AddCity from "../AddCity";

import AppStyles from "../../assets/theme";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

/**
 *  options 객체를 생성하면, 스택 내비게이터는 자동으로 각 라우트 상단에 헤더를 만듭니다.
 * 헤더에는 보통 현재 라우트의 제목과 뒤로가기 버튼과 같은 버튼이 들어갑니다.
 */

const Navigator = createStackNavigator(
    {
        Cities: { screen: Cities },
        City: { screen: City },
    },
    {
        defaultNavigationOptions: () => ({
            headerStyle: {
                backgroundColor: AppStyles.primary,
            },
            headerTintColor: "#fff",
        }),
    },
);

const TabNavigator = createBottomTabNavigator({
    Cities: { screen: Navigator },
    AddCity: { screen: AddCity },
});

const Tabs = createAppContainer(TabNavigator); // 네비게이션 가ㅏ능한 컴포넌트

export default Tabs;
