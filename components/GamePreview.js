import React from 'react';
import { TouchableHighlight, Text, StyleSheet, Image, View } from 'react-native';

const GamePreview = ({ name, imageUri, viewers, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.gameImage} />
      <View style={ styles.rightBlock }>
        <Text style={styles.gameName}>{name}</Text>
        <Text style={styles.viewrsText}>{viewers} viewers</Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d7e0ef'
  },
  gameName: {
    fontWeight: '600',
    marginBottom: 3
  },
  gameImage: {
    height: 50,
    width: 35,
    borderRadius: 2
  },
  rightBlock: {
    marginLeft: 15
  },
  viewrsText: {
    fontSize: 12,
    color: 'grey'
  }
});

export default GamePreview;