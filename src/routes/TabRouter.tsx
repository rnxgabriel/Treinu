<<<<<<< HEAD
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
=======
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@screens";
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
    </Tab.Navigator>
  );
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
