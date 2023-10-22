import { Text } from "react-native"
import useTheme from "../../hooks/useTheme"

export default function T(props) {
  const theme = useTheme()
  return (
    <Text style={{ ...props.style, ...theme.colors.text }} {...props}>
      {props.children}
    </Text>
  )
}
