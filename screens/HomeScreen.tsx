import * as React from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
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

      {/* <Pressable onPress={logOut} style={{ backgroundColor: 'red', height: 5 0, width: 100 }}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
