import { Stack } from "expo-router"
import { Text } from "react-native"
import useTheme from "../../hooks/useTheme"

export default function AppLayout() {
  const { colors } = useTheme()

  return (
    <Stack
      screenOptions={{
        ...StackConfig.screenOptions,
        headerStyle: {
          ...colors.background,
          color: colors.primary,
        },
        headerTintColor: colors.primary,
        title: null,
      }}
    >
      <Stack.Screen {...StackConfig.activity} />
      <Stack.Screen {...StackConfig.search} />
      <Stack.Screen {...StackConfig.newChat} />
    </Stack>
  )
}

const StackConfig = {
  screenOptions: {
    headerShown: false,
  },
  activity: {
    name: "activity/index",
    options: {
      headerShown: true,
      headerLeft: ({ tintColor }) => (
        <Text style={{ color: tintColor, fontSize: 20 }}>Activity</Text>
      ),
      headerRight: null,
      presentation: "modal",
    },
  },
  newChat: {
    name: "new-chat/index",
    options: {
      headerShown: true,
      headerLeft: ({ tintColor }) => (
        <Text style={{ color: tintColor, fontSize: 20 }}>Create a Chat</Text>
      ),
      headerRight: null,
      presentation: "modal",
    },
  },
  search: {
    name: "search/index",
    options: {
      headerShown: true,
      title: "Search",
      headerLeft: null,
      headerRight: null,
    },
  },
}

const HeaderLeftText = {
  "": "X2",
  channels: "Channels",
  messages: "Messages",
  push: "Push Yourself",
  profile: "@TimRocks",
}
