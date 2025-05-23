<<<<<<< HEAD
import React from "react";
import { ScrollView, View } from "react-native";

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}
export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor, flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>;
}
=======
import React from "react";
import { ScrollView, View } from "react-native";

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}
export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor, flex: 1 }}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>;
}
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
