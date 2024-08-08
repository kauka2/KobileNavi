import { View, Text } from "react-native"; 
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
import { FontAwesome5 } from "@expo/vector-icons";
import { ComponentButtonInterface } from "../../components";

export function Perfil() {
    const { user, signOut } = useAuth()
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
        <View style={styles.sociais}>
            <FontAwesome5 name="facebook" size={24} color="black" />
            <Text style={styles.sociaisText}>https://www.facebook.com</Text>
        </View>
        <View style={styles.sociais}>
            <FontAwesome5 name="facebook" size={24} color="black" />
            <Text style={styles.sociaisText}>https://www.instragam.com</Text>
        </View>
        <View style={styles.sociais}>
            <FontAwesome5 name="facebook" size={24} color="black" />
            <Text style={styles.sociaisText}>https://www.linkedin.com</Text>
        </View>
        <ComponentButtonInterface title="Sair" type="primary"
            onPressI={async () => await signOut}
        />
    </View>
    )
}