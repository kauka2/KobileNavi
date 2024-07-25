import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuStack } from './MenuStack.navigation';
import { Menutabs } from './MenuBottomTab.navigation';
import { MenuDrawer } from './MenuDrawer.navigation'

export default function Navigation() {
    return (
        <NavigationContainer>
            <MenuStack />
        </NavigationContainer>
    );
}