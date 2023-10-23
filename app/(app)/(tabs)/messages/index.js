import React, { useState, useMemo } from "react"
import V from "../../../../components/ui/V"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import MessageCard from "../../../../components/messages/MessageCard"
import useTheme from "../../../../hooks/useTheme"

export default function index() {
  const { colors } = useTheme()
  const [selected, setSelected] = useState(0)

  const data = useMemo(
    () => [mockChannels, mockDirect, mockRequests][selected],
    [selected]
  )
  return (
    <V styles={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 8,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.divider,
        }}
      >
        <TouchableOpacity onPress={() => setSelected(0)}>
          <Text
            style={{
              color: selected === 0 ? colors.primary : colors.gray,
              textDecorationLine: selected === 0 ? "underline" : "none",
            }}
          >
            Channels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <Text
            style={{
              color: selected === 1 ? colors.primary : colors.gray,
              textDecorationLine: selected === 1 ? "underline" : "none",
            }}
          >
            Direct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <Text
            style={{
              color: selected === 2 ? colors.primary : colors.gray,
              textDecorationLine: selected === 2 ? "underline" : "none",
            }}
          >
            Requests
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item: chat }) => <MessageCard {...chat} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </V>
  )
}

const mockChannels = [
  {
    id: 1,
    chatName: "Squad",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 0,
  },
  {
    id: 2,
    chatName: "Random",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 0,
  },
  {
    id: 3,
    chatName: "Random 2",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 1,
  },
]

const mockDirect = [
  {
    id: 1,
    chatName: "TimRocks",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 0,
  },
  {
    id: 2,
    chatName: "Billy Bob",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 0,
  },
  {
    id: 3,
    chatName: "Joe",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 1,
  },
  {
    id: 4,
    chatName: "Junior",
    chatImage: "https://picsum.photos/200",
    lastMessage: "Hey, what's up?",
    lastMessageTime: "12:00 PM",
    unreadCount: 3,
  },
]

const mockRequests = []
