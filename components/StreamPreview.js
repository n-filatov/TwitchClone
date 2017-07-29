import React from 'react';
import { TouchableHighlight, Image, View, Text, StyleSheet } from 'react-native';

const StreamPreview = ({ preiviewImageUrl, userAvatarUrl, streamerName, streamDescription, streamGame, onPress }) => (
  <TouchableHighlight style={styles.container} onPress={onPress}>
    <View>
      <Image source={{ uri: preiviewImageUrl }} style={styles.previewImage} />
      <View style={styles.description}>
        <Image source={{ uri: userAvatarUrl }} style={styles.avatarImage} />
        <View style={styles.descriptionText}>
          <Text style={styles.name}>{streamerName}</Text>
          <Text>{streamDescription}</Text>
          <Text style={styles.streamGame}>{streamGame}</Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff'
  },
  previewImage: {
    flex: 1,
    height: 180
  },
  avatarImage: {
    height: 45,
    width: 45,
    borderRadius: 5
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  descriptionText: {
    marginLeft: 5
  },
  name: {
    fontWeight: 'bold'
  },
  streamGame: {
    fontSize: 12,
    color: 'grey'
  }
});

export default StreamPreview;