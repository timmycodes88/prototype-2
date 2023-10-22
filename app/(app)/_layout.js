import { Stack } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import useTheme from "../../hooks/useTheme"

export default function AppLayout() {
  const { colors } = useTheme()
  return (
    <Stack
      screenOptions={{
        ...StackConfig.screenOptions,
        headerStyle: { ...colors.background, color: colors.primary },
        headerTintColor: colors.primary,
        headerLeft: ({ tintColor }) => (
          <Text style={{ color: tintColor, fontSize: 22, fontWeight: "bold" }}>
            X2
          </Text>
        ),
        headerRight: ({ tintColor }) => (
          <View style={{ flexDirection: "row", gap: 12, fontSize: 22 }}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: tintColor }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: tintColor }}>2</Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  )
}

const StackConfig = {
  screenOptions: {
    title: null,
  },
}
