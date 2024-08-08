import { createBottomTabNavigator, BottomTabNavigationProp } from `@react-navigation/bottom-tabs`;
import { ScreenMensagem, ScreenPerfil } from '../screens'
import { colors } from '../styles/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export