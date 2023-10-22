import { Tabs } from "expo-router"
import { Octicons } from "@expo/vector-icons"
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
      <Tabs.Screen {...TabsConfig["home"]} />
      <Tabs.Screen {...TabsConfig["push"]} />
      <Tabs.Screen {...TabsConfig["channels"]} />
      <Tabs.Screen {...TabsConfig["messages"]} />
      <Tabs.Screen {...TabsConfig["profile"]} />
    </Tabs>
  )
}

const TabsConfig = {
  screenOptions: {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
  },
  home: {
    name: "(home)/index",
    options: {
      tabBarIcon: ({ color }) => (
        <Octicons name="home" size={24} color={color} />
      ),
    },
  },
  push: {
    name: "push/index",
    options: {
      tabBarIcon: ({ color }) => (
        <Octicons name="diff-added" size={24} color={color} />
      ),
    },
  },
  channels: {
    name: "channels/index",
    options: {
      tabBarIcon: ({ color }) => (
        <Octicons name="play" size={24} color={color} />
      ),
    },
  },
  messages: {
    name: "messages/index",
    options: {
      tabBarIcon: ({ color }) => (
        <Octicons name="comment-discussion" size={24} color={color} />
      ),
    },
  },
  profile: {
    name: "profile/index",
    options: {
      tabBarIcon: ({ color }) => (
        <Octicons name="person" size={24} color={color} />
      ),
    },
  },
}
