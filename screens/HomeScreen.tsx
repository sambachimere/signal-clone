import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Auth } from 'aws-amplify';

import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function HomeScreen() {
  const logOut = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
