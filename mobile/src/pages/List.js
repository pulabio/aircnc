import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  AsyncStorage,
  SafeAreaView,
} from 'react-native';

import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techArrays = storageTechs.split(',').map(tech => tech.trim());
      setTechs(techArrays);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />
      <Text>{techs}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
