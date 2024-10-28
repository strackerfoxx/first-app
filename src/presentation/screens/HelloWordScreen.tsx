import { StyleSheet, Text, View } from "react-native";

interface Props{
    name?: string
}

export default function HelloWordScreen({ name = "Alex" }: Props) {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode="clip" style={styles.title}>Hello, {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d4ae",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 45,
        fontWeight: "bold"
    }
})