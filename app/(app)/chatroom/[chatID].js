import { useGlobalSearchParams } from "expo-router"
import SV from "../../../components/ui/SV"
import T from "../../../components/ui/T"
import { FlatList, SafeAreaView, TextInput, View } from "react-native"

export default function ChatRoom() {
  const { chatID } = useGlobalSearchParams()
  return (
    <SV
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
      styles={{ flex: 1, position: "relative" }}
    >
      {[1, 2, 3, 4, 5].map((item, index) => (
        <T key={index}>{item}</T>
      ))}
      <View style={{ height: 30 }} />

      <TextInput
        placeholder="Write your message"
        style={{ marginHorizontal: 16 }}
      />
    </SV>
  )
}
