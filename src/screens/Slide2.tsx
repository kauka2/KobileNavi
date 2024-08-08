import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/colors"
import { MenuStackTypes } from "../navigation/MenuStack.navigation";

export function Slide2({ navigation }: MenuStackTypes) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Slide 2</Text>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.push("Slide1")}
            >
                <Text>Slide 2</Text>
            </TouchableOpacity>
        </View>
    )
}