<<<<<<< HEAD
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// ParamLists
export type AppTabParamList = {
  Home: undefined;
  Workout: undefined;
  Library: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppStackParamList = {
  AppTabNavigator: AppTabParamList;
  NewExercise: undefined;
  NewWorkout: undefined;
};

// App
export type AppRoute = RouteProp<AppParamList, keyof AppParamList>;

export type AppParamList = Omit<AppStackParamList, "AppTabNavigator"> &
  AppTabParamList;

// ScreenProps
export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppTabParamList> =
  NativeStackScreenProps<AppParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}
=======
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// ParamLists
export type AppTabParamList = {
  Home: undefined;
  Workout: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppStackParamList = {
  AppTabNavigator: AppTabParamList;
  Exercise: undefined;
};

// App
export type AppRoute = RouteProp<AppParamList, keyof AppParamList>;

export type AppParamList = Omit<AppStackParamList, "AppTabNavigator"> &
  AppTabParamList;

// ScreenProps
export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppTabParamList> =
  NativeStackScreenProps<AppParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
