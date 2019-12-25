import React from "react";
import { Text, View, StyleSheet } from "react-native";

import AppStyles from "../../assets/theme";

const CenterMessage = props => {
    const { message } = props;
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: AppStyles.primary,
    },
    message: {
        alignSelf: "center",
        fontSize: 20,
    },
});

export default CenterMessage;
