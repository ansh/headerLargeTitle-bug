import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView as DefaultSafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Hello" component={Hello} options={{ headerLargeTitle: true }} /> */}
          {/* <Stack.Screen name="Hello" component={HelloWithSafeAreaContextView} options={{ headerLargeTitle: true }} /> */}
          {/* <Stack.Screen name="Hello" component={HelloWithDefaultSafeAreaView} options={{ headerLargeTitle: true }} /> */}
          <Stack.Screen name="Hello" component={HelloWithInsets} options={{ headerLargeTitle: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Hello = () => {
  return (
      <View>
        <Text>Hello, this text is invisible!</Text>
      </View>
  );
};

const HelloWithSafeAreaContextView = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello, this text is invisible!</Text>
      </View>
    </SafeAreaView>
  );
} 

const HelloWithDefaultSafeAreaView = () => {
  return (
    <View>
      <DefaultSafeAreaView>
        <Text>Hello, this text is actually not invisible, suprisingly!</Text>
      </DefaultSafeAreaView>
    </View>
  );
}

const HelloWithInsets = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ 
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
     }}>
      <Text>Hello, this text is invisible!</Text>
    </View>
  );
}