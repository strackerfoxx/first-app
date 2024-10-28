import { Platform, Pressable, StyleSheet, Text } from 'react-native'

interface Props {
    label: string,
    onPress?: () => void;
    onLongPress?: () => void;

}

export function PrimaryButton({ label, onPress, onLongPress }: Props) {
    return (
        <Pressable style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
        ]} onPress={onPress} onLongPress={onLongPress}>
            <Text style={styles.text} >{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        backgroundColor: Platform.OS === "android" ? "transparent" : "#333",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#025176"
    },
    buttonPressed: {
        backgroundColor: '#266591'
    },
    text: {
        color: "whitesmoke",
        textAlign: "center"
    }
})