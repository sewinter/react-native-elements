import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';

import { PricingCard, Text } from 'react-native-elements';

class Pricing extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.hero}>
          <Text style={styles.heading}>Pricing</Text>
        </View>
        <PricingCard
          color={'blue'}
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <PricingCard
          color={'blue'}
          title="Starter"
          price="$19"
          info={['10 Users', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <PricingCard
          color={'blue'}
          title="Enterprise"
          price="$49"
          info={['100 Users', 'One on One Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </ScrollView>
    );
  }
}

Pricing.navigationOptions = {
  title: 'Pricing',
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'blue',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#34495e',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pricing;
