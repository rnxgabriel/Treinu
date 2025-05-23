import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, LibraryScreen } from "@screens";
import { AppTabParamList } from "@types";
import { TabBarComponent } from "./TabBarComponent";

const Tab = createBottomTabNavigator<AppTabParamList>();

export function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}
      tabBar={(props) => <TabBarComponent {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
