import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/**
 * UUID 고유 식별자를 생성하는 라이브러리
 */
import uuidV4 from "uuid/v4";
import AppStyles from "../../assets/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

class AddCity extends React.Component {
    state = {
        city: "",
        country: "",
    };

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };
    onSubmit = () => {
        if (this.state.city === "" || this.state.country === "") {
            return alert("폼을 완성시켜 주세요");
        }
        const city = {
            city: this.state.city,
            country: this.state.country,
            id: uuidV4(),
            locations: [],
        };
        this.props.screenProps.addCity(city);
        this.setState(
            {
                city: "",
                country: "",
            },
            () => {
                this.props.navigation.navigate("Cities");
            },
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Cities</Text>
                <TextInput
                    placeholder="City name"
                    onChangeText={value => {
                        this.onChangeText("city", value);
                    }}
                    style={styles.input}
                    value={this.state.city}
                />
                <TextInput
                    placeholder="Country name"
                    onChangeText={value => {
                        this.onChangeText("country", value);
                    }}
                    style={styles.input}
                    value={this.state.country}
                />
                <TouchableOpacity onPress={this.onSubmit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: "#666",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    buttonText: { color: "white", fontSize: 18 },
    heading: { color: "white", fontSize: 40, marginBottom: 10, alignSelf: "center" },
    container: { backgroundColor: AppStyles.primary, flex: 1, justifyContent: "center" },
    input: { margin: 10, backgroundColor: "white", paddingHorizontal: 8, height: 50 },
});

export default AddCity;
