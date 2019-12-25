import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AppStyles from "../../assets/theme";

class City extends React.Component {
    static navigationOptions = props => {
        const { city } = props.navigation.state.params;
        console.log(city);
        return {
            title: city.city,
            headerTitleStyle: {
                color: "white",
                fontSize: 20,
                fontWeight: "400",
            },
        };
    };
    state = {
        name: "",
        info: "",
    };

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };

    addLocation = () => {
        if (this.state.name === "" || this.state.info === "") {
            return alert("폼을 완성해주세요");
        }
        const { city } = this.props.navigation.state.params;
        const location = {
            name: this.state.name,
            info: this.state.info,
        };
        this.props.screenProps.addLocation(location, city);
        this.setState({ name: "", info: "" });
    };

    render() {
        const { city } = this.props.navigation.state.params;
        console.log("props: ", this.props);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={[!city.locations.length && { flex: 1 }]}>
                    <View
                        style={[
                            styles.locationsContainer,
                            !city.locations.length && { flex: 1, justifyContent: "center" },
                        ]}
                    >
                        {city.locations.map((location, index) => (
                            <View key={index} style={styles.locationContainer}>
                                <Text style={styles.locationName}>{location.name}</Text>
                                <Text style={styles.locationInfo}>{location.info}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <TextInput
                    onChangeText={value => {
                        this.onChangeText("name", value);
                    }}
                    placeholder={"Location Name"}
                    value={this.state.name}
                    style={styles.input}
                    placeholderTextColor={"white"}
                />
                <TextInput
                    onChangeText={value => {
                        this.onChangeText("info", value);
                    }}
                    placeholder={"Location Info"}
                    value={this.state.info}
                    style={[styles.input, styles.input2]}
                    placeholderTextColor={"white"}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.addLocation}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    locationsContainer: {
        paddingBottom: 104,
    },
    input: {
        height: 50,
        backgroundColor: AppStyles.primary,
        color: "white",
        paddingHorizontal: 8,
        position: "absolute",
        width: "100%",
        bottom: 104,
        left: 0,
    },
    input2: {
        bottom: 52,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
    },
    button: {
        height: 50,
        backgroundColor: AppStyles.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    },
    locationContainer: {
        padding: 10,
        borderBottomColor: AppStyles.primary,
        borderBottomWidth: 2,
    },
    locationName: {
        fontSize: 20,
    },
    locationInfo: {
        color: "rgba(0,0,0, 0.5)",
    },
});

export default City;
