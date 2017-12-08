import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  TouchableHighlight,
} from 'react-native';

import { Text, Card, Divider, Icon } from 'react-native-elements';


class Fonts extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text>Yo fonts</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
});

export default Fonts;
