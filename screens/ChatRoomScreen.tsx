import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';

import chatRoomData from '../assets/dummy-data/Chats';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  //? NOT WORKING
  navigation.setOptions({
    title: 'No title',
  });

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
