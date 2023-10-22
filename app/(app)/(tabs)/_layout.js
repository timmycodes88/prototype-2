import { Tabs } from "expo-router"
import useTheme from "../../../hooks/useTheme"

export default function TabLayout() {
  const { colors } = useTheme()
  return (
    <Tabs
      screenOptions={{
        ...TabsConfig.screenOptions,
        tabBarStyle: { ...colors.background, borderTopWidth: 0 },
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen name="(home)/index" />
    </Tabs>
  )
}

const TabsConfig = {
  screenOptions: {
    headerShown: false,
    tabBarHideOnKeyboard: true,
  },
}
