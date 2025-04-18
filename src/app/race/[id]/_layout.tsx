import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Stack } from "expo-router";
import { Colors } from "../../../Constants/colors";


const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

export default function RaceLayout() {
    return (

        <>    
        <Stack.Screen options={{title: 'Race detail', headerBackTitleVisible: false }}/>
        <TopTabs 
        screenOptions={{ 
            tabBarLabelStyle: {
                fontFamily: 'F1-Bold',
            },
            tabBarStyle: { backgroundColor: Colors.primary },
            tabBarInactiveTintColor: 'gainsboro',
            tabBarActiveTintColor: 'white',
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 5,
            }
     }}>

        <TopTabs.Screen name="index" options={{ title: 'Details' }}/>
        </TopTabs>
        </>
    )
         
    
}