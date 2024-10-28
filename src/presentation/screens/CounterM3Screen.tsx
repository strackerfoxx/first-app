import { Text, View } from "react-native";
import { Button, FAB } from "react-native-paper"
import { styles } from "../theme/global.styles";
import { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome"

export default function CounterM3Screen() {
    const [count, setCount] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{count}</Text>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            />
        </View>
    )
}