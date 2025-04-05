export enum ScreenNames {
  Home = 'home',
  Settings = 'settings',
  Profile = 'profile',
  AuthStack = 'authStack',
  Login = 'login',
  Register = 'register',
  ForgotPassword = 'forgotPassword',
  Introduction = 'introduction',
}

export type AppStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Settings]: undefined;
  [ScreenNames.Profile]: undefined;
  [ScreenNames.AuthStack]: AuthStackParamList;
};

export type AuthStackParamList = {
  [ScreenNames.Login]: undefined;
  [ScreenNames.Register]: undefined;
  [ScreenNames.ForgotPassword]: undefined;
  [ScreenNames.Introduction]: undefined;
};
