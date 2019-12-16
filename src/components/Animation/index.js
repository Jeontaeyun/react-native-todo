import React from "react";
import { View, StyleSheet, Button, Animated } from "react-native";

const Animation = () => {
    const marginTop = new Animated.Value(20);

    const animate = () => {
        Animated.timing(marginTop, {
            toValue: 200,
            duration: 500,
        }).start();
    };

    const interpolateAnimate = marginTop.interpolate({
        inputRange: [20, 50],
        outputRange: ["blue", "green"],
    });

    return (
        <View style={styles.container}>
            <Button title="Animate Box" onPress={animate} />
            <Animated.View style={[styles.box, { marginTop: marginTop }]} />
            <Animated.View style={[styles.box, { backgroundColor: interpolateAnimate }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
    },
    box: {
        flex: 1,
        height: 150,
        backgroundColor: "red",
    },
});

export default Animation;
