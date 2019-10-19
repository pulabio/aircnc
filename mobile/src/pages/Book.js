import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function Book({ navigation }) {
  const spotID = navigation.getParam('spotId');
  return (
    <SafeAreaView>
      <Text> {spotID} </Text>
    </SafeAreaView>
  );
}
