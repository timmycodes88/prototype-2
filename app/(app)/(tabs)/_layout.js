import { Link, Tabs } from "expo-router"
import { Feather, Octicons } from "@expo/vector-icons"
import useTheme from "../../../hooks/useTheme"
import { Text, View } from "react-native"

export default function TabLayout() {
  const { colors } = useTheme()
  return (
    <Tabs
      screenOptions={{
        ...TabsConfig.screenOptions,
        tabBarStyle: {
          ...colors.background,
          borderTopWidth: 0.5,
          borderTopColor: colors.divider,
        },
        tabBarActiveTintColor: colors.primary,
        headerStyle: {
          ...colors.background,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.divider,
          shadowOpacity: 0.2,
        },
        headerTintColor: colors.primary,
        headerLeft: ({ tintColor }) => (
          <Text
            style={{
              color: tintColor,
              fontSize: 24,
              fontWeight: "bold",
              paddingHorizontal: 16,
            }}
          >
            X2
          </Text>
        ),
        headerRight: ({ tintColor }) => (
          <View
            style={{
              flexDirection: "row",
              gap: 24,
              fontSize: 22,
              paddingHorizontal: 16,
            }}
          >
            <Link href="/search">
              <Feather name="search" size={24} color={tintColor} />
            </Link>
            <Link href="/activity">
              <Feather name="bell" size={24} color={tintColor} />
            </Link>
          </View>
        ),
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
    title: null,
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
      headerLeft: ({ tintColor }) => (
        <Text
          style={{
            color: tintColor,
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 16,
          }}
        >
          Push yourself
        </Text>
      ),
      headerRight: null,
      tabBarIcon: ({ color }) => (
        <Octicons name="diff-added" size={24} color={color} />
      ),
    },
  },
  channels: {
    name: "channels/index",
    options: {
      headerLeft: ({ tintColor }) => (
        <Text
          style={{
            color: tintColor,
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 16,
          }}
        >
          Channels
        </Text>
      ),
      headerRight: ({ tintColor }) => (
        <View
          style={{
            flexDirection: "row",
            gap: 24,
            fontSize: 22,
            paddingHorizontal: 16,
          }}
        >
          <Link href="/new-chat">
            <Octicons name="search" size={24} color={tintColor} />
          </Link>
          <Link href="/new-chat">
            <Octicons name="diff-added" size={24} color={tintColor} />
          </Link>
        </View>
      ),
      tabBarIcon: ({ color }) => (
        <Octicons name="play" size={24} color={color} />
      ),
    },
  },
  messages: {
    name: "messages/index",
    options: {
      headerShadowVisible: false,
      headerLeft: ({ tintColor }) => (
        <Text
          style={{
            color: tintColor,
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 16,
          }}
        >
          Messages
        </Text>
      ),
      headerRight: ({ tintColor }) => (
        <View
          style={{
            flexDirection: "row",
            gap: 24,
            fontSize: 22,
            paddingHorizontal: 16,
          }}
        >
          <Link href="/new-chat">
            <Octicons name="search" size={24} color={tintColor} />
          </Link>
          <Link href="/new-chat">
            <Octicons name="diff-added" size={24} color={tintColor} />
          </Link>
        </View>
      ),
      tabBarIcon: ({ color }) => (
        <Octicons name="comment-discussion" size={24} color={color} />
      ),
    },
  },
  profile: {
    name: "profile/index",
    options: {
      headerLeft: ({ tintColor }) => (
        <Text
          style={{
            color: tintColor,
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 16,
          }}
        >
          @TimAttracts
        </Text>
      ),
      headerRight: ({ tintColor }) => (
        <Octicons
          name="gear"
          size={24}
          color={tintColor}
          style={{
            paddingHorizontal: 16,
          }}
        />
      ),
      tabBarIcon: ({ color }) => (
        <Octicons name="person" size={24} color={color} />
      ),
    },
  },
}
