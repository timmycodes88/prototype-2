import { ScrollView } from "react-native"
import useTheme from "../../hooks/useTheme"

export default function SV(props) {
  const theme = useTheme()
  return (
    <ScrollView
      style={{ ...props.style, ...theme.colors.background }}
      {...props}
    >
      {props.children}
    </ScrollView>
  )
}
