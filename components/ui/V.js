import { View } from "react-native"
import useTheme from "../../hooks/useTheme"

export default function V(props) {
  const theme = useTheme()
  return (
    <View style={{ ...props.style, ...theme.colors.background }} {...props}>
      {props.children}
    </View>
  )
}
