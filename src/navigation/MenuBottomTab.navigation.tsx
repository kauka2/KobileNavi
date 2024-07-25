import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Slide1 } from '../screens/Slide1';
import { Slide2 } from '../screens/Slide2';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function Menutabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Slide1" component={Slide1}
            options={{
                tabBarIcon: () => (
                    <Entypo name="slideshare" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen name="Slide2" component={Slide2}
        options={{
            tabBarIcon: () => (
                <Feather name="sliders" size={24} color="black" />
            )
            }}
        />
        </Tab.Navigator>
    );
}