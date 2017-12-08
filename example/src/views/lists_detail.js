import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, Card } from 'react-native-elements';

class IconsDetail extends Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Card
        title="RATINGS"
        containerStyle={{ marginTop: 15, marginBottom: 15 }}
      />
    );
  }
}

export default IconsDetail;
