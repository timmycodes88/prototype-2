import { Octicons } from "@expo/vector-icons"
import { Stack, useGlobalSearchParams, useRouter } from "expo-router"
import { Text, TouchableOpacity } from "react-native"
import useTheme from "../../../hooks/useTheme"

export default function ChatRoomLayout() {
  const { colors } = useTheme()
  const router = useRouter()
  const { chatName } = useGlobalSearchParams()

  return (
    <Stack
      screenOptions={{
        title: chatName,
        headerShadowVisible: false,
        headerStyle: {
          ...colors.background,
        },
        headerTintColor: colors.primary,
        headerLeft: ({ tintColor }) => (
          <TouchableOpacity onPress={() => router.back()}>
            <Octicons name="chevron-left" size={30} color={tintColor} />
          </TouchableOpacity>
        ),
        headerRight: ({ tintColor }) => (
          <TouchableOpacity onPress={() => router.push("/messages")}>
            <Octicons name="three-bars" size={24} color={tintColor} />
          </TouchableOpacity>
        ),
      }}
    />
  )
}
