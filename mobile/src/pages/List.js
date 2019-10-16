import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, AsyncStorage } from 'react-native';

export default function List() {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techArrays = storageTechs.split(',').map(tech => tech.trim());
      setTechs(techArrays);
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>{techs}</Text>
    </SafeAreaView>
  );
}
