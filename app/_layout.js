import { Stack } from "expo-router"

export default function BaseLayout() {
  return <Stack screenOptions={StackConfig.screenOptions} />
}

StackConfig = {
  screenOptions: {
    headerShown: false,
  },
}
