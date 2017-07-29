import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { getStreamsOf } from '../helpers/api';
import Spinner from '../components/Spinner';
import StreamPreview from '../components/StreamPreview';

class GameStreams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: []
    }
  }

  componentDidMount() {
    getStreamsOf(this.props.gameName).then(
      res => this.setState({ streams: res.streams }),
      error => console.log(error)
    );
  }

  render() {
    if (this.state.streams.length === 0) {
      return <Spinner />
    } else {
      const streamsList = this.state.streams.map((stream, index) => {
        const description = stream.channel.status.length > 28 ? `${stream.channel.status.substring(0, 40)}...` : stream.channel.status;
        return <StreamPreview
          key={index}
          preiviewImageUrl={stream.preview.large}
          userAvatarUrl={stream.channel.logo}
          streamerName={stream.channel.display_name}
          streamDescription={description}
          streamGame={stream.game}
        />
      })
      return (
        <ScrollView style={styles.streamsList}>
          {streamsList}
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  streamsList: {
    marginTop: 10,
    marginLeft: 10,
    paddingRight: 10,
  }
});

export default GameStreams;