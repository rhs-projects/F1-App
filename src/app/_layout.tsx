import { Stack} from 'expo-router'
// import { SafeAreaView, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native'
import { Colors } from '../Constants/colors';
import { StatusBar } from 'expo-status-bar';
import ApolloClientProvider from '../providers/ApolloClientProvider';

export default function RootLayout() {
   
        const [fontsLoaded] = useFonts({
            'F1-Black': require('../../assets/fonts/Formula1-Black.ttf'),
            'F1-Bold': require('../../assets/fonts/Formula1-Bold_web.ttf'),
            'F1-Italic': require('../../assets/fonts/Formula1-Italic.ttf'),
            'F1-Regular': require('../../assets/fonts/Formula1-Regular-1.ttf'),
            'F1-Wide': require('../../assets/fonts/Formula1-Wide.ttf'),
          });
        
          if (!fontsLoaded) {
            return <ActivityIndicator />
          }
          
        return ( 
        <ApolloClientProvider>
        <Stack 
         screenOptions={{ 
          headerStyle: { backgroundColor: Colors.primary}, 
          headerTitleStyle: { color: 'white', fontFamily: 'F1-Bold'},
          headerTintColor: 'white',
      
      }}
       >
        <Stack.Screen name="index" options={{ title: 'Racing' }}/>
      </Stack>

      <StatusBar style="light" />
      </ApolloClientProvider>
        );
}