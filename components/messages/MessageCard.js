import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import T from "../ui/T"
import { useRouter } from "expo-router"
import useTheme from "../../hooks/useTheme"

export default function MessageCard({ id, chatName, lastMessage }) {
  const router = useRouter()
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      style={{ ...styles.container, borderBottomColor: colors.divider }}
      onPress={() => router.push(`/chatroom/${id}?chatName=${chatName}`)}
    >
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 48, height: 48, borderRadius: 24 }}
      />
      <View style={styles.textWrapper}>
        <View style={{ width: "100%" }}>
          <T styles={{ fontSize: 16, fontWeight: "bold" }}>{chatName}</T>
        </View>
        <View style={{ width: "100%" }}>
          <T>{lastMessage}</T>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    gap: 12,
  },
  textWrapper: {
    flexDirection: "column",
    gap: 8,
  },
})
