import { Text, View,  StyleSheet } from "react-native";
import { Button } from "react-native-paper"
import { PrimaryButton } from "./components";
import { useState } from "react";

export default function CounterScreen() {
    const [count, setCount] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{count}</Text>
            <View style={styles.containerButtons}>
                <PrimaryButton label="+1" onPress={() => setCount(count +1)} onLongPress={() => setCount(0)}/>
                {/* <PrimaryButton label="less 1" onPress={() => setCount(count - 1 <= 0 ? 0 : count - 1)} onLongPress={() => setCount(0)}/> */}
                <Button onPress={() => setCount(count - 1 <= 0 ? 0 : count - 1)} onLongPress={() => setCount(0)} mode="outlined">-1</Button>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    counter: {
        fontSize: 90,
        fontWeight: "bold"
    },
    containerButtons: {
        display: "flex",
        justifyContent: "space-between",
        gap: 5
    }
})