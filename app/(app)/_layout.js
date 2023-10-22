import { Link, Stack, useGlobalSearchParams, usePathname } from "expo-router"
import { Text, View } from "react-native"
import useTheme from "../../hooks/useTheme"
import { Feather } from "@expo/vector-icons"

export default function AppLayout() {
  const { colors } = useTheme()
  const pathname = usePathname()
  const { username } = useGlobalSearchParams()
  const headerText = username
    ? "@" + username
    : HeaderLeftText[pathname.split("/")?.[1]] || "X2"

  return (
    <Stack
      screenOptions={{
        ...StackConfig.screenOptions,
        headerStyle: { ...colors.background, color: colors.primary },
        headerTintColor: colors.primary,
        headerLeft: ({ tintColor }) => (
          <Text style={{ color: tintColor, fontSize: 30, fontWeight: "bold" }}>
            {headerText}
          </Text>
        ),
        headerRight: ({ tintColor }) => (
          <View style={{ flexDirection: "row", gap: 24, fontSize: 22 }}>
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
      <Stack.Screen {...StackConfig.activity} />
      <Stack.Screen {...StackConfig.search} />
    </Stack>
  )
}

const StackConfig = {
  screenOptions: {
    title: null,
  },
  activity: {
    name: "activity/index",
    options: {
      headerLeft: ({ tintColor }) => (
        <Text style={{ color: tintColor, fontSize: 20 }}>Activity</Text>
      ),
      headerRight: null,
      presentation: "modal",
    },
  },
  search: {
    name: "search/index",
    options: {
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
