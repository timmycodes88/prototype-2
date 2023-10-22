import { useColorScheme } from "react-native"
import createTheme from "../utils/createTheme"

export default function useTheme() {
  const mode = useColorScheme()
  return createTheme(mode)
}
