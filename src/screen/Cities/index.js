import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppStyles from "../../assets/theme";
import CenterMesaage from "../../components/CenterMessage";

class Cities extends React.Component {
    /**
     * react-navigation에서 Screen으로 쓰기 위해서 Class로 관리해야 하는 것 같다.
     */
    static navigationOptions = {
        title: "Cities",
        headerTitleStlye: {
            color: "white",
            fontSize: 20,
            fontWeight: "400",
        },
    };
    navigate = item => {
        this.props.navigation.navigate("City", { city: item });
    };
    render() {
        const {
            screenProps: { cities },
        } = this.props;
        console.log(cities);
        return (
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={[!cities.length && { justifyContent: "center" }, { flex: 1 }]}>
                    {!cities.length && <CenterMesaage message={"No saved cities!"} />}
                    {cities.map((item, index) => (
                        <TouchableWithoutFeedback
                            style={{ width: "100%", height: "30px" }}
                            onPress={() => {
                                this.navigate(item);
                            }}
                            key={index}
                        >
                            <View style={styles.cityContainer}>
                                <Text style={styles.city}>{item.city}</Text>
                                <Text style={styles.country}>{item.country}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: AppStyles.primary,
    },
    city: {
        fontSize: 20,
    },
    country: {
        color: "rgba(0, 0, 0, .5)",
    },
});

export default Cities;
