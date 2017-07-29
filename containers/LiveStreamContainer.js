import React from 'react';
import { View, WebView } from 'react-native';

const LiveStreamContainer = ({ streamName }) => (
  <View style={{ flex: 1 }}>
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled
      source={{ uri: `https://player.twitch.tv/?channel=${streamName}` }}
    />
  </View>
);

export default LiveStreamContainer;